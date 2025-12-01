# Research: Resume Management with GitHub

## Decisions

### 1. Linting Tools

**Decision**: Use `textlint` with `textlint-rule-preset-ja-technical-writing` and `markdownlint-cli`.

**Rationale**:
- `textlint` is the industry standard for linting Japanese text. The `ja-technical-writing` preset is widely used for technical documentation and resumes, ensuring professional tone and consistency.
- `markdownlint-cli` (via `markdownlint-cli2-action` or direct CLI) ensures the Markdown structure conforms to best practices, preventing rendering issues.
- This aligns with the user's reference article and general best practices.

**Alternatives Considered**:
- **Other textlint presets**: `preset-japanese` (too generic), custom rules (too much maintenance).
- **VS Code extensions only**: Doesn't enforce quality in CI/CD.

### 2. CI/CD Workflow

**Decision**: Two separate jobs in one workflow or two workflows: `lint` and `deploy`.
- **Lint Job**: Runs on Pull Request and Push to any branch. Installs Node.js, dependencies, and runs checks.
- **Deploy Job**: Runs only on Push to `main` after Lint passes. Uses `actions/upload-pages-artifact` and `actions/deploy-pages`.
- **PDF Job**: Runs on Push to `main` (parallel to deploy). Generates PDF and uploads as Artifact.

**Rationale**:
- Separation ensures invalid content is not deployed.
- Using official GitHub Pages actions (`deploy-pages`) is faster and more secure than legacy methods (committing to `gh-pages` branch).

**Configuration Details**:
- **Triggers**: `push` (branches: main), `workflow_dispatch`.
- **Permissions**: `contents: read`, `pages: write`, `id-token: write`.

### 3. Project Structure

**Decision**:
- Root `resume.md` (or `README.md` as resume).
- Config files in root or hidden folder: `.textlintrc`, `.markdownlint.json`.
- Workflow in `.github/workflows/resume.yml`.
- `package.json` for managing linting dependencies (easier for local dev setup).

**Rationale**:
- `package.json` allows developers to run `npm install && npm test` locally to reproduce CI results.
- Keeping config explicit makes it easier to tune rules (e.g., allowing certain HTML tags in Markdown if needed).

### 4. GitHub Pages Source

**Decision**: Use "GitHub Actions" as the build source in Repository Settings.

**Rationale**:
- This disables the classic Jekyll build (unless explicitly configured) and gives full control to the workflow.
- Allows strictly deploying what the workflow produces (the HTML or the raw MD if using a viewer).

### 5. PDF Generation

**Decision**: Use `md-to-pdf` (CLI tool based on Puppeteer).

**Rationale**:
- Recommended by the user referenced article.
- Allows CSS customization for print layout.
- Generates high-quality PDF via Headless Chrome.

**Implementation Details**:
- Install `md-to-pdf` as dev dependency.
- Add `pdf` script to `package.json`: `md-to-pdf resume.md`.
- In CI, run this script and upload `resume.pdf` as an artifact.
- Note: Requires chromium dependencies in CI environment (standard Ubuntu runners usually have this or can install easily).

## Unknowns & Clarifications

- **Resolved**: The deployment method will use the modern `actions/deploy-pages` which requires enabling "GitHub Actions" source in repo settings.
- **Resolved**: Japanese preset will be `textlint-rule-preset-ja-technical-writing`.

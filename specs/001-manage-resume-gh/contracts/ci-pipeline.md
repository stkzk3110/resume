# CI/CD Contracts

## Workflow: `resume.yml`

### Triggers

- **Push**:
  - Branches: `main`
- **Pull Request**:
  - Branches: `main`
- **Workflow Dispatch**: Manual trigger allowed.

### Job: `lint`

**Inputs**: Source code.
**Outputs**: Success/Failure status.

**Steps**:
1. Checkout code.
2. Setup Node.js (v20).
3. Install dependencies (`npm ci`).
4. Run `npm run lint:text`.
5. Run `npm run lint:md`.

### Job: `pdf`

**Depends On**: `lint` (Must pass).
**Condition**: Branch is `main`.
**Runner**: Ubuntu (latest) with Chromium dependencies installed if needed.

**Steps**:
1. Checkout code.
2. Setup Node.js.
3. Install dependencies.
4. Run `npm run pdf` (executes `md-to-pdf resume.md`).
5. Upload Artifact (`actions/upload-artifact`).
    - Name: `resume-pdf`
    - Path: `resume.pdf`

### Job: `deploy`

**Depends On**: `lint` (Must pass).
**Condition**: Branch is `main`.

**Steps**:
1. Checkout code.
2. Setup Pages (`actions/configure-pages`).
3. Upload Artifact (`actions/upload-pages-artifact`).
    - Path: `.` (Root)
4. Deploy (`actions/deploy-pages`).

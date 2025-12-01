# Data Model: Resume Management

## File Structure

```text
.
├── .github/
│   └── workflows/
│       └── resume.yml      # CI/CD Workflow definition
├── .markdownlint.json      # Markdown linting rules
├── .textlintrc             # Text linting rules (JSON format)
├── package.json            # Dependency management for tools
├── package-lock.json       # Lock file
├── resume.md               # The Resume content (Source of Truth)
└── resume.css              # Stylesheet for PDF generation
```

## Resume Document (`resume.md`)

The resume is a standard Markdown file. While free-form, adherence to the following structure is recommended for consistency.

### Recommended Sections

1.  **Title/Header**: Name and Role.
2.  **Summary (職務要約)**: Brief professional summary.
3.  **Skills (スキル)**: Technical and soft skills.
4.  **Work Experience (職務経歴)**: Reverse chronological order.
    *   Company Name, Period.
    *   Role/Position.
    *   Project Details (Description, Tech Stack, Team Size, Role).
5.  **Education (学歴)**.
6.  **Personal Projects/Links (自己PR/リンク)**.

## Configuration Models

### `package.json`

Manages the development dependencies.

**Key Dependencies**:
- `textlint`: The core linting engine.
- `textlint-rule-preset-ja-technical-writing`: Rule preset for Japanese.
- `markdownlint-cli`: CLI for Markdown linting.
- `md-to-pdf`: Tool for converting Markdown to PDF.

### `.textlintrc`

JSON configuration for textlint.

```json
{
  "rules": {
    "preset-ja-technical-writing": true
  }
}
```

### `.markdownlint.json`

JSON configuration for markdownlint.

```json
{
  "default": true,
  "MD013": false, // Line length (often disabled for long links/text)
  "MD024": false  // Duplicate headers (allowed for repeated project sections)
}
```

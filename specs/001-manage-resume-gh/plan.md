# Implementation Plan: Resume Management with GitHub

**Branch**: `001-manage-resume-gh` | **Date**: 2025-12-01 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-manage-resume-gh/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implement a Markdown-based resume management system where the resume is version-controlled in git, automatically quality-checked by `textlint` and `markdownlint` via GitHub Actions, converted to PDF via `md-to-pdf`, and published to GitHub Pages using the modern Actions-based deployment workflow.

## Technical Context

**Language/Version**: Node.js v20 (for tooling), Markdown
**Primary Dependencies**: `textlint` (ja-technical-writing preset), `markdownlint-cli`, `md-to-pdf`, `actions/deploy-pages`
**Storage**: Git Repository (File-based)
**Testing**: Linting in CI (`npm run lint`)
**Target Platform**: GitHub Pages, GitHub Actions (Ubuntu Runner)
**Project Type**: Static Site / Documentation
**Performance Goals**: CI < 5 mins, Deploy < 2 mins
**Constraints**: Public repository (or Pro) required for Pages
**Scale/Scope**: Single document, occasional updates

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The project follows standard practices. No specific constitution constraints violate this plan.
- **Library-First**: N/A (Doc repo)
- **Test-First**: Linting rules are the tests.
- **Simplicity**: Uses standard tools and Actions.

## Project Structure

### Documentation (this feature)

```text
specs/001-manage-resume-gh/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
.
├── .github/
│   └── workflows/
│       └── resume.yml
├── .markdownlint.json
├── .textlintrc
├── package.json
├── package-lock.json
├── resume.md
└── resume.css           # (Optional) Styles for PDF generation
```

**Structure Decision**: Single root project structure optimized for documentation/resume maintenance.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | | |

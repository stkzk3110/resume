# Tasks: Resume Management with GitHub

**Feature**: `001-manage-resume-gh`
**Status**: Pending

## Phase 1: Setup
*Goal: Initialize the project with standard tooling and dependency management.*

- [ ] T001 Initialize Node.js project (`npm init -y`) in `package.json`
- [ ] T002 Install development dependencies (`textlint`, `textlint-rule-preset-ja-technical-writing`, `markdownlint-cli`, `md-to-pdf`) in `package.json`
- [ ] T003 Configure `package.json` scripts (`lint:text`, `lint:md`, `pdf`, `test`) in `package.json`
- [ ] T004 Create `.textlintrc` configuration file in `.textlintrc`
- [ ] T005 Create `.markdownlint.json` configuration file in `.markdownlint.json`
- [ ] T006 Create `.gitignore` to ignore node_modules and generated artifacts (`resume.pdf`) in `.gitignore`

## Phase 2: User Story 1 - Create and Version Control Resume (P1)
*Goal: Create the fundamental resume document and ensure it is tracked in git.*

- [ ] T007 [US1] Create initial `resume.md` with structure (Header, Summary, Skills, Experience, Education) in `resume.md`
- [ ] T008 [US1] Commit and push `resume.md` to verify version control in `resume.md`

## Phase 3: User Story 2 - Automated Quality Checks (P2)
*Goal: Implement automated linting to ensure quality before merge.*

- [ ] T009 [US2] Create GitHub Actions workflow file for CI in `.github/workflows/resume.yml`
- [ ] T010 [US2] Implement `lint` job in workflow (checkout, setup-node, install, run lints) in `.github/workflows/resume.yml`
- [ ] T011 [US2] Verify linting fails on invalid Markdown or Japanese text (Manual Test)
- [ ] T012 [US2] Verify linting passes on valid content (Manual Test)

## Phase 4: User Story 3 - Automated Publishing (P3)
*Goal: Publish the resume to GitHub Pages automatically on change.*

- [ ] T013 [US3] Add `deploy` job to workflow (depends on lint, runs on main) in `.github/workflows/resume.yml`
- [ ] T014 [US3] Configure `actions/upload-pages-artifact` and `actions/deploy-pages` steps in `.github/workflows/resume.yml`
- [ ] T015 [US3] Add workflow permissions (`contents: read`, `pages: write`, `id-token: write`) in `.github/workflows/resume.yml`

## Phase 5: User Story 4 - PDF Generation (P3)
*Goal: Generate and provide a PDF version of the resume.*

- [ ] T016 [US4] Create optional CSS for PDF styling in `resume.css`
- [ ] T017 [US4] Add `pdf` job to workflow (depends on lint, runs on main) in `.github/workflows/resume.yml`
- [ ] T018 [US4] Implement PDF generation step (`npm run pdf`) and artifact upload in `.github/workflows/resume.yml`
- [ ] T019 [US4] Verify PDF artifact is generated and downloadable from Actions run (Manual Test)

## Dependencies

1. **Setup** (Phase 1) must complete before any User Story phases.
2. **US1** (Resume Creation) provides the content source for all other stories.
3. **US2** (Linting) is a prerequisite for the CI/CD pipeline used in US3 and US4.
4. **US3** and **US4** can be implemented in parallel after US2.

## Parallel Execution

- **US3** (Web Publishing) and **US4** (PDF Generation) are independent jobs in the workflow and can be developed/tested simultaneously.

## Implementation Strategy

- **MVP**: Complete Phase 1 and Phase 2 (Local Resume + Git).
- **Alpha**: Complete Phase 3 (CI Quality Gates).
- **Beta**: Complete Phase 4 (Web Publishing).
- **Release**: Complete Phase 5 (PDF Generation).


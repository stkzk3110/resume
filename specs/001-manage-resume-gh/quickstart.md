# Quickstart: Resume Management

## Prerequisites

- **Node.js**: v18 or higher (for local linting).
- **Git**: For version control.
- **GitHub Account**: To host the repository.

## Local Development

1.  **Clone the repository**:
    ```bash
    git clone <repo-url>
    cd <repo-name>
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Edit the Resume**:
    Open `resume.md` in your favorite editor (VS Code recommended).

4.  **Run Lints Locally**:
    ```bash
    npm test
    # Or individually:
    npm run lint:text
    npm run lint:md
    ```

## Deployment

1.  **Push changes**:
    ```bash
    git add resume.md
    git commit -m "Update work experience"
    git push origin main
    ```

2.  **Check Actions**:
    Go to the "Actions" tab in your GitHub repository to see the workflow running.

3.  **View Site**:
    Once the `deploy` job finishes, check the "Settings > Pages" section for your public URL (usually `https://<user>.github.io/<repo>/`).

## Setup (First Time)

1.  Go to Repository **Settings** > **Pages**.
2.  Under "Build and deployment", set **Source** to **GitHub Actions**.
3.  The workflow will automatically handle the rest on the next push.


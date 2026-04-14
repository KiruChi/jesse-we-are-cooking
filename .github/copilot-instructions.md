# Copilot cloud agent instructions for this repository

## Repository overview
- This is a small static website repository.
- There is no application framework or package manager setup.
- Main files:
  - `/home/runner/work/jesse-we-are-cooking/jesse-we-are-cooking/team.html`
  - `/home/runner/work/jesse-we-are-cooking/jesse-we-are-cooking/style.css`
  - `/home/runner/work/jesse-we-are-cooking/jesse-we-are-cooking/Arsenii-Luchaninov.html`
  - `/home/runner/work/jesse-we-are-cooking/jesse-we-are-cooking/Arsenii-style.css`
  - `/home/runner/work/jesse-we-are-cooking/jesse-we-are-cooking/Petro-Luchaninov.html`
  - `/home/runner/work/jesse-we-are-cooking/jesse-we-are-cooking/Petro-style.css`
  - `/home/runner/work/jesse-we-are-cooking/jesse-we-are-cooking/Petro.jpg`

## How to work efficiently here
- Treat changes as direct edits to static HTML/CSS files.
- Keep edits minimal and file-local; avoid broad refactors.
- Keep Ukrainian content and existing wording unless task asks for content rewrite.
- Preserve relative links between each HTML file and its stylesheet/image.
- Do not modify `Petro.jpg` unless explicitly required.

## Validation approach
- There are no repository-defined lint, test, or build commands (no `package.json`, `Makefile`, or other build manifests).
- Validate by:
  - checking changed HTML/CSS for obvious syntax mistakes;
  - confirming linked files (`href`/`src`) still point to existing local files;
  - reviewing `git diff` for unintended changes.

## Errors encountered during onboarding and workarounds
- **Issue:** `glob` with pattern `*` returned “No files matched the pattern.”
  - **Workaround:** used explicit recursive or targeted patterns (for example `.github/**`, `**/README*`, and direct absolute file paths) to inspect repository contents.
- **Issue:** no automated tooling was found for linting/testing/building.
  - **Workaround:** used manual static-file validation steps listed above.

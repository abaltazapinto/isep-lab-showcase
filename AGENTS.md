# Repository Instructions

## Project

This repository is an Engineering Portfolio built with Expo, React Native, TypeScript and Expo Router.

It evolved from the original ISEP Lab Showcase.

Read before significant work:

- docs/PORTFOLIO_VISION.md
- docs/architecture/ARCHITECTURE.md
- docs/architecture/PROJECT_STANDARD.md
- docs/architecture/DECISIONS.md
- docs/development/ROADMAP.md

## Portfolio Architecture

Keep these concepts separate:

- Origin = where the work came from.
- Engineering Domain = what engineering area the work demonstrates.
- Status = maturity of the work.
- Evidence = what supports the claims.

Academic subjects are context, not portfolio projects by themselves.

Do not promote learning material into a completed engineering project without evidence.

## Development Workflow

Work from an existing GitHub Issue.

Before implementation confirm:

- current Issue;
- approved scope;
- relevant milestone/release when the repository uses one;
- whether the change affects architecture.

Do not expand the Issue while implementing it.

## Validation

For application code, run the repository's relevant checks, including:

- npm run lint
- npx tsc --noEmit

Run additional relevant checks when required by the change.

Manual UI validation must remain explicitly pending until confirmed by the user.

## Git

Do not commit, push, merge or close Issues unless explicitly requested.

Before finishing:

- inspect the complete diff;
- run git diff --check;
- inspect git status.

Leave only expected working-tree changes.

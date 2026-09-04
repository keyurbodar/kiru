# Contributing to Kiru

Spec source: the issue brief. The brief is the task; this file is the workflow.

## Branches

- `main` is always shippable. Never push to it directly.
- One branch per issue, named `pr-XXX-slug` (`pr-008-aerodrome-quote`).
  Branch from current `main`, one PR's scope only.

## Commits

- Conventional commits: `feat(pr-008): ...`, `fix(pr-011): ...`, `docs(pr-009): ...`.
- Small, reviewable steps. Squash-merge into `main`.

## Pull requests

- Title: `[PR-008] Aerodrome quote via Sugar CLI`. Body: link the issue, list acceptance criteria with checkmarks.
- Keep it under ~20 minutes of review time. Tests ride inside the PR (see the issue Steps), no test-only PRs.
- Merge in wave order; respect Depends on the issue. Same-wave issues run concurrently.
- On merge: close the issue.

## Reviews

- Other lane reviews: Keyur's PRs reviewed by Shreyash and vice versa.
- Approve only when every Acceptance box in the brief is checked. Request changes otherwise. No drive-by merges.

## Lanes

- Keyur: money + memory (Base MCP, Aerodrome, Sibyl, alerts).
- Shreyash: surface (Eve, Photon, cards, Mini App, polish).
- Cross-lane touch? Talk first, then the touched lane's owner reviews.

## Tracking

- Issues own the queue: work from the issue, close it on merge.
- Republish the plan page only when `plan.html` changes: `cp plan.html → dist-plan/` and republish (`surge ./dist-plan https://kiru-plan.surge.sh`) so the site stays current.

# Contributing to Kiru

Spec source: `docs/PRs/PR-XXX.md` + `pr.tsv`. The brief is the task; this file is the workflow.

## Branches

- `main` is always shippable. Never push to it directly.
- One branch per PR, named exactly as in `pr.tsv` (`pr-008-aerodrome-quote`).
  Branch from current `main`, one PR's scope only.

## Commits

- Conventional commits: `feat(pr-008): ...`, `fix(pr-011): ...`, `docs(pr-009): ...`.
- Small, reviewable steps. Squash-merge into `main`.

## Pull requests

- Title: `[PR-008] Aerodrome quote via Sugar CLI`. Body: link the brief, list acceptance criteria with checkmarks.
- Keep it under ~20 minutes of review time. Tests ride inside the PR (see brief Steps) — no test-only PRs.
- Merge in wave order; respect `depends_on` in `pr.tsv`. Same `parallel_group` letters run concurrently.
- Update the row on merge: `completion_pct` → `100`, `notes` → merge date + commit.

## Reviews

- Other lane reviews: Keyur's PRs reviewed by Shreyash and vice versa.
- Approve only when every Acceptance box in the brief is checked. Request changes otherwise — no drive-by merges.

## Lanes

- Keyur: money + memory (Base MCP, Aerodrome, Sibyl, alerts).
- Shreyash: surface (Eve, Photon, cards, Mini App, polish).
- Cross-lane touch? Talk first, then the touched lane's owner reviews.

## Tracking

- `pr.tsv` is the single tracker. The plan page (`plan.html`) renders it live.
- After merge: `cp plan.html pr.tsv → dist-plan/` and republish (`surge ./dist-plan https://kiru-plan.surge.sh`) so the site stays current.

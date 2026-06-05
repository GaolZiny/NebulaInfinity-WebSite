# Coder Report — AI Workflow Copy Realignment [task-207]

## Changed files
- `app/[lang]/services/[serviceId]/page.tsx`
- `data/service-subdetails/aiDevFlow.ts`
- `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/coder-ai-workflow-copy-realignment-task-207.md`

## Copy decisions implemented
- AI Workflow representative examples now render exactly three target examples in order: Agentic AI 開発ワークフロー, Astra PMワークフロー, and プロダクトリサーチワークフロー.
- Added the representative-example note that examples do not define the AI Workflow service boundary.
- Localized Astra CTA links to `/[lang]/projects/astra` and Product research CTA links to the AI Workflow contact inquiry without creating a new route.
- Reframed `ai-dev-flow` as Nebula Infinity internal AI Workflow proof, with the reusable claim focused on designing client-specific complex business workflows.
- Kept existing IA/routes/static export behavior; no sitemap, project data, or route files changed.

## Verification
- `npm run lint` — PASS.
- `npm run build` — PASS; static export generated `/ja` and `/en` service sub-detail pages.
- Static export verification script — PASS for JA/EN parent examples, localized links, key `ai-dev-flow` framing phrases, sitemap service sub-detail entries, absence of `/projects/ai-dev-flow`, and language switch preservation.
- `git diff --check -- <changed files>` — PASS before commit.
- Post-commit `git show --check --format=short HEAD -- <changed files>` — PASS.
- `sudo systemctl restart nebula-devserver && bash scripts/smoke-test.sh` — task routes PASS; known generic `/404/` smoke still returns 500 (pre-existing project known issue, not part of task-207 route scope).

## Protected / unrelated file status
- Did not edit or stage Z-owned editing sheets.
- Did not edit or stage `docs/nebulainfinity-design-consultation.md`, `notes/tester-ai-dev-flow-task-205.md`, or `screenshots/task-205-ai-dev-flow/`.
- Pre-existing dirty/untracked protected files were left untouched and uncommitted.

## TODOs / risks for Tester task-208
- Confirm rendered visual balance of the three-card representative examples on desktop/tablet/mobile.
- Confirm the longer role/gate notes on `ai-dev-flow` remain readable in the existing Service-page layout.

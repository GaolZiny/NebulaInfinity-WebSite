# Task 186 — Retired Carina Project Route 404 Fix

## Diagnosis
- The approved preview runs the app with static export semantics. A direct retired project URL such as `/ja/projects/carina/` was reaching the dynamic project route before the page-level `notFound()` branch could execute, and Next.js returned a runtime 500 because `carina` was absent from the generated params.
- The project data/export remained clean; the failure was preview/runtime not-found handling for a retired slug.

## Changed files
- `app/[lang]/projects/[slug]/page.tsx`
  - Added `dynamicParams = false` for project details.
  - Kept production/export static params active-project-only.
  - Added a development-only retired-slug preview probe for `carina` so local approved preview can reach the existing `notFound()` path and return 404 without exporting or rendering Carina content.
- `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/home-service-model-rewrite-fix-task-186.md`
  - This verification report.

## Verification commands and results
- `npm run lint` — PASS.
- `npm test` — PASS, 13/13 tests.
- `npm run build` — PASS, Next.js static export completed.
- `grep -RInE 'projects/carina|Carina|services/web3-blockchain|web3-blockchain' out public/_redirects` — PASS, no matches.
- Approved preview workflow:
  - `bash scripts/devserver.sh start` — PASS, dev server started on port 3000, final verification PID `1507373`.
  - `bash scripts/devserver.sh status` — PASS, HTTP 200.
  - `/ja/projects/carina/` — 404.
  - `/en/projects/carina/` — 404.
  - `/ja/services/web3-blockchain/` — 404.
  - `/en/services/web3-blockchain/` — 404.
  - `/ja/projects/gaijin-life-navi/` — 200.
  - `/en/projects/gaijin-life-navi/` — 200.
  - `/ja/projects/rigel/` — 200.
  - `/en/projects/rigel/` — 200.
  - `/ja/projects/astra/` — 200.
  - `/en/projects/astra/` — 200.
  - `bash scripts/devserver.sh stop` — PASS.
  - `bash scripts/devserver.sh status` after stop — not running.

## Service lifecycle notes
- Used only the approved `scripts/devserver.sh` workflow for preview start/status/stop.
- Did not run `npm run dev` directly.
- Did not manually kill processes or manually remove `.next`.
- No push/deploy was executed.

## Allowed / forbidden file check
- Worker-intended changed files are limited to the allowed implementation page and this allowed report.
- Pre-existing expected dirty files were preserved and not modified by this task:
  - modified `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/home-copy-editing-sheet-2026-05-05.md`
  - untracked `docs/nebulainfinity-design-consultation.md`
- Note: `git diff --name-only 6cddd31448ba429547478c29da6ed6ee32c25baa..HEAD` includes pre-existing PM dispatch/notification commits (`artifacts/project/PROJECT_MEMORY.md`, `memory/task-sessions.json`) that were already present at task start. The worker commit itself is limited to allowed files.

## Expected dirty status after commit
- Clean for worker-owned files.
- Expected pre-existing dirty files remain uncommitted:
  - `M artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/home-copy-editing-sheet-2026-05-05.md`
  - `?? docs/nebulainfinity-design-consultation.md`

## Commit
- Subject: `fix(projects): return not found for retired slugs [task-186]`
- This report is committed with the implementation; final hash is recorded in the completion callback.

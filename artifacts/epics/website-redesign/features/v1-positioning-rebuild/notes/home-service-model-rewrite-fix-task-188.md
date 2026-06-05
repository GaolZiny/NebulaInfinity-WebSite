# Task 188 — Retired Web3 Service Route 404 Fix

## Diagnosis
- The approved preview runs the app through the project devserver workflow with static-export route constraints.
- Before this fix, a fresh preview returned 500 for `/ja/services/web3-blockchain/` and `/en/services/web3-blockchain/` before any active service detail route was warmed.
- The retired service id was already absent from active service data and production/export params, so the issue was not active Web3 exposure. It was the service dynamic route not giving local preview a generated retired-route probe to reach the existing `notFound()` branch, matching the task-186 Carina route pattern.

## Changed files
- `app/[lang]/services/[serviceId]/page.tsx`
  - Added `dynamicParams = false` for service detail routes.
  - Kept production/export static params active-service-only.
  - Added a development-only retired service preview probe for `web3-blockchain` so the approved local preview reaches the page-level `notFound()` branch and returns a clean 404 without exporting or rendering Web3 content.
- `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/home-service-model-rewrite-fix-task-188.md`
  - This verification report.

## Verification commands and results
- Initial reproduction before patch with approved preview:
  - `bash scripts/devserver.sh start` / `status` — PASS.
  - `/ja/services/web3-blockchain/` — 500.
  - `/en/services/web3-blockchain/` — 500.
  - `/ja/projects/carina/` — 404.
  - `/en/projects/carina/` — 404.
  - `bash scripts/devserver.sh stop` / final `status` — stopped.
- `npm run lint` — PASS.
- `npm test` — PASS, 13/13 tests.
- `npm run build` — PASS, Next.js static export completed.
- `grep -RInE 'services/web3-blockchain|projects/carina|web3-blockchain|Carina' out public/_redirects` — PASS, no matches.
- Approved fresh-preview workflow after patch:
  - `bash scripts/devserver.sh start` — PASS, dev server started on port 3000, verification PID `1515739`.
  - `bash scripts/devserver.sh status` — PASS, HTTP 200.
  - Fresh retired route checks before active service-route warm-up:
    - `/ja/services/web3-blockchain/` — 404.
    - `/en/services/web3-blockchain/` — 404.
    - `/ja/projects/carina/` — 404.
    - `/en/projects/carina/` — 404.
  - Active service detail checks:
    - `/ja/services/ai-workflow/` — 200.
    - `/en/services/ai-workflow/` — 200.
    - `/ja/services/ai-application/` — 200.
    - `/en/services/ai-application/` — 200.
    - `/ja/services/ai-driven-development/` — 200.
    - `/en/services/ai-driven-development/` — 200.
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
- Note: `git diff --name-only c36ba3e8de593415404a3ce826e068260a6ea6da..HEAD` includes pre-existing PM dispatch/notification commits (`artifacts/project/PROJECT_MEMORY.md`, `memory/task-sessions.json`) that were already present at task start. The worker commit itself is limited to allowed files.

## Expected dirty status after commit
- Clean for worker-owned files.
- Expected pre-existing dirty files remain uncommitted:
  - `M artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/home-copy-editing-sheet-2026-05-05.md`
  - `?? docs/nebulainfinity-design-consultation.md`

## Commit
- Subject: `fix(services): return not found for retired service ids [task-188]`
- This report is committed with the implementation; final hash is recorded in the completion callback.

# Task 184 — Home Service Model Rewrite Fix

## Summary
- Updated Home Services intro taxonomy copy in `app/[lang]/page.tsx` for JA/EN to remove retired Web3/Web Contents positioning and align to AI Workflow assetization / AI Application / AI-Driven Development.
- Removed `public/_redirects` mappings from legacy blockchain service URLs to retired `/services/web3-blockchain` routes.
- Preserved Hero chips by explicit non-goal.

## Changed files
- `app/[lang]/page.tsx`
- `public/_redirects`
- `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/home-service-model-rewrite-fix-task-184.md`

## Verification
- `npm run lint` — PASS.
- `npm test` — PASS, 13/13 tests passed.
- `npm run build` — PASS, static export completed.
- `grep -RInE 'services/web3-blockchain|projects/carina|web3-blockchain' public/_redirects out || test $? -eq 1` — PASS, no matches.
- Services subtitle field check in `app/[lang]/page.tsx` — PASS, both JA/EN `servicesSubtitle` fields contain no `Web3`, `Web Contents`, or `blockchain`.

## Allowed / forbidden files
- Implementation changed files are within the task allowlist.
- No forbidden source/docs files were edited by this task.
- Note: strict `git diff --name-only c6454c55126fdd150fef41df26ec9ec6cb6d9f38..HEAD` already included pre-existing PM tracking commits (`artifacts/project/PROJECT_MEMORY.md`, `memory/task-sessions.json`) before this Worker's edits. The Worker did not modify or stage those files.

## Commit
- Commit hash: final hash recorded in completion callback.
- Commit subject: `fix(home): remove retired taxonomy residue [task-184]`

## Expected dirty status
- Preserved expected pre-existing dirty files:
  - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/home-copy-editing-sheet-2026-05-05.md`
  - `docs/nebulainfinity-design-consultation.md`

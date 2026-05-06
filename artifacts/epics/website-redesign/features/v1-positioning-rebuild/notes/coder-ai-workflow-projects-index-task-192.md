# Coder Implementation Report — task-192

## Summary
Implemented the Z-edited AI Workflow service-detail structure and removed the standalone Projects index export surface while preserving active project detail routes.

## Changes
- Updated `/[lang]/services/ai-workflow` JA copy to the Z-edited hero, three課題 cards, AI Workflow Solution design/build scope, and プロジェクト例 sections.
- Aligned EN AI Workflow to the same section set and removed the old AI Workflow assetization-flow and bottom CTA rendering for that service.
- Corrected `AI Workflow Solutio` to `AI Workflow Solution` in rendered copy.
- Deleted `app/[lang]/projects/page.tsx` so `/[lang]/projects` is no longer exported as a standalone index.
- Added the Home `#projects` anchor/accessible heading/sticky-header-safe section target while preserving links to `gaijin-life-navi`, `rigel`, and `astra`.
- Updated header/mobile/footer Projects navigation to `/${lang}/#projects` and included `#projects` in same-page anchor handling.
- Updated project-detail breadcrumbs/back links to return to Home `#projects`.
- Updated sitemap/static project export generation to exclude `/[lang]/projects` and only emit active Home-linked project details.

## Verification
- `npm run lint` — PASS
- `npm test` — PASS (13/13)
- `npm run build` — PASS (21 static pages; no standalone `/[lang]/projects` index emitted)
- Static export grep — PASS: no `/ja/projects` or `/en/projects` index in sitemap/export; no retired `web3-blockchain`, `carina`, or inactive `agent-skills-jp` project routes in sitemap/export.
- AI Workflow export check — PASS: new JA/EN sections render; old Assetization model and bottom CTA blocks are not rendered for AI Workflow.
- Post-commit devserver smoke via `bash scripts/smoke-test.sh` — 17/18 route checks PASS after freeing stale PID 1709479 and restarting `nebula-devserver`; only `/404/` returned 500, matching the existing known minor smoke issue in project memory. Active Home/contact/service/project routes passed.

## Scope / Safety
- Task Scope Mode: root-cause
- Modified files are within allowed domains.
- Protected zones were not modified/staged.
- Pre-existing dirty Z-owned copy sheets and untracked `docs/nebulainfinity-design-consultation.md` were left untouched.

## Notes
- Dev server was stopped with the project-approved `sudo systemctl stop nebula-devserver` before coding per GOTCHAS, then restarted through systemd after commit.
- Implementation commit hash is supplied in the completion callback.

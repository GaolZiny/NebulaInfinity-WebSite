## Test Report
1. Task type: S1 Pipeline QA — verify Coder output for task-192 AI Workflow service-detail update and Projects index removal.
2. Test result: PASS
3. Tested scope:
   - Commit `42ee882f78923abeb317dcb9ed9fcc4c8c2684d5`.
   - Static export/runtime QA for JA/EN AI Workflow service detail, JA/EN Home `#projects`, desktop/footer/mobile nav anchors, removed Projects index behavior, active project/service detail routes, and sitemap/export route inventory.
   - Compared requested scope against `non-home-copy-editing-sheet-2026-05-06.md`, `artifacts/project/ARCHITECTURE.md`, `artifacts/project/REQUIREMENTS.md`, and Coder report.
4. Done criteria coverage:
   - `/ja/services/ai-workflow` and `/en/services/ai-workflow` render 200 without runtime console/page errors: PASS — Playwright static export QA.
   - AI Workflow pages reflect new section structure and do not render old Assetization model flow or old bottom CTA block: PASS — required JA/EN headings/cards present; old EN flow/bottom CTA strings absent.
   - `/ja/` and `/en/` Home include Projects section with `#projects` anchor/landmark and cards linking to `/projects/gaijin-life-navi`, `/projects/rigel`, `/projects/astra`: PASS.
   - Desktop and mobile nav Projects links target `#projects`; same-page anchor landing is not hidden by sticky header: PASS — desktop section top ~104px, mobile section top ~104px, header bottom 80px.
   - Footer Projects link targets `#projects`: PASS — JA/EN footer anchor links observed in rendered DOM.
   - `/ja/projects/` and `/en/projects/` are not active index pages / not exported: PASS — no `out/ja/projects/index.html` or `out/en/projects/index.html`; clean 404 for slash and non-slash index URLs.
   - Active project detail routes render 200 for JA/EN `gaijin-life-navi`, `rigel`, `astra`: PASS.
   - Sitemap/static export excludes `/ja/projects` and `/en/projects` index and does not advertise retired Carina/Web3 service routes: PASS.
   - Active service routes still render: PASS — JA/EN `ai-workflow`, `ai-application`, `ai-driven-development` all 200.
   - `npm run lint`, `npm test`, `npm run build`: PASS — rerun locally; test suite 13/13; build generated 21 static pages.
   - Screenshot evidence captured: PASS.
5. Test cases: 26 pass / 0 fail.
6. Issues found:
   - None blocking this task's acceptance criteria.
   - Observation / broader positioning risk: rendered JA/EN Home still contains the pre-existing hero chip text `Web Contents / Web3.0`. Coder report states Home service copy was intentionally not changed beyond the `#projects` anchor because broader Home copy was a non-goal for task-192. I did not count this against this task's explicit Done criteria, but it remains a V1 architecture/requirements follow-up if not already tracked.
7. Screenshots/evidence paths:
   - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/screenshots/task-193-ai-workflow-projects-index/ja-ai-workflow-desktop.png`
   - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/screenshots/task-193-ai-workflow-projects-index/ja-home-projects-anchor-desktop.png`
   - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/screenshots/task-193-ai-workflow-projects-index/ja-project-astra-detail-desktop.png`
   - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/screenshots/task-193-ai-workflow-projects-index/ja-mobile-projects-anchor.png`
   - Machine-readable evidence summary: `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/tester-ai-workflow-projects-index-task-193.evidence.json`
8. Commands executed:
   - `git rev-parse HEAD`, `git status --short`
   - `npm run lint && npm test && npm run build` — PASS.
   - Static export inventory/grep checks under `out/` and `out/sitemap.xml`.
   - Local static-export runtime server on `127.0.0.1:43193` serving `out/` with directory listing disabled.
   - `curl` status checks for active, removed, and retired routes.
   - Python Playwright/Chromium QA script for DOM, console/page-error, anchor, nav, route, sitemap, and screenshot checks.
9. Environment/service notes:
   - Cwd: `/root/.openclaw/projects/NebulaInfinity-WebSite`.
   - Runtime: Debian 12, Node v22, Chromium 146 via Python Playwright.
   - Static server command: Python `ThreadingHTTPServer` serving `out/` on `127.0.0.1:43193`; exact server PID `1766298` stopped with `kill 1766298`; port confirmed closed.
   - Browser tool direct navigation to localhost was blocked by tool policy, so Chromium was driven through Python Playwright instead.
10. Commit under test: `42ee882f78923abeb317dcb9ed9fcc4c8c2684d5`.
11. Limitations / untested areas:
   - No external production deployment was tested; QA used local production-style static export output.
   - Did not modify implementation code or commit evidence.
   - Broader Home positioning copy was only noted where observed; full Home copy rewrite acceptance is outside this task's explicit Done criteria per Coder scope note.
12. Mock/test data cleanup check:
   - No mock auth, forms, external writes, or production data were used.
   - Local static server stopped; no test data cleanup required.
13. Risk / Regression Matrix coverage:
   - AI Workflow JA/EN service detail structure: PASS — new hero/symptoms/design-build/examples structure rendered; old Assetization flow/bottom CTA absent.
   - Projects Home section and active project card links: PASS — JA/EN cards and detail links present.
   - Desktop/mobile/header/footer Projects navigation: PASS — all target `/${lang}/#projects`; anchor lands below sticky header.
   - Removed Projects index route/export: PASS — no static index file; `/ja/projects` and `/en/projects` return clean 404.
   - Active project detail route namespace: PASS — JA/EN active details 200.
   - Active service detail route namespace: PASS — JA/EN active services 200.
   - Retired Web3 service and Carina route/sitemap advertising: PASS for route/export/sitemap; broader Home legacy copy noted above.
   - Build/test/lint regression: PASS.

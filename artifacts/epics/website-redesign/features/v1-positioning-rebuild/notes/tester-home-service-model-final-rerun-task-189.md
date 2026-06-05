## Test Report
1. Task type: S1 Pipeline QA / browser + screenshot verification rerun

2. Test result: PASS

3. Tested scope:
   - Static quality gates (`npm run lint`, `npm test`, `npm run build`).
   - Approved local preview workflow using `bash scripts/devserver.sh start/status/stop` on `http://127.0.0.1:3000`.
   - Fresh-preview retired route checks before any active-route warm-up.
   - Active service/project detail route matrix.
   - JA/EN Home desktop + mobile browser regression, anchors, service/project taxonomy links, About layout, AI-Driven Development detail pages, and Contact taxonomy.
   - `_redirects`, sitemap, and static export retired-route exposure checks.

4. Done criteria coverage:
   - Report written to this path: PASS.
   - QA verdict with pass/fail counts: PASS — 42 pass / 0 fail.
   - Screenshots saved to `artifacts/screenshots/task-189-*.png`: PASS — 12 required screenshots captured.
   - Static checks pass before QA: PASS — lint PASS, tests PASS (13/13), build PASS.
   - Approved preview workflow only: PASS — used `bash scripts/devserver.sh start`, `status`, and `stop`; did not use `npm run dev`, `pkill`, `kill`, or `.next` cleanup.
   - Fresh retired route checks before active warm-up: PASS — `/ja/services/web3-blockchain/`, `/en/services/web3-blockchain/`, `/ja/projects/carina/`, `/en/projects/carina/` all returned 404, not 500.
   - Active detail routes: PASS — all 6 project detail routes and all 6 service detail routes returned 200.
   - Home Services subtitle JA/EN taxonomy: PASS — no Web3/Web Contents/blockchain wording; aligns to AI Workflow / AI Application / AI-Driven Development.
   - `public/_redirects` and `out/_redirects`: PASS — no `services/web3-blockchain`, `projects/carina`, or `web3-blockchain` entries.
   - Rendered UI/sitemap/static export retired active exposure: PASS — sitemap and active UI have no retired Carina or `web3-blockchain` exposure. Hero trust chips still display `Web Contents / Web3.0`; recorded as informational per PM/Z-pending decision.
   - Home desktop/mobile layout and console: PASS — JA/EN desktop and mobile had no horizontal overflow and no captured console errors.
   - Home section order: PASS — Hero → Services → Projects → Process → About → Contact CTA.
   - Hero CTA row/spacer: PASS — absent.
   - Services cards: PASS — exactly link to `ai-workflow`, `ai-application`, `ai-driven-development` per language.
   - Projects cards: PASS — exactly Japan Life Navi / Rigel / Astra with slugs `gaijin-life-navi`, `rigel`, `astra`.
   - About layout: PASS — vertical Title → Company snapshot → Working principles; snapshot labels only Company + Location.
   - Header/mobile anchors: PASS — `#services` and `#about` worked from desktop header and mobile nav, with target headings visible below sticky header after scroll settled.
   - AI-Driven Development detail JA/EN: PASS — correct active content rendered; no retired Web3/Carina messaging detected.
   - Contact taxonomy JA/EN: PASS — includes AI-Driven Development; excludes Web3/Blockchain.
   - Devserver stopped cleanly: PASS.
   - Evidence commit: pending at report write time; see completion package after commit.
   - Worktree expectation: after evidence commit should contain only pre-existing modified Z copy sheet and untracked consultation doc.

5. Test cases: 42 pass / 0 fail

6. Issues found:
   - Blocking issues: none.
   - Informational / pending decision:
     - Hero trust chips still include display-only `Web Contents / Web3.0` on JA/EN Home. Expected per PM/Z-pending decision; not failed.
     - Generic `/404/` smoke returned 500. Fresh retired direct routes returned clean 404 and active-route matrix passed, so this remains the known minor not-found smoke issue and is not failed for this task.

7. Screenshots/evidence paths:
   - `artifacts/screenshots/task-189-ja-home-desktop.png`
   - `artifacts/screenshots/task-189-ja-home-mobile.png`
   - `artifacts/screenshots/task-189-ja-services-anchor-desktop.png`
   - `artifacts/screenshots/task-189-ja-about-anchor-desktop.png`
   - `artifacts/screenshots/task-189-ja-ai-driven-development-detail-desktop.png`
   - `artifacts/screenshots/task-189-ja-contact-desktop.png`
   - `artifacts/screenshots/task-189-en-home-desktop.png`
   - `artifacts/screenshots/task-189-en-home-mobile.png`
   - `artifacts/screenshots/task-189-en-services-anchor-desktop.png`
   - `artifacts/screenshots/task-189-en-about-anchor-desktop.png`
   - `artifacts/screenshots/task-189-en-ai-driven-development-detail-desktop.png`
   - `artifacts/screenshots/task-189-en-contact-desktop.png`

8. Commands executed:
   - `git rev-parse HEAD` / `git log -1 --pretty=%s` / `git status --short` — confirmed current PM/docs HEAD and expected pre-existing dirty files.
   - `npm run lint` — PASS.
   - `npm test` — PASS, 13/13 tests.
   - `npm run build` — PASS, static export generated 25 pages.
   - `bash scripts/devserver.sh start` — PASS, started preview PID 1519569 on port 3000.
   - `bash scripts/devserver.sh status` — PASS, HTTP 200.
   - Fresh retired route curl checks — PASS, all 4 returned 404.
   - Active route curl matrix — PASS, 12/12 returned 200.
   - Generic `/404/` curl smoke — returned 500; recorded as informational known minor.
   - Browser/CDP QA via headless Chromium against `http://127.0.0.1:3000` — PASS, 20 browser assertions and 12 screenshots.
   - `grep`/`rg` checks for `_redirects`, sitemap, and export exposure — PASS for route/redirect/sitemap exposure; only known hero chip display text remains.
   - `bash scripts/devserver.sh stop` + `status` — PASS, stopped cleanly and confirmed not running.

9. Environment/service notes:
   - Project path: `/root/.openclaw/projects/NebulaInfinity-WebSite`.
   - Preview URL: `http://127.0.0.1:3000`.
   - Service lifecycle: approved `scripts/devserver.sh` workflow only; preview PID 1519569; stopped cleanly.
   - Browser: `/usr/bin/chromium` headless via temporary CDP profile; temporary profile removed after screenshots.
   - Browser viewports: desktop 1440×1200; mobile 375×1000.
   - No production services or external systems were touched.

10. Commit under test:
   - Implementation commit under test: `e7c9e3b552f63e0be5dd628451ea1cc44c897723` (`fix(services): return not found for retired service ids [task-188]`).
   - Current repository HEAD during QA: `a5c02f5d345571fb9a38db9a49f40c5763258dea` (`docs(pm): record final QA pass rerun dispatch notification [task-189]`). Commits after `e7c9e3b` only changed PM/project memory files, not implementation code under test.
   - Baseline listed by PM: `beb9546832f853740ad860fa0fa5cde45bf2c113`.

11. Limitations / untested areas:
   - Live Cloudflare Pages / production deployment was not tested; scope was approved local preview.
   - Contact form external email delivery was not submitted or verified; scope covered rendered taxonomy and existing unit tests.
   - Full accessibility audit and visual pixel comparison were not in scope.

12. Mock/test data cleanup check:
   - No mock auth, production test data, form submissions, or external writes were created.
   - Temporary Chromium profile and CDP process were cleaned up.
   - Devserver stopped cleanly.

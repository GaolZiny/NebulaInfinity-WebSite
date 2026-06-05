# Task 185 — Home Service Model Browser QA Rerun

## Test Report
1. Task type: S1 Pipeline QA / browser + screenshot verification rerun.
2. Test result: FAIL.
3. Tested scope:
   - Static QA (`npm run lint`, `npm test`, `npm run build`) before browser QA, plus post-stop build check.
   - Approved preview workflow only: `bash scripts/devserver.sh start/status/stop` against `http://127.0.0.1:3000`.
   - JA/EN Home desktop and mobile rendering, Home section order, Hero CTA removal, Services/Projects/About content, sticky-header anchors.
   - JA/EN AI-Driven Development detail route and Contact taxonomy.
   - Retired Web3/Carina exposure in `_redirects`, static export/sitemap artifacts, rendered UI, and direct retired route behavior.
4. Done criteria coverage:
   - Static checks before browser QA: PASS. `npm run lint`, `npm test` (13/13), and `npm run build` passed.
   - Approved preview/devserver workflow: PASS. Started PID `1498188` on port `3000`, status returned HTTP 200, stopped cleanly with approved script.
   - Required screenshots: PASS. Required JA/EN desktop/mobile Home, Services anchor, About anchor, AI-Driven detail, and Contact screenshots saved; additional mobile About anchor screenshots saved after an initial suspicious fast-settle result.
   - Prior task-183 Services subtitle defect: PASS. JA/EN Services subtitles no longer advertise Web3/Web Contents/blockchain and include AI Workflow / AI Application / AI-Driven Development.
   - Prior task-183 `_redirects` defect: PASS. `public/_redirects` and generated `out/_redirects` have no `services/web3-blockchain`, `projects/carina`, or `web3-blockchain` matches after build.
   - JA/EN Home desktop/mobile no horizontal overflow or console errors: PASS.
   - Home section order Hero → Services → Projects → Process → About → Contact CTA: PASS by DOM/visual inspection.
   - Hero CTA row/spacer absent: PASS. Hero contains no links/buttons. Hero trust chips still include display-only `Web Contents / Web3.0`; recorded as PENDING Z DECISION / informational per task instructions, not a blocking failure.
   - Services card links exactly `ai-workflow`, `ai-application`, `ai-driven-development`: PASS for JA/EN.
   - Projects cards exactly Japan Life Navi / Rigel / Astra with slugs `gaijin-life-navi`, `rigel`, `astra`: PASS for JA/EN.
   - About vertical Title → Company snapshot → Working principles; snapshot only Company + Location: PASS for JA/EN.
   - `#services` / `#about` anchors from header/mobile nav: PASS after scroll/menu-close settle; headings visible below sticky header on JA/EN desktop and mobile.
   - `/ja/services/ai-driven-development` and `/en/services/ai-driven-development`: PASS. Both returned 200 and rendered AI-Driven Development content without retired Web3/Carina messaging.
   - Contact taxonomy JA/EN includes AI-Driven Development and excludes Web3/Blockchain: PASS.
   - Retired active routes/links absent from rendered UI, sitemap/static params, and static export artifacts: PARTIAL/FAIL. Rendered UI, sitemap/static params, and export artifacts are clean, but retired project direct routes `/ja/projects/carina/` and `/en/projects/carina/` return 500 in the approved preview. This is a new dev/runtime route failure beyond the known `/404/` smoke issue.
5. Test cases: 37 pass / 1 fail.
6. Issues found:
   - Severity: major
     - Expected: Retired Carina project routes should be cleanly absent/not-found in the approved preview, matching the retired-route regression expectations and without producing runtime 500s.
     - Actual: `curl http://127.0.0.1:3000/ja/projects/carina/` and `/en/projects/carina/` return `500 Internal Server Error`. Static export artifacts remain clean and no active UI links point to Carina.
     - Reproduction: `bash scripts/devserver.sh start && curl -i http://127.0.0.1:3000/ja/projects/carina/ && curl -i http://127.0.0.1:3000/en/projects/carina/`.
     - Evidence path: command summary in this report; static/export evidence via final grep commands; screenshots show active Projects UI only Japan Life Navi / Rigel / Astra.
   - Severity: informational / pending Z decision
     - Expected: Not adjudicated in this rerun per PM instruction.
     - Actual: Hero trust chips still show `AI Workflow`, `AI Application`, `Web Contents / Web3.0`.
     - Reproduction: Open `http://127.0.0.1:3000/ja/` or `/en/` and inspect Hero chips.
     - Evidence path: `artifacts/screenshots/task-185-ja-home-desktop.png`, `artifacts/screenshots/task-185-en-home-desktop.png`.
   - Severity: minor / known issue
     - Expected: Project smoke script ideally passes all generated routes.
     - Actual: `bash scripts/smoke-test.sh` still reports `/404/` as 500; all 21 other smoke routes passed. This was known from task-183 and was not used as the sole failure reason.
     - Reproduction: `bash scripts/devserver.sh start && bash scripts/smoke-test.sh`.
     - Evidence path: command summary in this report.
7. Screenshots/evidence paths:
   - `artifacts/screenshots/task-185-ja-home-desktop.png`
   - `artifacts/screenshots/task-185-en-home-desktop.png`
   - `artifacts/screenshots/task-185-ja-home-mobile.png`
   - `artifacts/screenshots/task-185-en-home-mobile.png`
   - `artifacts/screenshots/task-185-ja-services-anchor-desktop.png`
   - `artifacts/screenshots/task-185-en-services-anchor-desktop.png`
   - `artifacts/screenshots/task-185-ja-about-anchor-desktop.png`
   - `artifacts/screenshots/task-185-en-about-anchor-desktop.png`
   - `artifacts/screenshots/task-185-ja-about-anchor-mobile.png`
   - `artifacts/screenshots/task-185-en-about-anchor-mobile.png`
   - `artifacts/screenshots/task-185-ja-ai-driven-development-desktop.png`
   - `artifacts/screenshots/task-185-en-ai-driven-development-desktop.png`
   - `artifacts/screenshots/task-185-ja-contact-desktop.png`
   - `artifacts/screenshots/task-185-en-contact-desktop.png`
8. Commands executed:
   - `git status --short && git log --oneline -5` — confirmed expected pre-existing dirty files before QA.
   - `npm run lint` — PASS.
   - `npm test` — PASS, 13/13 tests.
   - `npm run build` — PASS before browser QA; generated static export showed only active service/project static params.
   - `grep -nE 'services/web3-blockchain|projects/carina|web3-blockchain' public/_redirects out/_redirects` — PASS, no matches.
   - `grep -RInE 'services/web3-blockchain|projects/carina|web3-blockchain|Carina' out/sitemap.xml out` — PASS, no matches.
   - `bash scripts/devserver.sh start` — PASS, PID `1498188`, port `3000`.
   - `bash scripts/devserver.sh status` — PASS, HTTP 200.
   - `bash scripts/smoke-test.sh` — 21/22 PASS, known `/404/` 500.
   - Python Playwright with `/usr/bin/chromium` — completed browser QA and screenshots against `http://127.0.0.1:3000`.
   - `curl` retired route checks — `/ja/services/web3-blockchain/` and `/en/services/web3-blockchain/` returned 404; `/ja/projects/carina/` and `/en/projects/carina/` returned 500.
   - `bash scripts/devserver.sh stop && bash scripts/devserver.sh status` — PASS, service stopped and status not running.
   - Post-stop `npm run build` — PASS.
9. Environment/service notes:
   - Cwd: `/root/.openclaw/projects/NebulaInfinity-WebSite`.
   - Preview URL/port: `http://127.0.0.1:3000`.
   - Browser: headless Chromium `/usr/bin/chromium` via Python Playwright.
   - Service lifecycle used only `scripts/devserver.sh`; no `npm run dev`, no `pkill`, no `.next` removal.
   - Devserver PID `1498188` was stopped cleanly.
   - No form submissions were performed.
10. Commit under test:
   - Baseline requested: `838ead45979de5e0bf36058eb9b7e159984fdf18`.
   - Implementation commits under test: task-181 `7d56f7dc0720c66e4099356122b185fd9f5037f0`, task-182 `2f092953810c6ae670cd10e2e80d789d9e3f4d1e`, task-184 fix `d9237e6f9489c88f7bc6a1db628daa1ba8d26f81`.
   - QA start HEAD: `3a02fb0e9707e19238e8b0843e456a4ab655208b` (`docs(pm): record QA rerun dispatch notification [task-185]`).
11. Limitations / untested areas:
   - No live Cloudflare/production domain QA was performed.
   - Contact form was inspected visually/DOM only; no real inquiry was submitted.
   - Tester made no source fixes.
12. Mock/test data cleanup check:
   - PASS. No mock accounts, production data, cookies, or contact submissions were created.
   - After evidence commit, expected pre-existing dirty files should remain only: modified Z copy sheet and untracked consultation doc.

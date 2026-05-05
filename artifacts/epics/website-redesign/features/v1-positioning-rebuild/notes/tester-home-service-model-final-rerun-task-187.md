# Task 187 — Final Home Service Model Browser QA Rerun

## Test Report
1. Task type: S1 Pipeline QA / browser + screenshot verification rerun.
2. Test result: FAIL.
3. Tested scope:
   - Topic/project lock confirmed from Telegram topic 66 systemPrompt: NebulaInfinity-WebSite only, path `/root/.openclaw/projects/NebulaInfinity-WebSite`, branch `main`, artifacts present.
   - Static QA before browser QA: `npm run lint`, `npm test`, `npm run build`.
   - Approved preview workflow only: `bash scripts/devserver.sh start/status/stop`, no `npm run dev`, no `pkill`, no `.next` removal.
   - Fresh-preview retired route checks before active-route warm-up.
   - Active service/project detail route HTTP checks.
   - JA/EN Home desktop/mobile rendering, section order, Hero CTA removal, Services/Projects/About content, desktop and mobile anchors.
   - JA/EN AI-Driven Development detail and Contact taxonomy.
   - `_redirects`, sitemap/static export retired-route exposure checks.
4. Done criteria coverage:
   - Static checks before browser QA: PASS. `npm run lint`, `npm test` (13/13), and `npm run build` passed.
   - Fresh-preview retired route checks before active-route warm-up: FAIL. `/ja/services/web3-blockchain/` and `/en/services/web3-blockchain/` returned 500 immediately after preview start/status OK. `/ja/projects/carina/` and `/en/projects/carina/` returned clean 404.
   - Later retired-route behavior after active-route warm-up: PASS/diagnostic. After active service/project routes were warmed, both retired Web3 service routes changed from 500 to 404; Carina stayed 404.
   - Active routes still work: PASS. All 6 project detail routes and all 6 active service detail routes returned 200.
   - Prior task-183 Services subtitle blocker: PASS. JA/EN Home Services subtitle no longer includes Web3/Web Contents/blockchain and aligns to AI Workflow / AI Application / AI-Driven Development.
   - Prior task-183 `_redirects` blocker: PASS. `public/_redirects` and generated `out/_redirects` have no `services/web3-blockchain`, `projects/carina`, or `web3-blockchain` matches after build.
   - Rendered UI/sitemap/static export active retired-route exposure: PASS with known exception. No active retired service/project links or sitemap/static route exposure found. Hero chips still include display-only `Web Contents / Web3.0`; recorded as informational/pending Z decision per PM instruction, not a blocking failure.
   - JA/EN Home desktop/mobile no horizontal overflow or console errors: PASS.
   - Home section order Hero → Services → Projects → Process → About → Contact CTA: PASS.
   - Hero CTA row/spacer absent: PASS.
   - Services cards exactly link to `ai-workflow`, `ai-application`, `ai-driven-development`: PASS.
   - Projects cards exactly Japan Life Navi / Rigel / Astra with slugs `gaijin-life-navi`, `rigel`, `astra`: PASS.
   - About vertical Title → Company snapshot → Working principles; snapshot only Company + Location: PASS.
   - `#services` / `#about` anchors from header/mobile nav: PASS. Initial automated mobile About measurement was suspicious; targeted recheck from top/home via `nav#primary-navigation` passed for JA/EN with headings visible below sticky header.
   - AI-Driven Development detail JA/EN correct content without retired Web3/Carina messaging: PASS.
   - Contact taxonomy JA/EN includes AI-Driven Development and excludes Web3/Blockchain: PASS.
   - Generic `/404/` smoke: informational known minor. `/404/` still returns 500; not used as the blocking failure reason.
   - Devserver stopped cleanly: PASS. Both preview starts were stopped via `bash scripts/devserver.sh stop`; final status was not running.
   - Post-stop build after suspicious route behavior: PASS. Final `npm run build` passed after service stop.
5. Test cases: 64 pass / 2 fail.
6. Issues found:
   - Severity: major / blocking
     - Expected: Fresh-preview retired service routes `/ja/services/web3-blockchain/` and `/en/services/web3-blockchain/` should return clean 404/not-found, not 500, immediately after preview start/status OK and before warming active service/project detail routes.
     - Actual: Both retired Web3 service routes returned `500 Internal Server Error` on the initial fresh-preview probe and again on a second isolated preview start. Retired Carina routes returned 404. After active-route warm-up, the same Web3 service routes changed to 404, which confirms a fresh-preview/warm-up-sensitive not-found regression remains.
     - Reproduction: `bash scripts/devserver.sh start && bash scripts/devserver.sh status && curl -i http://127.0.0.1:3000/ja/services/web3-blockchain/ && curl -i http://127.0.0.1:3000/en/services/web3-blockchain/` before any active service/project route warm-up.
     - Evidence path: `artifacts/screenshots/task-187-ja-retired-web3-service-500-failure.png`, `artifacts/screenshots/task-187-en-retired-web3-service-500-failure.png`; command summaries in this report.
   - Severity: informational / pending Z decision
     - Expected: Not adjudicated in this rerun per PM instruction.
     - Actual: Hero trust chips still include display-only `Web Contents / Web3.0` in JA/EN Home.
     - Reproduction: Open `http://127.0.0.1:3000/ja/` or `/en/` and inspect the Hero chip row.
     - Evidence path: `artifacts/screenshots/task-187-ja-home-desktop.png`, `artifacts/screenshots/task-187-en-home-desktop.png`.
   - Severity: minor / known issue
     - Expected: Generic `/404/` smoke ideally returns a clean not-found result.
     - Actual: `http://127.0.0.1:3000/404/` returns 500. This is the known minor issue from prior QA and is not the sole failure reason.
     - Reproduction: `curl -i http://127.0.0.1:3000/404/` against the approved preview.
     - Evidence path: command summary in this report.
7. Screenshots/evidence paths:
   - `artifacts/screenshots/task-187-ja-home-desktop.png`
   - `artifacts/screenshots/task-187-en-home-desktop.png`
   - `artifacts/screenshots/task-187-ja-home-mobile.png`
   - `artifacts/screenshots/task-187-en-home-mobile.png`
   - `artifacts/screenshots/task-187-ja-services-anchor-desktop.png`
   - `artifacts/screenshots/task-187-en-services-anchor-desktop.png`
   - `artifacts/screenshots/task-187-ja-about-anchor-desktop.png`
   - `artifacts/screenshots/task-187-en-about-anchor-desktop.png`
   - `artifacts/screenshots/task-187-ja-services-anchor-mobile.png`
   - `artifacts/screenshots/task-187-en-services-anchor-mobile.png`
   - `artifacts/screenshots/task-187-ja-about-anchor-mobile.png`
   - `artifacts/screenshots/task-187-en-about-anchor-mobile.png`
   - `artifacts/screenshots/task-187-ja-about-anchor-mobile-recheck.png`
   - `artifacts/screenshots/task-187-en-about-anchor-mobile-recheck.png`
   - `artifacts/screenshots/task-187-ja-ai-driven-development-detail-desktop.png`
   - `artifacts/screenshots/task-187-en-ai-driven-development-detail-desktop.png`
   - `artifacts/screenshots/task-187-ja-contact-desktop.png`
   - `artifacts/screenshots/task-187-en-contact-desktop.png`
   - `artifacts/screenshots/task-187-ja-retired-web3-service-500-failure.png`
   - `artifacts/screenshots/task-187-en-retired-web3-service-500-failure.png`
8. Commands executed:
   - `git rev-parse HEAD`, `git branch --show-current`, `git merge-base --is-ancestor <commit> HEAD`, `git status --short`, `git log --oneline -10` — PASS. Branch `main`; baseline and implementation commits are ancestors of QA start HEAD; only expected pre-existing dirty files were present.
   - `npm run lint` — PASS.
   - `npm test` — PASS, 13/13 tests.
   - `npm run build` — PASS before browser QA.
   - `grep -nE 'services/web3-blockchain|projects/carina|web3-blockchain' public/_redirects out/_redirects` — PASS, no matches.
   - `grep -RInE 'services/web3-blockchain|projects/carina|web3-blockchain|Carina' out/sitemap.xml out` — PASS for active retired route/link exposure; only broader display-only Hero chip text appeared in the separate informational `Web3|Web Contents` grep.
   - `bash scripts/devserver.sh start` — PASS, first preview PID `1510692`, port `3000`.
   - `bash scripts/devserver.sh status` — PASS, HTTP 200.
   - Fresh retired route curl before active warm-up — FAIL for `/ja/services/web3-blockchain/` and `/en/services/web3-blockchain/` = 500; PASS for `/ja/projects/carina/` and `/en/projects/carina/` = 404.
   - Active route curl matrix — PASS, all 12 required active service/project detail routes returned 200.
   - Retired route recheck after active warm-up — PASS/diagnostic, Web3 service and Carina routes returned 404.
   - `curl http://127.0.0.1:3000/404/` — informational known minor, returned 500.
   - Python Playwright browser QA with `/usr/bin/chromium` — completed; 40 UI checks passed after targeted mobile About anchor recheck; screenshots saved.
   - `bash scripts/devserver.sh stop && bash scripts/devserver.sh status` — PASS, first preview stopped and status not running.
   - Second fresh preview start/status + retired route reproduction — FAIL reproduced for `/ja/services/web3-blockchain/` and `/en/services/web3-blockchain/` = 500 before active warm-up; failure screenshots saved; second preview PID `1512337`.
   - Final `bash scripts/devserver.sh stop && bash scripts/devserver.sh status` — PASS, service stopped and status not running.
   - Final post-stop `npm run build` — PASS.
9. Environment/service notes:
   - Cwd: `/root/.openclaw/projects/NebulaInfinity-WebSite`.
   - Preview URL/port: `http://127.0.0.1:3000`.
   - Browser: headless Chromium `/usr/bin/chromium` via Python Playwright.
   - Service lifecycle used only approved `scripts/devserver.sh` commands. No `npm run dev`, no `pkill`, no `kill`, no `.next` removal.
   - First preview PID `1510692`; second preview PID `1512337`; both stopped via approved script.
   - No form submissions were performed.
10. Commit under test:
   - QA start HEAD: `f6a5ea1e7ca8e47b499cc58427495d4e053ec6f0` (`docs(pm): record final QA rerun dispatch notification [task-187]`).
   - Baseline under test: `ec449c9510f608c2cd289754b677c34a5c689d5c`.
   - Implementation commits under test: task-181 `7d56f7dc0720c66e4099356122b185fd9f5037f0`, task-182 `2f092953810c6ae670cd10e2e80d789d9e3f4d1e`, task-184 `d9237e6f9489c88f7bc6a1db628daa1ba8d26f81`, task-186 `974650f51d6283c8206ea9be4e9af1cf8d56e9c8`.
11. Limitations / untested areas:
   - No live Cloudflare/production domain QA was performed.
   - Contact form was inspected visually/DOM only; no real inquiry was submitted.
   - Tester made no source fixes.
12. Mock/test data cleanup check:
   - PASS. No mock accounts, production data, cookies, or contact submissions were created.
   - Devserver is stopped.
   - Expected pre-existing dirty files were preserved and not staged: modified Z copy sheet and untracked consultation doc.

# Task 183 — Home Service Model Browser QA

## Test Report
1. Task type: S1 Pipeline QA / browser + screenshot verification.
2. Test result: FAIL.
3. Tested scope:
   - Home JA/EN desktop and mobile responsive rendering.
   - Home section order, Hero CTA removal, Hero/service taxonomy copy, Services/Projects/About content, sticky-header anchors.
   - AI-Driven Development detail route JA/EN.
   - Contact taxonomy UI JA/EN.
   - Static export/routing exposure for retired service/project URLs.
4. Done criteria coverage:
   - Static verification (`npm run lint`, `npm test`, `npm run build`): PASS before browser QA and PASS again after service stop/browser QA.
   - Approved preview/devserver workflow: PASS for use of `bash scripts/devserver.sh start/status/stop`; FAIL for project smoke script because `/404/` returned 500.
   - Required screenshots: PASS, saved under `artifacts/screenshots/task-183-*.png`.
   - Home section order Hero → Services → Projects → Process → About → Contact CTA: PASS visually/DOM order on JA and EN.
   - Hero CTA button row/spacer removed: PASS; no Hero links/buttons found.
   - Hero trust chips official taxonomy: FAIL; actual chips are `AI Workflow`, `AI Application`, `Web Contents / Web3.0` instead of the three required official labels.
   - Services section active card links: PASS; exactly `ai-workflow`, `ai-application`, `ai-driven-development` links per language.
   - Services section taxonomy copy: FAIL; section intro still advertises Web3/Web Contents copy in JA/EN.
   - Projects section: PASS; exactly Japan Life Navi / Rigel / Astra and slugs `gaijin-life-navi`, `rigel`, `astra`.
   - About section vertical snapshot/principles: PASS; Company and Location only, no Base/Domain/One-liner/body side column found.
   - Sticky-header-safe `#services` and `#about` anchors from header/mobile nav: PASS after scroll settles; headings visible below 80px sticky header on JA/EN desktop/mobile.
   - AI-Driven Development detail routes JA/EN: PASS; both HTTP 200 and no Web3/Carina content found in rendered main content.
   - Retired routes absent from active rendered UI/sitemap/static params: PARTIAL. Rendered UI and sitemap/static params passed, but Cloudflare `_redirects` still maps legacy blockchain URLs to retired `/services/web3-blockchain` URLs.
   - Contact taxonomy: PASS; AI-Driven Development present and Web3/Blockchain absent in JA/EN contact UI.
   - Accessibility/basic UI: PASS for visible `#services`/`#about` headings, image alt attributes, no horizontal overflow, and no console errors on checked pages.
5. Test cases: 28 pass / 4 fail.
6. Issues found:
   - Severity: major
     - Expected: Hero trust chips exactly `AI Workflow Design & Development` / `AI Application Design & Development` / `AI-Driven Development`.
     - Actual: JA and EN Home Hero show `AI Workflow` / `AI Application` / `Web Contents / Web3.0`.
     - Reproduction: Start preview with `bash scripts/devserver.sh start`, open `http://127.0.0.1:3000/ja/` or `/en/`, inspect Hero chip row.
     - Evidence path: `artifacts/screenshots/task-183-ja-home-desktop.png`, `artifacts/screenshots/task-183-en-home-desktop.png`.
     - Likely source: `app/[lang]/page.tsx:48-49` (`heroChips`).
   - Severity: major
     - Expected: Home Services copy exposes exactly the active 3-line taxonomy and does not advertise retired Web3/Web Contents positioning.
     - Actual: JA Services subtitle says `Web3.0技術活用`; EN Services subtitle says `Web Contents / Web3.0 use`.
     - Reproduction: Open `http://127.0.0.1:3000/ja/#services` and `http://127.0.0.1:3000/en/#services`.
     - Evidence path: `artifacts/screenshots/task-183-ja-services-anchor-desktop.png`, `artifacts/screenshots/task-183-en-services-anchor-desktop.png`.
     - Likely source: `app/[lang]/page.tsx:13` and `app/[lang]/page.tsx:32`.
   - Severity: major
     - Expected: Static export / Cloudflare Pages artifacts do not advertise active retired Web3 URLs and do not rely on compatibility redirects for removed service routes.
     - Actual: `public/_redirects` and generated `out/_redirects` still map `/ja/services/blockchain-smart-contract` → `/ja/services/web3-blockchain` and EN equivalent.
     - Reproduction: Run `npm run build`, then `grep -RInE 'services/web3-blockchain|projects/carina|web3-blockchain' out public/_redirects`.
     - Evidence path: command output in this report; no screenshot needed.
     - Likely source: `public/_redirects:10-11`.
   - Severity: minor
     - Expected: Approved `scripts/smoke-test.sh` passes after devserver start per project GOTCHAS.
     - Actual: Smoke tested 22 pages; 21 passed and `/404/` returned 500.
     - Reproduction: `bash scripts/devserver.sh start && bash scripts/smoke-test.sh`.
     - Evidence path: command summary in this report.
     - Likely source: interaction between `scripts/smoke-test.sh` discovering `out/404/index.html` and Next dev routing `/404/` as `[lang]=404`.
7. Screenshots/evidence paths:
   - `artifacts/screenshots/task-183-ja-home-desktop.png`
   - `artifacts/screenshots/task-183-en-home-desktop.png`
   - `artifacts/screenshots/task-183-ja-home-mobile.png`
   - `artifacts/screenshots/task-183-en-home-mobile.png`
   - `artifacts/screenshots/task-183-ja-ai-driven-development-desktop.png`
   - `artifacts/screenshots/task-183-en-ai-driven-development-desktop.png`
   - `artifacts/screenshots/task-183-ja-contact-desktop.png`
   - `artifacts/screenshots/task-183-en-contact-desktop.png`
   - `artifacts/screenshots/task-183-ja-services-anchor-desktop.png`
   - `artifacts/screenshots/task-183-en-services-anchor-desktop.png`
   - `artifacts/screenshots/task-183-ja-about-anchor-desktop.png`
   - `artifacts/screenshots/task-183-en-about-anchor-desktop.png`
   - `artifacts/screenshots/task-183-ja-services-anchor-mobile.png`
   - `artifacts/screenshots/task-183-en-services-anchor-mobile.png`
   - `artifacts/screenshots/task-183-ja-about-anchor-mobile.png`
   - `artifacts/screenshots/task-183-en-about-anchor-mobile.png`
8. Commands executed:
   - `git status --short && git rev-parse HEAD && git log --oneline -5` — baseline/status inspection.
   - `git diff --name-status 24e1279ce8c09b28675e09f02d9ad7a282228de2..HEAD -- app components data lib styles next.config.js package.json package-lock.json` — PASS, no source/package diffs from baseline to current PM dispatch HEAD.
   - `npm run lint && npm test && npm run build` — PASS before browser QA.
   - `bash scripts/devserver.sh start && bash scripts/devserver.sh status && bash scripts/smoke-test.sh` — devserver PASS; smoke FAIL on `/404/` only.
   - Playwright/Python browser QA with `/usr/bin/chromium` against `http://127.0.0.1:3000` — completed; screenshots saved.
   - `curl` route checks — active AI-Driven detail routes 200; standalone `/services`, `/about`, retired `/services/web3-blockchain`, and `/projects/carina` routes 404 for JA/EN.
   - `grep -RInE 'services/web3-blockchain|projects/carina|web3-blockchain|Carina|Web3\.0 / Blockchain' out public/_redirects` — FAIL for `public/_redirects` / `out/_redirects` Web3 redirects.
   - `bash scripts/devserver.sh status && bash scripts/devserver.sh stop && bash scripts/devserver.sh status` — stopped exact PID 1488231; final status not running.
   - `npm run lint && npm test && npm run build` — PASS after browser QA/service stop.
9. Environment/service notes:
   - Cwd: `/root/.openclaw/projects/NebulaInfinity-WebSite`.
   - Browser: headless Chromium `/usr/bin/chromium` via Python Playwright.
   - Preview URL/port: `http://127.0.0.1:3000`; service managed only via `scripts/devserver.sh` / systemd-backed workflow.
   - Devserver started as PID 1488231 and was stopped via approved script after testing.
   - No form submissions were performed.
10. Commit under test:
   - Current QA base at test start: `a2ae722cb2c430a37cc982c88dadb0df793b1339` (`docs(pm): record browser QA dispatch [task-183]`).
   - Source baseline requested by PM: `24e1279ce8c09b28675e09f02d9ad7a282228de2`; current HEAD differed from it only in PM/project tracking files, not app/components/data/lib/styles/package files.
   - Implementation target commits: taxonomy `7d56f7dc0720c66e4099356122b185fd9f5037f0`, Home `2f092953810c6ae670cd10e2e80d789d9e3f4d1e`, PM static checks `b9f943c`, `24e1279`.
11. Limitations / untested areas:
   - No live production domain/deployment QA was performed.
   - No source fixes were made by Tester.
   - Contact form was inspected visually/DOM only; no real inquiry was submitted.
12. Mock/test data cleanup check:
   - PASS. No mock accounts, production data, or contact submissions were created.
   - Expected pre-existing dirty files were preserved and not staged: `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/home-copy-editing-sheet-2026-05-05.md` and untracked `docs/nebulainfinity-design-consultation.md`.

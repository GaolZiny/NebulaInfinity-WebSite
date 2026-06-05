## Test Report
1. Task type: S1 Pipeline QA — browser/screenshot QA for task-169 Home-led IA consolidation.
2. Test result: FAIL
3. Tested scope:
   - Project: NebulaInfinity-WebSite at `/root/.openclaw/projects/NebulaInfinity-WebSite`
   - Browser base URL: `http://127.0.0.1:3000`
   - Viewports: desktop `1440x1000`; mobile `375x812`
   - Languages: JA and EN
   - Routes/anchors: `/ja/`, `/en/`, `#services`, `#about`, Projects, Contact, 3 service details, representative project details (`gaijin-life-navi`, `rigel`, `carina`), deleted standalone Services/About, sitemap.

4. Done criteria coverage:
   - JA and EN Home render and section order is Hero → Why assetization → Services(#services) → Process → About(#about) → Contact CTA: PASS. Evidence: `artifacts/screenshots/task-170-ja-home-desktop-top.png`, `artifacts/screenshots/task-170-en-home-desktop-top.png`.
   - Header desktop nav and mobile nav Services/About anchors target `/[lang]/#services` and `/[lang]/#about`: PASS for href targets; FAIL for mobile anchor behavior (see Issues).
   - Sticky header does not hide `#services` / `#about` headings after anchor navigation: FAIL. EN desktop Services heading is hidden after header/hero click; mobile Services/About anchor clicks do not land on visible headings.
   - Home hero secondary CTA navigates to `#services`: PASS for hash/navigation; FAIL for EN desktop visual landing because Services heading is hidden under sticky header after click.
   - Home `#services` has exactly 3 service cards and detail CTAs work: PASS. Detail CTA paths observed: `/[lang]/services/ai-workflow/`, `/[lang]/services/ai-application/`, `/[lang]/services/web3-blockchain/`; all returned 200 in JA/EN.
   - Home `#about` is compact and excludes Focus/service-domain summaries and representative product lists: PASS. No Focus/Japan Life Navi/Rigel/Carina/product-list content found inside `#about`.
   - JA/EN service details still render for all 3 services: PASS. All six service detail URLs returned 200.
   - Deleted standalone `/[lang]/services` and `/[lang]/about` have no internal entrances; sitemap excludes them: PASS. Internal link scan found no exact `/ja/services`, `/en/services`, `/ja/about`, or `/en/about`; sitemap had no removed loc entries; deleted routes returned 404.
   - JA/EN smoke for primary routes: PASS. Home, Projects, Contact, service details, and representative project details returned 200.
   - No visible broken layout or unusable controls on desktop/mobile changed surfaces: FAIL due anchor landing behavior; otherwise no horizontal overflow found at tested desktop/mobile Home viewports.

5. Test cases: 8 pass / 2 fail at scope-item level.

6. Issues found:
   - Severity: major
     Expected: Header Services and hero secondary CTA anchor navigation should land with the `#services` heading visible below the sticky header in both languages.
     Actual: On EN desktop, clicking either header `Services` or hero `View Services` changes URL to `/en/#services`, but the Services heading lands under the sticky header (`headerBottom≈80`, `headingTop≈28-31`). Direct loading `/en/#services` lands correctly, so the regression appears specific to same-page click-based hash navigation.
     Reproduction:
       1. `sudo systemctl restart nebula-devserver && sleep 15`
       2. Open `http://127.0.0.1:3000/en/` at `1440x1000`.
       3. Click header `Services` or hero `View Services`.
       4. Observe the URL is `/en/#services`, but the visible viewport starts below the Services heading.
     Evidence path: `artifacts/screenshots/task-170-en-services-desktop-click-anchor.png`.
     Likely owner: Frontend/Coder — anchor scroll behavior / sticky-header offset handling.

   - Severity: major
     Expected: Mobile menu Services/About links should take the user to visible `#services` / `#about` headings without the sticky header or menu layout shift obscuring/skipping the target.
     Actual: At `375x812`, mobile Services click lands past the Services heading/card intro; JA/EN screenshots show the service-selection heading is not visible. Mobile About click lands in the Process section, with About heading below the viewport.
     Reproduction:
       1. Open `http://127.0.0.1:3000/ja/` or `/en/` at `375x812`.
       2. Open the hamburger menu.
       3. Click `サービス` / `Services`, or `会社概要` / `About`.
       4. Observe URL hash changes but the requested heading is not visible.
     Evidence paths:
       - `artifacts/screenshots/task-170-ja-mobile-services-anchor-failure.png`
       - `artifacts/screenshots/task-170-en-mobile-services-anchor-failure.png`
       - `artifacts/screenshots/task-170-ja-about-mobile-clicknav-anchor.png`
       - `artifacts/screenshots/task-170-en-about-mobile-clicknav-anchor.png`
     Likely owner: Frontend/Coder — mobile menu close/layout shift and anchor scroll offset.

7. Screenshots/evidence paths:
   - `artifacts/screenshots/task-170-ja-home-desktop-top.png`
   - `artifacts/screenshots/task-170-ja-services-desktop.png`
   - `artifacts/screenshots/task-170-ja-about-desktop.png`
   - `artifacts/screenshots/task-170-ja-home-mobile.png`
   - `artifacts/screenshots/task-170-en-home-desktop-top.png`
   - `artifacts/screenshots/task-170-en-services-desktop.png`
   - `artifacts/screenshots/task-170-en-about-desktop.png`
   - `artifacts/screenshots/task-170-en-services-desktop-direct-anchor.png`
   - `artifacts/screenshots/task-170-en-services-desktop-click-anchor.png`
   - `artifacts/screenshots/task-170-ja-mobile-services-anchor-failure.png`
   - `artifacts/screenshots/task-170-en-mobile-services-anchor-failure.png`
   - `artifacts/screenshots/task-170-ja-about-mobile-direct-anchor.png`
   - `artifacts/screenshots/task-170-ja-about-mobile-clicknav-anchor.png`
   - `artifacts/screenshots/task-170-en-about-mobile-direct-anchor.png`
   - `artifacts/screenshots/task-170-en-about-mobile-clicknav-anchor.png`

8. Commands executed:
   - `git rev-parse HEAD`, `git status --short`, `git log --oneline --decorate -6 --all --graph`
   - `bash scripts/devserver.sh status`
   - `sudo systemctl restart nebula-devserver && sleep 15`
   - `curl -I --max-time 10 http://127.0.0.1:3000/ja/`
   - `python3 /root/.openclaw/agents/tester/workspace/qa_home_ia_task170.py | tee /tmp/task-170-qa-results.json`
   - Additional targeted Python Playwright checks for same-page anchor click behavior and screenshots.
   - `file artifacts/screenshots/task-170-*.png`

9. Environment/service notes:
   - OS/browser: Debian 12, Python Playwright with `/usr/bin/chromium`, headless.
   - Service method: documented project systemd service `nebula-devserver.service`, port `3000`, cwd `/root/.openclaw/projects/NebulaInfinity-WebSite`.
   - Initial service state: active but returning HTTP 500; recovered through documented `sudo systemctl restart nebula-devserver && sleep 15`, then HTTP 200.
   - Final service state: left active because it was already active before QA; exact PID after restart was `1259331`.
   - No `npm run dev`, manual `pkill`/`kill`, or `.next` removal was used.

10. Commit under test:
   - Implementation commit requested for QA: `3a6bfdea237addd61ed7c6a593488e6d4b45e246` (`feat(ia): consolidate Services About into Home anchors [task-169]`).
   - Repo HEAD during QA: `e30ecd438f443f68c2c73ec2243802beb4525691` (`docs(pm): record Home IA static verification [task-169]`), a PM docs commit on top of the implementation commit.

11. Limitations / untested areas:
   - Contact form submission/delivery was not exercised; task scope requested route smoke, not live inquiry submission.
   - Browser QA used the documented local systemd devserver, not a deployed Cloudflare Pages URL.
   - Static lint/test/build were not rerun by Tester because PM already recorded PASS for lint/test/build immediately before this browser QA; this run focused on browser/screenshot acceptance.

12. Mock/test data cleanup check:
   - No test accounts, mock auth, production data, or form submissions were created.
   - Durable artifacts are limited to the allowed report path and `artifacts/screenshots/task-170-*.png`.

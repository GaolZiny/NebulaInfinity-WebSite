## Test Report
1. Task type: S1 Pipeline QA — browser/screenshot regression QA after `task-169-iter1` Home anchor-scroll fix.
2. Test result: PASS
3. Tested scope:
   - Project: NebulaInfinity-WebSite at `/root/.openclaw/projects/NebulaInfinity-WebSite`.
   - Browser base URL: `http://127.0.0.1:3000`.
   - Viewports: desktop `1440x1000`; mobile `375x812`.
   - Languages/routes: JA and EN Home, `#services`, `#about`, Projects, Contact, 3 service details, representative project details (`gaijin-life-navi`, `rigel`, `carina`), deleted standalone Services/About, sitemap.

4. Done criteria coverage:
   - Primary anchor regressions: PASS. All required click/direct anchor paths landed with the requested heading visible below the sticky header.
   - EN desktop header Services → #services: PASS — URL `http://127.0.0.1:3000/en/#services`, viewport `1440x1000`, click path: desktop header link 'Services' from /en/; headerBottom=80px, headingTop=195.9px, headingBottom=291.9px, scrollY=1169; evidence `artifacts/screenshots/task-171-en-desktop-header-services-click.png`.
   - EN desktop hero View Services → #services: PASS — URL `http://127.0.0.1:3000/en/#services`, viewport `1440x1000`, click path: hero secondary CTA 'View Services' from /en/; headerBottom=80px, headingTop=195.9px, headingBottom=291.9px, scrollY=1169; evidence `artifacts/screenshots/task-171-en-desktop-hero-services-click.png`.
   - JA desktop header サービス → #services: PASS — URL `http://127.0.0.1:3000/ja/#services`, viewport `1440x1000`, click path: desktop header link 'サービス' from /ja/; headerBottom=80px, headingTop=196.3px, headingBottom=244.3px, scrollY=1209; evidence `artifacts/screenshots/task-171-ja-desktop-header-services-click.png`.
   - EN desktop header About → #about: PASS — URL `http://127.0.0.1:3000/en/#about`, viewport `1440x1000`, click path: desktop header link 'About' from /en/; headerBottom=80px, headingTop=196.3px, headingBottom=340.3px, scrollY=2970; evidence `artifacts/screenshots/task-171-en-desktop-header-about-click.png`.
   - JA desktop header 会社概要 → #about: PASS — URL `http://127.0.0.1:3000/ja/#about`, viewport `1440x1000`, click path: desktop header link '会社概要' from /ja/; headerBottom=80px, headingTop=196.1px, headingBottom=244.1px, scrollY=2817; evidence `artifacts/screenshots/task-171-ja-desktop-header-about-click.png`.
   - JA mobile hamburger サービス → #services: PASS — URL `http://127.0.0.1:3000/ja/#services`, viewport `375x812`, click path: mobile hamburger menu link 'サービス' from /ja/; headerBottom=80px, headingTop=195.9px, headingBottom=272.6px, scrollY=2128; evidence `artifacts/screenshots/task-171-ja-mobile-services-click.png`.
   - JA mobile hamburger 会社概要 → #about: PASS — URL `http://127.0.0.1:3000/ja/#about`, viewport `375x812`, click path: mobile hamburger menu link '会社概要' from /ja/; headerBottom=80px, headingTop=196.4px, headingBottom=273.1px, scrollY=5634; evidence `artifacts/screenshots/task-171-ja-mobile-about-click.png`.
   - EN mobile hamburger Services → #services: PASS — URL `http://127.0.0.1:3000/en/#services`, viewport `375x812`, click path: mobile hamburger menu link 'Services' from /en/; headerBottom=80px, headingTop=196.2px, headingBottom=349.8px, scrollY=2276; evidence `artifacts/screenshots/task-171-en-mobile-services-click.png`.
   - EN mobile hamburger About → #about: PASS — URL `http://127.0.0.1:3000/en/#about`, viewport `375x812`, click path: mobile hamburger menu link 'About' from /en/; headerBottom=80px, headingTop=196.5px, headingBottom=311.6px, scrollY=6184; evidence `artifacts/screenshots/task-171-en-mobile-about-click.png`.
   - Direct load `/ja/#services` at `1440x1000`: PASS — headerBottom=80px, headingTop=196.3px, headingBottom=244.3px, scrollY=1209.
   - Direct load `/ja/#about` at `1440x1000`: PASS — headerBottom=80px, headingTop=196.1px, headingBottom=244.1px, scrollY=2817.
   - Direct load `/en/#services` at `1440x1000`: PASS — headerBottom=80px, headingTop=195.9px, headingBottom=291.9px, scrollY=1169.
   - Direct load `/en/#about` at `1440x1000`: PASS — headerBottom=80px, headingTop=196.3px, headingBottom=340.3px, scrollY=2970.
   - Home section order remains Hero → Why assetization → Services(#services) → Process → About(#about) → Contact CTA: PASS for JA and EN via heading top-order geometry.
     - JA: Hero=197, Why assetization=791.6, Services(#services)=1405.3, Process=2516.3, About(#about)=3013.1, Contact CTA=3772.3.
     - EN: Hero=194, Why assetization=783.6, Services(#services)=1364.9, Process=2599.4, About(#about)=3166.3, Contact CTA=3930.5.
   - `#services` exactly 3 service cards and detail CTAs to the 3 service detail routes: PASS for JA and EN.
     - JA: articleCount=3; CTA paths=/ja/services/ai-application, /ja/services/ai-workflow, /ja/services/web3-blockchain.
     - EN: articleCount=3; CTA paths=/en/services/ai-application, /en/services/ai-workflow, /en/services/web3-blockchain.
   - `#about` remains compact and excludes Focus/service-domain summaries or representative products list (Japan Life Navi / Rigel / Carina): PASS for JA and EN.
     - JA: about text length=426; banned terms present=[].
     - EN: about text length=732; banned terms present=[].
   - Deleted standalone `/ja/services`, `/en/services`, `/ja/about`, `/en/about`: PASS. HTTP checks returned 404; internal link scan found no exact entrances; sitemap had no forbidden entries.
   - 3 service detail routes still render for JA and EN: PASS. All six `/[lang]/services/{serviceId}` routes returned HTTP 200.
   - Primary route smoke: PASS. Home, Projects, Contact, and representative project details rendered HTTP 200; `bash scripts/smoke-test.sh` also passed 22/22 documented pages.

5. Test cases: 20 acceptance groups pass / 0 fail. Route smoke details: 22 documented smoke pages passed; targeted deleted-route checks 4/4 returned 404.

6. Issues found:
   - None.

7. Screenshots/evidence paths:
   - `artifacts/screenshots/task-171-ja-home-desktop-top.png`
   - `artifacts/screenshots/task-171-en-home-desktop-top.png`
   - `artifacts/screenshots/task-171-en-desktop-header-services-click.png`
   - `artifacts/screenshots/task-171-en-desktop-hero-services-click.png`
   - `artifacts/screenshots/task-171-ja-desktop-header-services-click.png`
   - `artifacts/screenshots/task-171-en-desktop-header-about-click.png`
   - `artifacts/screenshots/task-171-ja-desktop-header-about-click.png`
   - `artifacts/screenshots/task-171-ja-mobile-services-click.png`
   - `artifacts/screenshots/task-171-ja-mobile-about-click.png`
   - `artifacts/screenshots/task-171-en-mobile-services-click.png`
   - `artifacts/screenshots/task-171-en-mobile-about-click.png`
   - Browser geometry/raw run summary (not committed): `/tmp/task-171-qa-results.json`.

8. Commands executed:
   - `git rev-parse HEAD`, `git status --short`, `git log --oneline --decorate -8`
   - `bash scripts/devserver.sh status`; `systemctl show -p MainPID -p ExecStart -p WorkingDirectory nebula-devserver.service`
   - `sudo systemctl restart nebula-devserver && sleep 15` (project-approved documented service path from GOTCHAS; used after initial service returned HTTP 500)
   - `curl -sS -o /tmp/nebula_head.txt -D - --max-time 30 http://127.0.0.1:3000/{ja,en}/`
   - `python3 /root/.openclaw/agents/tester/workspace/qa_home_ia_task171.py | tee /tmp/task-171-qa-run-summary.json`
   - `bash scripts/smoke-test.sh`
   - `file artifacts/screenshots/task-171-*.png`

9. Environment/service notes:
   - OS/browser: Debian 12, Python Playwright, headless Chromium `/usr/bin/chromium`.
   - Service method: documented project systemd service `nebula-devserver.service`, port `3000`, cwd `/root/.openclaw/projects/NebulaInfinity-WebSite`.
   - Initial service state: active but `scripts/devserver.sh status` reported HTTP 500; recovered via documented `sudo systemctl restart nebula-devserver` path, then `/ja/` and `/en/` returned 200.
   - Final service state: `active`, MainPID `1265665`. Left active because it was an already-running project-managed systemd service before QA.
   - No `npm run dev`, manual `pkill`/`kill`, or `.next` removal was used.

10. Commit under test:
   - Requested fix commit: `3c0d0f19089b8be60f105f1e6c1ef4673416b3de` — `fix(ia): correct Home anchor scroll behavior [task-169-iter1]`.
   - Repo HEAD during QA: `4959f67da5f4ffa2b0fe8e287eb6579af823d5bb` — PM docs commit on top of the requested fix commit.

11. Limitations / untested areas:
   - Contact form delivery/submission was not exercised; this task requested route smoke and IA/anchor browser regression checks.
   - QA used the documented local systemd devserver, not a deployed Cloudflare Pages URL.
   - Static lint/test/build were not rerun by Tester; this run focused on required browser/screenshot regression plus documented smoke-test routes.

12. Mock/test data cleanup check:
   - No test accounts, auth state, form submissions, production data, or mock data were created.
   - Durable artifacts are limited to the allowed report path and `artifacts/screenshots/task-171-*.png`.
   - Git status before artifact commit: untracked report plus `artifacts/screenshots/task-171-*.png`; pre-existing untracked `docs/nebulainfinity-design-consultation.md` remains preserved and was not staged.

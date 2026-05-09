# Tester QA Report — AI Workflow Copy Realignment [task-208]

## Test Report
1. Task type: S1 Pipeline QA / browser-content-static-export verification.
2. Test result: PASS.
3. Tested scope:
   - Commit under test: `608dedfa35d6f01a8c6752c1352c3dea84e0f3b1`.
   - Routes: `/ja/services/ai-workflow/`, `/en/services/ai-workflow/`, `/ja/services/ai-workflow/ai-dev-flow/`, `/en/services/ai-workflow/ai-dev-flow/`, negative checks for `/ja/projects/ai-dev-flow/`, `/en/projects/ai-dev-flow/`, `/ja/projects/`, `/en/projects/`.
   - Viewports: desktop `1440x1100`, tablet `768x1000`, mobile `390x900`.
4. Done criteria coverage:
   - `npm run lint`: PASS.
   - `npm run build`: PASS; static export generated JA/EN `ai-dev-flow` pages.
   - Static output/sitemap includes JA/EN `/services/ai-workflow/ai-dev-flow`: PASS (`out/ja/.../index.html`, `out/en/.../index.html`, sitemap locs present).
   - Sitemap/static output excludes `/projects/ai-dev-flow`: PASS; no matching `out` path or sitemap entry.
   - JA parent examples exactly three and ordered Agentic → Astra → Product research: PASS.
   - Parent boundary note visible in JA/EN: PASS.
   - Parent CTAs: PASS (`Agentic` → service sub-detail, `Astra` → `/projects/astra`, `Product research` → contact inquiry/no detail route).
   - EN parent examples semantically aligned: PASS.
   - JA/EN `ai-dev-flow` frames page as Nebula internal proof and client-specific workflow design, not exact client delivery: PASS.
   - JA/EN `ai-dev-flow` CTA/use-case wording supports complex client workflow design: PASS.
   - Language switch preserves `/services/ai-workflow/ai-dev-flow` both directions: PASS.
   - Responsive/visual checks: PASS; desktop/tablet/mobile examples balanced/stacked cleanly, no mobile horizontal overflow, role/gate notes readable, existing Light Premium Bento neutral tone preserved.
   - Route/IA negative checks: PASS; `/projects/ai-dev-flow` and standalone `/projects` are not advertised by sitemap or checked page links.
5. Test cases: 24 automated browser/content assertions pass / 0 fail. Command gates: lint PASS, build PASS. Smoke script: 19/20 pass with one known unrelated `/404/` dev-server failure.
6. Issues found:
   - Severity: minor / known unrelated
   - Expected: generic `/404/` smoke route should not affect task-specific routes.
   - Actual: `bash scripts/smoke-test.sh` reports `/404/` as 500, matching task-207 known issue; all task routes returned 200.
   - Reproduction: `sudo systemctl restart nebula-devserver && sleep 15 && bash scripts/smoke-test.sh`.
   - Evidence path: this report; screenshots below for task-specific UI evidence.
7. Screenshots/evidence paths:
   - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/screenshots/task-208-ai-workflow-copy-realignment/ja-parent-desktop-1440-examples.png`
   - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/screenshots/task-208-ai-workflow-copy-realignment/ja-parent-mobile-390-examples.png`
   - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/screenshots/task-208-ai-workflow-copy-realignment/en-parent-desktop-1440-examples.png`
   - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/screenshots/task-208-ai-workflow-copy-realignment/ja-ai-dev-flow-desktop-1440-hero.png`
   - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/screenshots/task-208-ai-workflow-copy-realignment/ja-ai-dev-flow-desktop-1440-role-gate-note.png`
   - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/screenshots/task-208-ai-workflow-copy-realignment/ja-ai-dev-flow-mobile-390-hero.png`
   - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/screenshots/task-208-ai-workflow-copy-realignment/ja-ai-dev-flow-mobile-390-role-gate-note.png`
   - Report: `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/tester-ai-workflow-copy-realignment-task-208.md`
8. Commands executed:
   - `git rev-parse HEAD`
   - `git status --short`
   - required document/source read via `sed`
   - `npm run lint`
   - `npm run build`
   - static/sitemap grep checks against `out/`
   - `bash scripts/devserver.sh status`
   - `systemctl status nebula-devserver --no-pager --lines=20`
   - `sudo systemctl restart nebula-devserver && sleep 15 && bash scripts/devserver.sh status && bash scripts/smoke-test.sh`
   - Python Playwright browser/content QA using `/usr/bin/chromium` against `http://127.0.0.1:3000`
   - `systemctl show nebula-devserver -p MainPID -p ActiveState --no-pager && sudo systemctl stop nebula-devserver && systemctl show nebula-devserver -p MainPID -p ActiveState --no-pager`
9. Environment/service notes:
   - Project cwd: `/root/.openclaw/projects/NebulaInfinity-WebSite`.
   - Dev server: project-managed `nebula-devserver.service` on port 3000. It was already running but returned 500 after build-cache churn; restarted via approved systemd path per GOTCHAS before browser QA. Exact MainPID before cleanup was `2907571`; service was stopped after QA with `sudo systemctl stop nebula-devserver` and confirmed inactive.
   - Browser QA target: `http://127.0.0.1:3000`.
   - Negative `/ja/projects/ai-dev-flow/` and `/en/projects/ai-dev-flow/` returned non-200 (500 in final browser run); treated as known dev not-found behavior and not a failure because sitemap/links do not advertise the route.
10. Commit under test: `608dedfa35d6f01a8c6752c1352c3dea84e0f3b1`.
11. Limitations / untested areas:
   - No production/live domain deployment was tested; QA used local static build plus local project-managed dev server.
   - Did not modify or inspect protected editing sheets beyond status awareness.
12. Mock/test data cleanup check:
   - No mock auth, credentials, cookies, production data, or test records were created.
   - Temporary QA script/results lived under `/tmp` and were not staged.
13. Risk / Regression Matrix coverage:
   - Active service sub-detail `/[lang]/services/ai-workflow/ai-dev-flow`: PASS (build, sitemap, browser JA/EN).
   - Forbidden `/[lang]/projects/ai-dev-flow`: PASS (not in sitemap/static output/checked links; direct dev route non-200).
   - Standalone `/[lang]/projects`: PASS (not advertised; direct dev route 404).
   - Parent AI Workflow examples/order: PASS.
   - Link routing: PASS.
   - Language switch: PASS.
   - Responsive examples/cards: PASS.
   - Visual tone/design system: PASS; no implementation CSS/style changes under test and screenshots remain within neutral Service-page Light Premium Bento direction.
   - Protected files: PASS for Tester; no protected source/docs were edited/staged by this QA pass. Pre-existing dirty/untracked protected/unrelated files were observed and left untouched.

## Browser measurement notes
- Desktop example cards: three equal-width cards on one row (`368px` each at x=`144/536/928`, y=`514`).
- Tablet `768px`: cards stack full-width (`736px`) with consistent spacing.
- Mobile `390px`: cards stack full-width (`358px`), ordered and readable; no horizontal overflow on `ai-dev-flow` mobile (`0px`).

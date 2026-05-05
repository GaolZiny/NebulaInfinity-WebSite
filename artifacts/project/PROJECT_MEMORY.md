# PROJECT_MEMORY — NebulaInfinity Website

## Now
- Prior content repositioning pipeline (`pipeline-035`) is complete, but its AI-only positioning is now superseded by the new V1 direction.
- Design Foundation for the V1 positioning reset has been produced and PM-verified; waiting for Z approval before visual/page design.
- Visual/page design batch for the V1 positioning rebuild has been produced and PM-verified; waiting for Z approval before implementation.
- Step 3 implementation for the V1 positioning rebuild is PM-verified on commit `92c76c6`; code review is now in progress before tester QA.
- Code review on commit `92c76c6` requested targeted fixes before QA: wrong legacy `ai-development` redirect target and missing server-verifiable contact anti-abuse control.
- Review-fix iteration on commit `75abe40` is PM-verified: legacy `ai-development` redirect now points to AI Workflow and contact anti-abuse now uses a server-side origin allowlist with aligned CORS.
- Code review rerun on commit `75abe40` is APPROVED; tester QA is now in progress.
- Final tester QA passed on QA commit `7a505a4`; the website is accepted as V1 usable-state from product/QA perspective.
- 2026-05-04: Z judged the current copy still insufficient for a client-facing company website; before customer showcase, run a focused positioning/copy rewrite pass, not only deployment cleanup.
- 2026-05-04: JA client-facing copy direction proposal is PM-verified on commit `5dfe3d9`, focused on Home + Services first and preserving current design/structure.
- 2026-05-04: Full JA Home + Services section-by-section copy sheet is PM-verified on commit `4e35bb5` and sent to Telegram topic 66 for Z review (messages 3646-3649); implementation remains blocked until Z approval.
- 2026-05-04: Z requested revisions to the full JA copy sheet: Home Process step labels/content, Home Proof title/subtitle/structure alignment, Home final CTA title/support/CTA, remove Services Representative proof and Combined services sections, and simplify Services final CTA.
- 2026-05-04: Revised JA Home + Services copy sheet is PM-verified on commit `510e59a` and sent to Telegram topic 66 for Z review (messages 3651-3653).
- 2026-05-04: Z approved the revised JA Home + Services copy and authorized page implementation.
- 2026-05-04: JA Home + Services copy implementation is PM-verified on commit `6f4b584`; Tester browser/screenshot QA passed 13/13 with evidence under `artifacts/screenshots/task-164-*` and report `notes/tester-ja-copy-task-164.md`.
- 2026-05-05: Z requested an IA/content consolidation proposal: remove standalone Services index need by folding service selection into Home, remove Home Proof if covered by service details, and fold About/company overview into Home with nav anchors.
- 2026-05-05: Home-led IA consolidation proposal is PM-verified on commit `4933ef6`.
- 2026-05-05: Z approved Services/About as Home anchors and clarified standalone Services index and About pages may be deleted (not compatibility pages). Z also requested Home `#about` not repeat Focus/Representative products and keep working principles in current style.
- 2026-05-05: Revised Home-led IA consolidation proposal is PM-verified on commit `e037a39`; waiting for Z implementation approval.
- 2026-05-05: Architecture and requirements docs are aligned to the approved Home-led IA consolidation and PM-verified on commit `1c0ccbc`; implementation pipeline is ready to dispatch.
- 2026-05-05: Visual/page design specs are aligned to the approved Home-led IA on commit `f5a1aea`; Home is canonical for `#services` and `#about`, while Services/About standalone specs are tombstoned for route cleanup.
- 2026-05-05: Home-led IA code implementation is PM static-verified on commit `3a6bfde`; browser/screenshot QA is next.
- 2026-05-05: Browser/screenshot QA for Home-led IA failed on commit `3a6bfde`: desktop same-page `#services` and mobile menu `#services/#about` anchor landings can hide/skip target headings; Coder iteration is required.
- 2026-05-05: Anchor-scroll Coder iteration is PM static-verified on commit `3c0d0f1`; Tester browser/screenshot rerun is next.
- 2026-05-05: Home-led IA consolidation is PM-accepted after Tester rerun PASS on QA commit `d586e6c`; final implementation includes `3a6bfde` plus anchor-scroll fix `3c0d0f1`. Services/About standalone routes are removed, Home `#services/#about` anchors are verified on desktop/mobile, and 22/22 smoke passed.
- 2026-05-05: Z requested rewriting the canonical Home copy document for the new Home-led structure using the original 2026-05-04 15:00-22:00 topic discussion; Writer task-172 prepared.
- 2026-05-05: Home-led IA canonical copy docs were rewritten and PM-verified on commit `75dba8a` for Z review; the update maps the 2026-05-04 15:00-22:00 discussion into the new Home structure without code implementation.
- 2026-05-05: Z approved task-172 Home JA copy direction for implementation with 3 adjustments: move Why assetization into AI Workflow detail, simplify About snapshot to Company/Location only, and add a Home Projects section with Japan Life Navi/Rigel/Carina cards between Services and Process. Architecture update task-173 prepared.
- 2026-05-05: Architecture/requirements for Z's latest Home adjustments are PM-verified on commit `6303a3a`; design/copy spec update task-174 is prepared next.
- 2026-05-05: Design/copy specs for Z's latest Home adjustments are PM-verified on commit `83e8d69`; code implementation task-175 is prepared.
- 2026-05-05: Code implementation for latest Home copy/IA adjustments is PM static-verified on commit `a61bbb3`; project slugs resolved as Japan Life Navi=`gaijin-life-navi`, Rigel=`rigel`, Carina=`carina`; browser/screenshot QA task-176 is next.
- 2026-05-05: Latest Home copy/IA adjustments are PM-accepted after Tester QA PASS on commit `28f996f`; final implementation commit `a61bbb3` adds Home Projects (Japan Life Navi/Rigel/Carina), removes Home assetization section, moves assetization model to AI Workflow detail, and verifies 19 pass / 0 fail.
- 2026-05-05: Created editable Home copy sheet for Z's full rewrite request at `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/home-copy-editing-sheet-2026-05-05.md`; after Z edits it, PM should dispatch implementation and QA against this sheet.
- 2026-05-05: Z confirmed full Home rewrite structural decisions: remove Hero CTA buttons, replace Web3.0 service line/detail route with `ai-driven-development`, delete old `web3-blockchain` service route/content, replace Home Projects `Carina` with `Astra`, add Astra project data/detail, and delete Carina page/content. Architecture alignment task-178 started; do not touch Z-edited copy sheet during planning.
- 2026-05-05: Architecture/requirements for the Home service model rewrite are PM-verified on commit `ddd5d0f`; active service routes are `ai-workflow`, `ai-application`, `ai-driven-development`; active Home Projects are Japan Life Navi/Rigel/Astra; Web3/Carina are retired from active contracts. Design spec alignment task-179 is next.
- 2026-05-05: Design spec alignment task-179 started for Home service model rewrite; scope includes Home, AI-Driven Development detail, Projects index/case proof mapping, and tombstoning/removing active Web3/Carina design references; Z-edited copy sheet remains untouched.
- 2026-05-05: Design specs for the Home service model rewrite are PM-verified on commit `29db21c`; Home, Projects, Services tombstone, Web3 tombstone, and new AI-Driven Development detail specs are aligned. Implementation task-180 is next and must use Z-edited copy sheet as source without modifying it.
- 2026-05-05: Implementation task-180 started for the Home service model rewrite; Coder must implement from Z-edited `home-copy-editing-sheet-2026-05-05.md`, align EN to JA, add `ai-driven-development`, add Astra, remove active Web3/Carina, and leave the copy sheet untouched.
- 2026-05-05: task-180 first Coder attempt failed before implementation because the Worker invoked missing `python`; PM verified there is no implementation commit/report and no implementation file changes. Iteration will be re-spawned with explicit `python3` guidance.
- 2026-05-05: task-180 iter1 blocked correctly on scope: active Contact inquiry options/validation still use retired Web3 taxonomy in `lib/contact.ts` / `lib/contact.test.ts` / `components/contact/ContactForm.tsx`, which were outside the original allowlist. PM verified and will re-spawn with a narrow expanded contact allowlist.
- 2026-05-05: task-180 iter2 produced uncommitted partial changes without the required implementation report/commit. PM archived the partial diff, restored tracked partials, and split implementation into smaller tasks: task-181 taxonomy/service/contact/project foundation, then task-182 Home implementation.
- 2026-05-05: task-181 taxonomy foundation is PM-verified on commit `7d56f7d`; active service/contact/project taxonomy now uses `ai-driven-development` and Astra, Carina data is removed, lint/test/build passed, and forbidden Home/style residue from earlier partial work was archived/restored. Home page implementation task-182 is next.
- 2026-05-05: task-182 prepared as the Home-only implementation slice after task-181 passed; scope is `app/[lang]/page.tsx` plus minimal `styles/marketing.module.css` if needed, using Z-edited copy sheet as read-only source.
- 2026-05-05: task-182 Home-only implementation is PM static-verified on commit `2f09295`; Home now uses Z-edited JA copy with aligned EN, Hero CTA row removed, active Home services are AI Workflow / AI Application / AI-Driven Development, Projects are Japan Life Navi / Rigel / Astra, and About is vertical Title → Company snapshot → Working principles. Lint/test/build passed; browser/screenshot QA task-183 is next.
- 2026-05-05: task-183 Tester browser/screenshot QA is dispatched for the Home service model rewrite, covering JA/EN desktop/mobile Home, AI-Driven Development detail routes, retired Web3/Carina absence, Contact taxonomy, anchors, and static export smoke.
- 2026-05-05: task-183 Tester browser/screenshot QA failed on QA commit `5fbd818`: 28 pass / 4 fail. Confirmed defects are Home Services intro retaining retired Web3/Web Contents taxonomy and `_redirects` mapping legacy blockchain URLs to retired `web3-blockchain`; `/404/` dev smoke remains a minor known issue. Hero trust-chip wording is a spec/copy-sheet conflict and should not be silently changed without Z/PM decision.
- 2026-05-05: task-184 Coder fix is dispatched for confirmed task-183 defects: Home Services intro taxonomy residue and `_redirects` retired Web3 route exposure. Hero chip wording is intentionally excluded pending Z/PM decision because it conflicts between QA/design expectation and Z-edited copy-sheet preservation.
- 2026-05-05: task-184 Coder fix is PM static-verified on commit `d9237e6`: Home Services intro no longer contains Web3/Web Contents taxonomy residue, `_redirects` no longer exposes retired `web3-blockchain`, lint/test/build passed, retired-route grep passed. Tester rerun is next; Hero chip wording remains pending Z decision.
- 2026-05-05: task-185 Tester rerun is dispatched after task-184, covering prior task-183 failures and Home/service/contact/anchor/static-export regressions. Hero chips are classified as pending Z decision/informational for this rerun.
- 2026-05-05: task-185 Tester rerun failed on QA commit `efaa7f1`: prior task-183 blockers are fixed, but retired direct project routes `/ja/projects/carina/` and `/en/projects/carina/` return 500 in approved preview instead of clean not-found behavior. Hero chips remain informational/pending Z decision.
- 2026-05-05: task-186 Coder fix is dispatched for the remaining task-185 blocker: retired Carina direct project routes return 500 in approved preview. Scope is limited to project detail not-found behavior; Carina must not be reintroduced.
- 2026-05-05: task-186 Coder fix is PM static-verified on commit `974650f`: retired Carina direct project routes return 404 in approved preview, active Japan Life Navi/Rigel/Astra project detail routes return 200, lint/test/build and export retired grep passed. PM observed a possible fresh-preview retired Web3 service route warm-up issue and will force Tester to check it in the next rerun.
- 2026-05-05: task-187 Tester final rerun is dispatched after task-186. It must check fresh-preview retired Web3 service and Carina project direct routes before active-route warm-up, plus full Home/service/project/contact/browser regressions.
- 2026-05-05: task-187 Tester final rerun failed on QA commit `c021074`: fresh-preview retired Web3 service routes `/ja/services/web3-blockchain/` and `/en/services/web3-blockchain/` return 500 before active-route warm-up, then 404 after warm-up. Carina retired routes are fixed (404), active routes/Home/browser/contact/export checks passed.
- 2026-05-05: task-188 Coder fix is dispatched for the remaining task-187 blocker: fresh-preview retired Web3 service direct routes return 500 before active-route warm-up. Scope is limited to service detail not-found behavior; Web3 must not be reintroduced as active content, route, redirect, sitemap, or export artifact.
- 2026-05-05: Z explicitly reinforced PM notification discipline after task-178 confusion: for future pipeline milestones, PM must send clear updates to the Telegram topic for dispatch/start, Worker completion + PM verification, failures/noisy status clarification, and final acceptance; do not rely on silent background state changes or raw subagent events.
- Production deployment is still an operational follow-up: Cloudflare Pages deployment and live SendGrid env configuration were not executed in this pipeline.
- Contact flow now uses a real SendGrid-backed delivery path with honest provider-missing failure behavior.
- Next.js was upgraded to 15.5.14 during implementation to clear high-severity audit issues while preserving static export.
- V1 usable-state planning is now locked around 3 service lines:
  1. AI Workflow Design & Development
  2. AI Application Design & Development
  3. Web3.0 / Blockchain Application Design & Development
- Blog / news is explicitly removed from V1 scope.
- Home page value proposition must center on converting people-dependent know-how into organization-owned assets.

## Status

### Project Docs
| Document | Status |
|----------|--------|
| BRIEF.md | ✅ updated for V1 positioning reset |
| REQUIREMENTS.md | ✅ updated for V1 usable-state scope |
| ARCHITECTURE.md | ✅ updated for V1 IA + service taxonomy |
| PROJECT_MEMORY.md | ✅ current |

### Epics
| Epic | Status | Features |
|------|--------|----------|
| website-redesign | accepted | content-overhaul (legacy), v1-design-foundation (approved), v1-positioning-rebuild (accepted: V1 usable-state) |

## Current Feature Focus
- **Epic**: `website-redesign`
- **Feature**: `v1-positioning-rebuild`
- **Goal**: Turn the site into a usable V1 business website with unified positioning, credible proof, and a real inquiry path.

## Next
1. Keep Home-led IA consolidation as accepted baseline.
2. Continue remaining production-readiness follow-ups: Cloudflare Pages deploy verification and production SendGrid/contact env confirmation.
3. Extend the approved positioning direction to any remaining Contact, service detail, and Projects copy refinements as separate follow-up tasks.
4. Verify live production URL after deployment, including 404 and contact behavior.

## Decisions
| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-07-17 | Epic `website-redesign` created | Site redesign managed under artifacts structure |
| 2026-03-16 | Content repositioning pipeline completed | Reduced service lines and updated project proofs at that time |
| 2026-04-09 | V1 positioning reset approved by Z | AI-only framing was insufficient for current business positioning |
| 2026-04-09 | V1 service lines locked to AI Workflow / AI Application / Web3.0 | Matches current business card positioning and company offering |
| 2026-04-09 | AI Workflow defined as broad organizational assetization capability | Workflow examples are examples only, not service boundaries |
| 2026-04-09 | Blog removed from V1 scope | Focus on usable-state business site first |
| 2026-04-09 | V1 Design Foundation produced and PM-verified | Required gate before page-level redesign and implementation |
| 2026-04-09 | V1 page visual batch produced and PM-verified | Required gate before implementation step |
| 2026-04-09 | V1 implementation verified on commit `92c76c6` | Static analysis, build/export, browser verification, and contact 503 fallback check passed |
| 2026-04-09 | Code review rerun approved on commit `75abe40` | Redirect and anti-abuse fixes accepted; pipeline advanced to tester QA |
| 2026-04-09 | Final tester QA PASS on commit `75abe40` | V1 usable-state accepted; deploy/env configuration remains operational follow-up |
| 2026-05-04 | JA copy rewrite must incorporate Z's two proof/value points | AI Workflow must be framed broadly: any company's repeatable business work can be solidified into AI workflows and become company-owned assets independent of individual employees. Nebula's strategist Stage 0 → PM milestone development workflow is only one concrete example from Nebula's own planning/development business, implemented on OpenClaw but not limited to OpenClaw; similar workflows can use Claude Code or other AI tools. Web3 should emphasize blockchain immutability for points/CRM/reviews/contracts and the added effect when combined with AI. |
| 2026-05-04 | Z selected Hero option A and normal Services intro for JA copy direction | Use `「AI」を、現場の「即戦力」へ。` as Home Hero direction; use the full/normal Services intro, not the shorter alternative. Remaining Home/Services sections still need a full section-by-section copy sheet before implementation. |

## Technical Details
- **Domain**: nebulainfinity.com
- **Stack**: Next.js 14 + TypeScript + CSS Modules + static export
- **Project path**: /root/.openclaw/projects/NebulaInfinity-WebSite
- **Deploy target**: Cloudflare Pages
- **Telegram topic**: 66

## Known Issues / Gaps
- Contact delivery code exists, but production SendGrid/contact environment and live Cloudflare Pages behavior still need explicit verification.
- Existing content/data still contains legacy AI-only and Web3 residual wording that must be reconciled under the new V1 structure.
- Cloudflare Pages deploy status still needs explicit verification.

## Backlog (Post-V1)
- Dedicated methodology page
- Blog / news system
- Expanded case-study depth
- SEO/content expansion after usable-state launch

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
- 2026-05-04: Z approved the revised JA Home + Services copy and authorized page implementation; Coder implementation is in progress as `task-163`.
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
1. Implement the approved JA Home + Services copy direction (`task-163`)
2. Verify build/lint/test and visual/page behavior
3. Confirm updated pages with Z through an internal preview instance
4. Extend approved direction to Contact, service detail pages, Projects, and About
5. Make contact form actually deliver inquiries in production
6. Verify build, responsive behavior, 404, and Cloudflare Pages deploy state

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
- Current copy is structurally complete but not yet strong enough for client-facing sales/presentation use per Z's 2026-05-04 feedback.
- Contact function currently behaves like a placeholder and must be connected to real delivery before V1 is considered usable.
- Existing content/data still contains legacy AI-only and Web3 residual wording that must be reconciled under the new V1 structure.
- Cloudflare Pages deploy status still needs explicit verification.

## Backlog (Post-V1)
- Dedicated methodology page
- Blog / news system
- Expanded case-study depth
- SEO/content expansion after usable-state launch

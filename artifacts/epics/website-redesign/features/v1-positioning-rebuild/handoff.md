# Feature Handoff — v1-positioning-rebuild

## Intent
Rebuild the website’s V1 business positioning so the site is actually usable for external prospects. The feature must unify messaging, restructure proof/case presentation, and close the inquiry-path gap.

## Approved Direction
### Brand framing
- AI社会実装のパートナー
- 「AI」を、現場の「即戦力」へ
- 「属人」のノウハウを、組織の「資産」に
- Web3.0テクノロジーを、ビジネスへ

### Service lines
1. AI Workflow Design & Development
2. AI Application Design & Development
3. Web3.0 / Blockchain Application Design & Development

## Core Product Truths
- AI Workflow is **not limited** to the current examples.
- Multi-agent development workflow and product-research workflow are proof examples only.
- The true value proposition is preserving people-dependent know-how as company-owned assets.
- AI Application proof should center on Japan Life Navi and Rigel.
- Web3 proof may include Carina, but the site must communicate broader Web3 application capability.

## Non-goals
- Blog / news in V1
- CMS
- Long-form editorial engine
- Rebranding beyond the approved positioning lines above

## Status
- PM doc lock: done
- Design / copy production: done
- Implementation: done
- QA / deploy confirmation: Home-led IA browser QA passed; deploy/env config pending

## Verification Targets
- Messaging is consistent across Home / Services / Projects / About / Contact
- All 3 service lines are visible and understandable
- Workflow value explains assetization of know-how
- Contact path is real, not placeholder
- No V1 scope leakage into blog/news work

## Gaps to Close
1. Legacy service taxonomy still exists in current content
2. Case taxonomy is not yet aligned to workflow / AI application / Web3
3. Contact delivery is not production-usable
4. Current docs and implementation were partially optimized for an earlier AI-only framing

## Next Steps
1. Use `spec.md` as the scope lock
2. Use `plan.md` as the execution sequence
3. Use `tasks.md` for worker dispatch breakdown

## Home-led IA Consolidation Acceptance — 2026-05-05
- Architecture/requirements alignment: `1c0ccbc`
- Visual specs alignment: `f5a1aea`
- Implementation: `3a6bfde`
- Anchor-scroll fix: `3c0d0f1`
- Final browser QA: `d586e6c` — 20 acceptance groups passed, 0 failed; smoke test 22/22 passed.
- Result: standalone `/[lang]/services` and `/[lang]/about` are removed/stop-exported; Home `#services` and `#about` are the primary IA surfaces; `/[lang]/services/{serviceId}` detail routes remain.

## Home Copy / IA Adjustment Acceptance — 2026-05-05
- Architecture update: `6303a3a`
- Design/copy spec update: `83e8d69`
- Implementation: `a61bbb3`
- Browser QA: `28f996f` — 13/13 done criteria PASS, 19 pass / 0 fail.
- Result: Home order is now `Hero → Services(#services) → Projects → Process → About(#about) → Contact CTA`; Home Projects includes Japan Life Navi (`gaijin-life-navi`), Rigel (`rigel`), and Carina (`carina`); Home About snapshot is Company + Location only; AI Workflow detail now owns the assetization model.

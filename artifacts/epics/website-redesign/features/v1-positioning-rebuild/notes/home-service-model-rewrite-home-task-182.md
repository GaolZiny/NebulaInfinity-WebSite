# Task 182 — Home Service Model Rewrite Implementation

## Summary
Implemented the Home-only UI slice for the Z-edited Home copy after the task-181 taxonomy foundation.

## Scope coverage
- Home Hero uses the edited JA source copy with aligned EN copy.
- Hero CTA button row is removed entirely; no primary/secondary Hero CTA copy or spacer remains in `app/[lang]/page.tsx`.
- Hero chips preserve Z's display wording (`AI Workflow`, `AI Application`, `Web Contents / Web3.0`) without linking to retired service routes.
- Services renders exactly three active service cards: `ai-workflow`, `ai-application`, and `ai-driven-development`.
- Removed the old choice-guide rendering because the edited JA sheet no longer contains it.
- Projects renders exactly Japan Life Navi, Rigel, and Astra with the task-181 slugs: `gaijin-life-navi`, `rigel`, `astra`.
- Process, About, and final CTA use the edited JA copy with aligned EN copy.
- About is now Title → Company snapshot → Working principles vertically, with no About body paragraph/column.

## Verification
- `npm run lint` — PASS.
- `npm test` — PASS (13 tests passed).
- `npm run build` — PASS (static export generated successfully).
- Home retired-reference grep for `web3-blockchain`, `Carina`, `/projects/carina`, `/services/web3-blockchain` — PASS, no matches.
- Home source grep for removed Hero CTA / choice guide / About body keys (`primaryCta`, `secondaryCta`, `heroActions`, `heroCta`, `choiceGuide`, `choiceTitle`, `aboutBody`) — PASS, no matches.
- Home source grep confirmed `ai-driven-development`, `slug: 'astra'`, `home-services-heading`, and `home-about-heading` remain present.

## Notes
- Z-owned copy sheet was read as source but not edited by this task and is not included in the commit.
- Pre-existing untracked `docs/nebulainfinity-design-consultation.md` was not touched and is not included in the commit.
- No dev server, browser QA, deploy, push, or service restart was executed.

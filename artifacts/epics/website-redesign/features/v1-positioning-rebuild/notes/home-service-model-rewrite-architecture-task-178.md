# Architecture Handoff — Home / Service Model Rewrite (Task 178)

## Scope
Align project architecture and requirements with the Z-approved Home/service model rewrite before implementation. This note summarizes the implementation-impacting deltas only; the source-of-truth details are in `artifacts/project/ARCHITECTURE.md` and `artifacts/project/REQUIREMENTS.md`.

## Required implementation impacts

1. **Home Hero**
   - Remove the old Hero CTA button area entirely.
   - Do not leave hidden buttons or empty CTA spacing.

2. **Service model / routes**
   - Active service lines are exactly:
     1. `ai-workflow`
     2. `ai-application`
     3. `ai-driven-development`
   - Add the active service detail route `/[lang]/services/ai-driven-development`.
   - Remove/stop emitting retired `/[lang]/services/web3-blockchain` from service data, static params, service cards, sitemap, metadata, translations, and language-switch links.
   - Preserve Cloudflare Pages static export compatibility; do not use Next.js middleware/server redirects for retired routes.

3. **Home Projects / case model**
   - Home Projects must render exactly Japan Life Navi, Rigel, and Astra.
   - Astra must have active project data/detail coverage in implementation.
   - Carina is removed from active Home/project proof requirements; remove its active page/content references and sitemap/static-param exposure.

4. **Home About**
   - Remove the About body paragraph/column.
   - Render Company snapshot and Working principles directly below the About title in a vertical layout.
   - Keep snapshot compact: `Company` and `Location` only; no `Base`, `Domain`, or `One-liner` rows.

5. **JA/EN alignment**
   - Japanese is the structural/content baseline.
   - English implementation must mirror the same section structure, service taxonomy, active routes, proof set, and removal decisions.

## Verification checklist for Coder/QA
- Home section order remains `Hero → Services(#services) → Projects → Process → About(#about) → Contact CTA`.
- Hero contains no CTA button group.
- Home Services exposes only `ai-workflow`, `ai-application`, `ai-driven-development`.
- Home Projects exposes only Japan Life Navi, Rigel, Astra.
- Sitemap/static params do not advertise `/services`, `/about`, `/services/web3-blockchain`, or removed Carina project routes.
- Service breadcrumbs/back links target `/[lang]/#services`.
- `#services` and `#about` preserve sticky-header-safe scroll offset and accessible headings/landmarks.

## Notes
- No code implementation was performed in this architecture task.
- `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/home-copy-editing-sheet-2026-05-05.md` is Z-owned and must remain untouched by this task.

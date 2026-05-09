# Coder note — task-204 AI Workflow sub-detail implementation

## Summary
- Added static-export-compatible localized route `/ja/services/ai-workflow/ai-dev-flow` and `/en/services/ai-workflow/ai-dev-flow`.
- Implemented the AI Workflow methodology page from `design/visual/ai-dev-flow.md` with semantic HTML/CSS workflow map, role cards, quality gates, deliverables, use cases, breadcrumbs, metadata, and CTAs.
- Updated the parent AI Workflow representative example card to link to the new route with required JA/EN CTA labels and proof strip.
- Added localized sub-detail URLs to sitemap generation.
- Aligned primary proof metadata so Rigel is AI-Driven Development proof and Astra is AI Workflow / PMO proof.

## Static/link notes
- Language switch preserves `/services/ai-workflow/ai-dev-flow` across JA/EN.
- Breadcrumb targets: `/${lang}/`, `/${lang}/#services`, `/${lang}/services/ai-workflow`, current page.
- Primary CTA target: `/${lang}/contact?inquiry=AI%20Workflow%20Design%20%26%20Development`.
- Secondary CTA target: `/${lang}/services/ai-workflow`.

## Verification performed before commit
- `npm run lint` — PASS.
- `npm run build` — PASS; build output lists both localized `ai-dev-flow` pages.
- Static checks — PASS: generated `out/ja/services/ai-workflow/ai-dev-flow/index.html`, `out/en/services/ai-workflow/ai-dev-flow/index.html`, sitemap includes both localized sub-detail URLs, and sitemap excludes `projects/ai-dev-flow`.
- Parent card checks — PASS: JA/EN parent AI Workflow pages include the new sub-detail href and required CTA labels.
- Language switch static href checks — PASS: JA page links to EN sub-detail path; EN page links to JA sub-detail path.

## Protected/unrelated files
- Did not edit/stage protected Z-owned copy sheets.
- Did not edit/stage unrelated `docs/nebulainfinity-design-consultation.md`.

# Task 181 — Taxonomy / Service / Contact / Project Foundation

## Summary
Implemented the active taxonomy foundation for the Home service-model rewrite slice, excluding Home page implementation.

## Scope coverage
- Active service IDs in `data/services.ts`: `ai-workflow`, `ai-application`, `ai-driven-development`.
- Service detail static params and active page content now come from the active service data; retired `web3-blockchain` is not emitted.
- Service detail breadcrumbs and back-to-services CTAs target `/{lang}/#services`.
- AI-Driven Development detail content is present and aligned with the design spec, including Astra proof.
- Active project slugs include `gaijin-life-navi`, `rigel`, `astra`, and supporting non-featured `agent-skills-jp`; active/featured proof slugs are `gaijin-life-navi`, `rigel`, `astra`.
- `data/projects/carina.json` is removed from active data.
- Projects index/explorer taxonomy is Workflow / AI Application / AI-Driven Development.
- Contact inquiry types are AI Workflow / AI Application / AI-Driven Development / Still defining, with Web3 retired.
- Footer, sitemap, and translation snippets in allowed files no longer advertise retired Web3/Carina active proof/service references.

## Verification
- `npm run lint` — PASS.
- `npm test` — PASS.
- `npm run build` — PASS.
- Active retired-reference grep across allowed app/components/data/lib paths for `services/web3-blockchain`, `projects/carina`, `web3-blockchain`, `Web3.0 / Blockchain`, `Carina` — PASS, no matches.
- Data assertion script confirmed service IDs, featured project slugs, contact types, and `data/projects/carina.json` absence.

## Notes
- Home page implementation was intentionally not included in this slice.
- The Z copy sheet and consultation doc were not edited by this task.
- Pre-existing dirty files outside this task's commit scope were left uncommitted.

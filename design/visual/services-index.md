# Visual Spec — Services Index Tombstone

**Status:** Removed / non-canonical / stop-exported
**Old route:** `/[lang]/services`
**Implementation target:** None. Do not build, preserve, or replace this standalone index page.

This file is a tombstone for route cleanup only. It is not an active page design.

## 1. Routing decision

The standalone Services index is not part of the approved V1 Home-led IA.

Required implementation direction:
- Delete or stop exporting only the standalone index route, e.g. `app/[lang]/services/page.tsx`.
- Preserve the `services` namespace because service detail pages remain canonical:
  - `/[lang]/services/ai-workflow`
  - `/[lang]/services/ai-application`
  - `/[lang]/services/ai-driven-development`
- Retired `/[lang]/services/web3-blockchain` is not an active V1 service detail route and must not be emitted by service data, static params, sitemap, metadata, language switch data, breadcrumbs, Home cards, footer links, or CTA data.
- Do not create a thin compatibility page at `/[lang]/services`.
- Do not use Next.js middleware, server redirects, or SSR-only redirect behavior. The project is a Cloudflare Pages static export.
- If future analytics prove meaningful legacy traffic, evaluate hosting-level redirects in a separate deployment/config task; that is outside this design spec.

## 2. Where service selection moved

Service selection now belongs to Home `#services` at `/[lang]/#services`.

Home `#services` must include exactly these 3 official service lines:
1. `AI Workflow Design & Development`
2. `AI Application Design & Development`
3. `AI-Driven Development`

Home `#services` content boundary:
- Compact choice guidance only.
- 3 equal service cards only.
- Each card may include fit bullets, one compact proof line, and one detail CTA.
- Detail CTAs link directly to:
  - `/[lang]/services/ai-workflow`
  - `/[lang]/services/ai-application`
  - `/[lang]/services/ai-driven-development`
- Do not recreate the removed index's full hero, full fit matrix, proof mapping section, overlap section, or CTA band on a standalone route.
- Do not include an active Web3 / Blockchain service card.

## 3. Navigation and data cleanup guidance

- Header and mobile nav `サービス` target `/[lang]/#services`.
- Service detail breadcrumbs and back-to-services CTAs target `/[lang]/#services`, not `/[lang]/services`.
- Footer links, CTA data, sitemap, metadata, and language switch data must not emit `/[lang]/services` as a standalone index URL.
- The deleted index route should have no page title, metadata entry, sitemap entry, nav entry, or language-switch target.
- Active service detail static params should expose only `ai-workflow`, `ai-application`, and `ai-driven-development`.

## 4. Home anchor accessibility requirements

Because Services is now an anchor, Home `#services` must be implemented with:
- A visible accessible heading.
- A section landmark, e.g. `<section id="services" aria-labelledby="home-services-heading">`.
- Sticky-header-safe offset: `scroll-margin-top: calc(var(--header-height, 80px) + 24px)` or equivalent.
- Keyboard and screen-reader safe focus behavior if anchor navigation programmatically focuses the section.

## 5. Retired content tombstone

- `web3-blockchain` service id, route, copy, and proof mapping are retired from the active V1 model.
- Carina is retired from active Home/project proof and must not be substituted for Astra.
- If old implementation data still contains these entries, Coder should remove them from active service/project route emission rather than hiding them visually.

## 6. Non-goals

- No standalone `/[lang]/services` page design.
- No compatibility page design.
- No route namespace deletion for active service detail pages.
- No Web3 / Blockchain replacement page.
- No source code implementation in this design task.

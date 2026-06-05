# Visual Spec — About

**Status:** Removed / non-canonical / stop-exported
**Old route:** `/[lang]/about`
**Implementation target:** None. Do not build, preserve, or replace this standalone About page.

Implementation target: None; this file is a tombstone for route cleanup only.

## 1. Routing decision

The standalone About page is not part of the approved V1 Home-led IA.

Required implementation direction:
- Delete or stop exporting `/[lang]/about`.
- Move only the compact company overview and working principles into Home `#about` at `/[lang]/#about`.
- Do not create a thin compatibility page at `/[lang]/about`.
- Do not use Next.js middleware, server redirects, or SSR-only redirect behavior. The project is a Cloudflare Pages static export.
- If future analytics prove meaningful legacy traffic, evaluate hosting-level redirects in a separate deployment/config task; that is outside this design spec.

## 2. Where About content moved

About content now belongs to Home `#about`.

Home `#about` content boundary:
- Company identity only:
  - `Company` — `Nebula Infinity（ネビュラインフィニティ）` / `Nebula Infinity`
  - `Base` — `Japan`
  - `Domain` — `nebulainfinity.com`
  - One concise company one-liner
- Working principles only:
  - `Business Logic First`
  - `Asset-minded`
  - `Implementation-minded`
  - `Calm, business-ready Web3`

Do not move the old standalone About structure wholesale into Home. Home `#about` must not contain service-line cards, Focus rows, service-domain summaries, representative-product rows, case cards, project teasers, or a separate About CTA band.

## 3. Navigation and data cleanup guidance

- Header and mobile nav `会社概要` target `/[lang]/#about`.
- Footer links, CTA data, sitemap, metadata, and language switch data must not emit `/[lang]/about` as a standalone page URL.
- Home final CTA remains `/[lang]/contact`; do not add an About-specific CTA band to replace the deleted page.
- Projects remains the independent proof/case-study surface.

## 4. Home anchor accessibility requirements

Because About is now an anchor, Home `#about` must be implemented with:
- A visible accessible heading.
- A section landmark, e.g. `<section id="about" aria-labelledby="home-about-heading">`.
- Sticky-header-safe offset: `scroll-margin-top: calc(var(--header-height, 80px) + 24px)` or equivalent.
- Keyboard and screen-reader safe focus behavior if anchor navigation programmatically focuses the section.

## 5. Non-goals

- No standalone `/[lang]/about` page design.
- No compatibility page design.
- No duplicated Services summary inside About.
- No representative products list inside About.
- No source code implementation in this design task.

# ARCHITECTURE — NebulaInfinity Website V1

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 14.2.18 |
| Language | TypeScript | 5.6.3 |
| UI | React | 18.3.1 |
| Styling | CSS Modules + CSS Variables | — |
| Fonts | Orbitron / Exo 2 | Google Fonts |
| Deploy | Cloudflare Pages (static export) | — |
| Contact handling | Cloudflare Functions + external mail delivery | Required for V1 usable state |

## V1 Information Architecture

V1 adopts a **Home-led IA**. Services selection and company overview are Home anchors, while deeper service reading, Projects, Contact, and 404 remain independent routes.

```text
/[lang]/
  home
    #services
    #about
  services/
    /ai-workflow
    /ai-application
    /web3-blockchain
  projects
    /[slug]
  contact
  not-found
```

### Primary Page / Anchor Set

| Surface | Route / Anchor | V1 role |
|---------|----------------|---------|
| Home | `/[lang]/` | Main narrative: `Hero → Why assetization → Services(#services) → Process → About(#about) → Contact CTA`. |
| Services section | `/[lang]/#services` | Primary service-selection surface for exactly 3 service lines; replaces the standalone Services index. |
| About section | `/[lang]/#about` | Compact company overview and working principles; replaces the standalone About page. |
| AI Workflow detail | `/[lang]/services/ai-workflow` | Deep-dive service detail page. |
| AI Application detail | `/[lang]/services/ai-application` | Deep-dive service detail page. |
| Web3.0 / Blockchain detail | `/[lang]/services/web3-blockchain` | Deep-dive service detail page. |
| Projects / Cases | `/[lang]/projects` and `/[lang]/projects/[slug]` | Independent proof/case-study surface. |
| Contact | `/[lang]/contact` | Inquiry surface. |
| 404 | generated not-found route | Missing route handling. |

### Removed Standalone Routes

- `/[lang]/services` standalone index is **not** part of the V1 IA. Implementation should delete or stop exporting only the index route, e.g. `app/[lang]/services/page.tsx`.
- `/[lang]/about` standalone page is **not** part of the V1 IA. About content moves into Home `#about`.
- The `services` route namespace must remain because service detail pages stay at `/[lang]/services/{serviceId}`.
- Do not implement thin compatibility pages or Next.js server/middleware redirects for these deleted routes. Static export to Cloudflare Pages is the constraint; if future analytics reveal legacy traffic, evaluate hosting-level redirects in a separate deployment/config task.

## Global Navigation

| Nav item | JA label | Target |
|----------|----------|--------|
| Home | `ホーム` | `/[lang]/` |
| Services | `サービス` | `/[lang]/#services` |
| Projects | `プロジェクト` | `/[lang]/projects` |
| About | `会社概要` | `/[lang]/#about` |
| Contact | `お問い合わせ` | `/[lang]/contact` |

Navigation and link rules:
- Logo and Home return to `/[lang]/`.
- Header and mobile nav `サービス` links target `/[lang]/#services`.
- Header and mobile nav `会社概要` links target `/[lang]/#about`.
- Home hero secondary CTA targets `/[lang]/#services`.
- Home service cards link directly to the matching detail route under `/[lang]/services/{serviceId}`.
- Service detail breadcrumbs / back-to-services CTAs target `/[lang]/#services`, not `/[lang]/services`.
- Header, footer, CTA data, sitemap, language switch data, and metadata must not continue to emit `/[lang]/services` index or `/[lang]/about` standalone links.
- `#services` and `#about` need sticky-header-safe scroll offset and accessible headings / landmarks.

## Service Model

The site must expose exactly 3 top-level service lines:
1. `ai-workflow` — AI Workflow Design & Development
2. `ai-application` — AI Application Design & Development
3. `web3-blockchain` — Web3.0 / Blockchain Application Design & Development

Home `#services` is the top-level selection surface for these lines. Each card may include fit guidance, a proof line, and a detail CTA, but the full explanation remains on the corresponding service detail page.

## Case Model

Projects / cases should support 3 proof categories:
- **workflow** — representative workflow cases (e.g. multi-agent development workflow, product research workflow)
- **ai-application** — shipped or substantial AI-native applications (e.g. Japan Life Navi, Rigel)
- **web3** — blockchain product capability proof (e.g. Carina)

V1 may continue using `data/projects/` as the content source, as long as metadata is sufficient to classify and render these proof categories clearly.

Suggested minimal metadata for each case:
- `id`
- `slug`
- `name`
- `summary`
- `serviceLine` (`ai-workflow` | `ai-application` | `web3-blockchain`)
- `caseType` (`workflow` | `product` | `web3`)
- `proofPoints` (metrics / complexity / capabilities)
- `status`

Home no longer carries a standalone Proof grid. Proof is surfaced through service-card proof lines, service detail pages, and Projects.

## Module Boundaries

```text
app/
  [lang]/
    page.tsx                 # Home, including #services and #about anchors
    about/                   # Delete / stop exporting standalone About page
    services/                # Route namespace preserved for service details
      page.tsx               # Delete / stop exporting Services index only
      [serviceId]/           # Preserve 3 service detail pages
    projects/
      page.tsx               # Projects / cases index
      [slug]/                # Case detail pages
    contact/
    not-found.tsx

components/
  layout/                    # Header/mobile nav/footer link targets must use Home anchors
  ui/
  seo/                       # Sitemap/metadata must not emit removed standalone routes
  sections/                  # Home/services/case-specific sections as needed

data/
  translations/              # Nav, CTA, sitemap/language-switch copy/link cleanup
  projects/                  # V1 unified case data source
  services.ts                # Exactly 3 service-line metadata entries

functions/
  api/contact.ts             # Must deliver real inquiries in V1
```

Route cleanup is intentionally precise: remove or stop exporting only `app/[lang]/services/page.tsx` and the standalone `app/[lang]/about` page. Do not remove `app/[lang]/services/[serviceId]` or alter the service detail URL namespace.

## Data / Content Rules

- Home, service detail pages, projects, and contact copy must align with the same 3-line service taxonomy.
- Home section order must be `Hero → Why assetization → Services(#services) → Process → About(#about) → Contact CTA`.
- Home must not retain the standalone `Proof` / `Nebula Infinityの実装力` section; proof belongs to service detail pages and Projects, with only compact proof lines allowed in service cards.
- Home `#services` must include exactly 3 service cards and a compact choice guide; do not expand it into a full Services page clone.
- Home `#about` must stay compact: company identity and working principles only. Do not repeat full Focus / service-domain summaries or Representative products there.
- Workflow cases are examples of a broader capability; copy must never imply the service is limited to only those cases.
- Web3 pages must emphasize business application, not speculative/crypto-first messaging.
- V1 explicitly excludes blog/news routes and content architecture.

## Contact Flow Architecture

Current contact UI already posts to `/api/contact`. V1 usable state requires:
1. client validation
2. server-side validation
3. actual delivery to business inbox / approved destination
4. explicit success / failure handling
5. basic abuse protection

## Key Constraints for Implementation

- Keep static export compatibility for Cloudflare Pages.
- Avoid introducing SSR-only assumptions.
- Do not require Next.js middleware redirects or server redirects for removed `/[lang]/services` index and `/[lang]/about` routes.
- Keep route changes minimal and consistent with existing app structure.
- Favor content/data restructuring over unnecessary framework churn.
- Preserve current deployment path to Cloudflare Pages.

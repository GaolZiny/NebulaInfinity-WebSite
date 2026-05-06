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

V1 adopts a **Home-led IA**. Services selection, project selection, and company overview are Home anchors, while deeper service reading, project detail pages, Contact, and 404 remain independent routes. The standalone Projects index is removed from the V1 public IA; Home `#projects` is the public project-selection surface.

```text
/[lang]/
  home
    #services
    #projects
    #about
  services/
    /ai-workflow
    /ai-application
    /ai-driven-development
  projects/
    /gaijin-life-navi
    /rigel
    /astra
  contact
  not-found
```

### Primary Page / Anchor Set

| Surface | Route / Anchor | V1 role |
|---------|----------------|---------|
| Home | `/[lang]/` | Main narrative: `Hero → Services(#services) → Projects(#projects) → Process → About(#about) → Contact CTA`. Hero has no CTA button area. `Why assetization` is not a Home section. |
| Services section | `/[lang]/#services` | Primary service-selection surface for exactly 3 service lines; replaces the standalone Services index. |
| Home Projects section | `/[lang]/#projects` | Primary project-selection surface; explicit anchor/landmark between Services and Process. Contains exactly Japan Life Navi, Rigel, and Astra; each card links directly to its project detail route. Replaces the standalone Projects index. |
| About section | `/[lang]/#about` | Compact company overview and working principles; replaces the standalone About page. The body column is removed, and snapshot/principles render directly under the title in a vertical layout. |
| AI Workflow detail | `/[lang]/services/ai-workflow` | Deep-dive service detail page; owns the assetization explanation formerly planned for Home. |
| AI Application detail | `/[lang]/services/ai-application` | Deep-dive service detail page. |
| AI-Driven Development detail | `/[lang]/services/ai-driven-development` | Deep-dive service detail page for Nebula Infinity's AI-driven / agentic development methodology and delivery capability. |
| Project detail pages | `/[lang]/projects/{slug}` | Detail route namespace remains active only for Home-linked active projects: Japan Life Navi (`gaijin-life-navi`), Rigel (`rigel`), and Astra (`astra`). No standalone `/[lang]/projects` index is active. |
| Contact | `/[lang]/contact` | Inquiry surface. |
| 404 | generated not-found route | Missing route handling. |

### Removed / Retired Routes

- `/[lang]/services` standalone index is **not** part of the V1 IA. Implementation should delete or stop exporting only the index route, e.g. `app/[lang]/services/page.tsx`.
- `/[lang]/projects` standalone index is **not** part of the V1 IA. Home `#projects` replaces it as the public project-selection surface; implementation should delete or stop exporting only the index route, e.g. `app/[lang]/projects/page.tsx`.
- `/[lang]/about` standalone page is **not** part of the V1 IA. About content moves into Home `#about`.
- `/[lang]/services/web3-blockchain` is retired from the active V1 service model and must not be emitted by service data, Home cards, sitemap, metadata, language-switch data, or service-detail static params.
- Carina is retired from active Home/project proof requirements. Implementation should delete/remove Carina page/content references from active project data and sitemap generation; Astra replaces it in the Home proof trio.
- The `services` route namespace must remain because active service detail pages stay at `/[lang]/services/{serviceId}`.
- Do not implement thin compatibility pages or Next.js server/middleware redirects for deleted routes. Static export to Cloudflare Pages is the constraint; if future analytics reveal legacy traffic, evaluate hosting-level redirects in a separate deployment/config task.

## Global Navigation

| Nav item | JA label | Target |
|----------|----------|--------|
| Home | `ホーム` | `/[lang]/` |
| Services | `サービス` | `/[lang]/#services` |
| Projects | `プロジェクト` | `/[lang]/#projects` |
| About | `会社概要` | `/[lang]/#about` |
| Contact | `お問い合わせ` | `/[lang]/contact` |

Navigation and link rules:
- Logo and Home return to `/[lang]/`.
- Header and mobile nav `サービス` links target `/[lang]/#services`.
- Header and mobile nav `プロジェクト` links target `/[lang]/#projects`.
- Header and mobile nav `会社概要` links target `/[lang]/#about`.
- Home Hero CTA button area is removed; do not render the old Hero primary/secondary button group.
- Home service cards link directly to the matching detail route under `/[lang]/services/{serviceId}`.
- Home Projects cards link to the matching detail routes: `/[lang]/projects/gaijin-life-navi`, `/[lang]/projects/rigel`, and `/[lang]/projects/astra`.
- Service detail breadcrumbs / back-to-services CTAs target `/[lang]/#services`, not `/[lang]/services`.
- Header, footer, CTA data, sitemap, language switch data, and metadata must not continue to emit `/[lang]/services`, `/[lang]/projects` index, `/[lang]/about`, retired `/[lang]/services/web3-blockchain`, or retired Carina project links. They may emit the active project detail routes if the current sitemap/metadata strategy supports detail URLs.
- `#services`, `#projects`, and `#about` need sticky-header-safe scroll offset and accessible headings / landmarks.

## Service Model

The site must expose exactly 3 top-level service lines:
1. `ai-workflow` — AI Workflow Design & Development
2. `ai-application` — AI Application Design & Development
3. `ai-driven-development` — AI-Driven Development

Home `#services` is the top-level selection surface for these lines. Each card may include fit guidance, a proof line, and a detail CTA, but the full explanation remains on the corresponding service detail page. AI Workflow must remain broad company workflow / know-how assetization, not only OpenClaw or development workflow automation. AI-Driven Development is the replacement third line and should explain Nebula Infinity's agent-assisted, AI-native development methodology and implementation velocity; it must not reuse the retired Web3 / blockchain service positioning.

## Case Model

Project details and Home project cards should support 3 proof categories. The active public project-selection surface is Home `#projects`; no standalone Projects / Cases index is part of V1. The project detail route namespace remains active only for Home-linked active details:
- Japan Life Navi (`gaijin-life-navi`)
- Rigel (`rigel`)
- Astra (`astra`)

Proof categories:
- **workflow** — representative workflow / know-how assetization cases (e.g. multi-agent development workflow, product research workflow)
- **ai-application** — shipped or substantial AI-native applications (e.g. Japan Life Navi, Rigel)
- **ai-driven-development** — proof of AI-driven / agentic development methodology and delivery systems (e.g. Astra)

V1 may continue using `data/projects/` as the content source, as long as metadata is sufficient to classify and render these proof categories clearly.

Suggested minimal metadata for each active case:
- `id`
- `slug`
- `name`
- `summary`
- `serviceLine` (`ai-workflow` | `ai-application` | `ai-driven-development`)
- `caseType` (`workflow` | `product` | `ai-driven-development`)
- `proofPoints` (metrics / complexity / capabilities)
- `status`

Home no longer carries the old standalone Proof grid (`Nebula Infinityの実装力`). Z-approved Home now carries a concise Projects card section (`#projects`) between Services and Process, limited to Japan Life Navi (`gaijin-life-navi`), Rigel (`rigel`), and Astra (`astra`). This section replaces the independent Projects index as the public project-selection surface and links directly to project detail pages; it is not a full proof grid.

## Module Boundaries

```text
app/
  [lang]/
    page.tsx                 # Home, including #services, #projects, and #about anchors
    about/                   # Delete / stop exporting standalone About page
    services/                # Route namespace preserved for active service details
      page.tsx               # Delete / stop exporting Services index only
      [serviceId]/           # Preserve active details: ai-workflow, ai-application, ai-driven-development
    projects/
      page.tsx               # Delete / stop exporting standalone Projects / cases index
      [slug]/                # Preserve active details only: gaijin-life-navi, rigel, astra; remove Carina from active static params/content
    contact/
    not-found.tsx

components/
  layout/                    # Header/mobile nav/footer link targets must use Home anchors
  ui/
  seo/                       # Sitemap/metadata must not emit removed standalone or retired detail routes
  sections/                  # Home/services/case-specific sections as needed

data/
  translations/              # Nav, CTA, sitemap/language-switch copy/link cleanup; EN mirrors JA structure/content
  projects/                  # V1 unified case data source; active Home proof trio is Japan Life Navi / Rigel / Astra
  services.ts                # Exactly 3 service-line metadata entries; no web3-blockchain active entry

functions/
  api/contact.ts             # Must deliver real inquiries in V1
```

Route cleanup is intentionally precise: remove or stop exporting only `app/[lang]/services/page.tsx`, `app/[lang]/projects/page.tsx`, the standalone `app/[lang]/about` page, and the retired `web3-blockchain` service detail/static-param/content path. Do not remove `app/[lang]/services/[serviceId]`, `app/[lang]/projects/[slug]`, or alter the active service/project detail URL namespaces.

## Data / Content Rules

- Home, service detail pages, projects, and contact copy must align with the same 3-line service taxonomy: AI Workflow, AI Application, AI-Driven Development.
- Home section order must be `Hero → Services(#services) → Projects(#projects) → Process → About(#about) → Contact CTA`.
- Home Hero CTA button area is removed; Hero should not render old CTA buttons or reserve empty CTA space.
- `Why assetization` must not remain a Home section; the AI Workflow detail page must carry the assetization explanation (`属人のノウハウを、組織の資産に。` plus Current state → System design → Business outcome logic).
- Home must not retain the old standalone `Proof` / `Nebula Infinityの実装力` grid. The required Home Projects section is a concise project-card section requested by Z, not the former Proof grid.
- Home `#services` must include exactly 3 service cards and a compact choice guide; do not expand it into a full Services page clone.
- Home Projects section must expose an explicit `#projects` anchor/landmark, include exactly Japan Life Navi (`gaijin-life-navi`), Rigel (`rigel`), and Astra (`astra`) cards, and link each to its corresponding `/[lang]/projects/{slug}` detail page.
- Sitemap, metadata, header/footer/CTA link data, and language switching must not emit the standalone `/[lang]/projects` index; they may emit active project detail routes if the current sitemap strategy supports detail URLs.
- Home `#about` must remove the body paragraph/column. Company snapshot and Working principles render directly below the About title in a vertical layout, not side-by-side with a body column.
- Home `#about` must stay compact: Company and Location snapshot rows plus working principles only. Replace the previous `Base` label with `Location`; remove `Domain` and `One-liner` rows from the Home snapshot. Do not repeat full Focus / service-domain summaries or representative product lists there beyond the dedicated Home Projects section.
- Workflow cases are examples of a broader capability; copy must never imply the service is limited to only those cases.
- AI-Driven Development pages must emphasize agentic development method, workflow automation, quality gates, and delivery acceleration; they must not reuse retired Web3 / blockchain messaging.
- Japanese is the structural/content baseline for final implementation; English must mirror the same section structure, proof set, route model, and service taxonomy.
- V1 explicitly excludes blog/news routes and content architecture.

## Semantic Cleanup / Legacy Classification

| Item | Classification | Design consequence | Verification method |
|------|----------------|--------------------|---------------------|
| Standalone Projects index (`/[lang]/projects`) | `truly removed` | Remove/stop exporting the index page and remove it from global nav, footer/header/CTA link data, sitemap, metadata, and language-switch links. Home `#projects` replaces project selection; detail routes remain active for `gaijin-life-navi`, `rigel`, and `astra`. No UI-hidden compatibility bridge. | Build/static export does not emit `/[lang]/projects` index; global nav Projects targets `/[lang]/#projects`; active detail routes still render. |
| `web3-blockchain` service id, route, copy, and proof mapping | `truly removed` | Remove from active service data, Home service cards, service detail static params/content, sitemap, metadata, and language-switch links. No UI-hidden compatibility bridge. | Build/static params expose only `ai-workflow`, `ai-application`, `ai-driven-development`; grep active emitted routes for `services/web3-blockchain`. |
| Carina Home/project proof | `truly removed` | Remove from Home Projects, active project proof requirements, sitemap/static project route generation, and service proof CTAs. Astra replaces Carina as the third Home project proof. | Home Projects renders exactly Japan Life Navi / Rigel / Astra; sitemap/static params do not advertise `projects/carina`. |
| Home Hero CTA button area | `truly removed` | Remove old Hero primary/secondary CTA buttons and empty layout space. Do not replace with hidden buttons. | Visual/DOM QA confirms no Hero CTA button group. |
| Home About body column | `truly removed` | Remove the body paragraph/column; render snapshot and principles directly under title in a vertical layout. | DOM/visual QA confirms no side-by-side body column and no retained hidden body text. |

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
- Do not require Next.js middleware redirects or server redirects for removed `/[lang]/services` index, `/[lang]/projects` index, `/[lang]/about`, retired `/[lang]/services/web3-blockchain`, or retired Carina project routes.
- Keep route changes minimal and consistent with existing app structure.
- Favor content/data restructuring over unnecessary framework churn.
- Preserve current deployment path to Cloudflare Pages.

# REQUIREMENTS — NebulaInfinity Website V1

## Must-have

### Positioning & Messaging
- [ ] Website positioning must align with:
  - AI社会実装のパートナー
  - 「AI」を、現場の「即戦力」へ
  - 「属人」のノウハウを、組織の「資産」に
  - AI-Driven Development positioning approved by Z; do not reuse the retired Web3.0 / Blockchain service slogan
- [ ] The site must clearly present exactly 3 service lines:
  1. AI Workflow Design & Development
  2. AI Application Design & Development
  3. AI-Driven Development
- [ ] AI Workflow messaging must explain that workflows can preserve company know-how as organizational assets
- [ ] Workflow examples must be shown as examples only, not as the limit of the offering
- [ ] AI-Driven Development copy must emphasize agentic development method, workflow automation, quality gates, and delivery acceleration; it must not become Web3 / blockchain messaging
- [ ] Japanese is the implementation baseline; English final copy must mirror the same structure, active routes, proof set, and service taxonomy

### Functional
- [ ] All primary pages and Home anchors render correctly without runtime errors
- [ ] Japanese / English routing works on all primary pages and Home anchor targets
- [ ] Global nav order is Home / Services / Projects / About / Contact, with JA labels `ホーム` / `サービス` / `プロジェクト` / `会社概要` / `お問い合わせ`
- [ ] Header and mobile nav `サービス` target `/[lang]/#services`
- [ ] Header and mobile nav `プロジェクト` target `/[lang]/#projects`, not `/[lang]/projects`
- [ ] Header and mobile nav `会社概要` target `/[lang]/#about`
- [ ] Home Hero CTA button area is removed; Hero does not render old primary/secondary CTA buttons or reserve empty CTA space
- [ ] Home service cards link directly to:
  - `/[lang]/services/ai-workflow`
  - `/[lang]/services/ai-application`
  - `/[lang]/services/ai-driven-development`
- [ ] Home Projects section exposes an explicit `#projects` anchor/landmark between Services and Process
- [ ] Home Projects cards link directly to exactly these corresponding project detail routes:
  - Japan Life Navi → `/[lang]/projects/gaijin-life-navi`
  - Rigel → `/[lang]/projects/rigel`
  - Astra → `/[lang]/projects/astra`
- [ ] Service detail breadcrumbs / back-to-services CTAs target `/[lang]/#services`
- [ ] Header, footer, CTA data, breadcrumb data, sitemap, language switch data, and metadata no longer point to `/[lang]/services` index, `/[lang]/projects` index, `/[lang]/about` standalone route, retired `/[lang]/services/web3-blockchain`, or retired Carina project routes
- [ ] `/[lang]/services` standalone index is deleted or no longer exported; implementation removes only the index page and preserves the `services` detail route namespace
- [ ] `/[lang]/projects` standalone index is deleted or no longer exported; implementation removes only the index page and preserves the `projects` detail route namespace
- [ ] `/[lang]/about` standalone page is deleted or no longer exported
- [ ] `/[lang]/services/ai-workflow`, `/[lang]/services/ai-application`, and `/[lang]/services/ai-driven-development` continue to exist and remain accessible
- [ ] `/[lang]/projects/gaijin-life-navi`, `/[lang]/projects/rigel`, and `/[lang]/projects/astra` continue to exist and remain accessible from Home Projects cards
- [ ] `/[lang]/services/web3-blockchain` is not an active V1 route and is not emitted by static params, sitemap, metadata, or language switch links
- [ ] Carina is not an active Home/project proof route; active project data/static params/sitemap must not advertise `projects/carina`
- [ ] Contact form submits to a **real working delivery path** (not console-only)
- [ ] Responsive layout works on mobile / tablet / desktop without broken layout or unusable controls
- [ ] Basic SEO is in place (title, description, OGP, sitemap) and sitemap excludes removed standalone index routes and retired detail/project routes; active project detail routes may remain if current sitemap strategy supports detail URLs
- [ ] 404 page exists and works

### Page / Anchor Set (V1)
- [ ] Home (`/[lang]/`)
- [ ] Home Services anchor (`/[lang]/#services`)
- [ ] Home Projects anchor (`/[lang]/#projects`) between Services and Process (cards link to active `/[lang]/projects/{slug}` detail routes)
- [ ] Home About / company overview anchor (`/[lang]/#about`)
- [ ] AI Workflow service detail (`/[lang]/services/ai-workflow`)
- [ ] AI Application service detail (`/[lang]/services/ai-application`)
- [ ] AI-Driven Development service detail (`/[lang]/services/ai-driven-development`)
- [ ] Representative project detail pages under `/[lang]/projects/{slug}` for exactly Japan Life Navi (`gaijin-life-navi`), Rigel (`rigel`), and Astra (`astra`)
- [ ] Contact (`/[lang]/contact`)
- [ ] 404

Standalone `/[lang]/services` index, standalone `/[lang]/projects` index, standalone `/[lang]/about` page, retired `/[lang]/services/web3-blockchain`, and retired Carina project proof/page are not V1 requirements.

### Content
- [ ] Home follows the approved section order: `Hero → Services(#services) → Projects(#projects) → Process → About(#about) → Contact CTA`
- [ ] Home Hero CTA buttons are removed; do not keep hidden CTA buttons or an empty CTA container
- [ ] `Why assetization` is not implemented as a Home section; the assetization explanation moves to the AI Workflow detail page
- [ ] Home page explains the 3 official service lines while keeping deeper assetization logic on the AI Workflow detail page
- [ ] Home `#services` includes compact service-selection guidance for all exactly 3 service lines
- [ ] Home `#services` service cards include fit guidance and detail CTAs without duplicating the full former Services index page
- [ ] Home includes a concise Projects section with explicit `#projects` anchor/landmark between Services and Process with exactly these cards: Japan Life Navi, Rigel, and Astra
- [ ] Home Projects cards link to their corresponding detail pages: `/[lang]/projects/gaijin-life-navi`, `/[lang]/projects/rigel`, and `/[lang]/projects/astra`
- [ ] Home Projects replaces the standalone Projects / Cases index as the public project-selection surface
- [ ] Home Projects is not the old standalone `Proof` / `Nebula Infinityの実装力` grid; it is a concise Z-requested project-card section that routes into project detail pages
- [ ] Home `#about` body paragraph/column is removed
- [ ] Home `#about` renders Company snapshot and Working principles directly below the About title in a vertical layout, not side-by-side with a body column
- [ ] Home `#about` includes compact company snapshot rows for `Company` and `Location` only
- [ ] Home `#about` must not include `Base`, `Domain`, or `One-liner` rows; the previous `Base` label is replaced by `Location`
- [ ] Home `#about` preserves working-principle messaging in a compact module
- [ ] Home `#about` does not repeat Focus / service-domain summary content and does not repeat broad representative product lists beyond the dedicated Home Projects section
- [ ] Service detail pages explain suitable use cases, value, and typical deliverables
- [ ] AI Workflow detail carries the assetization explanation formerly planned for Home, including title `属人のノウハウを、組織の資産に。`
- [ ] AI Workflow detail explains the Current state → System design → Business outcome logic
- [ ] AI Workflow detail presents broad workflow assetization; examples such as `企画整理`, development process, or research workflow are examples only, not the service definition
- [ ] AI-Driven Development detail explains Nebula Infinity's agent-assisted development methodology, implementation workflow, quality gates, and delivery model
- [ ] Home Projects cards and project detail pages represent the active proof set across:
  - Workflow cases
  - AI application cases
  - AI-driven development cases
- [ ] Japan Life Navi and Rigel must be represented as AI application proof points
- [ ] Astra must be represented as the AI-driven development proof point and replaces Carina in the Home Projects trio
- [ ] Carina and Web3 / blockchain proof copy are removed from active Home, service model, and project proof requirements
- [ ] Japanese / English copy must be consistent and must not contradict the 3-line service positioning

### Design
- [ ] Keep the existing Light Premium Bento visual direction unless intentionally adjusted in feature docs
- [ ] Preserve professional, high-trust visual tone
- [ ] Accessibility basics: readable contrast, visible focus states, clear link hierarchy after Hero CTA removal
- [ ] Sticky-header-safe scroll margin prevents `#services`, `#projects`, and `#about` headings from being hidden
- [ ] `#services`, `#projects`, and `#about` have accessible headings / landmarks for keyboard and screen-reader navigation
- [ ] Home Projects section has an accessible section heading, clear card/link names, visible focus states, and responsive 3-up-to-stacked card behavior
- [ ] Home About snapshot/principles stack vertically under the title across responsive breakpoints; no body-column layout remains

### Performance / Delivery
- [ ] Static export remains deployable to Cloudflare Pages
- [ ] Build succeeds with current stack constraints
- [ ] No new architecture requires SSR-only runtime behavior
- [ ] Removed route handling does not depend on Next.js middleware redirects or server redirects
- [ ] If future legacy traffic for `/services`, `/projects`, `/about`, `/services/web3-blockchain`, or removed Carina project routes is discovered, hosting-level redirects may be evaluated in a separate deployment/config task; they are not part of this implementation requirement

## Should-have
- [ ] Stronger service-to-case mapping on Home service cards and service detail pages
- [ ] More explicit project process / implementation flow section on home page
- [ ] Better inquiry intent mapping in contact form
- [ ] Language switching preserves the user’s Home anchor context when practical, including `#projects`, and never emits links to removed standalone or retired routes

## Could-have
- [ ] Dedicated methodology page in a later phase
- [ ] Deeper case study storytelling in later phase
- [ ] Hosting-level redirect safety task if analytics/Search Console later prove meaningful legacy traffic to removed routes such as `/projects`

## Out-of-scope (V1)
- Standalone `/[lang]/services` index page
- Standalone `/[lang]/projects` index page
- Standalone `/[lang]/about` page
- Retired `/[lang]/services/web3-blockchain` service detail route/content
- Retired Carina Home/project proof page/content
- Thin compatibility pages for removed Services/Projects/About/Web3/Carina routes
- Next.js middleware redirects or server redirects for static-export route cleanup, including `/[lang]/projects` index removal
- Blog / news
- CMS
- RSS / tags / editorial taxonomy
- Content marketing system
- Additional languages beyond Japanese and English

## Constraints
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Variables
- **Deploy**: Cloudflare Pages static export
- **Dependencies**: Keep additions minimal
- **Architecture**: Must remain compatible with static export and existing project structure
- **Implementation discipline**: Documentation and page messaging must be aligned before implementation dispatch
- **Route discipline**: Preserve `/[lang]/services/{serviceId}` detail pages and active `/[lang]/projects/{slug}` detail pages while deleting/stopping export for `/[lang]/services` and `/[lang]/projects` indexes, retiring only the old `web3-blockchain` detail/content path, and keeping Carina inactive

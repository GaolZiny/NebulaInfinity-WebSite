# REQUIREMENTS — NebulaInfinity Website V1

## Must-have

### Positioning & Messaging
- [ ] Website positioning must align with:
  - AI社会実装のパートナー
  - 「AI」を、現場の「即戦力」へ
  - 「属人」のノウハウを、組織の「資産」に
  - Web3.0テクノロジーを、ビジネスへ
- [ ] The site must clearly present exactly 3 service lines:
  1. AI Workflow Design & Development
  2. AI Application Design & Development
  3. Web3.0 / Blockchain Application Design & Development
- [ ] AI Workflow messaging must explain that workflows can preserve company know-how as organizational assets
- [ ] Workflow examples must be shown as examples only, not as the limit of the offering
- [ ] Web3 copy must emphasize business application and must not become speculative / crypto-first messaging

### Functional
- [ ] All primary pages and Home anchors render correctly without runtime errors
- [ ] Japanese / English routing works on all primary pages and Home anchor targets
- [ ] Global nav order is Home / Services / Projects / About / Contact, with JA labels `ホーム` / `サービス` / `プロジェクト` / `会社概要` / `お問い合わせ`
- [ ] Header and mobile nav `サービス` target `/[lang]/#services`
- [ ] Header and mobile nav `会社概要` target `/[lang]/#about`
- [ ] Home hero secondary CTA targets `/[lang]/#services`
- [ ] Home service cards link directly to:
  - `/[lang]/services/ai-workflow`
  - `/[lang]/services/ai-application`
  - `/[lang]/services/web3-blockchain`
- [ ] Service detail breadcrumbs / back-to-services CTAs target `/[lang]/#services`
- [ ] Header, footer, CTA data, breadcrumb data, sitemap, language switch data, and metadata no longer point to `/[lang]/services` index or `/[lang]/about` standalone routes
- [ ] `/[lang]/services` standalone index is deleted or no longer exported; implementation removes only the index page and preserves the `services` detail route namespace
- [ ] `/[lang]/about` standalone page is deleted or no longer exported
- [ ] `/[lang]/services/ai-workflow`, `/[lang]/services/ai-application`, and `/[lang]/services/web3-blockchain` continue to exist and remain accessible
- [ ] Contact form submits to a **real working delivery path** (not console-only)
- [ ] Responsive layout works on mobile / tablet / desktop without broken layout or unusable controls
- [ ] Basic SEO is in place (title, description, OGP, sitemap) and sitemap excludes removed standalone routes
- [ ] 404 page exists and works

### Page / Anchor Set (V1)
- [ ] Home (`/[lang]/`)
- [ ] Home Services anchor (`/[lang]/#services`)
- [ ] Home About / company overview anchor (`/[lang]/#about`)
- [ ] AI Workflow service detail (`/[lang]/services/ai-workflow`)
- [ ] AI Application service detail (`/[lang]/services/ai-application`)
- [ ] Web3.0 / Blockchain service detail (`/[lang]/services/web3-blockchain`)
- [ ] Projects / Cases index (`/[lang]/projects`)
- [ ] Representative case detail pages (existing dynamic case detail route may be reused)
- [ ] Contact (`/[lang]/contact`)
- [ ] 404

Standalone `/[lang]/services` index and `/[lang]/about` page are not V1 requirements.

### Content
- [ ] Home follows the approved section order: `Hero → Why assetization → Services(#services) → Process → About(#about) → Contact CTA`
- [ ] Home page explains the 3 service lines and the core value of assetizing know-how
- [ ] Home `#services` includes compact service-selection guidance for all exactly 3 service lines
- [ ] Home `#services` service cards include fit guidance and detail CTAs without duplicating the full former Services index page
- [ ] Home no longer includes a standalone `Proof` / `Nebula Infinityの実装力` section
- [ ] Home `#about` includes compact company identity information: company name, base, domain, and a concise one-liner when useful
- [ ] Home `#about` preserves working-principle messaging in a compact module
- [ ] Home `#about` does not repeat Focus / service-domain summary content and does not repeat Representative products (Japan Life Navi / Rigel / Carina)
- [ ] Service detail pages explain suitable use cases, value, and typical deliverables
- [ ] AI Workflow detail explicitly covers `企画整理` or confirms that existing proof/categories cover it clearly
- [ ] Projects / Cases page shows representative examples across:
  - Workflow cases
  - AI application cases
  - Web3 case(s)
- [ ] Japan Life Navi and Rigel must be represented as AI application proof points
- [ ] Carina may be used as a Web3 proof point, but the page must emphasize Web3 capability beyond a single project
- [ ] Japanese / English copy must be consistent and not contradict service positioning

### Design
- [ ] Keep the existing Light Premium Bento visual direction unless intentionally adjusted in feature docs
- [ ] Preserve professional, high-trust visual tone
- [ ] Accessibility basics: readable contrast, visible focus states, clear CTA hierarchy
- [ ] Sticky-header-safe scroll margin prevents `#services` and `#about` headings from being hidden
- [ ] `#services` and `#about` have accessible headings / landmarks for keyboard and screen-reader navigation

### Performance / Delivery
- [ ] Static export remains deployable to Cloudflare Pages
- [ ] Build succeeds with current stack constraints
- [ ] No new architecture requires SSR-only runtime behavior
- [ ] Removed route handling does not depend on Next.js middleware redirects or server redirects
- [ ] If future legacy traffic for `/services` or `/about` is discovered, hosting-level redirects may be evaluated in a separate deployment/config task; they are not part of this implementation requirement

## Should-have
- [ ] Stronger service-to-case mapping on Home service cards and service detail pages
- [ ] More explicit project process / implementation flow section on home page
- [ ] Better inquiry intent mapping in contact form
- [ ] Language switching preserves the user’s Home anchor context when practical and never emits links to removed standalone routes

## Could-have
- [ ] Dedicated methodology page in a later phase
- [ ] Deeper case study storytelling in later phase
- [ ] Hosting-level redirect safety task if analytics/Search Console later prove meaningful legacy traffic to removed routes

## Out-of-scope (V1)
- Standalone `/[lang]/services` index page
- Standalone `/[lang]/about` page
- Thin compatibility pages for removed Services/About standalone routes
- Next.js middleware redirects or server redirects for static-export route cleanup
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
- **Route discipline**: Preserve `/[lang]/services/{serviceId}` detail pages while deleting/stopping export only for `/[lang]/services` index

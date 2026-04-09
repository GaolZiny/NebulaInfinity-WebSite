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

### Functional
- [ ] All primary pages render correctly without runtime errors
- [ ] Japanese / English routing works on all primary pages
- [ ] Contact form submits to a **real working delivery path** (not console-only)
- [ ] Responsive layout works on mobile / tablet / desktop without broken layout or unusable controls
- [ ] Basic SEO is in place (title, description, OGP, sitemap)
- [ ] 404 page exists and works

### Page Set (V1)
- [ ] Home
- [ ] About
- [ ] Services index
- [ ] AI Workflow service detail
- [ ] AI Application service detail
- [ ] Web3.0 / Blockchain service detail
- [ ] Projects / Cases index
- [ ] Representative case detail pages (existing dynamic case detail route may be reused)
- [ ] Contact
- [ ] 404

### Content
- [ ] Home page explains the 3 service lines and the core value of assetizing know-how
- [ ] Services pages explain suitable use cases, value, and typical deliverables
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

### Performance / Delivery
- [ ] Static export remains deployable to Cloudflare Pages
- [ ] Build succeeds with current stack constraints
- [ ] No new architecture that requires SSR-only runtime behavior

## Should-have
- [ ] Stronger service-to-case mapping on home and services pages
- [ ] More explicit project process / implementation flow section on home page
- [ ] Better inquiry intent mapping in contact form

## Could-have
- [ ] Dedicated methodology page in a later phase
- [ ] Deeper case study storytelling in later phase

## Out-of-scope (V1)
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

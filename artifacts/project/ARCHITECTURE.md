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

```
/[lang]/
  home
  about
  services
    /ai-workflow
    /ai-application
    /web3-blockchain
  projects
    /[slug]
  contact
  not-found
```

### Service Model
The site must expose exactly 3 top-level service lines:
1. `ai-workflow`
2. `ai-application`
3. `web3-blockchain`

### Case Model
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

## Module Boundaries

```
app/
  [lang]/
    page.tsx                 # Home
    about/
    services/
      page.tsx               # Services index
      [serviceId]/           # 3 service detail pages
    projects/
      page.tsx               # Projects / cases index
      [slug]/                # Case detail pages
    contact/
    not-found.tsx

components/
  layout/
  ui/
  seo/
  sections/                  # home / services / case-specific sections if needed

data/
  translations/
  projects/                  # V1 unified case data source
  services.ts                # service-line metadata

functions/
  api/contact.ts             # Must deliver real inquiries in V1
```

## Data / Content Rules
- Home, services, about, projects, and contact copy must all align with the same service taxonomy
- Workflow cases are examples of a broader capability; copy must never imply the service is limited to only those cases
- Web3 pages must emphasize business application, not speculative/crypto-first messaging
- V1 explicitly excludes blog/news routes and content architecture

## Contact Flow Architecture
Current contact UI already posts to `/api/contact`. V1 usable state requires:
1. client validation
2. server-side validation
3. actual delivery to business inbox / approved destination
4. explicit success / failure handling
5. basic abuse protection

## Key Constraints for Implementation
- Keep static export compatibility
- Avoid introducing SSR-only assumptions
- Keep route changes minimal and consistent with existing app structure
- Favor content/data restructuring over unnecessary framework churn
- Preserve current deployment path to Cloudflare Pages

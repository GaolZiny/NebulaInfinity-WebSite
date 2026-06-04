# About Page Redesign — Handoff

## Intent
1. Fix eyebrow font-size across all subpages (Services, About, Projects, Contact) — increased from `0.85rem` to `clamp(1rem, 2vw, 1.25rem)` with enhanced letter-spacing.
2. Completely redesign the About (会社概要) page from a sparse 3-section layout to a rich 6-section layout matching the Light Premium Bento design system.

## Non-goals
- No changes to the homepage or services page layout (only eyebrow size fix).
- No new npm dependencies.
- No changes to the Header/Footer components.

## Status
**Complete** — Build passes, both ja/en locales work.

## Changes

### Fix 1: Eyebrow Font Size (全4ページ)
| File | Change |
|------|--------|
| `app/[lang]/services/page.module.css` | `.eyebrow` font-size: `0.85rem` → `clamp(1rem, 2vw, 1.25rem)`, letter-spacing: `0.14em` → `0.18em`, color standardized to `--accent-primary` |
| `app/[lang]/projects/page.module.css` | Same fix + color to `--accent-primary` |
| `app/[lang]/contact/page.module.css` | Same fix + color to `--accent-primary` |
| `app/[lang]/about/page.module.css` | Included in the full redesign below |

### Fix 2: About Page Redesign
| File | Change |
|------|--------|
| `app/[lang]/about/page.tsx` | Complete rewrite — 6 sections: Hero, Company Overview, Domains, Values+M/V, Why Us, CTA |
| `app/[lang]/about/page.module.css` | Complete rewrite — Bento Grid layout, responsive (1440/1024/768/480), glass cards, hover animations |
| `data/translations/ja.json` | `about` key expanded with company, domains, values, whyUs, cta sections |
| `data/translations/en.json` | Same expansion for English |

### About Page Sections
1. **Hero** — Eyebrow + H1 tagline + subtitle (value proposition)
2. **Company Overview** — 6 info cards in 3-column grid (name, location, domain, business, clients, products)
3. **What We Do** — 2-column: AI (3 cards) + Web3.0 (2 cards), link to Services
4. **Values + Mission/Vision** — M/V in 2-col featured cards + 4 core values in 4-col grid
5. **Why Us** — 3 differentiator cards with numbered badges + gold accent bar on hover
6. **CTA** — Contact + Services buttons, same style as homepage/services

## Verification
```bash
cd /root/.openclaw/projects/NebulaInfinity-WebSite
npm run build    # ✓ All 31 static pages generated
```
- Visit `/ja/about` — Japanese content, all 6 sections render
- Visit `/en/about` — English content, all 6 sections render
- Check responsive at 1440px, 1024px, 768px, 480px
- Check eyebrow size on `/ja/services`, `/ja/projects`, `/ja/contact`

## Design Compliance
- ✅ CSS Modules only (no Tailwind)
- ✅ SVG icons only (no emoji)
- ✅ Design tokens: Navy #0F172A / Gold #CA8A04 / Light BG #F8FAFC
- ✅ Fonts: Orbitron (headings) / Noto Sans JP (Japanese) / Exo 2 (body)
- ✅ 12-column Bento Grid
- ✅ Glass card effect + hover animations
- ✅ `prefers-reduced-motion` respected
- ✅ Static export compatible

## Gaps
- None identified

## Next Steps
- Visual QA review by designer
- Consider extracting shared eyebrow styles to a global utility class to avoid duplication across pages

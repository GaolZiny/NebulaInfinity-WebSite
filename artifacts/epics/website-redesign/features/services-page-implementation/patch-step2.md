# Patch Step 2: Service Detail Pages — Complete Content Implementation

**Date:** 2026-02-09  
**Type:** Patch (content + layout)  
**Scope:** Service detail pages — all 6 services × JA/EN  

---

## Change Summary

### Service Detail Pages — Full Content Implementation

The 6 service detail pages at `/{lang}/services/{serviceId}` are now fully implemented with complete content matching the designer handoff specification.

**Pages implemented:**

| Service | JA URL | EN URL |
|---------|--------|--------|
| Smart Contract | `/ja/services/smart-contract` | `/en/services/smart-contract` |
| AI Agent Development | `/ja/services/ai-agent-development` | `/en/services/ai-agent-development` |
| AI Workflow Automation | `/ja/services/ai-workflow-automation` | `/en/services/ai-workflow-automation` |
| AI Applications | `/ja/services/ai-applications` | `/en/services/ai-applications` |
| Blockchain Development | `/ja/services/blockchain-development` | `/en/services/blockchain-development` |
| Web3 Consulting | `/ja/services/web3-consulting` | `/en/services/web3-consulting` |

### Page Structure (per service)

Each detail page renders the following sections in order:

1. **Breadcrumb** — `ホーム / サービス / [サービス名]` (JA) / `Home / Services / [Service Name]` (EN)
   - `aria-label="Breadcrumb"`, current page `aria-current="page"`
   - Links to home and services list

2. **Hero Section** — Large icon (64px container), H1 title, subtitle, CTA buttons
   - Service-specific SVG icon from `ServiceIcons` component
   - Two CTA buttons: お問い合わせ / Contact Us (primary) + 実績を見る / View Projects (outline)
   - `font-size: clamp(2rem, 5vw, 3rem)` for responsive H1

3. **About Section** — 2-3 paragraphs of detailed service description
   - Max-width 720px for readability
   - `line-height: 1.8`, `font-size: 1.05rem`

4. **Features Grid** — 2-column grid (desktop), 1-column (mobile)
   - 4 feature cards per service, each with icon + title + description
   - Uses `Card` component with glass variant

5. **Tech Tags** — Horizontal flex-wrap list of technology tags
   - 8-13 tags per service (e.g., Solidity, Hardhat, Foundry... for Smart Contract)
   - Styled with gold background + border rounded pills

6. **Process Timeline** — 5-step vertical timeline
   - Numbered gold circles (32px) with connecting lines
   - Service-specific step titles and descriptions

7. **Related Projects CTA** — Card linking to projects page
   - Gold gradient background card

8. **Bottom CTA** — Full-width card with contact + all-services links

### Files

| File | Role |
|------|------|
| `app/[lang]/services/[serviceId]/page.tsx` | Detail page component with all 8 sections |
| `app/[lang]/services/[serviceId]/page.module.css` | Complete responsive styles (375px / 768px / 1024px+) |
| `data/services.ts` | Full data for all 6 services (about, features, technologies, process) |
| `types/services.ts` | TypeScript interfaces (Service, ServiceFeature, ProcessStep) |

### Data Structure

```typescript
interface Service {
  id: string;
  titleJa / titleEn: string;
  subtitleJa / subtitleEn: string;
  descriptionJa / descriptionEn: string;
  aboutJa / aboutEn: string[];          // 2-3 paragraphs
  features: { ja/en: { title, description }[] };  // 4 per service
  technologies: string[];               // 8-13 tags
  process: { ja/en: { title, description }[] };    // 5 steps
  category: 'ai' | 'web3';
  featured?: boolean;
}
```

### Responsive Behavior

- **Mobile (< 768px):** Single column, stacked buttons, reduced padding
- **Tablet (768-1023px):** 2-column features, stacked CTA cards
- **Desktop (1024px+):** Full 2-column features grid, side-by-side CTA layout

### SEO

- Unique `<title>` per page: `{Service Name} - Nebula Infinity`
- `<meta name="description">` with service description
- OpenGraph + Twitter card meta tags
- Proper heading hierarchy: H1 → H2 → H3

---

## Verification

```bash
# Build passes (static export, 32 pages)
cd /root/.openclaw/projects/NebulaInfinity-WebSite
npm run build
# ✓ Compiled successfully
# ✓ Generating static pages (32/32)
# Exit code: 0
```

**Content verification (all 12 pages):**
- ✅ All 6 JA pages contain: Breadcrumb, Hero, About (このサービスについて), Features (主な機能・特徴), Tech tags (使用技術・ツール), Process (プロセス), Related Projects CTA, Bottom CTA
- ✅ All 6 EN pages contain: Breadcrumb, Hero, About (About this service), Features (Key features), Tech tags (Technologies & tools), Process, Related Projects CTA, Bottom CTA
- ✅ Each page has unique title, subtitle, about text, features, tech tags, and process steps
- ✅ Static HTML exported to `out/` directory (37-38KB per page)
- ✅ `generateStaticParams()` generates all 6 service IDs
- ✅ `generateMetadata()` produces unique SEO meta per service + language

**Visual structure per page:**
```
[Breadcrumb: ホーム / サービス / スマートコントラクト設計・開発・監査]
┌──────────────────────────────────────────┐
│          [64px Icon Container]           │
│     スマートコントラクト設計・開発・監査     │
│  ブロックチェーンの信頼性を支える...        │
│  [お問い合わせ]  [実績を見る]             │
├──────────────────────────────────────────┤
│  このサービスについて                      │
│  [paragraph 1] [paragraph 2] [paragraph 3]│
├──────────────────────────────────────────┤
│  主な機能・特徴                            │
│  ┌─────────┐ ┌─────────┐                │
│  │ Feature1│ │ Feature2│                │
│  └─────────┘ └─────────┘                │
│  ┌─────────┐ ┌─────────┐                │
│  │ Feature3│ │ Feature4│                │
│  └─────────┘ └─────────┘                │
├──────────────────────────────────────────┤
│  使用技術・ツール                          │
│  [Solidity] [Hardhat] [Foundry] ...      │
├──────────────────────────────────────────┤
│  プロセス                                 │
│  ① 要件定義 → ② 設計 → ③ 開発 →         │
│  ④ テスト → ⑤ 納品                       │
├──────────────────────────────────────────┤
│  このサービスを使った実績 → [実績を見る]    │
├──────────────────────────────────────────┤
│  サービスについてご相談ください             │
│  [お問い合わせ]  [すべてのサービス]        │
└──────────────────────────────────────────┘
```

---

## Risk & Rollback

**Risk: Low**
- All changes are data-driven (content from `data/services.ts`)
- CSS Modules scoped — no global style leakage
- Static export verified — no SSR dependencies
- No new npm packages added

**Rollback:** Revert `data/services.ts`, `page.tsx`, `page.module.css`, and `types/services.ts` to previous versions.

---

## Design Handoff Compliance

| Requirement | Status |
|-------------|--------|
| Breadcrumb with aria-label | ✅ |
| Hero: 64px icon + H1 + subtitle + CTAs | ✅ |
| About: 2-3 paragraphs, max-width 720px | ✅ |
| Features: 2-column grid, 4 per service | ✅ |
| Tech tags: flex-wrap, gold pills | ✅ |
| Process: 5-step vertical timeline | ✅ |
| Related Projects CTA card | ✅ |
| Bottom CTA: お問い合わせ + すべてのサービス | ✅ |
| JA/EN bilingual content | ✅ |
| Responsive: 375px / 768px / 1024px+ | ✅ |
| CSS Modules only (no Tailwind) | ✅ |
| Static export compatible | ✅ |
| Fonts: Orbitron + Noto Sans JP (headings), Exo 2 + Noto Sans JP (body) | ✅ |
| Colors: Navy #0F172A, Gold #CA8A04, Light BG #F8FAFC | ✅ |
| prefers-reduced-motion respected | ✅ |

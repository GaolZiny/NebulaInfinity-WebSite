# Patch: Hotfix — 4 User-Reported Issues

**Commit**: `ce084c6` — `fix(services,layout): root 404 redirect, title dedup, bento reorder, mobile menu close [task-005]`

## Change Summary

### 1. Root Path `/` Returns 404 → Fixed
- **Root cause**: No `app/page.tsx` existed; `app/layout.tsx` lacked `<html>` / `<body>` tags.
- **Fix**:
  - Created `app/page.tsx` — client component with `useEffect(() => window.location.replace('/ja/'))`.
  - Updated `app/layout.tsx` — added `<html lang="ja" suppressHydrationWarning><body>` + favicon metadata via Next.js `Metadata` API.
  - Updated `app/[lang]/layout.tsx` — removed nested `<html><body>` (now handled by root layout); injects `document.documentElement.lang` via inline `<script>` to set correct lang per-page in static export.

### 2. Services Page Duplicate Title → Fixed
- **Root cause**: Hero had "サービス" eyebrow + H1, then a separate `<h2>提供サービス</h2>` sectionHeader below.
- **Fix**: Removed the entire `sectionHeader` block (`<h2>` + `<p>` subtitle) from `app/[lang]/services/page.tsx`. Bento grid now follows Hero directly.

### 3. Bento Layout Reorder + Service Changes → Fixed
- **Data changes** (`data/services.ts`):
  - Removed `web3-consulting` service entirely.
  - Renamed `blockchain-development` display title to **Web3.0 アプリケーション開発** (kept same ID for URL stability).
  - Removed `featured: true` from `smart-contract`.
  - Reordered: ai-workflow-automation → ai-agent-development → ai-applications → blockchain-development → smart-contract.
- **Layout** (`app/[lang]/services/page.tsx` + `page.module.css`):
  - Row 1 (`.bentoRow1`): 2 cards × 6 columns — ai-workflow-automation, ai-agent-development.
  - Row 2 (`.bentoRow2`): 3 cards × 4 columns — ai-applications, blockchain-development, smart-contract.
  - Removed old `.bentoFeatured`, `.bentoSmall`, `.bentoMedium`, `.bentoWide` classes.
- **Icons** (`components/ui/icons/ServiceIcons.tsx`): Removed `Web3ConsultingIcon`.
- **Detail page** (`app/[lang]/services/[serviceId]/page.tsx`): Removed `web3-consulting` from iconMap and import.

### 4. Mobile Menu Doesn't Close on Nav Click → Fixed
- **Root cause**: `<Link>` elements in `Header.tsx` had no `onClick` handler.
- **Fix**: Added `onClick={() => setIsMobileMenuOpen(false)}` to every nav `<Link>` in the mobile menu.

## Modified / New Files
| File | Action |
|------|--------|
| `app/page.tsx` | **NEW** — root redirect |
| `app/layout.tsx` | Modified — html/body + metadata |
| `app/[lang]/layout.tsx` | Modified — removed html/body, added lang script |
| `app/[lang]/services/page.tsx` | Modified — removed sectionHeader, new bento layout |
| `app/[lang]/services/page.module.css` | Modified — new grid classes |
| `app/[lang]/services/[serviceId]/page.tsx` | Modified — removed web3-consulting ref |
| `data/services.ts` | Modified — removed web3-consulting, reordered, updated titles |
| `components/ui/icons/ServiceIcons.tsx` | Modified — removed Web3ConsultingIcon |
| `components/layout/Header.tsx` | Modified — mobile menu close on link click |

## Verification
1. `npm run build` → ✅ passes (31 static pages generated).
2. `out/index.html` → contains redirect script to `/ja/`.
3. `out/ja/services/index.html` → 5 services, correct bento order, no "提供サービス" header.
4. `out/en/services/index.html` → lang script sets `document.documentElement.lang="en"`.
5. No `out/*/services/web3-consulting/` directory exists.

## Risk & Rollback
- **Low risk**: All changes are isolated to services page, layout wrappers, and header component.
- **html lang attribute**: Root layout defaults to `lang="ja"`; per-language pages override via inline script. This is a tradeoff for static export compatibility — search engines executing JS will see correct lang. For full SSR, this should be revisited.
- **Rollback**: `git revert ce084c6`.

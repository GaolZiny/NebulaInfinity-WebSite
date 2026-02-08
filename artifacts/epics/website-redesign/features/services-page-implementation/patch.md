# Patch: Font System + Services Bento Grid Layout

**Date:** 2026-02-09  
**Type:** Patch (style/layout fix)  
**Scope:** Global font system + Services page layout  

---

## Change Summary

### Fix 1: Japanese Font Support (全站影響)

**Problem:** Orbitron (heading font) does not support Japanese characters. When Japanese and English text are mixed in headings (e.g., `h1`, `h2`, `h3`), the browser falls back to system fonts for Japanese characters, causing inconsistent typography.

**Solution:** Added **Noto Sans JP** as a Japanese fallback font in the font stack.

**Files changed:**

1. **`styles/globals.css`** (line 1)  
   - Added `Noto+Sans+JP:wght@400;500;600;700` to the Google Fonts import URL
   - No new npm dependencies — loaded via Google Fonts CDN

2. **`styles/theme.css`** (CSS variables)  
   - `--font-heading`: `'Orbitron', 'Noto Sans JP', 'Exo 2', ...sans-serif`  
     → Orbitron handles alphanumeric, Noto Sans JP handles Japanese, Exo 2 as final fallback
   - `--font-sans`: `'Exo 2', 'Noto Sans JP', ...sans-serif`  
     → Exo 2 for body text, Noto Sans JP for Japanese characters

**Result:** Japanese headings and body text render with Noto Sans JP (a clean, modern sans-serif that visually complements Orbitron/Exo 2). English/alphanumeric text continues to use Orbitron (headings) and Exo 2 (body).

---

### Fix 2: Services Page Bento Grid Layout

**Problem:** The 12-column Bento Grid had unfilled columns in multiple rows:
- Row 2: Featured card (6col) + AI Apps (3col) = 9col → **3 columns empty**
- Row 3: Blockchain (4col) + Web3 Consulting (4col) = 8col → **4 columns empty**

This caused large blank areas on the right side and bottom of the grid.

**Solution:** Redesigned the grid layout to fill all 12 columns in every row:

```
Desktop (1024px+):
┌──────(6col)──────┬───(3col)───┬───(3col)───┐
│  Featured:       │ AI Agent   │ AI Workflow │
│  Smart Contract  ├────────────┴────────────┤
│  (6col, 2row)    │ AI Apps (6col)           │
├──────(6col)──────┼──────(6col)─────────────┤
│  Blockchain      │  Web3 Consulting        │
└──────────────────┴─────────────────────────┘
```

**Files changed:**

3. **`app/[lang]/services/page.module.css`**
   - Added `grid-auto-flow: dense` to `.bentoGrid` for reliable placement
   - Added new `.bentoMedium` class (`grid-column: span 6`) for AI Apps
   - Changed `.bentoWide` from `span 4` → `span 6` (Blockchain + Web3 Consulting)
   - Updated tablet/responsive and reduced-motion media queries to include `.bentoMedium`

4. **`app/[lang]/services/page.tsx`**
   - AI Apps card now uses `styles.bentoMedium` (was `styles.bentoSmall`)
   - Conditional class: `serviceId === 'ai-applications' ? styles.bentoMedium : styles.bentoSmall`
   - No logic changes — only className assignment updated

**Result:**
- All 12 columns filled in every row — no empty space
- Featured card retains its distinction (6col × 2row + gradient background + label)
- AI Apps gets more horizontal room (6col vs 3col), better fitting its content
- Bottom row: Blockchain (6col) + Web3 Consulting (6col) = 12col ✓
- Responsive behavior preserved: tablet → 2col, mobile → 1col

---

## Verification

```bash
# Build passes (static export compatible)
rm -rf .next && npm run build
# ✓ Compiled successfully
# ✓ Generating static pages (32/32)
# Exit code: 0
```

**Visual checks:**
1. Open `/ja/services` — verify 6 cards fill grid with no empty columns
2. Open `/en/services` — same layout check
3. Check heading typography on `/ja/` — Japanese characters should render in Noto Sans JP
4. Resize browser: tablet (768-1023px) → 2-column, mobile (<768px) → 1-column
5. Verify Featured card (Smart Contract) still has gradient background and "注目サービス" label

---

## Risk & Rollback

**Risk: Low**
- Font addition: Noto Sans JP is a widely-used Google Font, adds ~20-50KB per weight (lazy-loaded by browser via `display=swap`). Initial page load shows existing fonts, then swaps once Noto Sans JP loads.
- Grid changes: Pure CSS, no JavaScript logic changed. Responsive breakpoints unchanged.
- No new npm dependencies.

**Rollback:** Revert the 4 files to their previous versions.

---

## Files Modified

| File | Change |
|------|--------|
| `styles/globals.css` | Added Noto Sans JP to Google Fonts import |
| `styles/theme.css` | Updated `--font-heading` and `--font-sans` variables |
| `app/[lang]/services/page.module.css` | Fixed grid layout: added `.bentoMedium`, updated `.bentoWide` span, added `grid-auto-flow: dense` |
| `app/[lang]/services/page.tsx` | AI Apps card uses `bentoMedium` class instead of `bentoSmall` |

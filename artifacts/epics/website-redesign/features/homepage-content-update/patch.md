# Patch: Replace all logos with new metallic ∞ design [task-014]

## Change Summary

Replaced all site-wide logo assets (Header, Footer, Favicon, Apple Touch Icon) with the new metallic infinity (∞) design.

## Files Changed

| File | Action | Description |
|------|--------|-------------|
| `public/images/logo.png` | Modified | Header/Footer logo → new 99×80 retina PNG |
| `public/images/logo-old.png` | Added | Backup of previous logo |
| `public/favicon-16x16.png` | Modified | 16px favicon |
| `public/favicon-32x32.png` | Modified | 32px favicon |
| `public/favicon.ico` | Modified | ICO (16+32px combined) |
| `public/images/favicon-16x16.png` | Modified | 16px favicon (images/ path) |
| `public/images/favicon-32x32.png` | Modified | 32px favicon (images/ path) |
| `public/images/favicon.ico` | Modified | ICO (images/ path) |
| `public/images/apple-touch-icon.png` | Modified | 180×180 Apple Touch Icon |

## No Code Changes Required

- Header (`components/layout/Header.tsx`): Uses `<img>` with CSS `height: 40px; width: auto` — automatically adapts to new aspect ratio
- Footer (`components/layout/Footer.tsx`): Same pattern, `height: 36px; width: auto`
- `app/layout.tsx` metadata: Favicon/Apple Touch Icon paths unchanged, no edit needed
- `components/seo/SEO.tsx`: References `/images/logo.png` for OG/Twitter — automatically uses new logo

## Verification

- `npm run build` ✅ (31/31 pages generated)
- Smoke test: 27/27 real pages return HTTP 200 ✅
- `/404/` returns 500 — pre-existing known issue (GOTCHAS.md), unrelated

## Risk & Rollback

- **Risk**: Low — asset-only change, no code modifications
- **Rollback**: `cp public/images/logo-old.png public/images/logo.png` + restore favicon/icon from git history

## Git Commit

`299b828` — `chore(assets): replace all logos with new metallic ∞ design [task-014]`

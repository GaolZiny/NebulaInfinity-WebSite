# Homepage V3 — Implementation Record

> **Implementer**: Coder Agent
> **Date**: 2026-02-14
> **Task**: task-016
> **Status**: ✅ Complete

---

## Intent

Full homepage redesign from V2 (Bento Grid + 7:5 Hero) to V3 (center-aligned Hero + floating badges + 6-section vertical flow), per designer handoff.md and layout-reference.md specifications.

## Non-goals

- Other pages (about, services, projects, contact) — untouched
- No new npm dependencies
- No Tailwind / styled-components
- No dev server usage during implementation (build-only verification)

## Sections Implemented

| # | Section | Key Features |
|---|---------|-------------|
| 1 | Hero | Center layout, single-column, 3 floating badges with CSS animation, single CTA |
| 2 | Concept | "AI Native Solution" highlight (Gold + Orbitron), 4 keyword bars (grid) |
| 3 | Core Competence | 3 stacked full-width cards, Gold left accent bar, eyebrow labels |
| 4 | Solutions | 3-column grid, ghost numbers (01/02/03), Orbitron labels |
| 5 | Philosophy | 3-column grid, SVG icons (reused from V2 principles), Orbitron titles |
| 6 | CTA | Gradient banner, centered text, single CTA button |

## Files Changed

| File | Operation | Notes |
|------|-----------|-------|
| `app/[lang]/page.tsx` | Full rewrite | 6 sections, SVG components inline, no Card.tsx usage |
| `app/[lang]/page.module.css` | Full rewrite | All old classes removed, all new classes per layout-reference.md |
| `data/translations/ja.json` | Updated `hero` + added `concept`, `competence`, `solutions`, `philosophy`, `cta` | New nested data structure with arrays |
| `data/translations/en.json` | Same as above | English equivalents |

## Deleted Legacy Classes

All legacy classes from layout-reference.md § "削除対象" removed:
- `.heroInner`, `.heroCopy`, `.heroDescription`, `.heroPanel`, `.heroPanelHeader`, `.heroPanelTag`, `.heroPanelGrid`
- `.panelCard`, `.panelDot`, `.panelLabel`, `.panelValue`, `.heroPanelFooter`, `.panelFlow`, `.flowDivider`
- `.bentoSection`, `.bentoGrid`, `.bentoCard`, `.bentoUniform`
- `.cardHeader`, `.cardIconWrap`, `.cardIcon`, `.cardTitle`, `.cardDescription`, `.cardList`
- `.principlesSection`, `.principlesGrid`, `.principleCard`, `.principleIconWrap`, `.principleIcon`, `.principleTitle`, `.principleDescription`
- `.ctaCard`

## Animation

- **Badge float**: `@keyframes badgeFloat` — 4s ease-in-out infinite, translateY(-6px) at 50%
  - Child 1: no delay
  - Child 2: 0.5s delay
  - Child 3: 1.0s delay
  - Hover: `animation-play-state: paused` + translateY(-3px) + enhanced shadow
- **`prefers-reduced-motion`**: All animations disabled, all hover transforms disabled

## Responsive Breakpoints

| Breakpoint | Key Changes |
|-----------|-------------|
| ≤ 1024px | Badge flex: 1 1 240px, Solutions → 1col, Philosophy → 2col (3rd centered) |
| ≤ 768px | Hero padding reduced, Concept keywords → 2col, Philosophy → 1col, CTA padding reduced |
| ≤ 480px | Hero title smaller, Badges → vertical stack, Keywords → 1col, CTA compact |

## Accessibility

- All SVG icons: `aria-hidden="true"`
- All sections: `<section>` with `aria-labelledby` pointing to section `<h2>` id
- Heading hierarchy: h1 (Hero) → h2 (sections) → h3 (cards)
- `.conceptHighlight`: Gold text compensated with `font-weight: 700` for WCAG
- CTA buttons: keyboard-focusable via `<Link>` + `<Button>`

## Verification

- `next build`: ✅ Static export success (31/31 pages)
- Smoke test: ✅ 27/27 real pages pass (1 pre-existing `/404/` dev server issue)
- Git commit: `5834b3d feat(homepage): full V3 redesign — 6 sections rewrite [task-016]`

## Gaps / Known Issues

- `/404/` route returns 500 in dev server — pre-existing issue, unrelated to this change. Static build generates the 404 page correctly.
- No scroll-triggered animations implemented (handoff noted CSS-only approach preferred; IntersectionObserver could be added later)

## Next Steps

- Visual QA in browser (desktop + mobile viewports)
- Content review by stakeholder (Z) for final text approval
- Consider adding fadeInUp animation for section reveals (optional enhancement)

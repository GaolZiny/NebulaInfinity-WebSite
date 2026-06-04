# Projects Page Redesign — Handoff

## Intent
1. Enlarge eyebrow font-size across all subpages to `clamp(1.25rem, 3vw, 1.75rem)` with `font-weight: 700` for prominent section label appearance.
2. Redesign the Projects listing page: remove status badges, add CTA section, make cards fully clickable, add the new **Agent Skills Japan** project.

## Non-goals
- No changes to the homepage or global layout.
- No new npm dependencies.
- No Tailwind usage.

## Status: ✅ Complete

## Changes

### Eyebrow fix (all subpages)
| File | Change |
|------|--------|
| `app/[lang]/services/page.module.css` | `font-size` → `clamp(1.25rem, 3vw, 1.75rem)`, `font-weight` → 700 |
| `app/[lang]/about/page.module.css` | Same |
| `app/[lang]/contact/page.module.css` | Same |
| `app/[lang]/projects/page.module.css` | Same (rewritten) |
| `app/[lang]/projects/[slug]/page.module.css` | Was `0.85rem` → Same eyebrow treatment + `color: var(--accent-primary)` |

### Projects page redesign
| File | Change |
|------|--------|
| `data/projects/projects.json` | Removed `status` field from all projects; added `agent-skills-jp` as first entry; reordered per spec |
| `data/projects/agent-skills-jp.json` | New detail file with fullDescription, techStack, features, results |
| `app/[lang]/projects/page.tsx` | Rewrote: removed statusBadge code, cards wrapped in `<Link>` for click-through, added CTA section at bottom, arrow "view more" indicator |
| `app/[lang]/projects/page.module.css` | Rewrote: 2-column grid, removed statusBadge/completed/inProgress classes, added projectLink/viewMore/arrowIcon/CTA styles |
| `app/[lang]/projects/[slug]/page.tsx` | Removed statusBadge rendering from meta section, added `any` type for projectDetails |
| `app/[lang]/projects/[slug]/page.module.css` | Removed .statusBadge, .completed, .inProgress classes |

### Project order (as displayed)
1. Agent Skills Japan (new)
2. Rigel Finance Dashboard
3. Decentralized NFT Marketplace
4. AI-Powered DeFi Analytics

## Verification
```bash
cd /root/.openclaw/projects/NebulaInfinity-WebSite
rm -rf .next && npm run build
# All routes generated including /ja/projects/agent-skills-jp and /en/projects/agent-skills-jp
```

## Gaps / Risks
- No image asset for Agent Skills Japan (`icon: null`); uses fallback box icon.
- Project detail JSON files for existing projects still contain `status` references in their data — harmless since neither the list page nor the detail page renders them.

## Next steps
- Add a real icon/logo for Agent Skills Japan if available.
- Consider adding screenshots to the agent-skills-jp detail JSON.

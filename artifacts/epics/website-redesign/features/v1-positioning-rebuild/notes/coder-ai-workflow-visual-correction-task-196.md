# Coder Report — AI Workflow Visual Correction Task 196

## Summary
- Removed the task-194 AI Workflow-only warm/gold/cream section backgrounds from the service detail rendering.
- Re-aligned AI Workflow sections to the same neutral grey/white alternation used by sibling Service detail pages.
- Expanded the AI Workflow `Nebula Infinity の AI Workflow Solution` / `What Nebula Infinity designs and builds` section header and lead to full container width so the lead aligns with the card grid.
- Preserved the accepted text-led AI Workflow hero: no right-side service-card panel.

## Changed files
- `app/[lang]/services/[serviceId]/page.tsx`
- `styles/marketing.module.css`
- `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/coder-ai-workflow-visual-correction-task-196.md`

## Z rejection points addressed
1. **Background tones**
   - Before: AI Workflow used custom section classes including a warm/gold/cream gradient for the scope/deliverables section and AI Workflow-specific section backgrounds.
   - After: AI Workflow now uses the existing service-detail neutral section system: `sectionMuted` for the first/problem section, base grey page background for the scope/deliverables section, and `sectionMuted` for representative examples. The custom warm/gold/cream section background is removed.
   - Sibling comparison: `/ja/services/ai-application` and `/ja/services/ai-driven-development` use the same first-section neutral white overlay and grey/white alternation pattern.

2. **`設計・開発範囲` lead/grid alignment**
   - Before: the AI Workflow scope header used `max-width: min(100%, 1040px)` and the lead used `max-width: 1040px`, narrower than the desktop grid/container.
   - After: the AI Workflow scope header and lead use `width: 100%; max-width: none;`, matching the card grid width.

## DOM metric evidence
Measured against the built static output served locally from `out/` on `http://127.0.0.1:4173`.

| Route | Viewport | Lead left | Grid left | Left delta | Lead width | Grid width | Width diff |
|---|---:|---:|---:|---:|---:|---:|---:|
| `/ja/services/ai-workflow/` | 1440x1100 | 144.0px | 144.0px | 0.0px | 1152.0px | 1152.0px | 0.0px |
| `/ja/services/ai-workflow/` | 1024x1000 | 24.0px | 24.0px | 0.0px | 976.0px | 976.0px | 0.0px |
| `/en/services/ai-workflow/` | 1440x1100 | 144.0px | 144.0px | 0.0px | 1152.0px | 1152.0px | 0.0px |
| `/en/services/ai-workflow/` | 1024x1000 | 24.0px | 24.0px | 0.0px | 976.0px | 976.0px | 0.0px |

Additional DOM checks:
- `/ja/services/ai-workflow/` and `/en/services/ai-workflow/` hero split child count: `1`; hero featured/service card present: `false`.
- First section background sequence for AI Workflow at 1440/1024: transparent breadcrumb, hero, `rgba(255,255,255,0.7)` first content section, transparent/base grey scope section, `rgba(255,255,255,0.7)` examples section.
- `/ja/services/ai-application/` and `/ja/services/ai-driven-development/` showed the same neutral first-section/background sequence.
- Mobile 390px check: no horizontal overflow on `/ja/services/ai-workflow/` or `/en/services/ai-workflow/`.

## Verification
- `npm run lint` — PASS
- `npm test` — PASS (13/13)
- `npm run build` — PASS
- Built static output DOM check — PASS for 1440, 1024, and 390 viewport checks listed above.

## Scope and protected-zone check
- Task Scope Mode: exact-file.
- Changed files are inside the allowed file list.
- Protected zones untouched.
- Z-owned copy sheets were not modified or staged by this task; they remain pre-existing dirty worktree files.
- No scope expansion required.

## Dev preview / smoke
- Dev preview was stopped via `sudo systemctl stop nebula-devserver` before coding per project GOTCHAS.
- Dev preview was restarted after the implementation commit via `sudo systemctl restart nebula-devserver` and is active.
- `bash scripts/smoke-test.sh` result: 17/18 task-relevant pages returned 200, including `/ja/services/ai-workflow/`, `/en/services/ai-workflow/`, `/ja/services/ai-application/`, and `/ja/services/ai-driven-development/`. The generic `/404/` route returned 500; this matches the known pre-existing minor follow-up recorded in `PROJECT_MEMORY.md` and is unrelated to this exact-file UI change.

## Notes
- No copy rewrite, route/nav/sitemap, Projects, Contact, package, lockfile, infrastructure, or Z-owned copy-sheet changes were made.

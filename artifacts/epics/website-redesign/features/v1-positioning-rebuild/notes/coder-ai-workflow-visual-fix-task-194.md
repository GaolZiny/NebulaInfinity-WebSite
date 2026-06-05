# Coder Report — task-194 AI Workflow visual layout fix

## Summary
- Removed the duplicated right-side service-card panel from the AI Workflow detail hero only; the hero remains text-led with CTA buttons and chips preserved.
- Added AI Workflow-specific hero/content classes so the hero copy can occupy the wider desktop space after removing the panel.
- Added AI Workflow-specific section background/boundary treatments so the first content sections no longer read as one continuous block.
- Added a wider header/lead layout for the AI Workflow design/development scope section so the lead aligns more naturally with the card grid below.

## Changed files
- `app/[lang]/services/[serviceId]/page.tsx`
- `styles/marketing.module.css`
- `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/coder-ai-workflow-visual-fix-task-194.md`

## Scope / protected zones
- Task Scope Mode: exact-file
- Changed files vs Scope Envelope: PASS — only allowed files changed.
- Protected zones check: PASS — `.env*`, private/credential files, package/lock/config, contact security, PM memory, architecture/requirements, Z-owned copy sheets, and unrelated docs/source were not modified by this task.
- Z-owned copy sheets untouched by this task; they remained pre-existing dirty files.
- Scope expansion needed: no.

## Done criteria coverage
- `/ja/services/ai-workflow`: hero card removed; text-led layout widened; adjacent first content sections visually separated; scope lead widened.
- `/en/services/ai-workflow`: same conditional layout and CSS path applies safely.
- `ai-application` and `ai-driven-development`: hero side-card rendering and existing section classes are preserved by an `serviceId === 'ai-workflow'` conditional.
- Mobile: no new mobile-specific cramped layout introduced; existing grid collapse behavior is preserved.

## Verification
- `npm run lint`: PASS
- `npm test`: PASS — 13 tests passed
- `npm run build`: PASS — static export completed
- Pre-commit secret scan: PASS — staged allowed files scanned with the project-required pattern; no matches.
- Devserver restart/smoke: PARTIAL/PRE-EXISTING — approved `nebula-devserver` systemd service restarted on port 3000 after clearing exact stale Next dev PIDs `1769206`/`1769220`; smoke passed all active Home/contact/project/service routes but retained the known pre-existing `/404/` dev-smoke 500 noted in `PROJECT_MEMORY.md`.

## Notes
- The report file cannot embed the final commit hash without becoming self-referential; the final PM callback records the exact commit hash.

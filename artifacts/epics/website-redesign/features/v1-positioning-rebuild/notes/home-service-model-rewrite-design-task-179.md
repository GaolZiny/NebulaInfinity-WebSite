# Design Handoff — Home / Service Model Rewrite (Task 179)

## Scope
Aligned the implementation-facing visual specs with the Z-approved Home/service model rewrite after architecture task 178.

## Design files changed
- `design/visual/home.md`
  - Removed the Home Hero CTA button area from the design contract.
  - Updated Home service model to exactly `ai-workflow`, `ai-application`, `ai-driven-development`.
  - Replaced Web3/Blockchain active service copy with AI-Driven Development copy.
  - Replaced Home Projects proof trio with Japan Life Navi / Rigel / Astra.
  - Removed active Carina proof requirements from Home.
  - Updated About to a vertical title → Company snapshot → Working principles structure with no body paragraph/column.
- `design/visual/ai-driven-development.md`
  - Added a new implementable service detail spec for `/[lang]/services/ai-driven-development`.
  - Includes JA/EN copy, layout, component guidance, states, responsive behavior, accessibility notes, Astra proof, and back-to-services behavior targeting `/[lang]/#services`.
- `design/visual/web3-blockchain.md`
  - Converted the former Web3/Blockchain service detail into a tombstone.
  - Marks `/[lang]/services/web3-blockchain` and Carina proof as retired/non-canonical for V1 implementation.
- `design/visual/projects-index.md`
  - Updated proof taxonomy to Workflow / AI Application / AI-Driven Development.
  - Replaced the active Web3/Carina section with Astra as AI-Driven Development proof.
  - Updated filters and CTA service links to avoid the removed Services index.
- `design/visual/services-index.md`
  - Updated the Services index tombstone to list only the three active service detail routes and retire `web3-blockchain`.

## Implementation risks / checks
- Home must render no Hero CTA button group and no empty Hero CTA spacer.
- Home Services must render exactly three cards: AI Workflow, AI Application, AI-Driven Development.
- Service detail static params, sitemap, metadata, breadcrumbs, language-switch data, footer links, and CTA data must not emit `/[lang]/services`, `/[lang]/about`, `/[lang]/services/web3-blockchain`, or retired Carina project links.
- Home Projects must render exactly Japan Life Navi / Rigel / Astra and resolve each slug from current `data/projects` / routing before coding.
- Service detail breadcrumbs and back-to-services CTAs must target `/[lang]/#services`, not `/[lang]/services`.
- Home `#services` and `#about` need sticky-header-safe `scroll-margin-top` and accessible headings/landmarks.
- Home About must be title → snapshot → principles in a vertical stack at all breakpoints; do not keep the removed body paragraph/column hidden or visually reserved.
- Astra needs active project data/detail coverage before implementation can complete the Home and Projects links.
- Scope note: files outside the task's allowed edit list may still contain older Web3 wording; implementation should treat `artifacts/project/ARCHITECTURE.md`, `artifacts/project/REQUIREMENTS.md`, and the updated specs above as the active source of truth for this rewrite.

## Non-goals respected
- No code implementation.
- No data/project JSON edits.
- No browser QA.
- No edits to Z-owned `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/home-copy-editing-sheet-2026-05-05.md`.

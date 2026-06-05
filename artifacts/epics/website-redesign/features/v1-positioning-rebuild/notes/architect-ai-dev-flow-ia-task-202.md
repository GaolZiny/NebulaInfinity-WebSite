# Architect Report — AI Workflow `ai-dev-flow` IA Alignment (task-202)

## Files changed
- `artifacts/project/ARCHITECTURE.md` (227 lines)
- `artifacts/project/REQUIREMENTS.md` (158 lines)
- `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/architect-ai-dev-flow-ia-task-202.md` (this report)

## Architecture / requirements decisions
- Added active service sub-detail route: `/[lang]/services/ai-workflow/ai-dev-flow`.
- Classified `ai-dev-flow` as an AI Workflow methodology / case-detail page for `Agentic AI 開発ワークフロー`, not a Home Project detail and not AI-Driven Development proof.
- Entry rule: the AI Workflow representative example card `Agentic AI 開発ワークフロー` links to `/[lang]/services/ai-workflow/ai-dev-flow` with CTA `開発ワークフロー詳細` / aligned EN CTA.
- Static export rule: route/static params, metadata, sitemap, and language-switch handling must include the sub-detail without middleware, SSR-only behavior, server redirects, or compatibility pages.
- Protected existing route removals remain intact: no standalone `/[lang]/projects`, `/[lang]/services`, `/[lang]/about`, retired Web3 route, retired Carina route, or `/[lang]/projects/ai-dev-flow`.
- Visual baseline: keep existing Service detail tone, `design/DESIGN_SYSTEM.md`, and Light Premium Bento; no new palette/design language. Text-heavy workflow diagrams should be code-generated SVG/HTML/CSS, not AI-generated text images.
- Reconciled proof mapping: Astra is AI Workflow / PMO / project-management workflow proof; Rigel is primary AI-Driven Development proof; Japan Life Navi is primary AI Application proof. Any older Astra `ai-driven-development` metadata is internal-only compatibility until data alignment, not public contract.

## Protected / unrelated files
- Read-only Z copy sheets were not modified or staged by this task:
  - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/home-copy-editing-sheet-2026-05-05.md`
  - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/non-home-copy-editing-sheet-2026-05-06.md`
- `docs/nebulainfinity-design-consultation.md` was not modified or staged.
- Source implementation files (`app/**`, `components/**`, `styles/**`, `data/**`, etc.) were not modified.

## Verification
- `git diff --check -- artifacts/project/ARCHITECTURE.md artifacts/project/REQUIREMENTS.md` — PASS.
- Final required verification command including this report should be run before commit:
  `git diff --check -- artifacts/project/ARCHITECTURE.md artifacts/project/REQUIREMENTS.md artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/architect-ai-dev-flow-ia-task-202.md`

## Downstream recommendations
- Designer: extend the existing Service detail visual language; use code-rendered process/role diagrams for text-heavy workflow visuals; avoid a standalone methodology palette.
- Coder: implement as static-export-compatible service sub-detail only; update static params/sitemap/metadata/language switch; do not add Project namespace routes.
- Coder: fix visible proof classification so Astra renders as AI Workflow / PMO and Rigel as primary AI-Driven Development proof.
- Tester: verify route matrix, sitemap/export output, language switch, breadcrumbs, and absence of `/[lang]/projects/ai-dev-flow` plus previously retired routes.

## Git commit
- Commit message planned: `docs(architecture): add ai-dev-flow service sub-detail IA [task-202]`
- Exact commit hash is reported in the completion callback because this report is included in the commit itself.

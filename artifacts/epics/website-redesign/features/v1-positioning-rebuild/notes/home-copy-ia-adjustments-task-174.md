# Home Copy / IA Adjustments — task-174

**Project:** NebulaInfinity-WebSite
**Task:** Align Home and AI Workflow visual/copy specs with latest Z-approved adjustments after architecture task-173
**Status:** implementation-ready documentation update
**Canonical specs:**
- `design/visual/home.md`
- `design/visual/ai-workflow.md`

## 1. Final Home IA delta

Home section order is now exactly:

`Hero → Services(#services) → Projects → Process → About(#about) → Contact CTA`

Changes from task-172:

1. The Home assetization explanation moved to AI Workflow detail.
2. Home now has a concise Projects section between Services and Process.
3. Home About company snapshot now uses only `Company` and `Location`.
4. The previous broader About snapshot rows and old standalone proof-grid semantics are not implementation targets.

## 2. Home copy and structure now approved for implementation

### Hero

Preserve task-172 Home JA copy:

- Eyebrow: `AI社会実装のパートナー`
- Title: `「AI」を、現場の「即戦力」へ。`
- Body: `Nebula Infinityは、属人化した業務ノウハウを整理し、AIワークフロー、AIアプリケーション、Web3.0基盤として実装するパートナーです。技術導入を目的化せず、現場で使われる仕組みとして具体化します。`
- Primary CTA: `まずは要件を整理する` → `/[lang]/contact`
- Secondary CTA: `サービスを見る` → `/[lang]/#services`

### Services `#services`

- Keep exactly three official service lines:
  1. `AI Workflow Design & Development`
  2. `AI Application Design & Development`
  3. `Web3.0 / Blockchain Application Design & Development`
- Home `#services` stays a compact service-selection surface, not a full Services index clone.
- AI Workflow is broad company workflow / know-how assetization. Development and research workflows are examples only.
- AI Application is framed as product/application implementation proof.
- Web3.0 / Blockchain is framed as tamper-resistant business trust infrastructure, not speculative crypto messaging.

### Projects

Add a concise section between Services and Process.

Required cards exactly:

| Card | Purpose | Link target pattern | Implementation note |
|---|---|---|---|
| `Japan Life Navi` | AI Application proof | `/[lang]/projects/{slug}` | Resolve exact slug from `data/projects` / current routes before coding. |
| `Rigel` | AI Application proof | `/[lang]/projects/{slug}` | Resolve exact slug from `data/projects` / current routes before coding. |
| `Carina` | Web3.0 / Blockchain proof | `/[lang]/projects/{slug}` | Resolve exact slug from `data/projects` / current routes before coding. |

This section may use title `プロジェクト` and subtitle `一部の実装例(プロジェクト)を公開します。`. It must remain a compact routing section and must not recreate the old `Nebula Infinityの実装力` proof grid.

### Process

Visible labels must remain exactly:

1. `プロセス整理`
2. `実装方針設計`
3. `検証・最適化`
4. `運用・普及`

### About `#about`

Company snapshot rows are exactly:

| Label | Value |
|---|---|
| `Company` | `Nebula Infinity（ネビュラインフィニティ）` |
| `Location` | `Japan` |

About must contain company identity and working principles only. Do not add service-domain summaries, broad representative product lists, or project cards inside About.

### Contact CTA

Preserve Z's exact JA copy:

- Title: `明確な要件がなくても、ご相談頂けます。`
- Support: `アイデア/要件を頂き、最短24時間以内に動くデモをお見せできます。`
- CTA: `お問い合わせ`

## 3. AI Workflow detail delta

The assetization explanation formerly planned for Home now belongs to `design/visual/ai-workflow.md`.

Required title:

`属人のノウハウを、組織の資産に。`

Required logic:

| Column | Bullets |
|---|---|
| `Current state` | `担当者ごとに判断がばらつく`<br>`引き継ぎに時間がかかる`<br>`AIを入れても運用に乗らない` |
| `System design` | `判断基準と手順を可視化する`<br>`AIと人の役割分担を設計する`<br>`レビュー導線と改善ログを残す` |
| `Business outcome` | `再現性のある実務フローになる`<br>`組織で引き継げる資産になる`<br>`継続的に改善できる運用になる` |

AI Workflow must remain broad company workflow assetization. OpenClaw, development workflows, and research workflows may appear only as examples or representative proof.

## 4. Implementation guardrails for Coder

- Do not implement source code from this task; this is design/copy documentation only.
- Preserve static export / Cloudflare constraints.
- Do not add or depend on `/[lang]/services` or `/[lang]/about` standalone routes.
- Header/mobile `サービス` target remains `/[lang]/#services`.
- Header/mobile `会社概要` target remains `/[lang]/#about`.
- Home Projects links must be resolved from current project data/routes before coding.
- No package/dependency, runtime, architecture, or deployment changes are implied by this documentation task.

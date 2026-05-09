# Visual Spec — AI Workflow Sub-detail: `ai-dev-flow`

**Status:** Coder-ready page handoff
**Task:** task-203 / pipeline-202 step 2
**Route:** `/[lang]/services/ai-workflow/ai-dev-flow`
**Parent service:** `ai-workflow` / AI Workflow Design & Development
**Public classification:** AI Workflow methodology / multi-agent product delivery workflow
**Japanese baseline:** Yes. English mirrors the same structure and route model.

## 0. Source alignment

This handoff explicitly conforms to:

- `artifacts/project/ARCHITECTURE.md`
  - Active route is only `/[lang]/services/ai-workflow/ai-dev-flow`.
  - The page is not `/[lang]/projects/ai-dev-flow`, not a Home Project detail, and not AI-Driven Development proof.
  - Static export compatibility is mandatory.
  - Text-heavy workflow visuals are code-generated HTML/SVG/CSS, not AI-generated text images.
- `artifacts/project/REQUIREMENTS.md`
  - The page explains the AI Workflow `Agentic AI 開発ワークフロー` methodology from opportunity/product planning through UX/IA, architecture, PM orchestration, implementation, QA, milestone acceptance, and iteration.
  - Parent AI Workflow representative example card links here with JA CTA `開発ワークフロー詳細` and aligned EN CTA.
  - Japanese content is the implementation baseline.
- `design/DESIGN_SYSTEM.md`
  - Use the existing Light Premium Bento tone: light surfaces, navy structure, restrained gold emphasis, bento cards, soft borders, Orbitron/Exo 2/Noto Sans JP stack.
  - Do not introduce a new palette, neon AI look, crypto styling, or standalone methodology design language.
- Existing service detail implementation references:
  - `app/[lang]/services/[serviceId]/page.tsx`
  - `styles/marketing.module.css`
  - `design/visual/ai-workflow.md`
- Content source brief:
  - `/root/.openclaw/media/inbound/ai-native-delivery-workflow-content-brief-20260506---12910b44-f89a-42cd-827a-6a5ad641b7d4.md`
- Read-only copy reference:
  - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/non-home-copy-editing-sheet-2026-05-06.md`

Note: older foundation files still mention retired Web3/Carina wording in places. For this page, the newer `ARCHITECTURE.md` and `REQUIREMENTS.md` route/taxonomy decisions take precedence while the visual system remains the Light Premium Bento baseline.

---

## 1. Page role and IA contract

### Role

This page is a nested AI Workflow methodology page that explains Nebula Infinity's **AI Native Product Delivery Workflow**: a multi-agent delivery method that turns an idea into a product plan, executable architecture, implemented software, QA evidence, milestone acceptance, and the next iteration loop.

It should read as:

- a methodology / case-detail under AI Workflow;
- a concrete proof of workflow design and orchestration;
- a bridge from abstract AI Workflow assetization to a specific multi-agent product delivery workflow.

It must not read as:

- a generic project case study;
- a Home Projects card/detail;
- AI-Driven Development's primary proof;
- a promise that AI simply writes code faster;
- a universal `24h` delivery guarantee.

### Audience

- Founders, product owners, and business leaders with early product ideas.
- CTO/CIO/innovation teams evaluating AI-native delivery methods.
- Operations or PMO owners who need repeatable product delivery workflows, quality gates, and handoff discipline.

### Primary user intent

Visitors should understand that Nebula Infinity can structure a product initiative before coding starts, orchestrate specialist AI agents through clear quality gates, and deliver verifiable product progress rather than loose AI-generated artifacts.

### Primary action

- JA: `このワークフローを相談する` → `/[lang]/contact?inquiry=AI%20Workflow%20Design%20%26%20Development`
- EN: `Discuss this workflow` → `/[lang]/contact?inquiry=AI%20Workflow%20Design%20%26%20Development`

### Secondary actions

- JA: `AI Workflow に戻る` → `/[lang]/services/ai-workflow`
- EN: `Back to AI Workflow` → `/[lang]/services/ai-workflow`
- Optional tertiary text link near bottom:
  - JA: `サービス選択に戻る` → `/[lang]/#services`
  - EN: `Back to Home Services` → `/[lang]/#services`

### Entry behavior from parent AI Workflow page

Update the parent AI Workflow representative example card as follows when Coder implements this route:

- Card title JA: `Agentic AI 開発ワークフロー`
- Card title EN: `Agentic AI development workflow`
- Summary JA: `市場機会の整理から企画、UX/IA、技術設計、実装、検証、Milestone Acceptance までを、役割分担された AI Agent と人のレビューゲートで進めるプロダクトデリバリーワークフローです。`
- Summary EN: `A product delivery workflow that moves from market opportunity and planning through UX/IA, architecture, implementation, verification, and milestone acceptance with specialized AI agents and human review gates.`
- Proof strip JA: `役割設計` / `レビューゲート` / `Milestone Acceptance`
- Proof strip EN: `Role design` / `Review gates` / `Milestone acceptance`
- CTA JA: `開発ワークフロー詳細`
- CTA EN: `Development workflow details`
- Link: `/[lang]/services/ai-workflow/ai-dev-flow`

Entry rule: this is the only required visible service-card entry. It may also appear in sitemap, metadata, and language-switch surfaces. Do not add it to Home Projects or any `/projects` namespace.

---

## 2. Navigation, route, metadata, and language behavior

### Route contract

```text
/[lang]/services/ai-workflow/ai-dev-flow
```

Implementation notes for Coder:

- Use static-export-compatible route generation only.
- Accept only parent `serviceId = ai-workflow` and sub-detail `subId = ai-dev-flow` if using a dynamic nested route.
- Do not add `/[lang]/projects/ai-dev-flow`.
- Do not add server redirects, middleware, SSR-only logic, or compatibility pages.
- Do not force this page into `data/projects/`; if content is extracted, use service/sub-detail content data such as `data/service-subdetails/` or a route-local static content module.

### Breadcrumb

Use `nav aria-label="Breadcrumb"`.

JA:

```text
ホーム → サービス → AI Workflow → Agentic AI 開発ワークフロー
```

EN:

```text
Home → Services → AI Workflow → Agentic AI development workflow
```

Targets:

- `ホーム` / `Home` → `/[lang]/`
- `サービス` / `Services` → `/[lang]/#services`
- `AI Workflow` → `/[lang]/services/ai-workflow`
- current item → plain text with `aria-current="page"`

### Language switch

- JA page switches to `/en/services/ai-workflow/ai-dev-flow`.
- EN page switches to `/ja/services/ai-workflow/ai-dev-flow`.
- Do not fall back to parent service or any project route.

### Suggested metadata

JA:

```text
Title: Agentic AI 開発ワークフロー - Nebula Infinity
Description: 市場機会の整理から企画、UX/IA、技術設計、実装、検証、Milestone Acceptance までを、AI Agent と人のレビューゲートで進める Nebula Infinity の AI Workflow 方法論です。
```

EN:

```text
Title: Agentic AI development workflow - Nebula Infinity
Description: Nebula Infinity's AI Workflow methodology for moving from market opportunity and product planning through UX/IA, architecture, implementation, QA, milestone acceptance, and iteration with specialized AI agents and human review gates.
```

---

## 3. Page structure overview

### Desktop order

```text
Header
Breadcrumb
S1 Hero: nested AI Workflow methodology + CTA + compact delivery panel
S2 Premise: product risk happens before code
S3 Workflow map: Market Signal -> Milestone Acceptance code-rendered diagram
S4 Role orchestration: Strategist / Designer / Architect / PM / Workers / Tester
S5 Quality gates: upstream, product/UX, architecture, execution, milestone
S6 Deliverables: what clients receive at each layer
S7 Suitable use cases: where this workflow fits
S8 CTA band: start from opportunity discovery or product planning
```

### Tablet order

```text
Header
Breadcrumb
Hero copy
Hero delivery panel below copy
Premise cards 2-column then stacked
Workflow map grouped into 2-column/stacked phase cards
Role cards 2-column
Quality gates stacked rows
Deliverables 2-column
Use cases 2-column
CTA band stacked
```

### Mobile order

```text
Header
Breadcrumb
Hero copy
CTA buttons stacked
Delivery panel
Premise cards x3
Workflow map as vertical ordered timeline
Role cards x6
Quality gates as visible stacked rows
Deliverables x8 compact cards
Use cases x4
CTA band
```

Keep mobile order identical to the narrative: why this exists → how it works → who does what → how quality is controlled → what the client receives → start a conversation.

---

## 4. Section-by-section handoff

## S1. Hero — nested methodology intro

### Intent

Introduce the page as an AI Workflow methodology, not as a project detail. The first screen should make clear that this workflow starts before coding and ends at milestone acceptance / iteration.

### Final display copy

JA:

- Eyebrow: `AI Workflow Methodology`
- H1: `構想を、検証できるプロダクトへ`
- Lead: `Nebula Infinity は、市場機会の整理、事業性の検証、プロダクト企画、UX/IA、技術設計、実装、QA、Milestone Acceptance までを、役割分担された AI Agent と人のレビューゲートで進めます。AI にコードを書かせるだけではなく、判断と成果物を積み上げ、次の意思決定につながるデリバリープロセスを設計します。`
- Chips:
  - `Market to Milestone`
  - `Multi-agent delivery`
  - `Human review gates`
- Primary CTA: `このワークフローを相談する`
- Secondary CTA: `AI Workflow に戻る`

EN:

- Eyebrow: `AI Workflow Methodology`
- H1: `From idea to verifiable product`
- Lead: `Nebula Infinity moves from market opportunity, business validation, product planning, UX/IA, and architecture into implementation, QA, milestone acceptance, and iteration through specialized AI agents and human review gates. This is not only AI writing code; it is a delivery workflow that accumulates decisions, artifacts, and evidence for the next product decision.`
- Chips:
  - `Market to Milestone`
  - `Multi-agent delivery`
  - `Human review gates`
- Primary CTA: `Discuss this workflow`
- Secondary CTA: `Back to AI Workflow`

### Hero support panel copy

Panel title JA: `Market signal → Milestone acceptance`
Panel title EN: `Market signal → Milestone acceptance`

Panel rows JA:

1. `機会を選ぶ` — `市場、ユーザー、代替手段、事業性を確認する`
2. `設計に落とす` — `UX/IA と技術設計へ、判断を引き継ぐ`
3. `品質ゲートで進める` — `実装、検証、受け入れ基準を段階ごとに確認する`

Panel rows EN:

1. `Select the opportunity` — `Check market, users, substitutes, and business fit`
2. `Translate into design` — `Carry decisions into UX/IA and architecture`
3. `Move through quality gates` — `Check implementation, verification, and acceptance by stage`

### Visual/layout spec

- Use existing service detail split hero style.
- Desktop: copy 7 columns, support panel 5 columns.
- Background: existing hero gradient (`#FFFFFF` to `#F8FAFC` with restrained gold radial wash) or equivalent existing class.
- Hero panel: white/featured card, 20px radius, `#E4E4E7` border with subtle gold top/left accent.
- Typography: H1 uses page H1 scale; lead uses Body L; chips use existing pill style.
- Do not use a robot/AI mascot, dark terminal visual, neon network, or large text image.

### States

- CTA links: default / hover / pressed / focus-visible / disabled if rendered through button component.
- Breadcrumb links: default / hover / focus-visible.
- Chips are static; do not style as filters.

### Responsive

- Tablet/mobile: panel stacks below copy.
- Mobile CTA buttons stack full width or `min-width: 44px` hit target with comfortable vertical spacing.
- Keep H1 to readable line lengths; do not shrink Japanese below 32px mobile H1 equivalent unless implementation constraints require it.

---

## S2. Premise — product risk happens before code

### Intent

Explain why this page belongs under AI Workflow: the asset being designed is a repeatable product delivery workflow, not merely a code-generation process.

### Final display copy

JA:

- Section title: `プロダクトの失敗は、コードの前で起きる`
- Subtitle: `開発速度だけを上げても、市場、ユーザー、事業性、プロダクト境界が曖昧なままでは、手戻りは減りません。このワークフローは、上流の判断を明文化し、設計・実装・検証へ引き継げる形にします。`
- Cards:
  1. `市場機会が曖昧` — `誰のどの痛みを解くのか、既存手段で代替できない理由を先に確認します。`
  2. `設計と技術が分断` — `UX/IA、データ、権限、非機能要件をつなぎ、実装判断が迷子にならないようにします。`
  3. `完了基準が弱い` — `コード提出ではなく、Milestone の受け入れ条件と検証証跡で完了を判断します。`

EN:

- Section title: `Product failure often happens before code`
- Subtitle: `Increasing development speed alone does not reduce rework when market fit, user need, business model, and product boundaries remain unclear. This workflow makes upstream decisions explicit and hands them into design, implementation, and verification.`
- Cards:
  1. `The opportunity is unclear` — `We first check whose pain is being solved and why existing substitutes are not enough.`
  2. `Design and technology are disconnected` — `UX/IA, data, permissions, and non-functional needs are connected so implementation decisions stay grounded.`
  3. `Done is poorly defined` — `Completion is judged by milestone acceptance criteria and evidence, not by code submission alone.`

### Visual/layout spec

- Three standard cards in a muted section.
- Use subtle icon wrappers only if icons already exist or can be inline SVG; icons are decorative and `aria-hidden="true"`.
- Cards are static informational surfaces unless Coder intentionally links them to contact intents.

### Responsive

- Desktop 3-up; tablet 2+1 or stacked; mobile stacked in the order above.

---

## S3. Workflow map — code-rendered process diagram

### Intent

Show the complete flow from market signal to milestone acceptance in a format Coder can implement without text images. This is the primary page visual.

### Final display copy

JA:

- Eyebrow: `Workflow map`
- Title: `Market Signal から Milestone Acceptance まで`
- Subtitle: `各段階で専門 Agent が成果物を作り、人がレビューし、次の工程へ渡せる形に整えます。流れを固定化するのではなく、判断・証跡・改善点を残しながら進めることが目的です。`

EN:

- Eyebrow: `Workflow map`
- Title: `From market signal to milestone acceptance`
- Subtitle: `Specialized agents produce artifacts at each stage, humans review them, and the workflow packages them for the next step. The goal is not a rigid sequence; it is to keep decisions, evidence, and improvement points usable.`

### Stage cards

Use this exact stage order.

| # | JA stage | JA description | JA outputs | EN stage | EN description | EN outputs |
|---:|---|---|---|---|---|---|
| 1 | `市場を見るレンズを設計する` | `対象セグメント、トレンド、政策、課題テーマを定義し、機会発見のレンズを作る。` | `Segment map` / `調査優先度` / `初期仮説` | `Design the market lens` | `Define segments, trends, policy shifts, and pain themes as the lens for opportunity discovery.` | `Segment map` / `Research priorities` / `Initial hypotheses` |
| 2 | `機会をスクリーニング・検証する` | `市場信号、競合、代替手段、ユーザー課題、事業性を確認し、進むべき機会を絞る。` | `Shortlist` / `Substitutability analysis` / `Go 条件` | `Screen and validate the opportunity` | `Check market signals, competition, substitutes, user pain, and business fit before committing to a product direction.` | `Shortlist` / `Substitutability analysis` / `Go conditions` |
| 3 | `プロダクト企画に変換する` | `ブランド、権限、データ、非機能、コンプライアンス、KPI、獲得導線、MVP 範囲を明文化する。` | `Product spec` / `MVP scope` / `Acceptance direction` | `Translate into product planning` | `Make brand, access boundaries, data, non-functional needs, compliance, KPIs, acquisition, and MVP scope explicit.` | `Product spec` / `MVP scope` / `Acceptance direction` |
| 4 | `UX/IA と技術設計を揃える` | `画面構造、ユーザーフロー、データ要求、技術構成、API、業務ルールを接続する。` | `UX/IA` / `Architecture docs` / `User stories` | `Align UX/IA and architecture` | `Connect screen structure, user flows, data needs, technical structure, APIs, and business rules.` | `UX/IA` / `Architecture docs` / `User stories` |
| 5 | `PM が実行を編成する` | `Milestone、Feature、Task Contract を作り、Designer、Coder、Tester などの Worker を編成する。` | `Task contracts` / `Commits` / `QA evidence` | `Orchestrate execution` | `PM turns the plan into milestones, features, and task contracts, then coordinates Designer, Coder, Tester, and other workers.` | `Task contracts` / `Commits` / `QA evidence` |
| 6 | `Milestone で受け入れ判断を行い、次へつなぐ` | `単機能ではなく、開発段階全体の受け入れ条件に照らして PASS / FAIL と改善点を判断する。` | `Acceptance result` / `Risk log` / `Next iteration` | `Accept the milestone and iterate` | `Judge PASS / FAIL and improvement points against the product-level milestone criteria, not just individual feature completion.` | `Acceptance result` / `Risk log` / `Next iteration` |

### Required diagram implementation spec

Use code-rendered text, not image text.

Recommended semantic HTML:

```html
<section aria-labelledby="workflow-map-title">
  <div class="sectionHeader">
    <span class="sectionEyebrow">Workflow map</span>
    <h2 id="workflow-map-title">Market Signal から Milestone Acceptance まで</h2>
    <p>...</p>
  </div>
  <ol class="workflowTimeline" aria-label="AI Native Product Delivery Workflow stages">
    <li class="workflowStage">
      <span class="stageNumber" aria-hidden="true">01</span>
      <h3>市場を見るレンズを設計する</h3>
      <p>...</p>
      <ul class="stageOutputs">
        <li>Segment map</li>
        <li>調査優先度</li>
        <li>初期仮説</li>
      </ul>
    </li>
  </ol>
</section>
```

Connector rules:

- Use CSS pseudo-elements or an `aria-hidden="true"` SVG line only for connectors.
- All stage labels, descriptions, and output chips must remain HTML text or SVG `<text>` generated from localization data.
- Prefer HTML cards with CSS connectors for maintainability and text selection.
- If SVG is used, include `<title>` / `<desc>` for the whole diagram and use visible `<text>` elements from localized strings, not flattened paths.
- Provide an offscreen summary only if the visual layout becomes complex; do not duplicate all content in a hidden paragraph if the ordered list is already semantic.

### Visual/layout spec

- Desktop: 6 cards arranged as a horizontal rail if width allows, or 3+3 bento grid with connectors. Recommended: 3 columns x 2 rows for readability.
- Each stage card: white surface, 16px radius, `#E4E4E7` border, Level 1 shadow, 24px padding.
- Stage number: small gold/navy node (`40px` circle or rounded square), not a neon badge.
- Output chips: neutral pills with one optional gold-tinted chip per card.
- Connector line: thin `rgba(202, 138, 4, 0.45)`; no animated path is required.

### Responsive

- Tablet: 2-column stage grid.
- Mobile: vertical ordered timeline with a left rail; keep all text visible, no horizontal scroll.

---

## S4. Role orchestration — specialist agents and human gates

### Intent

Clarify that the workflow works because roles are separated and reviewed, not because one generic AI does everything.

### Final display copy

JA:

- Eyebrow: `Role orchestration`
- Title: `専門 Agent を、プロダクトチームの役割として組み込む`
- Subtitle: `Strategist、Designer、Architect、PM、Coder、Tester がそれぞれ異なる責務を持ちます。人は判断が必要なポイントでレビューし、次工程に渡せる品質になっているかを確認します。`

EN:

- Eyebrow: `Role orchestration`
- Title: `Place specialist agents into product-team roles`
- Subtitle: `Strategist, Designer, Architect, PM, Coder, and Tester carry different responsibilities. Humans review the points that require judgment and confirm whether the output is ready for the next stage.`

### Role cards

| Role | JA responsibility | EN responsibility | Primary outputs |
|---|---|---|---|
| Strategist | `市場、ユーザー、事業性、代替リスクを整理し、進むべき機会を判断する。` | `Structures market, users, business fit, and substitutability risk to select the right opportunity.` | `Market lens` / `Validation` / `Product planning` |
| Designer | `UX/IA、画面構造、デザインシステム、ページ内容をユーザーが理解できる形にする。` | `Turns product planning into UX/IA, screen structure, design system, and page content users can understand.` | `UX/IA` / `Design system` / `Visual handoff` |
| Architect | `ビジネス・UX の判断を、技術構成、データ、API、業務ルール、受け入れ基準へ変換する。` | `Translates business and UX decisions into architecture, data, APIs, business rules, and acceptance criteria.` | `System design` / `API` / `Business rules` |
| PM | `Milestone、Feature、Task Contract を作り、Worker の範囲・品質・完了条件を管理する。` | `Creates milestones, features, and task contracts, then manages worker scope, quality, and completion conditions.` | `Task contracts` / `Decision log` / `Acceptance package` |
| Coder / Worker | `設計と契約に沿って実装、文書化、修正を行い、差分と検証結果を残す。` | `Implements, documents, and fixes within the design and task contract while leaving diffs and verification evidence.` | `Implementation commits` / `Docs` / `Fixes` |
| Tester | `主要フロー、ブラウザ、ビルド、アクセシビリティ、Milestone Acceptance の証跡を確認する。` | `Checks critical flows, browser behavior, build health, accessibility, and milestone acceptance evidence.` | `QA report` / `Screenshots` / `PASS/FAIL evidence` |

### Visual/layout spec

- Desktop: 6 role cards in 3x2 bento grid.
- Include a slim `Human review gate` band after the grid:
  - JA: `人のレビューは、判断・承認・例外処理・最終受け入れに集中させます。`
  - EN: `Human review is concentrated on judgment, approval, exceptions, and final acceptance.`
- Use outline icons only if available; no avatars, no robots, no emoji.

### Responsive

- Tablet: 2-column cards.
- Mobile: stacked cards; role title remains first, outputs can wrap as chips.

---

## S5. Quality gates — evidence before progress

### Intent

Prevent overclaiming speed. Make quality gates concrete and tied to product outputs.

### Final display copy

JA:

- Eyebrow: `Quality gates`
- Title: `速さを、証跡で管理する`
- Subtitle: `各段階の成果物は、次へ進むための入力になります。曖昧なまま通過させず、判断理由・未解決点・受け入れ条件を残します。`

EN:

- Eyebrow: `Quality gates`
- Title: `Govern speed with evidence`
- Subtitle: `Each stage's output becomes the input for the next stage. The workflow avoids passing ambiguity downstream by keeping rationale, unresolved points, and acceptance conditions visible.`

### Gate rows

JA:

1. `上流判断ゲート` — `市場性、代替性、MVP の価値、Go / Conditional Go / No-Go を確認する。`
2. `企画・UX ゲート` — `対象ユーザー、主要導線、画面構造、データ要求、非ゴールを確認する。`
3. `アーキテクチャゲート` — `技術選定、データ、API、業務ルール、非機能、リスクを確認する。`
4. `実行ゲート` — `Task Contract、差分、テスト、型チェック、ビルド、アクセシビリティ観点を確認する。`
5. `Milestone Acceptance ゲート` — `個別タスクではなく、Development Phase と MVP Acceptance に照らして PASS / FAIL を判断する。`

EN:

1. `Upstream decision gate` — `Check market fit, substitutability, MVP value, and Go / Conditional Go / No-Go.`
2. `Planning and UX gate` — `Check target users, core flows, screen structure, data needs, and non-goals.`
3. `Architecture gate` — `Check technical choices, data, APIs, business rules, non-functional needs, and risks.`
4. `Execution gate` — `Check task contracts, diffs, tests, type checks, builds, and accessibility considerations.`
5. `Milestone acceptance gate` — `Judge PASS / FAIL against Development Phase and MVP Acceptance, not individual task completion alone.`

### Diagram spec

- Implement as a semantic list or table, not a raster image.
- Recommended: vertical checklist card on desktop and mobile; no accordion unless content becomes too tall.
- If displayed as a matrix, use `<table>` with clear row/column headers. Do not use a purely visual table made of divs unless ARIA roles are added carefully.

### Visual/layout spec

- Use a featured panel with five rows.
- Each row: node number, gate label, short description, optional output chips.
- Gold should mark checkpoints, not warnings.
- Avoid red/amber warning styling unless a row represents an actual failed state, which this static marketing page does not.

---

## S6. Deliverables — what the client receives

### Intent

Turn the workflow into tangible outputs. This section helps prospects understand that the service produces reusable decision assets, not only code.

### Final display copy

JA:

- Title: `各段階で、次に使える成果物を残す`
- Subtitle: `成果物は社内説明、開発、検証、次回改善に使える形で残します。プロジェクトが進むほど、判断と学習が組織の資産になります。`

EN:

- Title: `Each stage leaves reusable artifacts`
- Subtitle: `Artifacts are kept in a form that supports internal explanation, development, verification, and future improvement. As the project progresses, decisions and learning become organizational assets.`

### Deliverable cards

JA:

1. `市場・機会整理` — `対象セグメント、機会仮説、競合・代替手段、Go 条件。`
2. `プロダクト企画` — `Product spec、MVP 範囲、非ゴール、KPI、獲得導線、リスク。`
3. `UX/IA` — `画面階層、ユーザーフロー、ページデータ、ワイヤーフレーム。`
4. `技術アーキテクチャ` — `System design、Data/API、Business rules、User stories、受け入れ条件。`
5. `デザイン・ページ内容` — `Design system、visual handoff、ページコピー、状態・レスポンシブ仕様。`
6. `実装差分` — `Feature commits、コード差分、依存関係、実装メモ。`
7. `検証証跡` — `テスト、ビルド、ブラウザ確認、スクリーンショット、QA レポート。`
8. `Milestone package` — `PASS / FAIL、残課題、リスク、次回改善候補。`

EN:

1. `Market and opportunity framing` — `Target segments, opportunity hypotheses, competitors, substitutes, and Go conditions.`
2. `Product planning` — `Product spec, MVP scope, non-goals, KPIs, acquisition path, and risks.`
3. `UX/IA` — `Screen hierarchy, user flows, page-data matrix, and wireframes.`
4. `Technical architecture` — `System design, data/API, business rules, user stories, and acceptance conditions.`
5. `Design and page content` — `Design system, visual handoff, page copy, states, and responsive behavior.`
6. `Implementation diffs` — `Feature commits, code changes, dependencies, and implementation notes.`
7. `Verification evidence` — `Tests, builds, browser checks, screenshots, and QA reports.`
8. `Milestone package` — `PASS / FAIL, remaining issues, risks, and next improvement candidates.`

### Visual/layout spec

- Desktop: 4x2 compact bento cards, or 12-column bento with first two cards wider if desired.
- Keep descriptions short; no bullet walls.
- Cards can be static; no links required.
- Use output chips sparingly if implementation has room.

### Responsive

- Tablet: 2 columns.
- Mobile: stacked compact cards.

---

## S7. Suitable use cases — where this workflow fits

### Intent

Make the methodology commercially understandable without implying it is only for software startups.

### Final display copy

JA:

- Title: `このワークフローが向いている相談`
- Subtitle: `まだ仕様が固まっていない段階でも、機会の選び方、MVP の切り方、品質ゲートの置き方から整理できます。`
- Cards:
  1. `AI SaaS / 新規プロダクト` — `市場機会から MVP までを短いサイクルで検証したい。`
  2. `業務自動化・内部ツール` — `現場の知識と業務ルールを、実装可能なワークフローに変えたい。`
  3. `複雑な Web / App MVP` — `ユーザー体験、データ、AI 機能、運用を同時に設計したい。`
  4. `既存プロダクト改善` — `次の改善範囲を、定量・定性の証跡から決めたい。`

EN:

- Title: `Where this workflow is a good fit`
- Subtitle: `Even before specifications are fixed, we can help structure opportunity selection, MVP scope, and quality gates.`
- Cards:
  1. `AI SaaS / new products` — `You want to validate from market opportunity to MVP in short cycles.`
  2. `Business automation / internal tools` — `You want to turn operational knowledge and rules into an implementable workflow.`
  3. `Complex web / app MVPs` — `You need to design user experience, data, AI features, and operations together.`
  4. `Existing product improvement` — `You want evidence to guide the next improvement scope.`

### Visual/layout spec

- 2x2 cards on desktop; stack on mobile.
- Keep tone consultative and low-pressure.
- If cards link to contact with query parameters, include descriptive accessible names such as `AI SaaS / 新規プロダクトについて相談する`.

---

## S8. CTA band — start from opportunity discovery or product planning

### Intent

Invite inquiry from an early idea stage while preserving business-ready credibility.

### Final display copy

JA:

- Title: `アイデアの段階から、実装・検証できるプロダクト計画へ`
- Body: `要件が固まっていなくても構いません。市場機会、ユーザー、MVP 範囲、品質ゲートを一緒に整理し、次に検証すべき形へ落とし込みます。`
- Primary CTA: `このワークフローを相談する` → `/[lang]/contact?inquiry=AI%20Workflow%20Design%20%26%20Development`
- Secondary CTA: `AI Workflow に戻る` → `/[lang]/services/ai-workflow`
- Tertiary text link: `サービス選択に戻る` → `/[lang]/#services`

EN:

- Title: `Turn an early idea into a product plan that can be delivered`
- Body: `You do not need fixed requirements. We can structure the market opportunity, users, MVP scope, and quality gates together, then turn them into the next verifiable step.`
- Primary CTA: `Discuss this workflow` → `/[lang]/contact?inquiry=AI%20Workflow%20Design%20%26%20Development`
- Secondary CTA: `Back to AI Workflow` → `/[lang]/services/ai-workflow`
- Tertiary text link: `Back to Home Services` → `/[lang]/#services`

### Visual/layout spec

- Use existing featured CTA band pattern.
- 20px radius, gold-tinted wash, white/light surface, navy text, primary gold CTA.
- Secondary CTA uses outline or text button.
- Mobile: stack buttons; primary first in DOM and visual order.

---

## 5. Global component and state checklist

### Components

- Breadcrumb nav
- Hero CTA buttons
- Static chips
- Hero support panel
- Premise cards
- Workflow stage timeline / grid
- Role orchestration cards
- Quality gate rows
- Deliverable cards
- Use case cards
- CTA band

### Required states

- Links/buttons: default / hover / active-pressed / focus-visible / disabled if disabled state is possible.
- Clickable cards, if introduced: default / hover lift up to `-2px` / active / focus-visible.
- Static cards: no hover is required; if hover is added, keep it subtle and do not imply clickability unless the whole card is a link.
- Loading state: not required for this static page; if content is data-driven, missing content should be caught at build time rather than displayed as an empty marketing page.
- Empty state: not expected in production because this is a fixed static sub-detail.
- Error state: use existing 404/notFound behavior for invalid language/subId route, not an inline page error.

---

## 6. Visual system notes

### Layout

- Use 12-column Light Premium Bento composition.
- Max container follows existing global container; no new wide-canvas exception needed.
- Standard section rhythm: 64-80px vertical desktop, 48-64px tablet/mobile.
- Cards: 24-32px padding desktop, 20px mobile.
- Grid gaps: 24px desktop, 20px tablet, 16px mobile.

### Color

Use existing tokens:

- Page background: `#F8FAFC`
- Surface: `#FFFFFF`
- Text primary: `#020617`
- Text secondary: `#475569`
- Border: `#E4E4E7`
- Accent: `#CA8A04`
- Accent hover: `#B07A03`
- Ink/navy structure: `#0F172A`

Gold ratio should remain low: emphasize CTAs, stage numbers, connector lines, and proof/gate nodes only.

### Typography

- Heading: Orbitron / Noto Sans JP / Exo 2.
- Body: Exo 2 / Noto Sans JP / system sans-serif.
- Keep Japanese paragraphs readable; avoid dense multi-sentence cards.
- Do not use all-caps styling for long Japanese labels.

### Motion

- Transitions: 120-200ms ease-out.
- Hover lift: max `translateY(-2px)`.
- No continuous motion, floating cards, animated neon lines, or auto-playing diagram animation.
- Respect `prefers-reduced-motion: reduce` by disabling transforms/transitions that are not essential.

---

## 7. Accessibility notes

- Use one visible H1.
- Maintain ordered H2 sections in the same order as the page narrative.
- Breadcrumb uses `nav aria-label="Breadcrumb"` and `aria-current="page"` for current page.
- Main workflow map should be an ordered list (`ol`) or semantic table/list. Visual connector lines are decorative and `aria-hidden="true"`.
- All diagram text must be selectable/localizable HTML text or SVG `<text>`, not image text or flattened vector paths.
- If SVG connectors are used, they must be decorative unless they carry unique information. If unique, provide `<title>` and `<desc>`.
- Use descriptive accessible names for links, especially duplicated CTA labels.
- Do not rely on color alone for stage/gate meaning; pair gold nodes with text labels and ordering.
- Body and controls must meet WCAG AA contrast. Avoid small gold text on white unless paired with strong ink text or darkened styling.
- Keyboard focus must be visible on all links/buttons/cards; use the existing gold focus ring style.
- Touch targets should be at least 44px in one dimension.
- Japanese and English pages should set correct document language through existing app language handling.

---

## 8. Explicit do-not-do list

- Do not create `/[lang]/projects/ai-dev-flow`.
- Do not add this page to Home Projects.
- Do not model this as `data/projects` just to reuse project-detail machinery.
- Do not classify `ai-dev-flow` as AI-Driven Development proof.
- Do not make Astra the primary AI-Driven Development proof on this page.
- Do not introduce a new palette, dark/neon AI look, crypto styling, glassmorphism-heavy page, or standalone visual language.
- Do not use AI-generated images containing text for the workflow diagram.
- Do not rasterize stage labels into PNG/JPG/WebP/SVG paths.
- Do not overclaim `24h` as a universal guarantee. This page can say `短いサイクル` / `short cycles`, but should not promise a fixed delivery time for every inquiry.
- Do not require middleware, SSR-only behavior, server redirects, or compatibility pages.
- Do not link breadcrumbs/back buttons to the removed standalone `/[lang]/services` index.

---

## 9. Coder implementation recommendations

- Add the static nested service sub-detail route under the existing service detail namespace, preserving static export.
- Recommended content ownership: a service sub-detail data object/module keyed by `parentServiceId: ai-workflow` and `subId: ai-dev-flow`, or route-local static content. Avoid project-detail data structures.
- Update parent AI Workflow representative example card CTA to:
  - JA `開発ワークフロー詳細`
  - EN `Development workflow details`
  - href `/[lang]/services/ai-workflow/ai-dev-flow`
- Add metadata, sitemap, and language-switch handling for this route.
- Ensure invalid nested service-subdetail combinations return static-compatible 404/notFound behavior.
- Reuse existing `marketing.module.css` patterns where possible: hero split, cards, proof pills, step rail, transformation panel, featured band. Add only small page-specific classes for the workflow timeline/role gate matrix if existing classes cannot express the layout.
- Keep diagrams as semantic HTML/CSS; if SVG is used, use it only for connector lines or generated text nodes from localization data.

---

## 10. Tester recommendations

Tester should verify:

1. `/ja/services/ai-workflow/ai-dev-flow` renders statically.
2. `/en/services/ai-workflow/ai-dev-flow` renders statically.
3. `/ja/projects/ai-dev-flow` and `/en/projects/ai-dev-flow` are not active routes.
4. Parent AI Workflow card links to this route with JA CTA `開発ワークフロー詳細` and EN `Development workflow details`.
5. Breadcrumb targets are `/[lang]/`, `/[lang]/#services`, and `/[lang]/services/ai-workflow`.
6. Language switch preserves the same sub-detail route.
7. Sitemap/metadata include the service sub-detail and do not emit a project version.
8. Workflow diagram labels are selectable text and still readable at desktop/tablet/mobile widths.
9. Keyboard focus is visible on breadcrumbs, CTAs, and any linked cards.
10. Reduced-motion mode removes non-essential hover/diagram motion.
11. Rendered copy does not claim a universal `24h` guarantee.

---

## 11. Assumptions, non-goals, and open questions

### Assumptions

- Coder can add a nested route or equivalent static route within the active services namespace.
- Existing Button, Link, card, and marketing CSS patterns are available and should be reused.
- Japanese copy in this document is the baseline for implementation; English mirrors the same structure.
- The parent AI Workflow page will be updated by Coder as part of implementation so the representative example card becomes the entry point.

### Non-goals

- No new design foundation or palette.
- No new standalone Services/Projects/About index behavior.
- No project-detail page for this methodology.
- No blog/news/content-marketing system.
- No AI-generated illustration requirement.

### Open questions

- None blocking implementation. The only implementation choice is whether Coder stores sub-detail copy in a dedicated content module or in the nested route file; either is acceptable if the route, static export, localization, and public classification rules above are preserved.

---

## 12. Completion report note

Changed file for this design task:

- `design/visual/ai-dev-flow.md`

Assumptions made:

- EN CTA aligned to JA `開発ワークフロー詳細` as `Development workflow details`.
- The implementation will update the parent AI Workflow example card and route metadata/sitemap/language switch in a later Coder task.
- No separate design foundation change is needed; this page reuses the existing Light Premium Bento system.

Downstream Coder instructions:

- Implement only the service sub-detail route `/[lang]/services/ai-workflow/ai-dev-flow`.
- Keep content as service-subdetail/methodology data, not project data.
- Add code-rendered HTML/CSS workflow diagrams with selectable/localizable labels.
- Preserve static export; avoid middleware/SSR/server redirects.

Downstream Tester instructions:

- Verify parent card CTA/link, localized route rendering, sitemap/language switch, absence of `/projects/ai-dev-flow`, responsive diagram readability, keyboard focus, and no universal `24h` guarantee.

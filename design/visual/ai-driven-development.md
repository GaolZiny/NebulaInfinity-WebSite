# Visual Spec — AI-Driven Development Detail

**Status:** Canonical V1 service detail visual/copy spec
**Route:** `/[lang]/services/ai-driven-development`
**Service ID:** `ai-driven-development`
**Official line:** `AI-Driven Development`

## 1. Page role and IA contract

- Primary goal: explain Nebula Infinity's AI-driven / agentic development methodology as the third active service line, replacing the retired Web3 / Blockchain service line.
- Audience: founders, product owners, CTO/CIO teams, innovation leads, and teams that need faster implementation without losing review discipline.
- Primary action: inquiry about AI-driven development delivery.
- Secondary action: return to Home `#services` for service selection or review Astra as proof.
- This page must emphasize agent-assisted development method, workflow automation, quality gates, verification, and delivery acceleration.
- This page must not reuse retired Web3 / Blockchain positioning, proof, route, or Carina content.
- Japanese copy/structure is the baseline; English mirrors the same structure and intent.
- Static export constraint: no server-only route behavior, middleware redirect assumption, or runtime dependency is required by this design.

## 2. Header / navigation flow

- Header: global shell.
- Breadcrumb recommended: Home / Services / AI-Driven Development.
- Breadcrumb targets:
  - Home → `/[lang]/`
  - Services → `/[lang]/#services`
  - Current page → no link or `aria-current="page"`
- Page transitions:
  - Primary CTA → `/[lang]/contact`
  - Secondary/back-to-services CTA → `/[lang]/#services`
  - Astra proof card → `/[lang]/projects/{slug}` after Coder resolves the exact Astra slug from `data/projects` / current routing.
  - Sibling service switcher → `/[lang]/services/ai-workflow` and `/[lang]/services/ai-application`.
- Back-to-services destination: `/[lang]/#services`, not `/[lang]/services`.
- Unauthenticated flow: fully open.

## 3. Hi-Fi ASCII layout

### Desktop
```text
Header
Breadcrumb: Home / Services(#services) / AI-Driven Development
Hero: official line + promise + CTA + method chips + agentic delivery panel
When this fits: 4 situation cards
Agentic delivery model: Brief -> Workflow design -> Agent-assisted build -> Quality gates -> Handoff
What Nebula Infinity designs and builds: 5 bento cards
Quality gate stack: requirement / design / code / test-build / release checks
Representative proof: Astra card + proof strips
Step rail: frame -> design workflow -> implement with gates -> handoff and improve
CTA band: Contact + Back to Home Services
```

### Mobile
```text
Header
Breadcrumb
Hero copy
Method chips
Primary CTA + secondary Back to Home Services anchor link
Agentic delivery panel stacked
When this fits cards x4
Delivery model stacked
Build scope cards x5
Quality gates x5
Astra proof card
Step rail vertical
CTA band stacked
```

## 4. Section-by-section spec

### S1. Hero

**Intent**
- Introduce AI-Driven Development as a delivery capability, not as a generic AI coding claim.
- Make clear that speed is paired with workflow design, review gates, and verification.
- Provide a direct inquiry path while preserving the Home-led service selection path.

**Final display copy**
- JA eyebrow: `AI-Driven Development`
- EN eyebrow: `AI-Driven Development`
- JA title: `AI駆動の開発体制で、構想を速く確かな実装へ`
- EN title: `Turn ideas into reliable implementation with AI-driven development`
- JA subtitle: `Nebula Infinityは、AIエージェントを前提にした開発ワークフロー、レビューゲート、検証自動化を組み合わせ、要件整理から実装・改善までの速度と品質を両立します。`
- EN subtitle: `Nebula Infinity combines AI-agent-assisted development workflows, review gates, and automated verification to balance speed and quality from requirements through implementation and improvement.`
- JA method chips:
  - `Agentic Workflow`
  - `Quality Gates`
  - `Delivery Acceleration`
- EN method chips:
  - `Agentic Workflow`
  - `Quality Gates`
  - `Delivery Acceleration`
- JA primary CTA: `この領域を相談する` → `/[lang]/contact`
- EN primary CTA: `Discuss this service` → `/[lang]/contact`
- JA secondary CTA: `サービス選択に戻る` → `/[lang]/#services`
- EN secondary CTA: `Back to Home Services` → `/[lang]/#services`
- Illustration alt JA: `AIエージェント、レビューゲート、検証ログが連動する開発ワークフロー図`
- Illustration alt EN: `Development workflow diagram linking AI agents, review gates, and verification logs`

**Right-side delivery panel copy**
- JA panel title: `速さを、管理できる開発プロセスに変える`
- EN panel title: `Turn speed into a governed delivery process`
- JA panel rows:
  1. `役割設計` — `AIエージェントと人の担当範囲を分ける`
  2. `レビューゲート` — `要件・設計・実装・検証を段階ごとに確認する`
  3. `改善ログ` — `判断と変更理由を残し、次の実装に活かす`
- EN panel rows:
  1. `Role design` — `Separate responsibilities between AI agents and humans`
  2. `Review gates` — `Check requirements, design, implementation, and verification by stage`
  3. `Improvement logs` — `Keep decisions and change reasons usable for the next delivery cycle`

**Component style guidance**
- Split hero: left copy 7 columns, right delivery panel 5 columns.
- Hero background follows Light Premium Bento: `#F8FAFC` base, white cards, subtle gold accent line, no dark/neon AI aesthetic.
- Title uses Display/H1 scale; body uses Body L with max readable width.
- Method chips use neutral pills with one gold-accent chip for `Quality Gates`.
- Primary CTA uses gold button style; secondary CTA uses text/outline style and must target Home `#services`.

**Required states**
- CTA buttons: default / hover / pressed / focus-visible / disabled.
- Breadcrumb links: default / hover / focus-visible.
- Method chips are static unless made filter-like; do not imply interactivity if not clickable.

**Responsive notes**
- Right-side delivery panel stacks below Hero copy on tablet/mobile.
- CTA row becomes stacked buttons on narrow mobile with minimum 44px hit targets.
- Avoid compressing the title below readable Japanese line lengths.

### S2. When this service fits

**Intent**
- Help visitors distinguish AI-Driven Development from AI Application and AI Workflow.
- Frame the service as delivery methodology and implementation capability.

**Final display copy**
- JA title: `このラインが向いている状況`
- EN title: `When this line is the right fit`
- JA cards:
  1. `短期間で動く形を検証したい` — `構想を小さく実装し、使いながら判断したい。`
  2. `仕様変更が多いプロダクトを進めたい` — `変更を前提に、レビューと改善が回る開発体制が必要。`
  3. `AIエージェント活用を開発標準にしたい` — `属人的なAI活用ではなく、チームで再現できる進め方にしたい。`
  4. `速度と品質ゲートを両立したい` — `早く作るだけでなく、検証・レビュー・引き継ぎまで残したい。`
- EN cards:
  1. `You need a working version quickly` — `You want to implement a focused version and make decisions through use.`
  2. `The product will change often` — `You need a delivery model where review and improvement keep pace with change.`
  3. `You want AI-agent use to become a development standard` — `You need a repeatable team method, not individual AI experimentation.`
  4. `Speed must include quality gates` — `You need verification, review, and handoff discipline, not just faster output.`

**Component style guidance**
- 4 compact cards, 2x2 desktop, 1-column mobile.
- Use soft gold icon wrappers and neutral borders.
- Keep text business-led; avoid tool/vendor names unless implementation context later requires them.

**States**
- Static by default.
- If cards link to Contact intents, support hover / active / focus-visible and clear accessible names.

**Responsive**
- Cards stack in the order above.
- Keep each card's title visible without truncation.

### S3. Agentic delivery model

**Intent**
- Show how AI-driven development becomes a managed workflow.
- Make the relationship between human judgment, AI agents, and verification legible.

**Final display copy**
- JA eyebrow: `Delivery model`
- EN eyebrow: `Delivery model`
- JA title: `AIエージェントを、開発プロセスの中に組み込む`
- EN title: `Put AI agents inside a governed development process`
- JA subtitle: `AIを単発の作業補助として使うのではなく、要件、設計、実装、レビュー、検証の流れに役割として組み込みます。`
- EN subtitle: `We do not use AI as one-off task assistance. We place it into requirements, design, implementation, review, and verification as defined roles.`

**Flow columns**
- JA:
  1. `Brief` — `目的、制約、成功条件を短く明文化する。`
  2. `Workflow design` — `AIエージェント、人、レビュー担当の役割を決める。`
  3. `Agent-assisted build` — `実装・調査・修正を並行しながら進める。`
  4. `Quality gates` — `レビュー、テスト、ビルド、差分確認を通す。`
  5. `Handoff` — `判断理由、残課題、運用メモを残して次へ渡す。`
- EN:
  1. `Brief` — `Define purpose, constraints, and success criteria in a compact form.`
  2. `Workflow design` — `Define roles for AI agents, humans, and reviewers.`
  3. `Agent-assisted build` — `Move implementation, research, and fixes in parallel where safe.`
  4. `Quality gates` — `Pass review, tests, build checks, and diff inspection.`
  5. `Handoff` — `Leave decision rationale, open issues, and operating notes for the next step.`

**Component style guidance**
- Use a Transformation Flow Panel: white surface, `#E4E4E7` border, 20px radius, 32px desktop padding.
- 5 columns on wide desktop; 3+2 wrap on tablet; stacked cards on mobile.
- Connector line uses subtle `#CA8A04`; current/active step style not required unless animated.

**Required states**
- Static panel by default.
- If columns become anchors, support hover / focus-visible.

**Responsive notes**
- Preserve order exactly: Brief → Workflow design → Agent-assisted build → Quality gates → Handoff.
- Connector becomes vertical between stacked panels on mobile.

### S4. What Nebula Infinity designs and builds

**Intent**
- Make the service implementable for Coder and understandable for prospects.
- Clarify that this service can support both internal delivery systems and product implementation.

**Final display copy**
- JA title: `Nebula Infinity が設計・実装するもの`
- EN title: `What Nebula Infinity designs and builds`
- JA cards:
  1. `開発ワークフロー設計` — `要件整理、設計、実装、レビュー、検証の流れをAI前提で組み直します。`
  2. `AIエージェント役割設計` — `調査、実装、レビュー補助、テスト補助などの担当範囲を定義します。`
  3. `プロダクト実装` — `フロントエンド、バックエンド、データ連携、AI機能を一体で実装します。`
  4. `品質ゲート整備` — `テスト、型チェック、ビルド、レビュー観点、受け入れ条件を組み込みます。`
  5. `運用・改善ハンドオフ` — `判断ログ、残課題、改善サイクルを残し、継続開発へ接続します。`
- EN cards:
  1. `Development workflow design` — `We rebuild requirements, design, implementation, review, and verification around AI-assisted delivery.`
  2. `AI-agent role design` — `We define where agents support research, implementation, review, and testing.`
  3. `Product implementation` — `We build frontend, backend, data integration, and AI features as one delivery flow.`
  4. `Quality gate setup` — `We embed tests, type checks, builds, review criteria, and acceptance conditions.`
  5. `Operations and improvement handoff` — `We leave decision logs, open issues, and improvement cycles for continued development.`

**Component style guidance**
- 5-card bento; `品質ゲート整備 / Quality gate setup` may be visually emphasized with a gold top border.
- Cards use 16px radius, white surface, Level 1-2 shadow, and `#E4E4E7` border.
- Icons should be abstract process/system glyphs; no robot mascot or sci-fi illustration.

**States**
- Static or light hover only.
- If cards link to Contact, full focus-visible support required.

**Responsive**
- Desktop: 3 cards first row, 2 cards second row or 12-column bento.
- Tablet: 2-column wrap.
- Mobile: single-column stack.

### S5. Quality gate stack

**Intent**
- Prevent the page from sounding like unchecked speed.
- Give implementation and QA a concrete acceptance model.

**Final display copy**
- JA eyebrow: `Quality gates`
- EN eyebrow: `Quality gates`
- JA title: `速さを支える、確認ポイント`
- EN title: `The checks that make speed reliable`
- JA gate rows:
  1. `要件ゲート` — `目的、対象ユーザー、制約、非ゴールを確認する。`
  2. `設計ゲート` — `情報設計、データ、画面、状態、導線を確認する。`
  3. `実装ゲート` — `差分、依存関係、アクセシビリティ、エッジケースを確認する。`
  4. `検証ゲート` — `テスト、型チェック、ビルド、主要フロー確認を通す。`
  5. `引き渡しゲート` — `残課題、運用メモ、次の改善判断を残す。`
- EN gate rows:
  1. `Requirements gate` — `Check purpose, users, constraints, and non-goals.`
  2. `Design gate` — `Check information architecture, data, screens, states, and navigation.`
  3. `Implementation gate` — `Review diffs, dependencies, accessibility, and edge cases.`
  4. `Verification gate` — `Pass tests, type checks, builds, and critical-flow checks.`
  5. `Handoff gate` — `Leave open issues, operating notes, and next improvement decisions.`

**Component style guidance**
- Use a vertical checklist card or horizontal gate rail on desktop.
- Gate labels in H4 / Lead label; descriptions Body S.
- Use gold check/node marks, not warning colors.

**States**
- Static.
- If used as an accordion on very small screens, each trigger requires default / hover / active / focus-visible states and `aria-expanded`.

**Responsive**
- Prefer stacked rows on mobile; avoid horizontal scrolling.
- Keep all gate descriptions visible by default if space allows.

### S6. Representative proof — Astra

**Intent**
- Make Astra the active proof point for AI-Driven Development.
- Replace retired Carina/Web3 proof in the active Home/project/service model.

**Final display copy**
- JA eyebrow: `Proof`
- EN eyebrow: `Proof`
- JA title: `代表実績: Astra`
- EN title: `Representative proof: Astra`
- JA summary: `Astra は、AIエージェントを組み込んだ開発プロセスと品質ゲートを使い、短いサイクルで検証・改善を回す AI-Driven Development の代表実績として扱います。構想を動く実装へ近づける開発体制そのものを示すプロジェクトです。`
- EN summary: `Astra is treated as the representative AI-Driven Development proof: a project that uses AI-agent-assisted development processes and quality gates to run short validation and improvement cycles. It demonstrates the delivery system that moves an idea toward working implementation.`
- JA proof strip:
  - `Agentic workflow`
  - `Quality gates`
  - `Iterative delivery`
- EN proof strip:
  - `Agentic workflow`
  - `Quality gates`
  - `Iterative delivery`
- JA CTA: `Astra 詳細` → `/[lang]/projects/{slug}`
- EN CTA: `View Astra` → `/[lang]/projects/{slug}`
- Implementation note: Coder must resolve the exact Astra slug from `data/projects` and current dynamic routing before coding; do not hard-code an unverified slug.

**Component style guidance**
- One featured proof snapshot card with an abstract delivery-system frame or project image if a clean approved asset exists.
- Place proof strip above the CTA.
- Add a small note: `Carina is retired from active Home/project proof; do not substitute it here.`

**States**
- Proof card/link: default / hover lift / active / focus-visible.
- If slug is unavailable, Coder must raise a data/routing blocker rather than disable the card silently.

**Responsive**
- Proof strip wraps to two rows if needed.
- Card remains full-width on mobile.

### S7. Engagement step rail

**Final display copy**
- JA title: `進め方`
- EN title: `How engagements move`
- JA steps:
  1. `目的を絞る` — `作るべき対象、制約、成功条件を整理します。`
  2. `開発ワークフローを設計する` — `AIエージェント、人、レビュー、検証の役割を決めます。`
  3. `品質ゲートを通しながら実装する` — `短いサイクルで実装し、レビューと検証を通します。`
  4. `引き渡し、改善へつなぐ` — `判断ログ、運用メモ、次の改善候補を残します。`
- EN steps:
  1. `Narrow the objective` — `Clarify what should be built, constraints, and success criteria.`
  2. `Design the development workflow` — `Define roles for AI agents, humans, review, and verification.`
  3. `Implement through quality gates` — `Build in short cycles while passing review and verification.`
  4. `Handoff and improve` — `Leave decision logs, operating notes, and next improvement candidates.`

**Component style guidance**
- Use Step Rail pattern from the Design System.
- Node 1 and 4 in navy; nodes 2 and 3 with gold outline/fill accent.

**States**
- Static by default.
- If each step links to deeper explanation, support hover and focus-visible.

**Responsive**
- Horizontal rail desktop; vertical rail mobile.
- Keep descriptions short enough to avoid rail imbalance.

### S8. CTA band

**Final display copy**
- JA title: `AI駆動の開発体制づくりから相談できます`
- EN title: `You can start by shaping an AI-driven delivery model`
- JA body: `新規プロダクト、既存機能の改善、開発プロセスの再設計まで、速度と品質を両立する進め方から一緒に整理します。`
- EN body: `From new products to existing feature improvement and delivery-process redesign, we can help structure a way to improve speed without losing quality.`
- JA primary CTA: `お問い合わせ` → `/[lang]/contact`
- EN primary CTA: `Contact Us` → `/[lang]/contact`
- JA secondary CTA: `サービス選択に戻る` → `/[lang]/#services`
- EN secondary CTA: `Back to Home Services` → `/[lang]/#services`

**Component style guidance**
- Featured CTA band, 20px radius, gold-tinted wash, 48px desktop padding.
- Primary CTA uses gold button; secondary CTA uses outline/text style.
- Do not link secondary CTA to `/[lang]/services`.

**States**
- CTA buttons: default / hover / pressed / focus-visible / disabled.
- No loading state is required for static links.

**Responsive**
- Buttons stack on mobile.
- Keep primary CTA first in DOM and visual order.

## 5. Global state checklist

- Breadcrumb links: default / hover / focus-visible.
- CTA buttons: default / hover / pressed / focus-visible / disabled.
- Proof card: default / hover / active / focus-visible.
- Service switch links, if implemented: default / hover / active / focus-visible.
- Static panels do not need loading/error states; preserve semantic headings and lists.
- If any interactive accordion is introduced on mobile, support keyboard operation, `aria-expanded`, and visible focus.

## 6. Responsive summary

- Desktop uses 12-column Light Premium Bento composition.
- Tablet stacks hero visual below copy if the 7/5 split becomes cramped.
- Mobile order: Hero → When this fits → Delivery model → Build scope → Quality gates → Astra proof → Step rail → CTA.
- Maintain 24px mobile outer padding and 64-96px desktop section rhythm.
- Keep all touch targets at least 44px.

## 7. Accessibility, assumptions, non-goals

**Accessibility**
- Use one visible H1 and ordered H2 sections.
- Breadcrumb uses `nav aria-label="Breadcrumb"` and current page `aria-current="page"`.
- CTA and proof links have descriptive accessible names, e.g. `Astra 詳細` / `View Astra`.
- Color contrast follows Design System tokens; gold text on white must be checked and darkened or paired with ink text where needed.

**Assumptions**
- Astra will have an active project detail route in implementation, with slug resolved from current project data.
- The service detail route namespace `/[lang]/services/{serviceId}` remains active for the three current services.
- Japanese content remains the baseline; English mirrors structure and intent.

**Non-goals**
- No Web3 / Blockchain service detail replacement content.
- No Carina proof card or active project requirement.
- No standalone Services index page.
- No server redirects, middleware, or compatibility pages for retired routes.

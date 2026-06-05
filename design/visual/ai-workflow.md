# Visual Spec — AI Workflow Detail

## 1. Page role
- Primary goal: explain AI Workflow as broad company workflow / know-how assetization capability, not a narrow development automation offer.
- Audience: operations leaders, team managers, founders, PM/ops owners dealing with people-dependent workflows.
- Primary action: inquiry about workflow design and implementation.
- Secondary action: move to representative examples or the independent Projects route.
- Definition guardrail: OpenClaw, development workflow, and research workflow examples are examples only; they must not define or limit the AI Workflow service.

## 2. Header / navigation flow
- Header: global shell.
- Breadcrumb recommended: Home / Services / AI Workflow.
- Page transitions:
  - Primary CTA -> Contact
  - Secondary CTA -> Representative examples section or Projects
  - Proof cards -> Projects or Contact depending on public detail availability
  - Service switch links -> sibling service pages
- Back-to-services destination: `/[lang]/#services`, not `/[lang]/services`.
- Service detail breadcrumbs and bottom secondary CTA must return to the Home Services anchor when the intent is service selection.
- Unauthenticated flow: fully open.

## 3. Hi-Fi ASCII layout

### Desktop
```text
Header
Breadcrumb
Hero: official line + Japanese promise + CTA + outcome chips
Problem section: 3 symptom cards
Assetization panel: Current state -> System design -> Business outcome
Workflow category grid: knowledge ops / research / document ops / support / internal ops / dev workflow
Deliverables grid: what Nebula Infinity designs and builds
Representative examples: multi-agent development workflow + product research workflow
Step rail: discovery -> workflow design -> implementation -> rollout
CTA band
```

### Mobile
```text
Header
Breadcrumb
Hero
Symptoms x3
Assetization panel stacked
Workflow categories x6 stacked
Deliverables x4 stacked
Representative examples x2
Step rail vertical
CTA band
```

## 4. Section-by-section spec

### S1. Hero
**Final display copy**
- JA eyebrow: `AI Workflow Design & Development`
- EN eyebrow: `AI Workflow Design & Development`
- JA title: `「属人」のノウハウを、組織の「資産」に`
- EN title: `Turn tacit know-how into organizational assets`
- JA subtitle: `Nebula Infinity は、担当者依存の業務をそのまま自動化するのではなく、判断基準・手順・レビューの流れを整理し、AI と人が運用できるワークフローとして設計・開発します。`
- EN subtitle: `Nebula Infinity does not simply automate a person's work as-is. We structure decision logic, steps, and review paths into workflows that people and AI can operate together.`
- JA outcome chips:
  - `属人化の解消`
  - `ナレッジの資産化`
  - `再現性のある運用`
- EN outcome chips:
  - `Reduce people-dependence`
  - `Assetize know-how`
  - `Create repeatable operations`
- JA primary CTA: `この領域を相談する` → `/[lang]/contact`
- EN primary CTA: `Discuss this service` → `/[lang]/contact`
- JA secondary CTA: `代表例を見る` → representative examples section or `/[lang]/projects`
- EN secondary CTA: `View representative proof` → representative examples section or `/[lang]/projects`
- Illustration alt JA: `判断基準が整理され、AI と人の役割分担が設計されたワークフロー図`
- Illustration alt EN: `Workflow diagram showing structured decision rules and human-AI role allocation`

**Style guidance**
- Split hero: left copy 7 cols, right transformation mini-panel 5 cols.
- Right visual uses current-state vs designed-flow mini diagram.
- Eyebrow is official service line only; Japanese title carries the value proposition.

**States**
- CTA buttons: full state set.
- Outcome chips static.

**Responsive**
- Mini-panel stacks under copy on tablet/mobile.

### S2. Problem framing
**Final display copy**
- JA title: `AI 導入前に整理すべき、現場の3つの症状`
- EN title: `Three operational symptoms to solve before AI can stick`
- JA cards:
  1. `判断が人に閉じている` — `経験者にしか分からない基準が多く、再現しづらい。`
  2. `引き継ぎコストが高い` — `手順はあっても、実際の勘所が共有されていない。`
  3. `ツールを入れても定着しない` — `役割分担やレビュー導線が設計されていない。`
- EN cards:
  1. `Decisions live inside individuals` — `Critical criteria exist only in experienced operators.`
  2. `Handoffs are expensive` — `There may be steps, but not the real judgment behind them.`
  3. `Tools never become operations` — `Roles, review paths, and adoption flow were never designed.`

**Style guidance**
- 3 standard cards with thin icon wrappers.
- Use muted red/orange accents only in icon backgrounds, not as dominant surface color.

**States**
- Static unless cards anchor to inquiry form.

**Responsive**
- 3-up -> 1-up.

### S3. Assetization model
**Intent**
- Carry the assetization explanation that no longer belongs on Home.
- Make the service logic concrete: people-dependent judgment and procedures become organizational assets that AI and humans can operate reproducibly.
- Keep the definition broad enough for any repeatable business process with judgment, procedure, review, handoff, or improvement loops.

**Final display copy**
- JA eyebrow: `Assetization model`
- EN eyebrow: `Assetization model`
- JA title: `属人のノウハウを、組織の資産に。`
- EN title: `Turn individual know-how into organizational assets`
- JA subtitle: `AI導入が止まる理由の多くは、技術そのものではなく、判断基準や業務知識が人に閉じていることにあります。Nebula Infinityは、その知見を整理し、AIと人が再現性をもって動ける仕組みに変えていきます。`
- EN subtitle: `AI projects often stall not because of the technology itself, but because decision criteria and operational knowledge stay inside individuals. Nebula Infinity organizes that knowledge and turns it into systems where AI and people can operate reproducibly.`

**Current state → System design → Business outcome logic**
- JA column 1 label: `Current state`
- JA column 1 bullets:
  - `担当者ごとに判断がばらつく`
  - `引き継ぎに時間がかかる`
  - `AIを入れても運用に乗らない`
- JA column 2 label: `System design`
- JA column 2 bullets:
  - `判断基準と手順を可視化する`
  - `AIと人の役割分担を設計する`
  - `レビュー導線と改善ログを残す`
- JA column 3 label: `Business outcome`
- JA column 3 bullets:
  - `再現性のある実務フローになる`
  - `組織で引き継げる資産になる`
  - `継続的に改善できる運用になる`
- EN columns:
  - `Current state`: `Decisions vary by operator` / `Handoffs take too long` / `AI does not stick in operations`
  - `System design`: `Make decision rules and procedures visible` / `Design roles for AI and people` / `Keep review paths and improvement logs`
  - `Business outcome`: `Repeatable operational flow` / `Transferable organizational asset` / `Continuously improvable operation`

**Component style guidance**
- Use a reusable Transformation Flow Panel: white surface, `#E4E4E7` border, 20px radius, 32px desktop padding.
- 3 equal columns on desktop, stacked cards on mobile.
- Column headers use H4; bullets use Body S with check/node icons.
- Connector line in subtle gold between columns.
- This panel is the canonical detail-page home for the assetization explanation; do not duplicate it as a Home section.

**Required states**
- Static panel by default.
- If columns become links, support hover and focus-visible.

**Responsive notes**
- Mobile order remains Current state → System design → Business outcome.
- Connector becomes a vertical line between stacked panels.

### S4. Workflow categories
**Intent**
- Prove breadth beyond the current examples.
- Ensure public examples such as development and research workflows are clearly examples only, not the service definition.

**Final display copy**
- JA title: `対象は、特定のユースケースに限りません`
- EN title: `The capability is broader than the current public examples`
- JA subtitle: `マルチエージェント開発やプロダクトリサーチは代表例です。実際には、知識・判断・レビューが絡むさまざまな業務へ展開できます。`
- EN subtitle: `Multi-agent development and product research are representative examples only. The same capability applies across many knowledge-heavy workflows.`
- JA category cards:
  1. `Knowledge Operations` — `社内ナレッジの検索・要約・更新フロー`
  2. `Product Research` — `市場・競合・顧客情報の収集と要点整理`
  3. `Document Operations` — `文書確認、分類、抽出、要約、次アクション整理`
  4. `Support Operations` — `問い合わせ一次整理、回答候補生成、エスカレーション判断`
  5. `Internal Operations` — `申請、チェック、社内連携、報告フローの整理`
  6. `Development Workflow` — `要件、設計、実装、レビューの協調フロー`
- EN category cards:
  1. `Knowledge Operations` — `Search, summarize, and update internal knowledge flows`
  2. `Product Research` — `Collect, synthesize, and hand off market, competitor, and customer input`
  3. `Document Operations` — `Review, classify, extract, summarize, and route documents`
  4. `Support Operations` — `Triage inquiries, generate responses, and decide escalation`
  5. `Internal Operations` — `Organize requests, checks, coordination, and reporting flows`
  6. `Development Workflow` — `Coordinate requirements, design, implementation, and review`

**Style guidance**
- 3x2 compact bento cards.
- Each card uses single-line title + 2-line explanation.
- No screenshots needed; abstract system icons only.

**States**
- Default / hover if cards link to contact anchors.

**Responsive**
- 2 columns tablet, 1 column mobile.

### S5. What we design and build
**Final display copy**
- JA title: `Nebula Infinity が設計・開発するもの`
- EN title: `What Nebula Infinity designs and builds`
- JA cards:
  1. `現行業務の整理` — `関係者、判断、例外、入力・出力を構造化します。`
  2. `AIワークフロー設計` — `AI と人の役割分担、レビュー位置、連携仕様を定義します。`
  3. `実装・接続` — `既存システムやツールとつながる形で実装します。`
  4. `運用定着支援` — `引き継ぎ、改善観点、ログの見方まで整えます。`
- EN cards:
  1. `Current-state mapping` — `We structure stakeholders, decisions, exceptions, inputs, and outputs.`
  2. `Workflow architecture` — `We define human-AI roles, review points, and integration behavior.`
  3. `Implementation and integration` — `We build the workflow so it connects to existing systems and tools.`
  4. `Operational adoption` — `We support handoff, improvement criteria, and how to read the logs.`

**Style guidance**
- 2x2 proof-style cards with simple icons.
- This section should feel concrete and implementation-minded.

**States**
- Static or linkable to contact.

**Responsive**
- Stack 4 cards on mobile.

### S6. Representative examples
**Intent**
- Show recognizable proof while preserving the broader AI Workflow definition.

**Final display copy**
- JA section eyebrow: `Representative examples`
- EN section eyebrow: `Representative examples`
- JA title: `現在公開している代表例`
- EN title: `Representative examples currently shown publicly`

**Example card 1**
- JA title: `マルチエージェント開発ワークフロー`
- EN title: `Multi-agent development workflow`
- JA summary: `要件整理、設計、実装、テストの役割分担を定義し、レビューしながら進める開発フローの設計例。`
- EN summary: `A workflow design example that allocates requirements, design, implementation, and testing roles with explicit review paths.`
- JA proof strip:
  - `役割分担`
  - `レビューゲート`
  - `再利用ルール`
- EN proof strip:
  - `Role allocation`
  - `Review gates`
  - `Reusable rules`

**Example card 2**
- JA title: `プロダクトリサーチワークフロー`
- EN title: `Product research workflow`
- JA summary: `市場・競合・ユーザー情報を収集し、比較と要点化を経て意思決定に渡すリサーチフローの設計例。`
- EN summary: `A workflow design example for collecting market, competitor, and user inputs, synthesizing them, and handing them into decision-making.`
- JA proof strip:
  - `情報収集`
  - `要点整理`
  - `意思決定入力`
- EN proof strip:
  - `Collection`
  - `Synthesis`
  - `Decision input`

**Support note**
- JA: `これらは代表例であり、AI Workflow の提供範囲を限定するものではありません。`
- EN: `These are representative examples only and do not define the full boundary of the AI Workflow service.`

**Style guidance**
- Two large proof snapshot cards.
- Use subtle `Example` badge rather than `Case Study` badge.

**States**
- Cards link to Contact or Projects overview; full state support required.

**Responsive**
- Cards stack vertically.

### S7. Step rail
**Final display copy**
- JA title: `進め方`
- EN title: `How engagements move`
- JA steps:
  1. `現場を整理する`
  2. `ワークフローを設計する`
  3. `実装して検証する`
  4. `運用へ引き渡す`
- EN steps:
  1. `Clarify operations`
  2. `Design the workflow`
  3. `Implement and validate`
  4. `Hand off into operations`

**Style guidance**
- Use Step Rail pattern.

**States**
- Static.

**Responsive**
- Vertical rail on mobile.

### S8. CTA band
**Final display copy**
- JA title: `属人化した業務を、どこから整理すべきか一緒に見極めます`
- EN title: `We can help identify where to start with people-dependent work`
- JA body: `まだ課題が曖昧でも問題ありません。現場で何が止まっているか、どこに判断が集中しているかから整理します。`
- EN body: `You do not need a polished brief. We can start from where work gets stuck and where judgment is concentrated today.`
- JA primary CTA: `お問い合わせ` → `/[lang]/contact`
- EN primary CTA: `Contact Us` → `/[lang]/contact`
- JA secondary CTA: `サービスを見る` → `/[lang]/#services`
- EN secondary CTA: `View Services` → `/[lang]/#services`

**Style guidance**
- Featured CTA band.

**States**
- Both buttons full state set.

**Responsive**
- Stack actions.

## 5. Global state checklist
- Breadcrumb links: default / hover / focus-visible.
- CTA buttons: default / hover / pressed / focus-visible / disabled.
- Example cards: default / hover / focus-visible.
- Service-selection links and back links: default / hover / active / focus-visible and target `/[lang]/#services`.

## 6. Responsive summary
- Keep breadth, not just example proof, visible before the fold on tablet.
- Mobile order: promise -> symptoms -> assetization -> categories -> deliverables -> proof -> process -> CTA.

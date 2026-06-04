# Visual Spec — Services Index

## 1. Page role
- Primary goal: help visitors self-identify the right service line quickly.
- Audience: decision-makers with a known problem but not always a fixed implementation path.
- Primary action: move to one of the three service detail pages.
- Secondary action: move to Contact or Projects.

## 2. Header / navigation flow
- Header: same global shell as Home.
- Page transitions:
  - Service card -> matching detail page
  - Proof mapping card -> related service or project detail
  - Bottom CTA -> Contact / Projects
- Back destination:
  - Logo -> Home
  - Breadcrumb optional on implementation, but not required in hero.
- Unauthenticated flow: fully open.
- No-dead-end rule: every cluster ends with either a service CTA or contact CTA.

## 3. Hi-Fi ASCII layout

### Desktop
```text
Header
Hero: eyebrow + H1 + subtitle + 3 service-line chips
Intro band: what this page helps you decide
3 equal service cards (primary selection surface)
Service fit matrix: who this is for / what is delivered / representative proof
Proof mapping row: Workflow examples | Japan Life Navi + Rigel | Carina
Engagement note: where services overlap and how to choose
CTA band: Contact + View Projects
```

### Mobile
```text
Header
Hero
Intro band
Service cards x3
Fit matrix as stacked cards x3
Proof mapping cards x3
Overlap note
CTA band
Footer
```

## 4. Section-by-section spec

### S1. Hero
**Final display copy**
- JA eyebrow: `Services`
- EN eyebrow: `Services`
- JA title: `目的から選べる、3つの実装ライン`
- EN title: `Choose the implementation line that fits your goal`
- JA subtitle: `Nebula Infinity のサービスは、AI Workflow、AI Application、Web3.0 / Blockchain の 3 つに整理されています。技術名ではなく、事業で何を実現したいかから選べる構成です。`
- EN subtitle: `Nebula Infinity's services are organized into three lines: AI Workflow, AI Application, and Web3.0 / Blockchain. The structure starts from business outcomes, not from technology labels.`
- JA chips / EN chips: official three service lines exactly as approved.

**Style guidance**
- Hero is narrower than Home: 8-column centered text, chips below subtitle.
- Use 1 featured service-line chip row only; no extra proof cards in hero.

**States**
- Chips may be static or anchor links; if interactive, support active and focus-visible.

**Responsive**
- Chips stack into 3 rows on mobile.

### S2. Decision intro band
**Final display copy**
- JA title: `どのラインから始めるべきか、こう考える`
- EN title: `A simple way to decide where to start`
- JA bullets:
  - `業務の属人化や運用のばらつきが課題 -> AI Workflow`
  - `使われるAIプロダクトや業務ツールを作りたい -> AI Application`
  - `台帳性・真正性・会員基盤を価値にしたい -> Web3.0 / Blockchain`
- EN bullets:
  - `If people-dependence and inconsistency are the issue -> AI Workflow`
  - `If you need an AI product or internal tool people will use -> AI Application`
  - `If traceability, authenticity, or membership infrastructure matters -> Web3.0 / Blockchain`

**Style guidance**
- Single transformation-style band with 3 large choice bullets.
- Neutral surface, 20px radius, thin gold divider line.

**States**
- Bullets can be clickable deep links to service cards.

**Responsive**
- Present as 3 stacked blocks with arrow icons removed.

### S3. Primary service card trio
**Final display copy**
- Section title JA: `3つのサービスライン`
- Section title EN: `Three service lines`

**Card 1**
- Official line: `AI Workflow Design & Development`
- JA title: `属人業務を、組織で回るフローへ`
- EN title: `Convert people-dependent work into operating flow`
- JA body: `判断、手順、レビューを整理し、AI と人が協働できる仕組みを設計・開発します。`
- EN body: `We design and build workflows where decision rules, steps, and review paths can be operated by people and AI together.`
- JA CTA: `AI Workflowを見る`
- EN CTA: `View AI Workflow`

**Card 2**
- Official line: `AI Application Design & Development`
- JA title: `AIを、使われるアプリケーションへ`
- EN title: `Turn AI into an application people use`
- JA body: `顧客向けサービス、社内ツール、新規プロダクトまで、使い勝手と実装を両立して届けます。`
- EN body: `We deliver customer-facing services, internal tools, and new products that balance usability with real implementation depth.`
- JA CTA: `AI Applicationを見る`
- EN CTA: `View AI Application`

**Card 3**
- Official line: `Web3.0 / Blockchain Application Design & Development`
- JA title: `Web3.0を、運用できるサービスへ`
- EN title: `Turn Web3.0 into an operable business service`
- JA body: `トレーサビリティ、会員基盤、デジタル資産の扱いを、事業要件に沿って設計・開発します。`
- EN body: `We design and build traceability, membership, and digital asset systems around concrete business requirements.`
- JA CTA: `Web3.0 / Blockchainを見る`
- EN CTA: `View Web3.0 / Blockchain`

**Style guidance**
- Equal-height proof snapshot cards.
- Bottom CTA aligned consistently.
- Small `Best fit for` list limited to 3 bullets per card.

**States**
- Card default / hover / focus-visible / active.
- CTA link underline animation.

**Responsive**
- 3-up desktop -> stacked mobile.
- Keep official service line readable; allow wrap after slash on Web3 card.

### S4. Service fit matrix
**Intent**
- Give practical buying clarity: who the service is for, what gets delivered, and what proof to expect.

**Final display copy**
- JA section eyebrow: `How to choose`
- EN section eyebrow: `How to choose`
- JA title: `「誰に向くか」「何を作るか」「何で証明するか」を整理する`
- EN title: `Clarify fit, deliverables, and proof`

**Matrix rows**
1. `AI Workflow Design & Development`
   - JA fit: `オペレーション責任者 / 現場改善責任者 / 業務設計担当`
   - EN fit: `Operations leads / process owners / workflow improvement teams`
   - JA deliverables: `現行業務整理 / 判断基準の明文化 / AIワークフロー設計 / 人のレビュー導線 / 連携仕様`
   - EN deliverables: `Current-state mapping / decision rules / AI workflow design / human review path / integration spec`
   - JA proof: `マルチエージェント開発ワークフロー / プロダクトリサーチワークフロー`
   - EN proof: `Multi-agent development workflow / product research workflow`
2. `AI Application Design & Development`
   - JA fit: `新規事業責任者 / プロダクトオーナー / DX推進担当`
   - EN fit: `New business leaders / product owners / digital transformation teams`
   - JA deliverables: `体験設計 / AI機能設計 / フロント・バックエンド実装 / データ連携 / 運用設計`
   - EN deliverables: `Experience design / AI feature design / frontend + backend build / data integration / operations design`
   - JA proof: `Japan Life Navi / Rigel`
   - EN proof: `Japan Life Navi / Rigel`
3. `Web3.0 / Blockchain Application Design & Development`
   - JA fit: `事業開発 / CRM責任者 / 会員基盤責任者 / Web3新規施策担当`
   - EN fit: `Business development / CRM leads / membership platform owners / Web3 initiative teams`
   - JA deliverables: `要件整理 / チェーン設計 / スマートコントラクト設計 / UI実装 / 既存サービス連携`
   - EN deliverables: `Requirements framing / chain design / smart contract architecture / UI build / existing-service integration`
   - JA proof: `Carina`
   - EN proof: `Carina`

**Style guidance**
- 3 large rows, each row a 3-column card group on desktop.
- Use small gold badge for official line.
- Fit column uses people icons, deliverable column uses list icons, proof column uses proof strip.

**States**
- If row titles anchor to detail pages, support hover/focus-visible.

**Responsive**
- Each row collapses to vertical card stack in order: fit -> deliverables -> proof.

### S5. Proof mapping cards
**Final display copy**
- JA section eyebrow: `Representative proof`
- EN section eyebrow: `Representative proof`
- JA title: `サービスごとの代表例`
- EN title: `Representative examples by service line`
- Cards:
  - `AI Workflow Design & Development` -> `代表例: マルチエージェント開発ワークフロー / プロダクトリサーチワークフロー`
  - `AI Application Design & Development` -> `代表例: Japan Life Navi / Rigel`
  - `Web3.0 / Blockchain Application Design & Development` -> `代表例: Carina`
- JA support line: `詳細な案件整理や非公開事例は、ご相談時に目的に合わせて共有します。`
- EN support line: `More detailed or non-public examples can be shared in context during discovery.`

**Style guidance**
- 3 proof snapshot cards with consistent height.
- Workflow card uses methodology illustration instead of product screenshot.
- AI Application card may show two internal mini-cards for Japan Life Navi and Rigel.

**States**
- Cards clickable.

**Responsive**
- AI Application mini-cards stack inside parent card on mobile.

### S6. Overlap / selection note
**Final display copy**
- JA title: `サービスは分断せず、必要に応じて接続する`
- EN title: `The service lines connect when the problem does`
- JA body: `たとえば、AI Workflow で業務を整理したあとに AI Application へ進むケースや、AI Application と Web3.0 / Blockchain を組み合わせて顧客体験を設計するケースもあります。Nebula Infinity は、入口は分けつつ、実装は分断しません。`
- EN body: `For example, an engagement may begin with AI Workflow and later expand into AI Application delivery, or combine AI Application with Web3.0 / Blockchain for customer experience design. We separate the entry point, not the actual implementation.`

**Style guidance**
- One wide neutral card with subtle interlinked line motif.

**States**
- Static.

**Responsive**
- Body remains max 4 lines on mobile.

### S7. CTA band
**Final display copy**
- JA title: `どのラインから始めるべきか、相談しながら決められます`
- EN title: `You can decide the starting line with us`
- JA body: `現場課題、プロダクト構想、Web3施策の検討段階でも構いません。まずは背景を共有してください。`
- EN body: `Whether you are dealing with an operational issue, a product concept, or an early Web3 initiative, we can help define the right entry point.`
- JA primary CTA: `お問い合わせ`
- EN primary CTA: `Contact Us`
- JA secondary CTA: `実績を見る`
- EN secondary CTA: `View Projects`

**Style guidance**
- Same featured CTA band pattern as Home.

**States**
- Primary + secondary CTA states required.

**Responsive**
- Buttons stack on mobile.

## 5. Global states
- Service cards: default / hover / focus-visible / active.
- Chips or anchors: default / hover / active / focus-visible.
- CTA buttons: default / hover / pressed / focus-visible / disabled.

## 6. Responsive summary
- Keep clear scan order: decide -> compare -> verify -> contact.
- On mobile, do not attempt horizontal tabs; stacked sections are safer and clearer.

# Visual Spec — Projects / Cases Index

## 1. Page role
- Primary goal: show representative proof across workflow cases, AI application cases, and Web3 cases.
- Audience: prospects validating credibility before inquiry.
- Primary action: move into a relevant case or contact.
- Secondary action: move to services.

## 2. Header / navigation flow
- Header: global shell.
- Transitions:
  - Filter chips -> filter within page
  - Workflow example cards -> Contact or anchored explanation
  - Japan Life Navi / Rigel / Carina -> project detail routes
  - Bottom CTA -> Contact / Services
- Back destination: Home or Services through global nav.
- Unauthenticated flow: fully open.
- No-dead-end rule: every case cluster ends with an applicable CTA.

## 3. Hi-Fi ASCII layout

### Desktop
```text
Header
Hero: title + subtitle + filter chips
Intro note: how to read proof on this page
Workflow cases section (2 cards)
AI application section (Japan Life Navi + Rigel)
Web3 section (Carina + capability note)
Inquiry note: more cases can be shared in context
CTA band
```

### Mobile
```text
Header
Hero
Filter chips scroll-safe wrap
Intro note
Workflow cards x2
AI Application cards x2
Web3 card + note
Inquiry note
CTA band
```

## 4. Section-by-section spec

### S1. Hero
**Final display copy**
- JA eyebrow: `Projects / Cases`
- EN eyebrow: `Projects / Cases`
- JA title: `代表例で見る、Nebula Infinity の実装領域`
- EN title: `Representative proof across Nebula Infinity's delivery scope`
- JA subtitle: `このページでは、AI Workflow、AI Application、Web3.0 / Blockchain の3領域ごとに、公開できる代表例を整理して紹介します。`
- EN subtitle: `This page organizes the public representative examples across AI Workflow, AI Application, and Web3.0 / Blockchain.`
- JA filter chips:
  - `すべて`
  - `AI Workflow`
  - `AI Application`
  - `Web3.0 / Blockchain`
- EN filter chips:
  - `All`
  - `AI Workflow`
  - `AI Application`
  - `Web3.0 / Blockchain`

**Style guidance**
- Hero centered, chips below subtitle.
- Chips are real filter controls; active state required.

**States**
- Filter chips: default / hover / active / focus-visible.

**Responsive**
- Chips wrap cleanly; avoid horizontal overflow.

### S2. Intro note
**Final display copy**
- JA title: `公開事例は一部です`
- EN title: `Public proof is only part of the picture`
- JA body: `公開できる範囲の実績を厳選して掲載しています。ワークフロー系の事例は、守秘性の高い業務要件を含むため、代表例として構造化して紹介します。`
- EN body: `We show a focused set of public proof. Workflow-oriented cases often involve sensitive operational logic, so they are presented here as structured representative examples.`

**Style guidance**
- One neutral info card with info icon.

**States**
- Static.

**Responsive**
- Single-column only.

### S3. Workflow cases
**Final display copy**
- JA eyebrow: `AI Workflow Design & Development`
- EN eyebrow: `AI Workflow Design & Development`
- JA title: `代表的なワークフロー資産化の例`
- EN title: `Representative workflow assetization examples`
- JA subtitle: `現在の公開例は、AI Workflow の提供範囲を限定するものではありません。`
- EN subtitle: `The current public examples do not define the boundary of the AI Workflow service.`

**Workflow card 1**
- JA title: `マルチエージェント開発ワークフロー`
- EN title: `Multi-agent development workflow`
- JA summary: `要件整理から設計、実装、テストまで、役割分担とレビューの流れを組み立てたワークフロー設計の代表例。`
- EN summary: `A representative workflow design example covering role allocation and review flow across requirements, design, implementation, and testing.`
- JA proof strip: `Role design / Review gates / Reusable handoff`
- EN proof strip: same values
- JA CTA: `この類型を相談する`
- EN CTA: `Discuss this workflow type`

**Workflow card 2**
- JA title: `プロダクトリサーチワークフロー`
- EN title: `Product research workflow`
- JA summary: `市場、競合、ユーザー情報を収集・比較・要約し、意思決定に渡す流れを設計した代表例。`
- EN summary: `A representative example for collecting, comparing, and synthesizing market, competitor, and user inputs into decision-ready output.`
- JA proof strip: `Collection / Synthesis / Decision input`
- EN proof strip: same values
- JA CTA: `この類型を相談する`
- EN CTA: `Discuss this workflow type`

**Style guidance**
- Two proof snapshot cards with `Representative Example` badge.
- CTA goes to Contact with service preselected when possible.

**States**
- Cards clickable; full hover/focus-visible states.

**Responsive**
- Cards stack vertically.

### S4. AI application cases
**Final display copy**
- JA eyebrow: `AI Application Design & Development`
- EN eyebrow: `AI Application Design & Development`
- JA title: `AIアプリケーションの代表実績`
- EN title: `Representative AI application cases`
- JA cards:
  - `Japan Life Navi` — `336 Guides / 7 Languages / 6 AI Agents`
  - `Rigel` — `33,000+ LOC / 367 Tests / 18 API Endpoints / 6 Industries`
- JA support note: `AIの機能を実装するだけでなく、使われる体験として成立させた例として紹介します。`
- EN support note: `These cases show not only AI feature delivery, but product experiences that work as real applications.`

**Style guidance**
- Two featured proof cards with screenshot area.
- Use same card height and proof strip placement.

**States**
- Cards clickable; full states.

**Responsive**
- Stack cards; keep proof strip visible above CTA.

### S5. Web3 case
**Final display copy**
- JA eyebrow: `Web3.0 / Blockchain Application Design & Development`
- EN eyebrow: `Web3.0 / Blockchain Application Design & Development`
- JA title: `Web3.0 / Blockchain の代表実績`
- EN title: `Representative Web3.0 / Blockchain proof`
- JA card title: `Carina`
- EN card title: `Carina`
- JA summary: `ポイント、クーポン、会員証をブロックチェーン基盤で扱う CRM。Web3.0 を顧客体験と運用へ接続した代表例です。`
- EN summary: `A CRM that handles points, coupons, and membership on blockchain infrastructure. It demonstrates Web3.0 connected to customer experience and operations.`
- JA proof strip: `Retail CRM / Membership / Traceability`
- EN proof strip: same values
- JA support note: `Nebula Infinity の Web3.0 提供価値は、Carina だけに限定されません。会員基盤、証跡、デジタル資産設計全般に展開できます。`
- EN support note: `Nebula Infinity's Web3.0 capability extends beyond Carina into broader membership, traceability, and digital asset design.`
- JA CTA: `Carina 詳細`
- EN CTA: `View Carina`

**Style guidance**
- One featured proof card + one adjacent note card on desktop.
- Note card uses light neutral surface.

**States**
- Proof card clickable.

**Responsive**
- Card first, note second on mobile.

### S6. Inquiry note
**Final display copy**
- JA title: `非公開事例や近い業種の例は、ご相談時に共有します`
- EN title: `More private or industry-specific examples can be shared during discovery`
- JA body: `公開情報だけでは判断しづらい場合は、想定業務や対象ユーザーに近い実績の見せ方でご案内します。`
- EN body: `If public proof is not enough to judge fit, we can share examples framed around similar operations, users, or business requirements.`

**Style guidance**
- One wide neutral card with subtle envelope/doc icon.

**States**
- Static.

**Responsive**
- Single-column.

### S7. CTA band
**Final display copy**
- JA title: `近い課題や構想があれば、代表例をもとに整理できます`
- EN title: `If your situation is similar, we can use these examples to structure the next step`
- JA body: `AI Workflow、AI Application、Web3.0 / Blockchain のどれに近いか分からない段階でも構いません。背景から一緒に整理します。`
- EN body: `Even if you are not sure whether the problem is closer to AI Workflow, AI Application, or Web3.0 / Blockchain, we can help structure it from the background.`
- JA primary CTA: `お問い合わせ`
- EN primary CTA: `Contact Us`
- JA secondary CTA: `サービスを見る`
- EN secondary CTA: `View Services`

**Style guidance**
- Featured CTA band.

**States**
- Both buttons full states.

**Responsive**
- Buttons stack on mobile.

## 5. Global state checklist
- Filter chips: default / hover / active / focus-visible.
- Case cards: default / hover / focus-visible.
- CTA buttons: default / hover / pressed / focus-visible / disabled.

## 6. Responsive summary
- Keep filter chips touch-friendly at 44px min height.
- On mobile, show workflow examples before product cases to preserve taxonomy breadth.

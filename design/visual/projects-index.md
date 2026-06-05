# Visual Spec — Projects / Cases Index

**Status:** Canonical V1 Projects/Cases visual/copy spec after service-model rewrite
**Route:** `/[lang]/projects`

## 1. Page role

- Primary goal: show representative proof across workflow cases, AI application cases, and AI-driven development cases.
- Audience: prospects validating credibility before inquiry.
- Primary action: move into a relevant case or contact.
- Secondary action: move to Home Services anchor for service selection.
- Active Home proof trio and highlighted project set: **Japan Life Navi / Rigel / Astra**.
- Carina and Web3 / Blockchain proof are retired from active project proof requirements and must not be rendered as active filters, sections, cards, route requirements, or sitemap/static-param expectations.

## 2. Header / navigation flow

- Header: global shell.
- Transitions:
  - Filter chips → filter within page.
  - Workflow example cards → Contact or anchored explanation.
  - Japan Life Navi / Rigel / Astra → project detail routes.
  - Bottom CTA → Contact / Home Services anchor.
- Back destination for service selection: `/[lang]/#services`, not `/[lang]/services`.
- Unauthenticated flow: fully open.
- No-dead-end rule: every case cluster ends with an applicable CTA or project detail link.
- Project slugs: Coder must resolve exact slugs from `data/projects` and current dynamic routing before coding card links; do not hard-code unverified slugs.

## 3. Hi-Fi ASCII layout

### Desktop
```text
Header
Hero: title + subtitle + filter chips
Intro note: how to read proof on this page
Workflow cases section (2 representative cards)
AI application section (Japan Life Navi + Rigel)
AI-driven development section (Astra + methodology note)
Inquiry note: more cases can be shared in context
CTA band: Contact + Back to Home Services
```

### Mobile
```text
Header
Hero
Filter chips wrap cleanly
Intro note
Workflow cards x2
AI Application cards x2
AI-Driven Development: Astra card + note
Inquiry note
CTA band stacked
```

## 4. Section-by-section spec

### S1. Hero

**Final display copy**
- JA eyebrow: `Projects / Cases`
- EN eyebrow: `Projects / Cases`
- JA title: `代表例で見る、Nebula Infinity の実装領域`
- EN title: `Representative proof across Nebula Infinity's delivery scope`
- JA subtitle: `このページでは、AI Workflow、AI Application、AI-Driven Development の3領域ごとに、公開できる代表例を整理して紹介します。`
- EN subtitle: `This page organizes public representative examples across AI Workflow, AI Application, and AI-Driven Development.`
- JA filter chips:
  - `すべて`
  - `AI Workflow`
  - `AI Application`
  - `AI-Driven Development`
- EN filter chips:
  - `All`
  - `AI Workflow`
  - `AI Application`
  - `AI-Driven Development`

**Style guidance**
- Hero centered, chips below subtitle.
- Chips are real filter controls; active state required.
- Do not include a Web3 / Blockchain filter chip.

**States**
- Filter chips: default / hover / active / focus-visible / disabled if data is unavailable.

**Responsive**
- Chips wrap cleanly; avoid horizontal overflow.
- Minimum touch target: 44px height.

### S2. Intro note

**Final display copy**
- JA title: `公開事例は一部です`
- EN title: `Public proof is only part of the picture`
- JA body: `公開できる範囲の実績を厳選して掲載しています。ワークフロー系や開発体制の事例は、守秘性の高い業務要件を含むため、代表例として構造化して紹介します。`
- EN body: `We show a focused set of public proof. Workflow-oriented and delivery-methodology cases often involve sensitive operational logic, so they are presented here as structured representative examples.`

**Style guidance**
- One neutral info card with info icon.
- White surface, `#E4E4E7` border, 16px radius, 24-32px padding.

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
- JA CTA: `この類型を相談する` → `/[lang]/contact`
- EN CTA: `Discuss this workflow type` → `/[lang]/contact`

**Workflow card 2**
- JA title: `プロダクトリサーチワークフロー`
- EN title: `Product research workflow`
- JA summary: `市場、競合、ユーザー情報を収集・比較・要約し、意思決定に渡す流れを設計した代表例。`
- EN summary: `A representative example for collecting, comparing, and synthesizing market, competitor, and user inputs into decision-ready output.`
- JA proof strip: `Collection / Synthesis / Decision input`
- EN proof strip: same values
- JA CTA: `この類型を相談する` → `/[lang]/contact`
- EN CTA: `Discuss this workflow type` → `/[lang]/contact`

**Style guidance**
- Two proof snapshot cards with `Representative Example` badge.
- CTA goes to Contact with service preselected when possible; if no preselect exists, plain Contact link is acceptable.

**States**
- Cards clickable if implemented as links: default / hover / active / focus-visible.
- CTA links: default / hover underline / pressed / focus-visible.

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

**Proof card — Japan Life Navi**
- JA summary: `在日外国人向け生活支援アプリ。多言語コンテンツ、領域特化AI、リアルタイム対話、画像分析を一つの体験として実装。`
- EN summary: `A life-support app for foreign residents in Japan that brings multilingual content, domain-specific AI, real-time interaction, and image analysis into one experience.`
- JA CTA: `Japan Life Navi 詳細` → `/[lang]/projects/{slug}`
- EN CTA: `View Japan Life Navi` → `/[lang]/projects/{slug}`

**Proof card — Rigel**
- JA summary: `AI記帳SaaS。業務知識、制度対応、OCR、UX、バックエンド品質まで含めて成立させたプロダクト。`
- EN summary: `An AI bookkeeping SaaS that proves delivery across domain logic, regulation support, OCR, user experience, and backend quality.`
- JA CTA: `Rigel 詳細` → `/[lang]/projects/{slug}`
- EN CTA: `View Rigel` → `/[lang]/projects/{slug}`

**Style guidance**
- Two featured proof cards with screenshot/abstract product frame area.
- Use same card height and proof strip placement.
- If screenshots are unavailable or unapproved, use abstract system frames consistent with the Light Premium Bento brand.

**States**
- Cards clickable; full default / hover / active / focus-visible states.

**Responsive**
- Stack cards; keep proof strip visible above CTA.

### S5. AI-driven development case

**Final display copy**
- JA eyebrow: `AI-Driven Development`
- EN eyebrow: `AI-Driven Development`
- JA title: `AI駆動開発の代表実績`
- EN title: `Representative AI-driven development proof`
- JA card title: `Astra`
- EN card title: `Astra`
- JA summary: `AIエージェントを組み込んだ開発プロセスと品質ゲートを使い、短いサイクルで検証・改善を回す AI-Driven Development の代表実績です。構想を動く実装へ近づける開発体制そのものを示します。`
- EN summary: `A representative AI-Driven Development proof using AI-agent-assisted delivery processes and quality gates to run short validation and improvement cycles. It demonstrates the delivery system that moves an idea toward working implementation.`
- JA proof strip: `Agentic workflow / Quality gates / Iterative delivery`
- EN proof strip: same values
- JA support note: `Astra は、Carina の置き換えとして Home と Projects のアクティブ proof に入ります。Carina は現行V1の active proof ではありません。`
- EN support note: `Astra replaces Carina in the active Home and Projects proof set. Carina is not active V1 proof.`
- JA CTA: `Astra 詳細` → `/[lang]/projects/{slug}`
- EN CTA: `View Astra` → `/[lang]/projects/{slug}`

**Style guidance**
- One featured proof card + one adjacent methodology note card on desktop.
- Use Light Premium Bento surfaces, a subtle gold connector, and no speculative/Web3 visual motifs.
- The methodology note explains the delivery model, not a separate service taxonomy.

**States**
- Proof card clickable: default / hover / active / focus-visible.
- If Astra slug is unavailable, Coder must resolve data/routing first or raise a blocker; do not silently disable the card.

**Responsive**
- Card first, note second on mobile.
- Proof strip wraps if needed.

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
- JA body: `AI Workflow、AI Application、AI-Driven Development のどれに近いか分からない段階でも構いません。背景から一緒に整理します。`
- EN body: `Even if you are not sure whether the problem is closer to AI Workflow, AI Application, or AI-Driven Development, we can help structure it from the background.`
- JA primary CTA: `お問い合わせ` → `/[lang]/contact`
- EN primary CTA: `Contact Us` → `/[lang]/contact`
- JA secondary CTA: `サービスを見る` → `/[lang]/#services`
- EN secondary CTA: `View Services` → `/[lang]/#services`

**Style guidance**
- Featured CTA band, 20px radius, gold-tinted wash, 48px desktop padding.
- Secondary CTA returns to Home Services anchor, not a removed Services index.

**States**
- Both buttons: default / hover / pressed / focus-visible / disabled.

**Responsive**
- Buttons stack on mobile.

## 5. Global state checklist

- Filter chips: default / hover / active / focus-visible.
- Case cards: default / hover / active / focus-visible.
- CTA buttons: default / hover / pressed / focus-visible / disabled.
- Static notes do not require loading/error states.
- Do not implement a Web3 / Blockchain filter, section, proof card, or Carina active card.
- Project detail cards require resolved slugs before coding.

## 6. Responsive summary

- Keep filter chips touch-friendly at 44px min height.
- On mobile, show workflow examples before product cases to preserve taxonomy breadth.
- Maintain order: Workflow → AI Application → AI-Driven Development.
- Keep Astra visible as the third active proof line and ensure it does not inherit retired Carina/Web3 copy.

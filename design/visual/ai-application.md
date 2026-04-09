# Visual Spec — AI Application Detail

## 1. Page role
- Primary goal: position Nebula Infinity as a partner that designs and builds real AI applications, with proof centered on Japan Life Navi and Rigel.
- Audience: product owners, founders, innovation teams, internal tool owners.
- Primary action: inquiry about AI application design and development.
- Secondary action: review proof cases.

## 2. Header / navigation flow
- Header: global shell.
- Breadcrumb: Home / Services / AI Application.
- Transitions:
  - Hero CTA -> Contact
  - Proof cards -> case detail routes for Japan Life Navi and Rigel
  - Sibling service switcher -> other service detail pages
- Back destination: Services index.
- Unauthenticated flow: fully open.

## 3. Hi-Fi ASCII layout

### Desktop
```text
Header
Breadcrumb
Hero: official line + promise + CTA + capability chips
Use-case section: internal tools / customer products / AI copilots / knowledge apps
Build scope grid: UX / model integration / data / backend / operations
Proof section: Japan Life Navi + Rigel featured cards
Capability section: RAG / multimodal / streaming / admin tools / integrations
Step rail
CTA band
```

### Mobile
```text
Header
Breadcrumb
Hero
Use-case cards x4
Build scope cards x5
Japan Life Navi card
Rigel card
Capability cards x5
Step rail vertical
CTA band
```

## 4. Section-by-section spec

### S1. Hero
**Final display copy**
- JA eyebrow: `AI Application Design & Development`
- EN eyebrow: `AI Application Design & Development`
- JA title: `AIを、使われるアプリケーションへ`
- EN title: `Turn AI into applications people actually use`
- JA subtitle: `Nebula Infinity は、AI の機能実装だけではなく、体験設計、データ連携、業務との接続まで含めて、現場で使われるアプリケーションとして設計・開発します。`
- EN subtitle: `Nebula Infinity goes beyond AI feature implementation. We design and build applications that people actually use by connecting experience design, data, and operational context.`
- JA capability chips:
  - `Customer-facing products`
  - `Internal tools`
  - `RAG / Multimodal / Realtime`
- EN capability chips: same values
- JA primary CTA: `この領域を相談する`
- EN primary CTA: `Discuss this service`
- JA secondary CTA: `代表実績を見る`
- EN secondary CTA: `View proof cases`
- Illustration alt JA: `複数のUI面とAI処理レイヤーが連携するアプリケーション構成図`
- Illustration alt EN: `Application architecture illustration showing UI surfaces linked to AI processing layers`

**Style guidance**
- Hero right side can use stacked mock UI cards rather than abstract-only illustration.
- Keep visuals light and product-oriented, not dashboard-noise heavy.

**States**
- CTA full state set.

**Responsive**
- UI mock cards reduce to one stacked visual on mobile.

### S2. Typical application use cases
**Final display copy**
- JA title: `こんなAIアプリケーションに向いています`
- EN title: `Typical application shapes we support`
- JA cards:
  1. `顧客向けAIサービス` — `相談、検索、提案、ガイドを提供するプロダクト`
  2. `社内業務ツール` — `業務判断や情報整理を支援する内部アプリケーション`
  3. `AIコパイロット` — `専門業務に沿って回答・提案・生成を行う支援体験`
  4. `ナレッジ活用アプリ` — `社内文書や蓄積知識を検索・要約・再利用する仕組み`
- EN cards:
  1. `Customer AI services` — `Products that guide, answer, search, or recommend for end users`
  2. `Internal operation tools` — `Applications that support judgment and information handling inside the business`
  3. `AI copilots` — `Guided experiences that answer, generate, and recommend around domain-specific work`
  4. `Knowledge applications` — `Systems that search, summarize, and reuse internal documents and know-how`

**Style guidance**
- 4 compact cards, icon-led.
- Avoid suggesting the service is only chatbots; vary icons and copy.

**States**
- Optional hover.

**Responsive**
- 2x2 desktop, 1-column mobile.

### S3. What we build
**Final display copy**
- JA eyebrow: `Build scope`
- EN eyebrow: `Build scope`
- JA title: `Nebula Infinity が担う設計・開発範囲`
- EN title: `What Nebula Infinity takes responsibility for`
- JA cards:
  1. `体験設計` — `ユーザーが迷わず価値に到達できるUI / UXを設計します。`
  2. `AI機能設計` — `検索、生成、要約、判定、推薦などの体験を要件に合わせて構成します。`
  3. `データ連携` — `社内データ、外部API、既存システムと接続します。`
  4. `実装` — `フロントエンド、バックエンド、モデル連携まで一体で構築します。`
  5. `運用設計` — `管理画面、改善サイクル、ログの見方まで含めて整えます。`
- EN cards:
  1. `Experience design` — `We design UI and UX that make the value easy to reach.`
  2. `AI feature design` — `We shape retrieval, generation, summarization, classification, and recommendation around the goal.`
  3. `Data integration` — `We connect internal data, external APIs, and existing systems.`
  4. `Implementation` — `We build frontend, backend, and model integration as one delivery flow.`
  5. `Operational design` — `We include admin surfaces, logging, and the improvement loop.`

**Style guidance**
- 5-card bento, with implementation card featured in center or first row.
- Use proof-like language, not generic feature dumping.

**States**
- Static or light hover.

**Responsive**
- Stack all cards; keep copy concise.

### S4. Representative proof
**Final display copy**
- JA eyebrow: `Proof`
- EN eyebrow: `Proof`
- JA title: `代表実績で見る、AI Application の実装力`
- EN title: `Proof of AI application delivery`
- JA subtitle: `Japan Life Navi と Rigel は、Nebula Infinity が AI アプリケーションを設計・開発し、実用レベルまで形にできることを示す代表例です。`
- EN subtitle: `Japan Life Navi and Rigel are the clearest proof that Nebula Infinity can design and deliver AI applications at practical quality.`

**Proof card 1 — Japan Life Navi**
- JA summary: `在日外国人向け生活支援アプリ。多言語コンテンツ、領域特化AI、リアルタイム対話、画像分析を一つの体験として実装。`
- EN summary: `A life-support app for foreign residents in Japan that brings multilingual content, domain-specific AI, real-time interaction, and image analysis into one experience.`
- JA proof strip: `336 Guides / 7 Languages / 6 AI Agents`
- EN proof strip: same values
- JA CTA: `Japan Life Navi 詳細`
- EN CTA: `View Japan Life Navi`

**Proof card 2 — Rigel**
- JA summary: `AI記帳SaaS。業務知識、制度対応、OCR、UX、バックエンド品質まで含めて成立させたプロダクト。`
- EN summary: `An AI bookkeeping SaaS that proves delivery across domain logic, regulation support, OCR, user experience, and backend quality.`
- JA proof strip: `33,000+ LOC / 367 Tests / 18 API Endpoints / 6 Industries`
- EN proof strip: same values
- JA CTA: `Rigel 詳細`
- EN CTA: `View Rigel`

**Style guidance**
- Two featured proof snapshot cards.
- Include screenshot frame placeholder area above summary if implementation uses actual product images.

**States**
- Cards clickable; support full hover/focus-visible states.

**Responsive**
- Cards stack vertically; proof strip wraps into two rows if needed.

### S5. Capability modules
**Final display copy**
- JA title: `実装できる主要モジュール`
- EN title: `Key capability modules we can implement`
- JA modules:
  - `RAG / ナレッジ検索`
  - `マルチモーダル入力`
  - `リアルタイム応答`
  - `管理・運用画面`
  - `外部システム連携`
- EN modules:
  - `RAG / knowledge retrieval`
  - `Multimodal input`
  - `Real-time response`
  - `Admin and operations UI`
  - `External system integration`
- JA support copy: `必要なモジュールだけを組み合わせ、使われる体験として成立する形まで設計します。`
- EN support copy: `We combine only the modules that matter and shape them into an experience people will actually use.`

**Style guidance**
- 5 narrow cards with micro diagrams/icons.

**States**
- Optional hover only.

**Responsive**
- 2-column tablet, 1-column mobile.

### S6. Step rail
**Final display copy**
- JA title: `進め方`
- EN title: `How engagements move`
- JA steps:
  1. `目的と利用者を定める`
  2. `体験とAI機能を設計する`
  3. `実装して検証する`
  4. `運用へつなぐ`
- EN steps:
  1. `Define goal and users`
  2. `Design the UX and AI behavior`
  3. `Implement and validate`
  4. `Connect to operations`

**Style guidance**
- Step Rail pattern.

**States**
- Static.

**Responsive**
- Vertical on mobile.

### S7. CTA band
**Final display copy**
- JA title: `AIアプリケーションの構想段階から相談できます`
- EN title: `You can engage us from the application concept stage`
- JA body: `新規プロダクト、社内ツール、既存サービスへのAI機能追加まで、どの段階でもご相談ください。`
- EN body: `From new products to internal tools and AI expansion inside an existing service, we can work with you at any stage.`
- JA primary CTA: `お問い合わせ`
- EN primary CTA: `Contact Us`
- JA secondary CTA: `サービス一覧へ`
- EN secondary CTA: `Back to Services`

**Style guidance**
- Featured CTA band.

**States**
- Full button states.

**Responsive**
- Stack actions on mobile.

## 5. Global state checklist
- Proof cards: default / hover / focus-visible.
- CTA buttons: default / hover / pressed / focus-visible / disabled.
- Breadcrumb links: default / hover / focus-visible.

## 6. Responsive summary
- Ensure proof arrives before capability module overflow on mobile.
- Keep the product tone stronger than the technology tone throughout.

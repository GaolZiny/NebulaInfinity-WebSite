# Visual Spec — Home

**Status:** Canonical V1 Home visual spec for the approved Home-led IA
**Route:** `/[lang]/`
**Canonical section order (exact):** Hero → Why assetization → Services(#services) → Process → About(#about) → Contact CTA

## 1. Page role and IA contract

- Primary goal: make Nebula Infinity's V1 positioning understandable in one visit, then route qualified visitors to Contact or the correct service detail page.
- Audience: founders, directors, operations leads, product owners, CIO/CTO, and innovation teams.
- Primary action: `/[lang]/contact`.
- Secondary action: `/[lang]/#services` for service selection.
- Home owns the V1 Services and About overview as anchors:
  - `#services` is the primary service-selection surface.
  - `#about` is the compact company overview surface.
- Standalone `/[lang]/services` index and `/[lang]/about` page are deleted / stop-exported surfaces. Do not design thin compatibility pages for them.
- Static export constraint: this IA must not depend on Next.js middleware, server redirects, SSR-only behavior, or server-side compatibility routes. If legacy traffic ever matters, hosting-level redirects are a separate future deployment/config task.

## 2. Header, mobile nav, and link behavior

| Nav item | JA label | Target |
|---|---|---|
| Home | `ホーム` | `/[lang]/` |
| Services | `サービス` | `/[lang]/#services` |
| Projects | `プロジェクト` | `/[lang]/projects` |
| About | `会社概要` | `/[lang]/#about` |
| Contact | `お問い合わせ` | `/[lang]/contact` |

Required behavior:
- Header and mobile menu use the same targets above.
- Desktop header and mobile menu use the same targets above.
- Logo and Home return to `/[lang]/`.
- Header/mobile `サービス` never links to `/[lang]/services`.
- Header/mobile `会社概要` never links to `/[lang]/about`.
- Hero primary CTA → `/[lang]/contact`.
- Hero secondary CTA → `/[lang]/#services`.
- Home service card detail CTAs → `/[lang]/services/{serviceId}`.
- Footer CTA → `/[lang]/contact`.
- Footer, CTA data, sitemap, language switch data, and metadata must not emit standalone `/[lang]/services` or `/[lang]/about` links.

Anchor accessibility:
- Implement `#services` as `<section id="services" aria-labelledby="home-services-heading">` with a visible `<h2 id="home-services-heading">`.
- Implement `#about` as `<section id="about" aria-labelledby="home-about-heading">` with a visible `<h2 id="home-about-heading">`.
- Both anchors need sticky-header-safe offset: `scroll-margin-top: calc(var(--header-height, 80px) + 24px)` or equivalent.
- If anchor navigation programmatically focuses the section, use `tabindex="-1"` on the section and preserve visible focus styling.

## 3. Hi-Fi ASCII layout

### Desktop
```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Header: Logo | Home Services Projects About Contact | JA/EN | Contact CTA  │
│              Services -> /[lang]/#services | About -> /[lang]/#about       │
├──────────────────────────────────────────────────────────────────────────────┤
│ HERO                                                                         │
│ ┌───────────────────────────────7 cols────────────────┬──────5 cols───────┐ │
│ │ Eyebrow: AI社会実装のパートナー                       │ Value panel 01    │ │
│ │ H1: 「AI」を、現場の「即戦力」へ                       │ 属人業務を仕組みに │ │
│ │ Body copy                                            ├───────────────────┤ │
│ │ [お問い合わせ] [サービスを見る -> #services]           │ Value panel 02    │ │
│ │ Trust chips: Workflow / AI App / Web3.0              │ MVPから実装まで   │ │
│ └──────────────────────────────────────────────────────┼───────────────────┤ │
│                                                        │ Value panel 03    │ │
│                                                        │ AI + Web3を一貫支援│ │
│                                                        └───────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────┤
│ WHY ASSETIZATION                                                             │
│ Current state -> System design -> Business outcome                           │
├──────────────────────────────────────────────────────────────────────────────┤
│ SERVICES (#services landmark)                                                │
│ Choice guide band                                                            │
│ [AI Workflow] [AI Application] [Web3.0 / Blockchain]                         │
│ each card: fit bullets + compact proof line + detail CTA                     │
├──────────────────────────────────────────────────────────────────────────────┤
│ PROCESS                                                                      │
│ 課題整理 -> 設計 -> MVP / 実装 -> 定着支援                                     │
├──────────────────────────────────────────────────────────────────────────────┤
│ ABOUT (#about landmark)                                                      │
│ Company snapshot + working principles only                                   │
├──────────────────────────────────────────────────────────────────────────────┤
│ CONTACT CTA                                                                  │
│ 要件が固まっていなくても相談できる                                            │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile
```text
Header
Hero copy
Primary CTA
Secondary CTA -> #services
Value panels x3
Why assetization flow panel
Services #services heading
Choice guide rows x3
Service cards x3
Process rail as vertical steps
About #about heading
Company snapshot rows
Working principle cards
Contact CTA
Footer
```

## 4. Section-by-section spec

### S1. Hero

**Intent**
- Establish the approved positioning within the first screen.
- Make the site feel premium, structured, and business-ready rather than experimental.
- Send service-intent visitors to the Home Services anchor, not a removed Services index.

**Final display copy**
- JA eyebrow: `AI社会実装のパートナー`
- EN eyebrow: `AI Social Implementation Partner`
- JA title: `「AI」を、現場の「即戦力」へ`
- EN title: `Turn AI into front-line capability`
- JA body: `Nebula Infinity は、AI Workflow、AI Application、Web3.0 / Blockchain の設計と開発を通じて、構想を実務で使える仕組みに変えます。属人化したノウハウを整理し、運用できる形で実装し、事業の中で機能する状態まで伴走します。`
- EN body: `Nebula Infinity designs and builds AI workflows, AI applications, and Web3.0 / blockchain products that work in real operations. We turn people-dependent know-how into systems your team can own, reuse, and scale.`
- JA primary CTA: `お問い合わせ` → `/[lang]/contact`
- EN primary CTA: `Contact Us` → `/[lang]/contact`
- JA secondary CTA: `サービスを見る` → `/[lang]/#services`
- EN secondary CTA: `View Services` → `/[lang]/#services`
- Trust chips, exactly:
  - `AI Workflow Design & Development`
  - `AI Application Design & Development`
  - `Web3.0 / Blockchain Application Design & Development`
- JA value panel 01 title: `属人業務を、仕組みに`
- JA value panel 01 body: `担当者依存の判断や手順を整理し、再利用できる運用資産へ変えます。`
- JA value panel 02 title: `MVPから実装まで`
- JA value panel 02 body: `課題整理、設計、試作、実装、定着支援まで一気通貫で伴走します。`
- JA value panel 03 title: `AI + Web3を一貫支援`
- JA value panel 03 body: `AI活用とWeb3.0活用を、分断せず事業要件に合わせて設計します。`
- EN value panels:
  - `From people-dependence to systems` / `We convert individual know-how into repeatable operational assets.`
  - `From MVP to implementation` / `We support discovery, design, prototyping, build, and rollout as one flow.`
  - `AI + Web3 under one partner` / `We design AI and Web3 initiatives around business requirements, not hype.`
- Illustration alt:
  - JA: `業務知識が整理され、運用可能なワークフローとプロダクトに変わる様子を示す抽象図`
  - EN: `Abstract system diagram showing operational knowledge becoming structured workflows and products`

**Component style guidance**
- Background: subtle radial wash from `#FFFFFF` to `#F8FAFC`, with a faint `#CA8A04` gold highlight in the top-right only.
- Left content width: 7 columns, max 620px.
- Right value stack: 3 featured cards, 16-20px radius, white surface, Level 2 shadow, thin gold top border.
- Eyebrow: Overline token, gold text.
- Title: Display / Hero XL, 64px desktop / 40px mobile, max 2 lines desktop and 3 lines mobile.
- CTA row: primary gold button + secondary outline button, 16px gap desktop / 12px mobile.
- Trust chips: soft neutral pills with ink text; do not use multi-color AI tags.

**Required states**
- Primary CTA: default / hover / pressed / focus-visible / disabled.
- Secondary CTA: default / hover / pressed / focus-visible / disabled.
- Value panels: default / hover with slight lift.
- Header links and language toggle: default / hover / active / focus-visible.

**Responsive notes**
- On tablet and below, value panels stack under CTA.
- Trust chips become 2 rows on tablet and a single-column list on narrow mobile.
- Secondary CTA remains visible above the fold when practical because it is the main path to `#services`.

### S2. Why assetization

**Intent**
- Explain that Nebula Infinity is not only introducing AI; it designs operating systems that preserve and reuse know-how.

**Final display copy**
- JA section eyebrow: `Why assetization matters`
- EN section eyebrow: `Why assetization matters`
- JA title: `「導入」より先に、「定着する仕組み」を設計する`
- EN title: `Design the operating system before introducing the tool`
- JA subtitle: `AI 導入が止まる理由の多くは、技術そのものではなく、現場の判断基準や業務知識が人に閉じていることにあります。Nebula Infinity は、その知見を運用可能な形に整理し、再現性のある仕組みに変えます。`
- EN subtitle: `AI projects often stall not because of the model, but because decision logic and operational know-how live inside individuals. We turn that knowledge into systems the organization can operate.`
- JA column 1 label: `Current state`
- JA column 1 bullets:
  - `担当者ごとに判断がばらつく`
  - `引き継ぎに時間がかかる`
  - `AI を入れても運用に乗らない`
- JA column 2 label: `System design`
- JA column 2 bullets:
  - `判断基準と手順を可視化する`
  - `AI と人の役割分担を設計する`
  - `レビュー導線と改善ログを残す`
- JA column 3 label: `Business outcome`
- JA column 3 bullets:
  - `再現性のある実務フローになる`
  - `組織で引き継げる資産になる`
  - `品質と速度を両立できる`
- EN columns:
  - `Current state`: `Decisions vary by operator` / `Handoffs take too long` / `AI never sticks in operations`
  - `System design`: `Make decision rules visible` / `Define human + AI roles` / `Keep review paths and improvement logs`
  - `Business outcome`: `Repeatable operational flow` / `Transferable organizational asset` / `Better speed with maintained quality`

**Component style guidance**
- Use a reusable Transformation Flow Panel: white surface, `#E4E4E7` border, 20px radius, 32px desktop padding.
- 3 equal columns on desktop, stacked cards on mobile.
- Column headers use H4; bullets use Body S with check/node icons.
- Connector line in subtle gold between columns.

**Required states**
- Static panel by default.
- If columns become links, support hover and focus-visible.

**Responsive notes**
- Mobile order remains Current state → System design → Business outcome.
- Connector becomes a vertical line between stacked panels.

### S3. Services (#services)

**Intent**
- Serve as the canonical V1 service-selection surface.
- Show exactly 3 official service lines.
- Help visitors choose a starting line quickly without recreating the removed Services index.
- Keep proof compact: proof may appear only as one short proof line inside each service card, then through Projects or service detail pages.

**Anchor and landmark contract**
- Section ID: `services`.
- Heading ID: `home-services-heading`.
- Required heading: visible H2 with the JA/EN titles below.
- Sticky offset: `scroll-margin-top: calc(var(--header-height, 80px) + 24px)` or equivalent.

**Final display copy**
- JA section eyebrow: `Services`
- EN section eyebrow: `Services`
- JA title: `3つの実装ラインで、構想を事業に落とし込む`
- EN title: `Three implementation lines, one business partner`
- JA subtitle: `業務フローの資産化、AIアプリケーション開発、Web3.0 / Blockchain 活用まで、目的に合わせて最適な実装ラインを設計します。`
- EN subtitle: `From workflow assetization to AI application delivery and Web3.0 / blockchain implementation, we structure the right line of work around your business goal.`

**Compact choice guide**
- JA title: `どのラインから始めるべきか`
- EN title: `Where to start`
- JA choice rows:
  - `業務の属人化や運用のばらつきが課題なら` → `AI Workflow Design & Development`
  - `使われるAIプロダクトや業務ツールを作りたいなら` → `AI Application Design & Development`
  - `履歴、評価、契約、会員基盤などの信頼性を価値にしたいなら` → `Web3.0 / Blockchain Application Design & Development`
- EN choice rows:
  - `If people-dependence and inconsistent operations are the issue` → `AI Workflow Design & Development`
  - `If you need an AI product or internal tool people will actually use` → `AI Application Design & Development`
  - `If history, evaluation, contracts, or membership trust should become business value` → `Web3.0 / Blockchain Application Design & Development`

**Service card 1**
- Service ID: `ai-workflow`
- Official line: `AI Workflow Design & Development`
- JA title: `属人業務を、再利用できる仕組みに`
- EN title: `Turn people-dependent work into reusable systems`
- JA body: `判断基準、手順、レビュー導線、既存ツールとの接続を整理し、AI と人が協働できるワークフローへ再設計します。個別事例に閉じず、組織で引き継げる運用資産を作るラインです。`
- EN body: `We structure decision rules, steps, review paths, and existing-tool connections into workflows where people and AI can operate together. This line creates transferable operating assets, not one-off examples.`
- JA fit bullets:
  - `社内ノウハウが担当者に偏っている`
  - `反復業務と判断業務が混在している`
  - `既存システムと連携しながら改善したい`
- EN fit bullets:
  - `Critical know-how lives inside individuals`
  - `Operational work mixes repetition and judgment`
  - `You need improvement without replacing everything`
- JA compact proof line: `代表例: マルチエージェント開発ワークフロー / プロダクトリサーチワークフロー`
- EN compact proof line: `Representative examples: multi-agent development workflow / product research workflow`
- JA detail CTA: `AI Workflowを見る` → `/[lang]/services/ai-workflow`
- EN detail CTA: `View AI Workflow` → `/[lang]/services/ai-workflow`

**Service card 2**
- Service ID: `ai-application`
- Official line: `AI Application Design & Development`
- JA title: `AIを、使われるプロダクトへ`
- EN title: `Build AI into products people actually use`
- JA body: `業務ツール、顧客向けアプリ、AIネイティブな新規プロダクトまで、価値が伝わる体験として設計・実装します。`
- EN body: `We design and ship internal tools, customer-facing apps, and AI-native products that create clear user value.`
- JA fit bullets:
  - `AI を活かした新規サービスを作りたい`
  - `既存プロダクトにAI機能を組み込みたい`
  - `RAG / マルチモーダル / リアルタイム処理が必要`
- EN fit bullets:
  - `You want a new AI-enabled service`
  - `Your existing product needs meaningful AI capability`
  - `RAG, multimodal, or streaming UX matters`
- JA compact proof line: `代表実績: Japan Life Navi / Rigel`
- EN compact proof line: `Representative proof: Japan Life Navi / Rigel`
- JA detail CTA: `AI Applicationを見る` → `/[lang]/services/ai-application`
- EN detail CTA: `View AI Application` → `/[lang]/services/ai-application`

**Service card 3**
- Service ID: `web3-blockchain`
- Official line: `Web3.0 / Blockchain Application Design & Development`
- JA title: `信頼を扱う仕組みとして、Web3.0を事業へ`
- EN title: `Use Web3.0 as business trust infrastructure`
- JA body: `会員基盤、証跡、契約、評価、トレーサビリティなど、信頼性が価値になる領域で Web3.0 / Blockchain を事業に組み込みます。投機ではなく、運用できる信頼インフラとして設計します。`
- EN body: `We apply Web3.0 / blockchain to membership, evidence, contracts, evaluation, and traceability where trust becomes business value. The framing is practical infrastructure, not speculation.`
- JA fit bullets:
  - `履歴や真正性をサービス価値にしたい`
  - `会員基盤やCRMに信頼性を組み込みたい`
  - `既存サービスとつながる形で実装したい`
- EN fit bullets:
  - `History and authenticity should create service value`
  - `Membership or CRM needs a stronger trust layer`
  - `The solution must integrate with existing systems`
- JA compact proof line: `代表実績: Carina`
- EN compact proof line: `Representative proof: Carina`
- JA detail CTA: `Web3.0 / Blockchainを見る` → `/[lang]/services/web3-blockchain`
- EN detail CTA: `View Web3.0 / Blockchain` → `/[lang]/services/web3-blockchain`

**Overlap note**
- JA: `入口は分けつつ、実装は分断しません。AI Workflow から AI Application へ進むケースや、AI Application と Web3.0 / Blockchain を組み合わせるケースにも対応します。`
- EN: `We separate the entry point, not the implementation. Work can begin with AI Workflow and expand into AI Application, or combine AI Application with Web3.0 / blockchain when the business problem requires it.`

**Component style guidance**
- Choice guide: compact neutral band, 20px radius, thin gold divider, 3 rows or 3 chips.
- Service cards: 3-column bento on desktop, 1-column stack on mobile, equal visual weight.
- Each card uses white surface, `#E4E4E7` border, 16px radius, 24-32px padding, compact proof strip, and bottom CTA row.
- Official service line appears as Overline/eyebrow, not the main headline.
- Do not add a standalone proof grid, project teaser grid, or replacement section for removed proof content.

**Required states**
- Service cards: default / hover / focus-visible / active.
- Detail CTA links: default / hover underline / pressed / focus-visible.
- Choice rows/chips: default / hover / active / focus-visible if interactive.
- Disabled state only applies if a detail route is unavailable; for V1 all 3 detail routes are expected to remain available.

**Responsive notes**
- Fit bullets remain visible on mobile; if needed, keep all three as short wrapped bullets rather than hiding content.
- Proof line stays a single compact strip; do not expand into case cards.
- Web3 official line may wrap after `/` on narrow mobile.

### S4. Process

**Intent**
- Show that the company delivers end-to-end instead of stopping at advice.

**Final display copy**
- JA section eyebrow: `Process`
- EN section eyebrow: `Process`
- JA title: `現場に入る前提で、設計から実装まで進める`
- EN title: `Work from real operations, not abstract strategy`
- JA subtitle: `要件が固まっていなくても構いません。業務の整理から入り、最小構成で試し、実装し、運用に載せるところまで伴走します。`
- EN subtitle: `You do not need a finished spec. We start by clarifying the operational problem, test the smallest viable shape, implement it, and support rollout.`
- JA steps:
  1. `課題を整理する` — `現場の流れ、判断基準、制約を確認します。`
  2. `実装方針を設計する` — `AI / アプリ / Web3 の役割分担と構成を定義します。`
  3. `MVP・実装を進める` — `試作で確認しながら、本番利用に向けて磨き込みます。`
  4. `定着と改善を支援する` — `引き継ぎ、運用、改善ポイントまで整理します。`
- EN steps:
  1. `Clarify the problem` — `Review the current flow, decision logic, and constraints.`
  2. `Design the build path` — `Define the right mix of AI, application, and Web3 capability.`
  3. `Prototype and implement` — `Use an MVP to validate, then shape for production use.`
  4. `Support adoption` — `Organize handoff, operations, and next improvements.`

**Component style guidance**
- Use Step Rail pattern: 4 nodes only, horizontal desktop / vertical mobile.
- Node 1 and 4 in navy; nodes 2 and 3 in gold-outline for rhythm.
- Rail uses `#E4E4E7` connector with gold progress accents.

**Required states**
- Static by default.
- If each step links to deeper explanation, support hover and focus-visible.

**Responsive notes**
- Descriptions max 2 lines desktop, 3 lines mobile.
- Keep rail visible without horizontal scrolling.

### S5. About (#about)

**Intent**
- Provide compact company identity and working principles inside Home.
- Replace the removed standalone About page without recreating it.
- Keep this section factual and lightweight; it must not become another service summary or proof/products area.

**Anchor and landmark contract**
- Section ID: `about`.
- Heading ID: `home-about-heading`.
- Required heading: visible H2 with the JA/EN titles below.
- Sticky offset: `scroll-margin-top: calc(var(--header-height, 80px) + 24px)` or equivalent.

**Final display copy**
- JA eyebrow: `About Nebula Infinity`
- EN eyebrow: `About Nebula Infinity`
- JA title: `AI社会実装のパートナー`
- EN title: `An implementation partner for AI in real business`
- JA body: `Nebula Infinity は、AI と Web3.0 を机上の構想で終わらせず、現場で使える仕組みとして設計・開発する日本発のチームです。`
- EN body: `Nebula Infinity is a Japan-based team that does not leave AI and Web3.0 as strategy alone. We design and build them as systems that can operate in real business.`

**Company snapshot rows**
- JA rows:
  - `Company` — `Nebula Infinity（ネビュラインフィニティ）`
  - `Base` — `Japan`
  - `Domain` — `nebulainfinity.com`
  - `One-liner` — `AI と Web3.0 を、事業で使える仕組みへ落とし込む実装チームです。`
- EN rows:
  - `Company` — `Nebula Infinity`
  - `Base` — `Japan`
  - `Domain` — `nebulainfinity.com`
  - `One-liner` — `An implementation team that turns AI and Web3.0 into systems businesses can use.`

**Working principles**
- JA cards:
  1. `Business Logic First` — `技術選定より先に、現場の流れと判断を整理します。`
  2. `Asset-minded` — `その場限りの自動化ではなく、引き継げる資産を残します。`
  3. `Implementation-minded` — `提案で終わらせず、設計・実装・定着まで進めます。`
  4. `Calm, business-ready Web3` — `Web3.0 も投機ではなく、事業価値から設計します。`
- EN cards:
  1. `Business Logic First` — `We structure the flow and decisions before choosing tools.`
  2. `Asset-minded` — `We leave behind assets your team can inherit and improve.`
  3. `Implementation-minded` — `We do not stop at recommendation; we carry the work into design, build, and rollout.`
  4. `Calm, business-ready Web3` — `We shape Web3.0 from business value, not speculation.`

**Content boundaries**
- Include only company identity and working principles.
- Do not add service-line cards, Focus rows, service-domain summaries, representative-product rows, case cards, or project teaser cards inside `#about`.
- The removed About standalone page must not be rebuilt as a hidden or thin Home subsection.

**Component style guidance**
- Layout: 12-column bento with intro text spanning 5 columns and snapshot/principles spanning 7 columns, or a 2-column stack if simpler.
- Snapshot: bordered list rows, 16px radius, white surface.
- Principle cards: compact 2x2 grid desktop, 1-column mobile, icon containers in soft gold.
- Keep vertical footprint compact: target 1 screen or less on desktop after the section heading.

**Required states**
- Snapshot rows are static.
- Domain may be text only; if linked, support hover and focus-visible.
- Principle cards are static unless made interactive; if interactive, support hover and focus-visible.

**Responsive notes**
- Mobile order: heading/body → snapshot rows → principle cards.
- Do not introduce tabs or accordions; content is short enough to stack.

### S6. Contact CTA

**Intent**
- Convert hesitation into an inquiry by making the first step feel practical and low-friction.

**Final display copy**
- JA title: `要件が固まっていなくても、ご相談ください`
- EN title: `You can reach out before the requirements are fixed`
- JA body: `現場の課題、作りたいもの、整理できていない論点の段階でも構いません。Nebula Infinity が、実装の入口から一緒に整理します。`
- EN body: `You do not need a finished brief. If you have an operational issue, a product idea, or an unclear starting point, we can structure the path with you.`
- JA primary CTA: `お問い合わせ` → `/[lang]/contact`
- EN primary CTA: `Contact Us` → `/[lang]/contact`
- JA support text: `通常 2 営業日以内にご返信します。`
- EN support text: `We usually reply within 2 business days.`

**Component style guidance**
- Featured CTA card, 20px radius, gold-tinted wash, 48px desktop padding.
- CTA aligned right on desktop, stacked on mobile.
- Do not add a secondary Services CTA here; the Services nav path is already handled by header and Hero.

**Required states**
- CTA: default / hover / pressed / focus-visible / disabled.
- No loading state is required for this static link. Loading/success/error states belong to the Contact page form spec.

**Responsive notes**
- Support text goes below CTA button on mobile.

## 5. Global states and handoff checklist

- Header links: default / hover / active / focus-visible.
- Language toggle: default / hover / active / focus-visible.
- Service cards: default / hover / active / focus-visible.
- Choice guide rows/chips: default / hover / active / focus-visible if interactive.
- CTA buttons: default / hover / pressed / focus-visible / disabled.
- Static content panels have no loading or error state; preserve semantic HTML instead of fake skeletons.
- No removed standalone route gets a compatibility page design.
- No Home standalone Proof section or `Nebula Infinityの実装力` grid may be implemented.

## 6. Responsive summary

- Desktop uses a 12-column bento layout.
- Tablet keeps the hero split only if content fits; otherwise stack.
- Mobile preserves order: Hero → Why assetization → Services(#services) → Process → About(#about) → Contact CTA.
- Maintain 24px outer padding on mobile and 64-96px section rhythm on desktop.
- Anchor targets must remain reachable and readable below the sticky header on desktop and mobile.

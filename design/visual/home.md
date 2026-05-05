# Visual Spec — Home

**Status:** Canonical V1 Home visual/copy spec for the approved Home-led IA after Z 08:54 adjustments
**Route:** `/[lang]/`
**Canonical section order (exact):** Hero → Services(#services) → Projects → Process → About(#about) → Contact CTA

## 1. Page role and IA contract

- Primary goal: make Nebula Infinity's V1 positioning understandable in one visit, then route qualified visitors to Contact, the correct service detail page, or a representative project detail page.
- Audience: founders, directors, operations leads, product owners, CIO/CTO, and innovation teams.
- Primary action: `/[lang]/contact`.
- Secondary action: `/[lang]/#services` for service selection.
- Home owns the V1 Services and About overview as anchors:
  - `#services` is the primary service-selection surface.
  - `#about` is the compact company overview surface.
- Home also includes a concise Projects section between Services and Process. It is a routing/proof teaser for exactly Japan Life Navi, Rigel, and Carina; it must not become a broad proof grid.
- Standalone `/[lang]/services` index and `/[lang]/about` page are deleted / stop-exported surfaces. Do not design thin compatibility pages for them.
- Static export constraint: this IA must not depend on Next.js middleware, server redirects, SSR-only behavior, or server-side compatibility routes. If legacy traffic ever matters, hosting-level redirects are a separate future deployment/config task.
- Implementation capability is represented through compact service-card proof lines, the Home Projects routing cards, service detail pages, and the independent Projects route.

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
- Home Projects cards → `/[lang]/projects/{slug}`. Coder must resolve the exact slug for Japan Life Navi, Rigel, and Carina from `data/projects` and the current dynamic project routes before coding links.
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
│ │ H1: 「AI」を、現場の「即戦力」へ。                     │ 属人業務を資産に │ │
│ │ Body copy                                            ├───────────────────┤ │
│ │ [まずは要件を整理する] [サービスを見る -> #services]   │ Value panel 02    │ │
│ │ Trust chips: Workflow / AI App / Web3.0              │ 構想から実装まで │ │
│ └──────────────────────────────────────────────────────┼───────────────────┤ │
│                                                        │ Value panel 03    │ │
│                                                        │ AIとWeb3.0を事業へ│ │
│                                                        └───────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────┤
│ SERVICES (#services landmark)                                                │
│ Choice guide band                                                            │
│ [AI Workflow] [AI Application] [Web3.0 / Blockchain]                         │
│ each card: fit bullets + compact proof line + detail CTA                     │
├──────────────────────────────────────────────────────────────────────────────┤
│ PROJECTS                                                                     │
│ Concise routing cards only: Japan Life Navi / Rigel / Carina                 │
│ cards link to /[lang]/projects/{slug}; slug resolved from current data/routes│
├──────────────────────────────────────────────────────────────────────────────┤
│ PROCESS                                                                      │
│ プロセス整理 -> 実装方針設計 -> 検証・最適化 -> 運用・普及                   │
├──────────────────────────────────────────────────────────────────────────────┤
│ ABOUT (#about landmark)                                                      │
│ Company + Location snapshot and working principles only                      │
├──────────────────────────────────────────────────────────────────────────────┤
│ CONTACT CTA                                                                  │
│ 明確な要件がなくても、ご相談頂けます。                                      │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile
```text
Header
Hero copy
Primary CTA
Secondary CTA -> #services
Value panels x3
Services #services heading
Choice guide rows x3
Service cards x3
Projects heading
Project cards: Japan Life Navi, Rigel, Carina
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
- JA title: `「AI」を、現場の「即戦力」へ。`
- EN title: `Turn AI into front-line capability`
- JA body: `Nebula Infinityは、属人化した業務ノウハウを整理し、AIワークフロー、AIアプリケーション、Web3.0基盤として実装するパートナーです。技術導入を目的化せず、現場で使われる仕組みとして具体化します。`
- EN body: `Nebula Infinity organizes people-dependent operational know-how and implements it as AI workflows, AI applications, and Web3.0 infrastructure. We do not treat technology adoption as the goal; we turn it into systems used in real operations.`
- JA primary CTA: `まずは要件を整理する` → `/[lang]/contact`
- EN primary CTA: `Clarify requirements first` → `/[lang]/contact`
- JA secondary CTA: `サービスを見る` → `/[lang]/#services`
- EN secondary CTA: `View Services` → `/[lang]/#services`
- Trust chips, exactly:
  - `AI Workflow Design & Development`
  - `AI Application Design & Development`
  - `Web3.0 / Blockchain Application Design & Development`
- JA value panel 01 title: `属人業務を、資産に`
- JA value panel 01 body: `担当者ごとに閉じた判断基準や手順を整理し、組織で引き継げる仕組みに変えます。`
- JA value panel 02 title: `構想から実装まで`
- JA value panel 02 body: `要件整理、設計、試作、実装、運用設計まで、一つの流れとして伴走します。`
- JA value panel 03 title: `AIとWeb3.0を事業へ`
- JA value panel 03 body: `AIの活用と、改ざんされにくい記録基盤を、事業要件に合わせて設計します。`
- EN value panels:
  - `Turn dependent work into assets` / `We structure individual decision rules and procedures into systems the organization can inherit.`
  - `From concept to implementation` / `We support requirements, design, prototyping, implementation, and operating design as one flow.`
  - `AI and Web3.0 for business` / `We design AI use and tamper-resistant record infrastructure around business requirements.`
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

### S2. Services (#services)

**Intent**
- Serve as the canonical V1 service-selection surface.
- Show exactly 3 official service lines.
- Help visitors choose a starting line quickly without recreating the removed Services index.
- Keep proof compact: proof may appear only as one short proof line inside each service card, then through Projects or service detail pages.
- AI Workflow must be framed broadly: any repeatable business process with judgment, procedure, review, or handoff can become an AI workflow asset. Nebula's own planning/development workflow is only an example/proof, not the service definition.
- Web3.0 / Blockchain must be framed as tamper-resistant business trust infrastructure, not as crypto/speculation-first messaging.

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
- JA subtitle: `業務フローの資産化、AIアプリケーション開発、Web3.0 / Blockchain活用まで。Nebula Infinityは、目的に合わせて必要な実装ラインを設計します。`
- EN subtitle: `From workflow assetization to AI application development and Web3.0 / blockchain use, Nebula Infinity designs the implementation line your business goal requires.`

**Compact choice guide**
- JA title: `どのラインから始めるべきか`
- EN title: `Where to start`
- JA choice rows:
  - `業務の属人化や運用のばらつきが課題なら` → `AI Workflow Design & Development`
  - `使われるAIプロダクトや業務ツールを作りたいなら` → `AI Application Design & Development`
  - `履歴、評価、契約、会員基盤などの信頼性を価値にしたいなら` → `Web3.0 / Blockchain Application Design & Development`
- EN choice rows:
  - `If people-dependence or inconsistent operation is the issue` → `AI Workflow Design & Development`
  - `If you need an AI product or operational tool people will actually use` → `AI Application Design & Development`
  - `If history, evaluation, contracts, or membership trust should become business value` → `Web3.0 / Blockchain Application Design & Development`

**Service card 1**
- Service ID: `ai-workflow`
- Official line: `AI Workflow Design & Development`
- JA title: `属人業務を、再現できるワークフローへ`
- EN title: `Turn people-dependent work into repeatable workflows`
- JA body: `判断基準や手順を整理し、AIと人が協働できる業務プロセスとして設計・実装します。`
- EN body: `We organize decision criteria and procedures, then design and implement business processes where AI and people can work together.`
- JA fit bullets:
  - `社内ノウハウが担当者に偏っている`
  - `判断を伴う反復業務を標準化したい`
  - `既存の業務やツールと接続しながら改善したい`
- EN fit bullets:
  - `Internal know-how is concentrated in specific people`
  - `You want to standardize repeat work that involves judgment`
  - `You need improvement while connecting to existing operations and tools`
- JA compact proof line: `代表例：企画整理、開発プロセス、リサーチ業務など、判断と手順が繰り返される業務のワークフロー化`
- EN compact proof line: `Examples: workflowization of repeated judgment and procedure, including planning, development processes, and research work`
- JA detail CTA: `AI Workflowを見る` → `/[lang]/services/ai-workflow`
- EN detail CTA: `View AI Workflow` → `/[lang]/services/ai-workflow`

**Service card 2**
- Service ID: `ai-application`
- Official line: `AI Application Design & Development`
- JA title: `AIを、使われるプロダクトへ`
- EN title: `Turn AI into products people actually use`
- JA body: `社内ツールから顧客向けサービスまで、AI機能を価値が伝わる体験として組み込みます。`
- EN body: `From internal tools to customer-facing services, we embed AI capability as an experience whose value is clear to users.`
- JA fit bullets:
  - `AIを活かした新規サービスを作りたい`
  - `既存プロダクトにAI機能を組み込みたい`
  - `業務知識をプロダクト体験に落とし込みたい`
- EN fit bullets:
  - `You want to build a new service that uses AI meaningfully`
  - `You want to add AI capability to an existing product`
  - `You want operational knowledge to become product experience`
- JA compact proof line: `代表実績：Japan Life Navi / Rigel`
- EN compact proof line: `Representative proof: Japan Life Navi / Rigel`
- JA detail CTA: `AI Applicationを見る` → `/[lang]/services/ai-application`
- EN detail CTA: `View AI Application` → `/[lang]/services/ai-application`

**Service card 3**
- Service ID: `web3-blockchain`
- Official line: `Web3.0 / Blockchain Application Design & Development`
- JA title: `改ざんされにくい記録を、事業の信頼基盤へ`
- EN title: `Turn tamper-resistant records into business trust infrastructure`
- JA body: `ポイント、CRM、レビュー、契約、トレーサビリティなど、信頼が価値になる領域にWeb3.0を実装します。`
- EN body: `We implement Web3.0 in areas where trust creates value, including points, CRM, reviews, contracts, and traceability.`
- JA fit bullets:
  - `顧客接点や会員基盤に信頼性を持たせたい`
  - `履歴・評価・合意を改ざんされにくい形で残したい`
  - `既存サービスと接続できるWeb3.0活用を検討したい`
- EN fit bullets:
  - `Customer touchpoints or membership systems need a stronger trust layer`
  - `History, evaluation, and agreement records should be hard to tamper with`
  - `You are exploring Web3.0 use that connects with an existing service`
- JA compact proof line: `代表実績：Carina`
- EN compact proof line: `Representative proof: Carina`
- JA detail CTA: `Web3.0 / Blockchainを見る` → `/[lang]/services/web3-blockchain`
- EN detail CTA: `View Web3.0 / Blockchain` → `/[lang]/services/web3-blockchain`

**Overlap note**
- JA: `入口は分けつつ、実装は分断しません。AI Workflow から AI Application へ進むケースや、AI Application と Web3.0 / Blockchain を組み合わせるケースにも対応します。`
- EN: `We separate the entry point, not the implementation. Work can begin with AI Workflow and expand into AI Application, or combine AI Application with Web3.0 / blockchain when the business problem requires it.`

**Old proof mapping note**
- 旧 Proof 指示は独立セクション化しない。V1 Home では、Services card proof と次の Projects 導線に分離して表現する。
- Do not add the old standalone proof grid, metrics wall, or broad case gallery to Home.

**Component style guidance**
- Choice guide: compact neutral band, 20px radius, thin gold divider, 3 rows or 3 chips.
- Service cards: 3-column bento on desktop, 1-column stack on mobile, equal visual weight.
- Each card uses white surface, `#E4E4E7` border, 16px radius, 24-32px padding, compact proof strip, and bottom CTA row.
- Official service line appears as Overline/eyebrow, not the main headline.
- Do not add a standalone proof grid, metrics wall, or broad case gallery to Home.

**Required states**
- Service cards: default / hover / focus-visible / active.
- Detail CTA links: default / hover underline / pressed / focus-visible.
- Choice rows/chips: default / hover / active / focus-visible if interactive.
- Disabled state only applies if a detail route is unavailable; for V1 all 3 detail routes are expected to remain available.

**Responsive notes**
- Fit bullets remain visible on mobile; if needed, keep all three as short wrapped bullets rather than hiding content.
- Proof line stays a single compact strip; do not expand into case cards.
- Web3 official line may wrap after `/` on narrow mobile.

### S3. Projects

**Intent**
- Add Z's requested concise project-card section between Services and Process.
- Give visitors a fast path from service positioning to public implementation examples.
- Keep the section limited to three cards: Japan Life Navi, Rigel, and Carina.
- Present Japan Life Navi and Rigel as AI Application proof, and Carina as Web3.0 / Blockchain proof.
- Do not recreate the old Home proof grid or a full Projects index; this is a compact routing section only.

**Final display copy**
- JA section eyebrow: `Projects`
- EN section eyebrow: `Projects`
- JA title: `プロジェクト`
- EN title: `Projects`
- JA subtitle: `一部の実装例(プロジェクト)を公開します。サービス領域ごとの詳細は、各プロジェクトページで確認できます。`
- EN subtitle: `A focused set of public implementation examples. Each card routes to the relevant project detail page.`

**Project card 1**
- Project name: `Japan Life Navi`
- Proof purpose: AI Application proof.
- JA category label: `AI Application`
- EN category label: `AI Application`
- JA summary: `生活情報を分かりやすく案内するAIアプリケーションの実装例。AI機能を、ユーザーが使えるプロダクト体験として成立させた証明として扱います。`
- EN summary: `An AI application proof showing how AI capability becomes a usable product experience for navigating life information.`
- JA CTA: `Japan Life Navi 詳細`
- EN CTA: `View Japan Life Navi`
- Link target pattern: `/[lang]/projects/{slug}`
- Implementation note: resolve the exact Japan Life Navi slug from `data/projects` and current project detail routing before coding; do not hard-code an unverified slug.

**Project card 2**
- Project name: `Rigel`
- Proof purpose: AI Application proof.
- JA category label: `AI Application`
- EN category label: `AI Application`
- JA summary: `業務や業界要件に合わせてAI機能を組み込むアプリケーション実装例。AIを単体機能ではなく、継続して使われる体験に落とし込む証明として扱います。`
- EN summary: `An AI application proof showing AI embedded into a product experience shaped around operational and industry requirements.`
- JA CTA: `Rigel 詳細`
- EN CTA: `View Rigel`
- Link target pattern: `/[lang]/projects/{slug}`
- Implementation note: resolve the exact Rigel slug from `data/projects` and current project detail routing before coding; do not hard-code an unverified slug.

**Project card 3**
- Project name: `Carina`
- Proof purpose: Web3.0 / Blockchain proof.
- JA category label: `Web3.0 / Blockchain`
- EN category label: `Web3.0 / Blockchain`
- JA summary: `ポイント、クーポン、会員証をブロックチェーン基盤で扱うCRM。Web3.0を顧客体験と運用に接続する証明として扱います。`
- EN summary: `A CRM proof using blockchain infrastructure for points, coupons, and membership, connecting Web3.0 to customer experience and operations.`
- JA CTA: `Carina 詳細`
- EN CTA: `View Carina`
- Link target pattern: `/[lang]/projects/{slug}`
- Implementation note: resolve the exact Carina slug from `data/projects` and current project detail routing before coding; do not hard-code an unverified slug.

**Component style guidance**
- Layout: 3 concise cards in one row on desktop; stack on mobile.
- Cards use the same premium bento surface language as service cards, but with a slimmer footprint: project name, category label, 2-3 line summary, and one text-link CTA.
- Avoid metric-heavy panels, screenshots, filters, or proof taxonomy controls on Home; those belong to `/[lang]/projects`.
- Category labels should clarify proof purpose without implying the service line is limited to these projects.

**Required states**
- Project cards: default / hover lift / active / focus-visible.
- Project CTAs: default / hover underline / pressed / focus-visible.
- If a project slug is unavailable during implementation, do not disable the card silently; Coder must resolve data/routing first or raise a blocker.

**Responsive notes**
- Desktop: 3-up card row with equal heights.
- Tablet: 2-up then 1-up if space requires.
- Mobile: Japan Life Navi → Rigel → Carina order, each card full width.
- Keep the section compact so Process remains visible without excessive scrolling.

### S4. Process

**Intent**
- Show that the company delivers end-to-end instead of stopping at advice.
- Use Z's corrected visible step labels exactly, then explain each step in implementation-oriented Japanese.

**Final display copy**
- JA section eyebrow: `Process`
- EN section eyebrow: `Process`
- JA title: `整理から実装、運用・普及まで。`
- EN title: `From process organization to implementation, operation, and adoption`
- JA subtitle: `完成した仕様書がなくても構いません。業務の流れを整理し、実装方針を定め、検証しながら現場に広げます。`
- EN subtitle: `You do not need a finished specification. We organize the business flow, define the implementation direction, validate the approach, and help it spread into operations.`
- JA steps:
  1. `プロセス整理` — `現場の流れ、判断基準、関係者、制約を確認し、実装すべき対象を整理します。`
  2. `実装方針設計` — `AI、アプリケーション、Web3.0の使い分けと、必要な構成・進め方を設計します。`
  3. `検証・最適化` — `小さく形にして使われ方を確認し、機能・導線・運用条件を調整します。`
  4. `運用・普及` — `引き継ぎ、レビュー、改善の流れを整え、組織で使い続けられる状態にします。`
- EN steps:
  1. `Process organization` — `Clarify the operational flow, decision criteria, stakeholders, and constraints.`
  2. `Implementation direction design` — `Define how AI, applications, and Web3.0 should be used and how the work should proceed.`
  3. `Validation and optimization` — `Shape the smallest useful version, observe use, and adjust functions, flows, and operating conditions.`
  4. `Operation and adoption` — `Prepare handoff, review, and improvement loops so the organization can keep using the system.`

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
- Keep this section factual and lightweight; it must not become another service summary or products area.

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
  - `Location` — `Japan`
- EN rows:
  - `Company` — `Nebula Infinity`
  - `Location` — `Japan`

**Working principles**
- JA cards:
  1. `Business Logic First` — `技術を選ぶ前に、現場の判断、制約、事業要件を整理します。`
  2. `Asset-minded Delivery` — `その場限りの自動化ではなく、引き継げる運用資産として残します。`
  3. `Business-ready Implementation` — `AIもWeb3.0も、実務で使われる形まで設計・実装します。`
- EN cards:
  1. `Business Logic First` — `Before choosing technology, we organize on-site judgment, constraints, and business requirements.`
  2. `Asset-minded Delivery` — `We do not leave behind one-off automation; we leave operating assets the organization can inherit.`
  3. `Business-ready Implementation` — `We design and implement AI and Web3.0 in forms that are used in real work.`

**Content boundaries**
- Include only company identity and working principles.
- Do not add service-line cards, Focus rows, service-domain summaries, representative-product rows, case cards, or project teaser cards inside `#about`.
- Do not list Japan Life Navi / Rigel / Carina in About.
- The removed About standalone page must not be rebuilt as a hidden or thin Home subsection.

**Component style guidance**
- Layout: 12-column bento with intro text spanning 5 columns and snapshot/principles spanning 7 columns, or a 2-column stack if simpler.
- Snapshot: bordered list rows, 16px radius, white surface.
- Principle cards: compact 3-card row desktop, 1-column mobile, icon containers in soft gold.
- Keep vertical footprint compact: target 1 screen or less on desktop after the section heading.

**Required states**
- Snapshot rows are static.
- Principle cards are static unless made interactive; if interactive, support hover and focus-visible.

**Responsive notes**
- Mobile order: heading/body → snapshot rows → principle cards.
- Do not introduce tabs or accordions; content is short enough to stack.

### S6. Contact CTA

**Intent**
- Convert hesitation into an inquiry by making the first step feel practical and low-friction.
- Preserve Z's requested final CTA wording exactly in Japanese.

**Final display copy**
- JA title: `明確な要件がなくても、ご相談頂けます。`
- EN title: `You can reach out even before requirements are clear.`
- JA support text: `アイデア/要件を頂き、最短24時間以内に動くデモをお見せできます。`
- EN support text: `Share an idea or requirements, and we can show a working demo in as little as 24 hours.`
- JA primary CTA: `お問い合わせ` → `/[lang]/contact`
- EN primary CTA: `Contact Us` → `/[lang]/contact`

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
- Project cards: default / hover / active / focus-visible.
- Choice guide rows/chips: default / hover / active / focus-visible if interactive.
- CTA buttons: default / hover / pressed / focus-visible / disabled.
- Static content panels have no loading or error state; preserve semantic HTML instead of fake skeletons.
- No removed standalone route gets a compatibility page design.
- No old standalone Home proof grid or `Nebula Infinityの実装力` grid may be implemented.
- Home Projects is limited to Japan Life Navi, Rigel, and Carina and links to project detail pages after slug verification.

## 6. Responsive summary

- Desktop uses a 12-column bento layout.
- Tablet keeps the hero split only if content fits; otherwise stack.
- Mobile preserves order: Hero → Services(#services) → Projects → Process → About(#about) → Contact CTA.
- Maintain 24px outer padding on mobile and 64-96px section rhythm on desktop.
- Anchor targets must remain reachable and readable below the sticky header on desktop and mobile.

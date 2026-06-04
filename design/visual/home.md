# Visual Spec — Home

## 1. Page role
- Primary goal: make Nebula Infinity's V1 positioning immediately understandable in one visit.
- Audience: founders, directors, operations leads, product owners, CIO/CTO, innovation teams.
- Primary action: move qualified visitors to Contact.
- Secondary action: move visitors into Services and Projects.

## 2. Header / navigation flow
- Header elements:
  - Left: Nebula Infinity wordmark
  - Center/right: Home / Services / Projects / About / Contact
  - Right-end controls: language toggle, primary CTA button `お問い合わせ` / `Contact`
- Page transitions:
  - Hero primary CTA -> `/[lang]/contact`
  - Hero secondary CTA -> `/[lang]/services`
  - Service cards -> corresponding service detail pages
  - Proof cards -> `/[lang]/projects` or mapped detail pages
  - Footer CTA -> `/[lang]/contact`
- Back destination: global header handles return paths; logo always returns to Home.
- Unauthenticated flow: no restriction; full page accessible.
- No-dead-end rule: every section exposes either a service/detail route or the primary contact CTA.

## 3. Hi-Fi ASCII layout

### Desktop
```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Header: Logo | Home Services Projects About Contact | JA/EN | Contact CTA  │
├──────────────────────────────────────────────────────────────────────────────┤
│ HERO (12 cols)                                                              │
│ ┌───────────────────────────────7 cols────────────────┬──────5 cols───────┐ │
│ │ Eyebrow                                             │ Value panel 01    │ │
│ │ 「AI」を、現場の「即戦力」へ                         │ 属人業務を仕組みに │ │
│ │ Body copy                                           ├───────────────────┤ │
│ │ [Primary CTA] [Secondary CTA]                       │ Value panel 02    │ │
│ │ Trust chips: Workflow / AI App / Web3.0            │ MVPから実装まで   │ │
│ └─────────────────────────────────────────────────────┼───────────────────┤ │
│                                                       │ Value panel 03    │ │
│                                                       │ AI + Web3を一貫支援│ │
│                                                       └───────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────┤
│ TRANSFORMATION FLOW PANEL                                                   │
│ Current state -> System design -> Business outcome                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ 3 SERVICE CARDS                                                             │
│ [AI Workflow] [AI Application] [Web3.0 / Blockchain]                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ STEP RAIL: 課題整理 -> 設計 -> MVP / 実装 -> 定着支援                        │
├──────────────────────────────────────────────────────────────────────────────┤
│ PROOF GRID                                                                  │
│ [Workflow examples] [Japan Life Navi]                                       │
│ [Rigel]             [Carina]                                                │
├──────────────────────────────────────────────────────────────────────────────┤
│ TRUST / WORKING PRINCIPLES                                                  │
│ [Business Logic First] [Asset-minded] [Business-ready delivery]             │
├──────────────────────────────────────────────────────────────────────────────┤
│ CTA BAND: 要件が固まっていなくても相談できる                                │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile
```text
Header
Hero copy
Primary CTA
Secondary CTA
3 stacked value panels
Transformation flow panel (stacked 3 blocks)
Service cards x3
Step rail (vertical)
Proof cards x4
Trust cards x3
CTA band
Footer
```

## 4. Section-by-section spec

### S1. Hero
**Intent**
- Establish the approved positioning within the first screen.
- Make the site feel premium, structured, and business-ready rather than experimental.

**Final display copy**
- JA eyebrow: `AI社会実装のパートナー`
- EN eyebrow: `AI Social Implementation Partner`
- JA title: `「AI」を、現場の「即戦力」へ`
- EN title: `Turn AI into front-line capability`
- JA body: `Nebula Infinity は、AI Workflow、AI Application、Web3.0 / Blockchain の設計と開発を通じて、構想を実務で使える仕組みに変えます。属人化したノウハウを整理し、運用できる形で実装し、事業の中で機能する状態まで伴走します。`
- EN body: `Nebula Infinity designs and builds AI workflows, AI applications, and Web3.0 / blockchain products that work in real operations. We turn people-dependent know-how into systems your team can own, reuse, and scale.`
- JA primary CTA: `お問い合わせ`
- EN primary CTA: `Contact Us`
- JA secondary CTA: `サービスを見る`
- EN secondary CTA: `View Services`
- JA trust chips:
  - `AI Workflow Design & Development`
  - `AI Application Design & Development`
  - `Web3.0 / Blockchain Application Design & Development`
- EN trust chips: same as above
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
- Background: subtle radial wash from `#FFFFFF` to `#F8FAFC` with faint gold highlight in top-right only.
- Left content width: 7 columns, max 620px.
- Right stack: 3 featured cards, each 16-20px radius, white surface, Level 2 shadow, thin gold top border.
- Eyebrow uses Overline token, gold text on transparent background.
- Title uses Display/H1 hybrid: 64px desktop / 40px mobile, max 2 lines.
- CTA row: primary gold button + secondary outline button, 16px gap desktop / 12px mobile.
- Trust chips: soft neutral pills with ink text; do not use multi-color tags.

**Required states**
- Primary CTA: default / hover / pressed / focus-visible / disabled.
- Secondary CTA: default / hover / focus-visible.
- Value panels: default / hover with slight lift.

**Responsive notes**
- On tablet and below, value panels stack under CTA.
- Trust chips become 2 rows on tablet and single-column list on narrow mobile.
- Title stays within 3 lines max on mobile.

### S2. Transformation flow panel
**Intent**
- Explain that the company is not just "introducing AI"; it is designing operational systems that preserve and reuse know-how.

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
- Use reusable Transformation Flow Panel from Design System section 6.7.
- 3 equal columns on desktop, stacked cards on mobile.
- Column headers use H4; bullets use Body S with check/node icons.
- Connector line in soft gold between columns.

**Required states**
- Static panel, but bullet chips may have hover emphasis if individually interactive.
- Focus-visible required only if columns become links.

**Responsive notes**
- Mobile order remains Current state -> System design -> Business outcome.
- Connector becomes vertical line between stacked panels.

### S3. Three service lines
**Intent**
- Present exactly 3 service lines and make each one understandable within scan time.

**Final display copy**
- JA section eyebrow: `Services`
- EN section eyebrow: `Services`
- JA title: `3つの実装ラインで、構想を事業に落とし込む`
- EN title: `Three implementation lines, one business partner`
- JA subtitle: `業務フローの資産化、AIアプリケーション開発、Web3.0 / Blockchain 活用まで、目的に合わせて最適な実装ラインを設計します。`
- EN subtitle: `From workflow assetization to AI application delivery and Web3.0 / blockchain implementation, we structure the right line of work around your business goal.`

**Service card 1**
- Official line: `AI Workflow Design & Development`
- JA title: `属人業務を、再利用できる仕組みに`
- EN title: `Turn people-dependent work into reusable systems`
- JA body: `判断基準、手順、レビューの流れを整理し、AI と人が協働できるワークフローへ再設計します。`
- EN body: `We structure decision rules, steps, and review paths into workflows where people and AI can operate together.`
- JA fit bullets:
  - `社内ノウハウが担当者に偏っている`
  - `反復業務と判断業務が混在している`
  - `既存システムと連携しながら改善したい`
- EN fit bullets:
  - `Critical know-how lives inside individuals`
  - `Operational work mixes repetition and judgment`
  - `You need improvement without replacing everything`
- JA proof line: `代表例: マルチエージェント開発ワークフロー / プロダクトリサーチワークフロー`
- EN proof line: `Representative examples: multi-agent development workflow / product research workflow`
- CTA: `詳細を見る` / `View service`

**Service card 2**
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
- JA proof line: `代表実績: Japan Life Navi / Rigel`
- EN proof line: `Representative proof: Japan Life Navi / Rigel`
- CTA: `詳細を見る` / `View service`

**Service card 3**
- Official line: `Web3.0 / Blockchain Application Design & Development`
- JA title: `Web3.0テクノロジーを、ビジネスへ`
- EN title: `Apply Web3.0 where it creates business utility`
- JA body: `会員基盤、証跡管理、デジタル資産、顧客体験の設計を通じて、Web3.0 を事業で使える形に落とし込みます。`
- EN body: `We design membership, traceability, digital asset, and customer experience systems that make Web3.0 useful in business.`
- JA fit bullets:
  - `Web3 を業務・顧客体験に活かしたい`
  - `台帳性や真正性を価値に変えたい`
  - `既存サービスとつながる形で実装したい`
- EN fit bullets:
  - `You want Web3 in operations or customer experience`
  - `Traceability and authenticity create value`
  - `The solution must integrate with existing systems`
- JA proof line: `代表実績: Carina`
- EN proof line: `Representative proof: Carina`
- CTA: `詳細を見る` / `View service`

**Component style guidance**
- 3-column bento on desktop, 1-column stack on mobile.
- Each card uses white surface + proof strip + bottom CTA row.
- Official service line appears as Overline/eyebrow, not the main headline.
- One featured card only if implementation wants emphasis; default is equal-weight trio.

**Required states**
- Card hover: border darkens, shadow increases one level, CTA underline animates.
- CTA focus-visible: gold ring.
- Service chips inside cards: default / hover.

**Responsive notes**
- Fit bullets collapse to 2 visible bullets on mobile, remaining bullet wraps below divider.
- Keep official service line on one line up to tablet; allow two lines on narrow mobile.

### S4. Engagement step rail
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
- Use Step Rail pattern from Design System section 6.8.
- 4 nodes only, horizontal desktop / vertical mobile.
- Node 1 and 4 in navy; nodes 2 and 3 in gold-outline for rhythm.

**Required states**
- If each step links to deeper explanation, support hover and focus-visible.
- Otherwise static.

**Responsive notes**
- Descriptions max 2 lines desktop, 3 lines mobile.
- Keep rail visible without horizontal scrolling.

### S5. Representative proof grid
**Intent**
- Map proof directly to the three service lines and show breadth without overloading the visitor.

**Final display copy**
- JA section eyebrow: `Proof`
- EN section eyebrow: `Proof`
- JA title: `実装力は、代表事例で示す`
- EN title: `Representative proof of delivery`
- JA subtitle: `公開できる範囲の代表例を通じて、Nebula Infinity の実装領域と深さを示します。`
- EN subtitle: `We show the depth of Nebula Infinity's delivery capability through a focused set of representative examples.`

**Proof card A — Workflow examples**
- Tag: `AI Workflow Design & Development`
- JA title: `ワークフロー資産化の代表例`
- EN title: `Representative workflow assetization examples`
- JA summary: `マルチエージェント開発ワークフローやプロダクトリサーチワークフローなど、判断や引き継ぎが分散しやすい業務を、再利用可能な運用フローへ設計します。`
- EN summary: `We design reusable operating flows for work where judgment and handoff tend to scatter, such as multi-agent development and product research workflows.`
- JA proof strip:
  - `判断基準の明文化`
  - `役割分担の設計`
  - `改善ログの蓄積`
- EN proof strip:
  - `Visible decision rules`
  - `Designed role allocation`
  - `Accumulated improvement logs`
- CTA: `AI Workflowを見る` / `View AI Workflow`

**Proof card B — Japan Life Navi**
- Tag: `AI Application Design & Development`
- JA title: `Japan Life Navi`
- EN title: `Japan Life Navi`
- JA summary: `在日外国人向けの生活支援アプリ。多言語ガイド、領域特化AI、リアルタイム対話を一体で設計。`
- EN summary: `A life-support application for foreign residents in Japan, combining multilingual guidance, domain-specific AI, and real-time interaction.`
- JA proof strip: `336 Guides / 7 Languages / 6 AI Agents`
- EN proof strip: same values
- CTA: `詳細を見る` / `View case`

**Proof card C — Rigel**
- Tag: `AI Application Design & Development`
- JA title: `Rigel`
- EN title: `Rigel`
- JA summary: `AI記帳SaaSとして、業務知識、法対応、UX、バックエンド実装をまとめて成立させた代表例。`
- EN summary: `An AI bookkeeping SaaS proving delivery across domain logic, compliance, UX, and backend implementation.`
- JA proof strip: `33,000+ LOC / 367 Tests / 18 API Endpoints / 6 Industries`
- EN proof strip: same values
- CTA: `詳細を見る` / `View case`

**Proof card D — Carina**
- Tag: `Web3.0 / Blockchain Application Design & Development`
- JA title: `Carina`
- EN title: `Carina`
- JA summary: `ポイント、クーポン、会員証をブロックチェーンで扱う CRM。Web3.0 を顧客体験と運用設計に接続した実例です。`
- EN summary: `A blockchain-backed CRM for points, coupons, and membership. It shows how Web3.0 can connect to customer experience and operations.`
- JA proof strip:
  - `Traceability`
  - `Membership`
  - `CRM Integration`
- EN proof strip: same values
- CTA: `詳細を見る` / `View case`

**Component style guidance**
- Use Proof Snapshot Card pattern.
- 2x2 grid on desktop, single-column stack on mobile.
- Workflow examples card can use subtle gold-tinted background because it represents methodology breadth rather than a public named product.

**Required states**
- Cards: default / hover / focus-visible.
- Tags: default only.
- CTA links: underline grow on hover.

**Responsive notes**
- Keep proof strip to 3 items on mobile; Rigel may wrap into 2 rows.
- Case summaries limited to 3 lines desktop / 4 lines mobile.

### S6. Trust / working principles
**Intent**
- Close the page with operating principles that reinforce high-trust delivery.

**Final display copy**
- JA section eyebrow: `How we work`
- EN section eyebrow: `How we work`
- JA title: `Nebula Infinity が重視する3つの基準`
- EN title: `Three standards we do not compromise on`
- JA cards:
  1. `Business Logic First` — `技術の前に、現場の判断と事業要件を整理します。`
  2. `Asset-minded delivery` — `その場限りの自動化ではなく、引き継げる運用資産を残します。`
  3. `Business-ready implementation` — `AI も Web3.0 も、実務で使える形まで設計します。`
- EN cards:
  1. `Business Logic First` — `We structure operational decisions and business requirements before choosing technology.`
  2. `Asset-minded delivery` — `We leave behind operating assets your team can inherit and improve.`
  3. `Business-ready implementation` — `We shape both AI and Web3.0 into business-usable systems.`

**Component style guidance**
- 3 equal standard cards with icon wrappers.
- No flashy illustration; icons only.

**Required states**
- Hover only if cards are clickable; otherwise static.

**Responsive notes**
- 3-up -> 1-up stack.

### S7. CTA band
**Intent**
- Convert hesitation into an inquiry by making the first step feel practical and low-friction.

**Final display copy**
- JA title: `要件が固まっていなくても、ご相談ください`
- EN title: `You can reach out before the requirements are fixed`
- JA body: `現場の課題、作りたいもの、整理できていない論点の段階でも構いません。Nebula Infinity が、実装の入口から一緒に整理します。`
- EN body: `You do not need a finished brief. If you have an operational issue, a product idea, or an unclear starting point, we can structure the path with you.`
- JA primary CTA: `お問い合わせ`
- EN primary CTA: `Contact Us`
- JA support text: `通常 2 営業日以内にご返信します。`
- EN support text: `We usually reply within 2 business days.`

**Component style guidance**
- Featured CTA card, 20px radius, gold-tinted wash, 48px desktop padding.
- CTA aligned right on desktop, stacked on mobile.

**Required states**
- CTA default / hover / focus-visible / disabled.

**Responsive notes**
- Support text goes below CTA buttons on mobile.

## 5. Global state checklist
- Header links: default / hover / active / focus-visible.
- Language toggle: default / hover / active / focus-visible.
- Proof cards and service cards: default / hover / focus-visible.
- CTA buttons: default / hover / pressed / focus-visible / disabled.
- No loading state required on this page.

## 6. Responsive summary
- Desktop uses 12-column bento layout.
- Tablet keeps hero split only if content fits; otherwise stack.
- Mobile preserves order: positioning -> value -> explanation -> services -> process -> proof -> trust -> CTA.
- Maintain generous 24px outer padding on mobile and 64-96px section rhythm on desktop.

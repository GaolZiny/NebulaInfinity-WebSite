# Visual Spec — Web3.0 / Blockchain Detail

## 1. Page role
- Primary goal: frame Web3 as business-ready capability, not speculative crypto messaging.
- Audience: innovation teams, CRM owners, business developers, product leaders exploring traceability, membership, or digital asset use cases.
- Primary action: inquiry about Web3.0 / blockchain application design and development.
- Secondary action: review Carina as proof.

## 2. Header / navigation flow
- Header: global shell.
- Breadcrumb: Home / Services / Web3.0 / Blockchain.
- Transitions:
  - Hero CTA -> Contact
  - Carina proof card -> case detail
  - Sibling service switcher -> other service pages
- Back destination: Services index.
- Unauthenticated flow: fully open.

## 3. Hi-Fi ASCII layout

### Desktop
```text
Header
Breadcrumb
Hero: official line + business-ready promise + CTA + use-case chips
When Web3 makes sense: 3 rationale cards
Business use-case grid: membership / traceability / loyalty / digital assets / integrations
Business-ready principles: what Nebula Infinity avoids and what it builds
Carina proof card
Delivery scope grid: chain design / contract / UI / ops / integration
Step rail
CTA band
```

### Mobile
```text
Header
Breadcrumb
Hero
Rationale cards x3
Use-case cards x5
Principle compare band
Carina proof
Delivery scope cards x5
Step rail vertical
CTA band
```

## 4. Section-by-section spec

### S1. Hero
**Final display copy**
- JA eyebrow: `Web3.0 / Blockchain Application Design & Development`
- EN eyebrow: `Web3.0 / Blockchain Application Design & Development`
- JA title: `Web3.0テクノロジーを、ビジネスへ`
- EN title: `Apply Web3.0 where it creates business utility`
- JA subtitle: `Nebula Infinity は、Web3.0 を投機的な文脈ではなく、顧客体験、会員基盤、証跡管理、デジタル資産の設計に活かせる技術として扱います。`
- EN subtitle: `Nebula Infinity approaches Web3.0 not as speculative technology, but as infrastructure for customer experience, membership, traceability, and digital asset design.`
- JA chips:
  - `Membership`
  - `Traceability`
  - `Digital Assets`
- EN chips: same values
- JA primary CTA: `この領域を相談する`
- EN primary CTA: `Discuss this service`
- JA secondary CTA: `代表実績を見る`
- EN secondary CTA: `View proof case`
- Illustration alt JA: `顧客接点と台帳システムが連携する抽象的なWeb3基盤図`
- Illustration alt EN: `Abstract Web3 infrastructure diagram linking customer touchpoints with ledger-backed systems`

**Style guidance**
- Hero uses same light premium palette as AI pages.
- No dark mode, no neon, no price-chart motifs.

**States**
- CTA full state set.

**Responsive**
- Chips wrap into multiple rows on mobile.

### S2. When Web3 makes sense
**Final display copy**
- JA title: `Web3.0 が効くのは、こんな要件です`
- EN title: `When Web3.0 is the right fit`
- JA cards:
  1. `会員や特典の真正性を高めたい` — `発行履歴や保有状態を明確に扱いたい。`
  2. `ポイントやクーポンを再設計したい` — `顧客との関係性を継続的に設計したい。`
  3. `証跡や透明性を価値にしたい` — `履歴管理や検証可能性そのものが事業価値になる。`
- EN cards:
  1. `You need stronger authenticity for membership or benefits` — `Issuance and ownership need to be explicit and verifiable.`
  2. `You want to redesign loyalty mechanics` — `The relationship with the customer needs a stronger long-term structure.`
  3. `Traceability itself creates value` — `History and verification are part of the product or operational value.`

**Style guidance**
- 3 standard cards, soft gold icon wrappers.

**States**
- Static.

**Responsive**
- 3-up -> 1-up.

### S3. Business use-case grid
**Final display copy**
- JA eyebrow: `Use cases`
- EN eyebrow: `Use cases`
- JA title: `ビジネスに落とし込める代表ユースケース`
- EN title: `Representative business use cases`
- JA cards:
  1. `Membership & Loyalty` — `会員証、ポイント、特典、ランク設計`
  2. `Traceability` — `履歴確認、証跡保持、真正性の担保`
  3. `Digital Asset Design` — `クーポン、チケット、保有権の設計`
  4. `Customer Experience` — `顧客が自分の資産や特典を扱える体験`
  5. `Integration` — `既存CRMやアプリとつながる運用設計`
- EN cards:
  1. `Membership & Loyalty` — `Cards, points, benefits, and tier logic`
  2. `Traceability` — `History, verification, and evidentiary records`
  3. `Digital Asset Design` — `Coupons, tickets, and ownership structures`
  4. `Customer Experience` — `User-facing control over benefits and digital assets`
  5. `Integration` — `Operational connection to existing CRM and applications`

**Style guidance**
- 5-card grid; Integration card should visually connect the rest.
- Keep copy business-led.

**States**
- Optional hover.

**Responsive**
- 2-column tablet, 1-column mobile.

### S4. Business-ready Web3 principles
**Final display copy**
- JA title: `Nebula Infinity が重視する、ビジネス前提のWeb3設計`
- EN title: `How Nebula Infinity keeps Web3 business-ready`
- JA do side:
  - `業務・顧客体験に効く目的から設計する`
  - `運用と既存サービス接続を前提にする`
  - `台帳性や真正性を価値へ変える`
- JA don't side:
  - `投機文脈を前提にしない`
  - `暗号資産の値動き訴求に寄せない`
  - `Web3 を目的化しない`
- EN do side:
  - `Start from operational or customer experience value`
  - `Design for operations and integration from day one`
  - `Turn traceability and authenticity into usable value`
- EN don't side:
  - `Do not lead with speculative framing`
  - `Do not rely on token-price narratives`
  - `Do not make Web3 the goal itself`

**Style guidance**
- Use wide comparison band: `What we build` vs `What we avoid`.
- Light background, no alarm colors.

**States**
- Static.

**Responsive**
- Two columns desktop -> stacked panels mobile.

### S5. Representative proof — Carina
**Final display copy**
- JA eyebrow: `Proof`
- EN eyebrow: `Proof`
- JA title: `代表実績: Carina`
- EN title: `Representative proof: Carina`
- JA summary: `Carina は、小売向け CRM に Web3.0 を接続し、ポイント、クーポン、会員証の扱いをブロックチェーン基盤で再設計した例です。Nebula Infinity の Web3.0 提供価値は、この1件に限定されず、会員基盤や証跡設計全般へ展開できます。`
- EN summary: `Carina is an example of applying Web3.0 to retail CRM by redesigning points, coupons, and membership on top of blockchain infrastructure. Nebula Infinity's Web3.0 capability extends beyond this one project into broader membership and traceability design.`
- JA proof strip:
  - `Retail CRM`
  - `Membership`
  - `Points & Coupons`
  - `Traceability`
- EN proof strip: same values
- JA CTA: `Carina 詳細`
- EN CTA: `View Carina`

**Style guidance**
- One featured proof snapshot card with screenshot or abstract product frame.
- Add support note under card emphasizing broader capability.

**States**
- Card clickable.

**Responsive**
- Proof strip wraps to two rows if needed.

### S6. Delivery scope
**Final display copy**
- JA title: `対応範囲`
- EN title: `Delivery scope`
- JA cards:
  1. `要件整理` — `どこで Web3.0 を使うべきかを事業要件から整理します。`
  2. `チェーン / コントラクト設計` — `どの責務をオンチェーン化するかを設計します。`
  3. `UI / 体験設計` — `利用者が迷わず扱える画面と導線を設計します。`
  4. `既存サービス連携` — `CRM、アプリ、会員基盤との接続を考慮します。`
  5. `運用設計` — `発行、更新、監視、問い合わせ対応まで整えます。`
- EN cards:
  1. `Requirements framing` — `We determine where Web3.0 should create value in the business.`
  2. `Chain and contract architecture` — `We define what responsibility belongs on-chain.`
  3. `UX and interface design` — `We design screens and flows that users can actually operate.`
  4. `Existing-service integration` — `We account for CRM, apps, and membership systems from the start.`
  5. `Operational design` — `We plan issuance, updates, monitoring, and support handling.`

**Style guidance**
- 5-card bento.
- Integration and operations cards should visually connect.

**States**
- Static or light hover.

**Responsive**
- Stack cards on mobile.

### S7. Step rail
**Final display copy**
- JA title: `進め方`
- EN title: `How engagements move`
- JA steps:
  1. `要件を整理する`
  2. `Web3.0の責務を定める`
  3. `実装して接続する`
  4. `運用へ載せる`
- EN steps:
  1. `Clarify the requirement`
  2. `Define the Web3 responsibility`
  3. `Build and integrate`
  4. `Put it into operations`

**Style guidance**
- Step Rail pattern.

**States**
- Static.

**Responsive**
- Vertical on mobile.

### S8. CTA band
**Final display copy**
- JA title: `Web3.0 を使うべきかどうかの整理から相談できます`
- EN title: `You can start by deciding whether Web3.0 should be used at all`
- JA body: `会員基盤、証跡、デジタル資産の設計で迷っている段階でも問題ありません。事業要件から一緒に整理します。`
- EN body: `If you are still evaluating membership, traceability, or digital asset design, we can structure the decision from business requirements first.`
- JA primary CTA: `お問い合わせ`
- EN primary CTA: `Contact Us`
- JA secondary CTA: `サービス一覧へ`
- EN secondary CTA: `Back to Services`

**Style guidance**
- Featured CTA band.

**States**
- Full button states.

**Responsive**
- Stack actions.

## 5. Global state checklist
- Proof card: default / hover / focus-visible.
- CTA buttons: default / hover / pressed / focus-visible / disabled.
- Breadcrumb links: default / hover / focus-visible.

## 6. Responsive summary
- Keep the page unmistakably business-first.
- Avoid any decorative cues that drift toward speculative crypto branding.

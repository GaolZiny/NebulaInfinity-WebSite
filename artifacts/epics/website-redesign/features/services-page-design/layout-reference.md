# Services Page Layout Reference

**Visual wireframes for main page and detail pages**

---

## Main Services Page (`/services`)

### Desktop Layout (1024px+)

```
┌────────────────────────────────────────────────────────────────┐
│                         NAVIGATION                             │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                           HERO SECTION                         │
│                                                                │
│                        サービス / Services                      │
│              AIとWeb3で、次を構築する                           │
│        Build the next with AI & Web3                           │
│                                                                │
│    設計から運用まで一貫して支えるバンドルです。                 │
│    A bundled set of services that covers design through ops.   │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                      提供サービス / Core services              │
│           設計から運用まで一貫して支えるバンドルです。          │
└────────────────────────────────────────────────────────────────┘

                    BENTO GRID (12-COLUMN)

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                             ┃  ┌─────────────────────────┐ ┃
┃  🔒 注目サービス             ┃  │  🤖  AI Agent Dev       │ ┃
┃                             ┃  │  Title (H3)             │ ┃
┃  スマートコントラクト        ┃  │  Description            │ ┃
┃  設計・開発・監査            ┃  │  • Feature 1            │ ┃
┃                             ┃  │  • Feature 2            │ ┃
┃  Smart Contract Design,     ┃  │  • Feature 3            │ ┃
┃  Development & Audit        ┃  └─────────────────────────┘ ┃
┃                             ┃                              ┃
┃  Solidityによる...          ┃  ┌─────────────────────────┐ ┃
┃                             ┃  │  ⚙️  AI Workflow Auto   │ ┃
┃  • Solidity 開発            ┃  │  Title (H3)             │ ┃
┃  • セキュリティ監査          ┃  │  Description            │ ┃
┃  • ガス最適化                ┃  │  • Feature 1            │ ┃
┃  • テスト自動化              ┃  │  • Feature 2            │ ┃
┃  • デプロイメント            ┃  │  • Feature 3            │ ┃
┃                             ┃  └─────────────────────────┘ ┃
┃       (6 cols × 2 rows)     ┃                              ┃
┃                             ┃  ┌─────────────────────────┐ ┃
┃                             ┃  │  📱  AI Applications    │ ┃
┃                             ┃  │  Title (H3)             │ ┃
┃                             ┃  │  Description            │ ┃
┃                             ┃  │  • Feature 1            │ ┃
┃                             ┃  │  • Feature 2            │ ┃
┃                             ┃  │  • Feature 3            │ ┃
┃                             ┃  └─────────────────────────┘ ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┻━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┌──────────────────────────────────┬──────────────────────────────────┐
│  🌐  Blockchain / Web3.0 Dev    │  💡  Web3.0 Consulting           │
│  Title (H3)                      │  Title (H3)                      │
│  Description                     │  Description                     │
│  • Feature 1                     │  • Feature 1                     │
│  • Feature 2                     │  • Feature 2                     │
│  • Feature 3                     │  • Feature 3                     │
│  (4 cols)                        │  (4 cols)                        │
└──────────────────────────────────┴──────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                          進め方 / Our approach                 │
│                                                                │
│  小さく始めて確実に検証 | 設計から運用まで一貫サポート | ...   │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                         CTA SECTION                            │
│                                                                │
│  サービスについてご相談ください                                 │
│  お客様のプロジェクトに最適なソリューションをご提案します。    │
│                                                                │
│      [お問い合わせ]         [実績を見る]                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Tablet Layout (768-1023px)

```
┌────────────────────────────────────┐
│          HERO SECTION              │
└────────────────────────────────────┘

     2-COLUMN GRID (ALL EQUAL HEIGHT)

┌────────────────┬────────────────────┐
│  Smart         │  AI Agent Dev      │
│  Contract      │                    │
│  (no longer    │                    │
│   featured)    │                    │
├────────────────┼────────────────────┤
│  AI Workflow   │  AI Applications   │
├────────────────┼────────────────────┤
│  Blockchain    │  Web3 Consulting   │
└────────────────┴────────────────────┘

┌────────────────────────────────────┐
│         CTA SECTION                │
└────────────────────────────────────┘
```

### Mobile Layout (375-767px)

```
┌──────────────────┐
│   HERO SECTION   │
└──────────────────┘

   1-COLUMN STACK

┌──────────────────┐
│  Smart Contract  │
│  (Featured)      │
│                  │
│  • Feature 1     │
│  • Feature 2     │
│  • Feature 3     │
│  • Feature 4     │
│  • Feature 5     │
└──────────────────┘

┌──────────────────┐
│  AI Agent Dev    │
│                  │
│  • Feature 1     │
│  • Feature 2     │
│  • Feature 3     │
└──────────────────┘

┌──────────────────┐
│  AI Workflow     │
│  ...             │
└──────────────────┘

(... all 6 services stacked)

┌──────────────────┐
│   CTA SECTION    │
│                  │
│  [お問い合わせ]  │
│  [実績を見る]    │
└──────────────────┘
```

---

## Service Detail Page (`/services/{service-id}`)

### Desktop Layout (1024px+)

```
┌────────────────────────────────────────────────────────────────┐
│                         NAVIGATION                             │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│  Breadcrumb: Home / Services / Smart Contract                  │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                         HERO SECTION                           │
│                                                                │
│                           [Icon 64px]                          │
│                                                                │
│              スマートコントラクト設計・開発・監査               │
│           Smart Contract Design, Development & Audit           │
│                                                                │
│         ブロックチェーンの信頼性を支える、セキュアで           │
│                  効率的なスマートコントラクト開発              │
│                                                                │
│         [お問い合わせ]           [実績を見る]                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│  SECTION A: このサービスについて / About this service          │
│                                                                │
│  スマートコントラクトはブロックチェーンアプリケーションの      │
│  心臓部です。一度デプロイすると変更不可能なため、設計段階      │
│  でのセキュリティと効率性が極めて重要です。                    │
│                                                                │
│  Nebula Infinity は、Solidity による堅牢なスマートコントラクト│
│  開発から、包括的なセキュリティ監査、ガス最適化まで、エンド    │
│  ツーエンドでサポートします。                                  │
│                                                                │
│  (2-3 paragraphs, max-width 720px, centered)                   │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│  SECTION B: 主な機能・特徴 / Key features                      │
│                                                                │
│  ┌──────────────────────┬──────────────────────┐              │
│  │  [Icon]              │  [Icon]              │              │
│  │  Solidity 開発       │  セキュリティ監査    │              │
│  │  Solidity Dev        │  Security Audits     │              │
│  │                      │                      │              │
│  │  エンタープライズ... │  包括的な脆弱性診断..│              │
│  │  (60-80 words)       │  (60-80 words)       │              │
│  └──────────────────────┴──────────────────────┘              │
│                                                                │
│  ┌──────────────────────┬──────────────────────┐              │
│  │  [Icon]              │  [Icon]              │              │
│  │  ガス最適化          │  テスト自動化        │              │
│  │  Gas Optimization    │  Test Automation     │              │
│  │                      │                      │              │
│  │  トランザクション... │  Hardhat/Foundry ... │              │
│  └──────────────────────┴──────────────────────┘              │
│                                                                │
│  (4-6 feature blocks, 2-column grid)                           │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│  SECTION C: 使用技術・ツール / Technologies & tools            │
│                                                                │
│  [Solidity] [Hardhat] [Foundry] [OpenZeppelin] [Ethers.js]    │
│  [Slither] [Mythril] [Tenderly] [Remix] [Truffle] [Ganache]   │
│                                                                │
│  (Horizontal tag list, flexbox wrap)                           │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│  SECTION D: プロセス / Process                                 │
│                                                                │
│  ①────┐                                                        │
│       │  要件定義 / Requirements                              │
│       │  Initial consultation and scope definition            │
│       │                                                        │
│  ②────┤                                                        │
│       │  設計 / Design                                        │
│       │  Architecture planning and specification              │
│       │                                                        │
│  ③────┤                                                        │
│       │  開発 / Development                                   │
│       │  Implementation and iteration                         │
│       │                                                        │
│  ④────┤                                                        │
│       │  テスト / Testing                                     │
│       │  QA, security review, optimization                    │
│       │                                                        │
│  ⑤────┘                                                        │
│       │  納品 / Delivery                                      │
│       │  Deployment and documentation                         │
│                                                                │
│  (Vertical timeline, 5 steps)                                  │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│  SECTION E: 関連プロジェクト / Related projects                │
│                                                                │
│  このサービスを使った実績 / Projects using this service        │
│  詳細は実績ページをご覧ください。                              │
│  View our project portfolio for examples.                      │
│                                                                │
│                  [実績を見る →]                                │
│                                                                │
│  (Light gold background card)                                  │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                         CTA SECTION                            │
│                                                                │
│  サービスについてご相談ください / Discuss our services          │
│  お客様のプロジェクトに最適なソリューションをご提案します。    │
│                                                                │
│      [お問い合わせ]         [すべてのサービス]                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Mobile Layout (375-767px)

```
┌──────────────────┐
│   NAVIGATION     │
└──────────────────┘

┌──────────────────┐
│  Breadcrumb      │
│  (scrollable)    │
└──────────────────┘

┌──────────────────┐
│  HERO SECTION    │
│                  │
│  [Icon]          │
│  Title           │
│  Subtitle        │
│                  │
│  [お問い合わせ]  │  ← Full width, stacked
│  [実績を見る]    │
└──────────────────┘

┌──────────────────┐
│  About Section   │
│  (Full width)    │
└──────────────────┘

┌──────────────────┐
│  Feature 1       │
│  [Icon]          │
│  Title           │
│  Description     │
├──────────────────┤
│  Feature 2       │
│  ...             │
└──────────────────┘
    (1-column)

┌──────────────────┐
│  Tech Tags       │
│  (Wrapped)       │
└──────────────────┘

┌──────────────────┐
│  ① Requirements  │
│  ② Design        │
│  ③ Development   │
│  ④ Testing       │
│  ⑤ Delivery      │
└──────────────────┘
    (Timeline)

┌──────────────────┐
│  Related         │
│  Projects        │
│  [実績を見る]    │
└──────────────────┘

┌──────────────────┐
│  CTA Section     │
│                  │
│  [お問い合わせ]  │
│  [全サービス]    │
└──────────────────┘
```

---

## Visual Hierarchy (Importance)

### Main Services Page
1. **Hero H1** — Establishes page purpose
2. **Featured Service** — Primary attention (2× size)
3. **Other 5 Services** — Secondary scanning
4. **CTA Section** — Final conversion point

### Detail Page
1. **Hero H1** — Service name (SEO + clarity)
2. **CTA Buttons** — Above fold for quick action
3. **About Section** — Value proposition (first read)
4. **Features** — Scannable benefits (grid = easy scan)
5. **Technologies** — Trust signal (expertise proof)
6. **Process** — Reduces uncertainty (how we work)
7. **Related Projects** — Soft CTA (explore more)
8. **Bottom CTA** — Final conversion point

---

## Color Zones

```
┌────────────────────────────────────┐
│  Hero: Light BG (#F8FAFC)          │  ← Clean, spacious
│  Navy text (#0F172A)               │
│  Gold accents (#CA8A04)            │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  Card: White/Surface (#FFFFFF)     │  ← Elevated
│  Gold icon BG (rgba 12%)           │
│  Border: Light gray                │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  CTA: Gold gradient (subtle)       │  ← Premium feel
│  Navy + Gold mix                   │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│  Footer: Navy (#0F172A)            │  ← Authority
│  White text                        │
└────────────────────────────────────┘
```

---

## Interaction Zones (Main Page)

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  ENTIRE CARD IS CLICKABLE   ┃  ← cursor: pointer
┃                             ┃
┃  ┌────────────────────────┐ ┃
┃  │  Icon (hover: scale)   │ ┃
┃  └────────────────────────┘ ┃
┃                             ┃
┃  Title (H3)                 ┃
┃  Description                ┃
┃  Features                   ┃
┃                             ┃
┃  Hover: translateY(-2px)    ┃
┃  Focus: gold outline (3px)  ┃
┃  Active: translateY(0)      ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

## Spacing Reference

### Main Page
- Section top padding: `60px` (mobile), `120px` (desktop)
- Card gaps: `16px` (mobile), `24px` (desktop)
- Card padding: `20px` (mobile), `24px` (standard), `36px` (featured)

### Detail Page
- Section spacing: `60px` (mobile), `80px` (desktop)
- Content max-width: `720px` (About), `1200px` (container)
- Feature grid gap: `24px` (desktop), `20px` (mobile)
- Timeline step gap: `32px`

---

## Typography Scale

```
Hero H1:     clamp(2.5rem, 5vw, 4rem)      [40-64px]
Section H2:  clamp(2rem, 3.6vw, 3rem)      [32-48px]
Service H3:  1.5rem                        [24px]
Body:        1.05rem                       [~17px]
Small:       0.875rem                      [14px]
```

---

## Grid Breakpoints Visual

```
┌────────────────────────────────────────────────────────────┐
│  375px                 768px         1024px        1440px  │
├────────────────────────────────────────────────────────────┤
│  Mobile (1 col)   →   Tablet (2)  →  Bento Grid  → Desktop │
│  16px gaps            20px gaps       24px gaps    Max 1200 │
│  20px padding         24px padding    36px featured         │
└────────────────────────────────────────────────────────────┘
```

---

## Component Reusability Map

```
ServiceCard (reused 6×)
├── ServiceIcon (reused 6×)
├── ServiceTitle (H3)
├── ServiceDescription (p)
└── FeatureList (ul)
    └── FeatureItem (li) × 4-5

ServiceDetailPage (template for 6 pages)
├── Breadcrumb (reused)
├── Hero (unique per service)
├── AboutSection (unique per service)
├── FeaturesSection (template)
│   └── FeatureBlock × 4-6
├── TechSection (template)
│   └── TechTag × 8-12
├── ProcessSection (template)
│   └── ProcessStep × 5
├── RelatedProjectsSection (reused)
└── CTASection (reused)
```

---

**End of Layout Reference**  
**For full design specs, see `handoff.md`**  
**For design rationale, see `notes/designer.md`**

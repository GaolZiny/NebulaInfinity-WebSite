# Services Page Design Handoff

**Project:** Nebula Infinity Website v2 (Bento Light)  
**Feature:** Services Page Complete Design  
**Generated:** 2026-02-08  
**Designer:** OpenClaw Designer Worker  

---

## Design Intent

Create a premium, scannable Services page that showcases all 6 core offerings with clear value propositions and differentiation. The page should establish authority through structured presentation while maintaining the "Trust & Authority" style of the design system.

**Target Users:**
- Enterprise decision-makers evaluating blockchain/AI solutions
- Technical leads researching consulting/development partners
- Startup founders seeking end-to-end support

**Platform:** Responsive web (375px → 1440px+)

---

## Visual Direction

### Color Palette
- **Primary (Navy):** `#0F172A` — Authority, trust, technical depth
- **Accent (Gold):** `#CA8A04` — Premium positioning, CTA focus
- **Background (Light):** `#F8FAFC` — Clean, spacious, modern
- **Text Primary:** `#020617` — High readability
- **Text Secondary:** `#475569` — Supporting content

### Typography
- **Headings:** Orbitron (400/500/600/700)
- **Body/Features:** Exo 2 (400/500/600)
- **Letter spacing:** Headings +0.01em for futuristic feel

### Spacing & Rhythm
- **Section padding:** 60px vertical (mobile), 120px (desktop)
- **Card gaps:** 24px (desktop), 16px (mobile)
- **Internal padding:** 36px (featured), 24px (standard), 20px (mobile)

---

## Page Layout Strategy

### Hero Section
- **Eyebrow:** "サービス" / "Services" (uppercase, gold)
- **H1:** "AIとWeb3で、次を構築する" / "Build the next with AI & Web3"
- **Subtitle:** Brief value proposition (max 2 lines)
- **Spacing:** 120px top padding (desktop), 80px (mobile)

### Bento Grid Layout (12-column)

**Desktop (1024px+):**
```
┌─────────────────┬─────────────────┐
│                 │  AI Agents (3)  │
│   Featured      ├─────────────────┤
│   Smart         │  AI Workflow(3) │
│   Contract (6)  ├─────────────────┤
│                 │  AI Apps (3)    │
├─────────────────┼─────────────────┤
│  Blockchain (4) │  Web3 Consult(4)│
│  Development    │                 │
└─────────────────┴─────────────────┘
```

**Tablet (768-1023px):** 2-column grid, all cards equal height  
**Mobile (<768px):** 1-column stack

### Featured Service
**Position:** Smart Contract (top-left, 6 columns, 2 rows)  
**Why:** Core differentiator, highest-margin service, showcases technical depth

**Visual Treatment:**
- Larger icon (44px container)
- "注目サービス" / "Featured service" label (top-right, subtle)
- 5 features shown (vs 4 for standard cards)
- Gradient background: `linear-gradient(135deg, rgba(202,138,4,0.08), transparent)`

---

## Service Components Spec

### 1. AI エージェント開発 — AI Agent Development

**Grid Position:** Top-right, 3 columns × 1 row  
**Category:** AI Services

**Title (JA):** AI エージェント開発  
**Title (EN):** AI Agent Development

**Description (JA):**  
ビジネスプロセスを理解し、自律的に行動する AI エージェントを構築。OpenAI、Anthropic、オープンソース LLM に対応。

**Description (EN):**  
Build AI agents that understand business processes and act autonomously. Supports OpenAI, Anthropic, and open-source LLMs.

**Features:**
1. **JA:** マルチモデル対応エージェント設計  
   **EN:** Multi-model agent architecture
2. **JA:** ビジネスロジック統合  
   **EN:** Business logic integration
3. **JA:** 意思決定フローの可視化  
   **EN:** Decision flow visualization
4. **JA:** エージェント間連携（マルチエージェント）  
   **EN:** Multi-agent orchestration

**Icon Design Direction:**
- Concept: Brain network + gear (autonomous intelligence)
- Style: Line art, 1.7px stroke
- Color: currentColor (inherits gold from parent)
- Elements: Neural nodes (3-4 dots) connected by lines, small gear overlay

**SVG Skeleton:**
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <!-- Neural network nodes -->
  <circle cx="12" cy="7" r="1.5"/>
  <circle cx="8" cy="14" r="1.5"/>
  <circle cx="16" cy="14" r="1.5"/>
  <circle cx="12" cy="18" r="1.5"/>
  <!-- Connecting lines -->
  <path d="M12 8.5 L8 12.5 M12 8.5 L16 12.5 M8 15.5 L12 16.5 M16 15.5 L12 16.5"/>
  <!-- Gear overlay (small, top-right) -->
  <path d="M18 5 L18.5 5.5 L19 5 L19.5 5.5 L19 6 L19.5 6.5 L19 7 L18.5 6.5 L18 7 L17.5 6.5 L18 6 L17.5 5.5 Z"/>
</svg>
```

---

### 2. AI 自動化ワークフロー構築 — AI Workflow Automation

**Grid Position:** Middle-right, 3 columns × 1 row  
**Category:** AI Services

**Title (JA):** AI 自動化ワークフロー構築  
**Title (EN):** AI Workflow Automation

**Description (JA):**  
手作業のプロセスを AI で自動化。文書処理、データ抽出、レポート生成などを効率化。

**Description (EN):**  
Automate manual processes with AI. Streamline document processing, data extraction, and report generation.

**Features:**
1. **JA:** ドキュメント解析・分類自動化  
   **EN:** Automated document analysis & classification
2. **JA:** データ抽出・構造化  
   **EN:** Data extraction & structuring
3. **JA:** 既存システムとの連携  
   **EN:** Integration with existing systems
4. **JA:** プロセス監視・アラート  
   **EN:** Process monitoring & alerts

**Icon Design Direction:**
- Concept: Workflow pipeline + AI sparkle
- Style: Line art, 1.7px stroke
- Elements: 3 connected boxes (horizontal flow) with arrows, small AI sparkle on middle box

**SVG Skeleton:**
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <!-- Workflow boxes -->
  <rect x="3" y="9" width="4" height="6" rx="1"/>
  <rect x="10" y="9" width="4" height="6" rx="1"/>
  <rect x="17" y="9" width="4" height="6" rx="1"/>
  <!-- Arrows -->
  <path d="M7 12 L10 12 M14 12 L17 12"/>
  <!-- AI sparkle on middle box -->
  <path d="M12 7 L12 8 M12 16 L12 17 M9.5 9.5 L10 10 M14 14 L14.5 14.5"/>
</svg>
```

---

### 3. AI アプリケーション — AI Applications

**Grid Position:** Bottom-right (above Web3 Consulting), 3 columns × 1 row  
**Category:** AI Services

**Title (JA):** AI アプリケーション  
**Title (EN):** AI Applications

**Description (JA):**  
RAG、画像生成、音声処理など、AI を活用したカスタムアプリケーションを開発。

**Description (EN):**  
Develop custom AI-powered applications: RAG, image generation, voice processing, and more.

**Features:**
1. **JA:** RAG（検索拡張生成）システム  
   **EN:** RAG (Retrieval-Augmented Generation) systems
2. **JA:** マルチモーダル AI（画像・音声・テキスト）  
   **EN:** Multimodal AI (image, voice, text)
3. **JA:** ファインチューニング・モデル最適化  
   **EN:** Fine-tuning & model optimization
4. **JA:** API 設計・デプロイメント  
   **EN:** API design & deployment

**Icon Design Direction:**
- Concept: Application window + AI layers
- Style: Line art, 1.7px stroke
- Elements: Rectangular app frame with 3 stacked horizontal lines (layers) inside

**SVG Skeleton:**
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <!-- App window frame -->
  <rect x="4" y="5" width="16" height="14" rx="2"/>
  <!-- Top bar dots -->
  <circle cx="7" cy="8" r="0.5" fill="currentColor"/>
  <circle cx="9" cy="8" r="0.5" fill="currentColor"/>
  <circle cx="11" cy="8" r="0.5" fill="currentColor"/>
  <!-- AI layers inside -->
  <path d="M7 12 L17 12 M7 14.5 L17 14.5 M7 17 L14 17"/>
</svg>
```

---

### 4. ブロックチェーン / Web3.0 アプリケーション開発 — Blockchain / Web3.0 Development

**Grid Position:** Bottom-left, 4 columns × 1 row  
**Category:** Web3 Services

**Title (JA):** ブロックチェーン / Web3.0 アプリケーション開発  
**Title (EN):** Blockchain / Web3.0 Development

**Description (JA):**  
NFT、DApps、メタバース体験など、Web3.0 時代のアプリケーションを設計・開発。

**Description (EN):**  
Design and develop Web3.0 applications: NFTs, DApps, metaverse experiences, and more.

**Features:**
1. **JA:** NFT コレクション企画・開発  
   **EN:** NFT collection planning & development
2. **JA:** DApps フロントエンド開発  
   **EN:** DApps frontend development
3. **JA:** ウォレット連携・トランザクション設計  
   **EN:** Wallet integration & transaction design
4. **JA:** トークノミクス設計  
   **EN:** Tokenomics design

**Icon Design Direction:**
- Concept: Blockchain blocks + connection
- Style: Line art, 1.7px stroke
- Elements: 3 cubes connected by lines (isometric-style)

**SVG Skeleton:**
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <!-- Three connected blocks (isometric style) -->
  <path d="M6 10 L9 8 L9 12 L6 14 Z M9 8 L12 10 L12 14 L9 12 Z"/>
  <path d="M12 10 L15 8 L15 12 L12 14 Z M15 8 L18 10 L18 14 L15 12 Z"/>
  <path d="M9 12 L12 14 M15 12 L12 14"/>
</svg>
```

---

### 5. スマートコントラクト設計・開発・監査 — Smart Contract Design, Development & Audit

**Grid Position:** Featured (top-left), 6 columns × 2 rows  
**Category:** Web3 Services (FEATURED)

**Title (JA):** スマートコントラクト設計・開発・監査  
**Title (EN):** Smart Contract Design, Development & Audit

**Description (JA):**  
Solidity によるスマートコントラクト開発、セキュリティ監査、ガス最適化まで一貫して提供。ブロックチェーンの信頼性を支える基盤技術。

**Description (EN):**  
End-to-end smart contract development with Solidity, security audits, and gas optimization. The foundation of blockchain trust.

**Features:**
1. **JA:** Solidity によるスマートコントラクト開発  
   **EN:** Smart contract development with Solidity
2. **JA:** セキュリティ監査・脆弱性診断  
   **EN:** Security audits & vulnerability assessments
3. **JA:** ガス最適化・効率化  
   **EN:** Gas optimization & efficiency tuning
4. **JA:** テストスイート・自動化  
   **EN:** Test suites & automation
5. **JA:** デプロイメント・運用サポート  
   **EN:** Deployment & operational support

**Icon Design Direction:**
- Concept: Code brackets + shield (security + development)
- Style: Line art, 1.7px stroke
- Elements: `</>` brackets with shield overlay

**SVG Skeleton (current implementation is good):**
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.5 8.5L5 12l3.5 3.5M15.5 8.5L19 12l-3.5 3.5M13.5 6.5l-3 11"/>
</svg>
```

---

### 6. Web3.0 コンサルティング — Web3.0 Consulting

**Grid Position:** Bottom-right, 4 columns × 1 row  
**Category:** Web3 Services

**Title (JA):** Web3.0 コンサルティング  
**Title (EN):** Web3.0 Consulting

**Description (JA):**  
ブロックチェーン技術導入から戦略立案、チーム育成まで。プロジェクトを成功に導く包括的支援。

**Description (EN):**  
Comprehensive support from blockchain adoption strategy to team training. Guiding projects to success.

**Features:**
1. **JA:** ブロックチェーン技術導入戦略  
   **EN:** Blockchain adoption strategy
2. **JA:** Web3.0 プロジェクト企画支援  
   **EN:** Web3.0 project planning support
3. **JA:** 技術選定・アーキテクチャ設計  
   **EN:** Technology selection & architecture design
4. **JA:** 開発チーム育成・トレーニング  
   **EN:** Development team training & upskilling

**Icon Design Direction:**
- Concept: Compass + lightbulb (guidance + ideas)
- Style: Line art, 1.7px stroke
- Elements: Circle with N/S/E/W markers, small lightbulb overlay

**SVG Skeleton:**
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <!-- Compass circle -->
  <circle cx="12" cy="12" r="7"/>
  <!-- Compass points -->
  <path d="M12 5 L12 7 M12 17 L12 19 M5 12 L7 12 M17 12 L19 12"/>
  <!-- Compass needle -->
  <path d="M12 9 L10 12 L12 15 L14 12 Z" fill="currentColor" opacity="0.3"/>
  <!-- Lightbulb overlay (small, top-right) -->
  <path d="M16 6 L16 7 M15.5 7.5 L16.5 7.5 M16 8 L16 8.5"/>
</svg>
```

---

## Component States & Interactions

### Card Click Navigation
**All service cards are clickable** and navigate to detail pages:
- URL pattern: `/{lang}/services/{service-id}`
- Example: `/ja/services/smart-contract`, `/en/services/ai-agent-development`

**Service IDs:**
- `smart-contract` — Smart Contract Design, Development & Audit
- `ai-agent-development` — AI Agent Development
- `ai-workflow-automation` — AI Workflow Automation
- `ai-applications` — AI Applications
- `blockchain-development` — Blockchain / Web3.0 Development
- `web3-consulting` — Web3.0 Consulting

### Card Interactive States
```css
/* Default */
.bentoCard {
  cursor: pointer;
  transition: all 200ms ease;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
  border: 1px solid var(--border);
}

/* Hover */
.bentoCard:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);
  border-color: rgba(202, 138, 4, 0.3);
}

/* Focus (keyboard navigation) */
.bentoCard:focus {
  outline: 3px solid rgba(202, 138, 4, 0.5);
  outline-offset: 2px;
}

/* Active (click) */
.bentoCard:active {
  transform: translateY(0);
  box-shadow: 0 4px 8px rgba(15, 23, 42, 0.1);
}
```

### Icon Container
```css
.serviceIcon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(202, 138, 4, 0.12);
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease;
}

.bentoCard:hover .serviceIcon {
  background: rgba(202, 138, 4, 0.2);
  transform: scale(1.05);
}
```

### Feature List Bullets
- Shape: Solid circle (6px diameter)
- Color: Gold (`#CA8A04`)
- Position: Inline-start, vertically centered with first line

---

## Accessibility & Responsive Behavior

### Keyboard Navigation
- All cards focusable (`tabindex="0"`)
- Focus ring: `0 0 0 3px rgba(202, 138, 4, 0.3)`
- Arrow keys navigate between cards (optional enhancement)

### Screen Reader Support
- Heading hierarchy: H1 (page title) → H2 (section titles) → H3 (service titles)
- Icon `aria-hidden="true"` (decorative)
- Feature lists use semantic `<ul>` with proper nesting

### Responsive Breakpoints
- **375px:** 1-column, 16px gaps, 20px card padding
- **768px:** 2-column, 20px gaps, 24px card padding
- **1024px:** Bento grid layout, 24px gaps, 36px featured padding
- **1440px+:** Max-width container (1200px), increased spacing

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  .bentoCard,
  .serviceIcon {
    transition: none;
  }
  
  .bentoCard:hover {
    transform: none;
  }
}
```

---

## Content Hierarchy & Grouping Strategy

### Service Categorization
**AI Services Group (Top-right, 3 cards):**
1. AI Agent Development
2. AI Workflow Automation
3. AI Applications

**Web3 Services Group (Left + Bottom-right, 3 cards):**
1. Smart Contract (FEATURED)
2. Blockchain/Web3.0 Development
3. Web3.0 Consulting

### Why This Grouping?
- **Visual Balance:** AI services stack vertically, Web3 services form L-shape
- **Cognitive Load:** Related services visually grouped
- **Scanning Pattern:** F-pattern reading (Featured → AI stack → Bottom row)

### Featured Service Justification
**Smart Contract** as featured because:
1. **Differentiation:** Not every agency offers audits + optimization
2. **Trust Signal:** Security-first positioning
3. **Margin:** Typically highest-value engagements
4. **Technical Depth:** Showcases core competency

Alternative if business priorities shift: AI Agent Development (emerging market, high interest)

---

## Implementation Notes for Coder

### File Structure
```
app/[lang]/services/
├── page.tsx          ← Main page component
├── page.module.css   ← Page styles
└── ServiceCard.tsx   ← Optional: Extract card component for reusability
```

### Data Structure Recommendation
```typescript
// types/services.ts
export interface Service {
  id: string;
  titleJa: string;
  titleEn: string;
  descriptionJa: string;
  descriptionEn: string;
  features: {
    ja: string[];
    en: string[];
  };
  icon: React.ReactNode;
  category: 'ai' | 'web3';
  featured?: boolean;
}

// data/services.ts
export const services: Service[] = [
  {
    id: 'smart-contract',
    titleJa: 'スマートコントラクト設計・開発・監査',
    titleEn: 'Smart Contract Design, Development & Audit',
    // ... rest of data
    featured: true,
  },
  // ... other 5 services
];
```

### Bento Grid Layout Tips
1. **Use CSS Grid Template Areas** for clearer layout control:
```css
@media (min-width: 1024px) {
  .bentoGrid {
    grid-template-areas:
      "featured featured ai-agent ai-agent ai-agent ai-agent"
      "featured featured ai-workflow ai-workflow ai-workflow ai-workflow"
      "featured featured ai-apps ai-apps ai-apps ai-apps"
      "blockchain blockchain blockchain blockchain consulting consulting consulting consulting";
  }
  
  .service-smart-contract { grid-area: featured; }
  .service-ai-agent { grid-area: ai-agent; }
  /* etc */
}
```

2. **Avoid hardcoding grid positions** in component — pass as className or style prop

3. **Icon lazy loading:** Icons are inline SVG, no lazy loading needed

### Performance Considerations
- **Critical CSS:** Inline hero + above-fold card styles
- **Font Loading:** `font-display: swap` for Orbitron/Exo 2
- **Image Optimization:** N/A (SVG icons only)
- **JavaScript:** No client-side JS required for initial render (SSR-friendly)

---

## Design Validation Checklist

Before handoff to QA/PM:

- [x] All 6 services have JA/EN titles
- [x] All 6 services have JA/EN descriptions (1-2 sentences)
- [x] Each service has 4-5 features (JA/EN)
- [x] Each service has SVG icon design direction + skeleton code
- [x] Featured service clearly identified (Smart Contract)
- [x] Bento grid layout defined for desktop/tablet/mobile
- [x] Color palette matches design system (Navy + Gold + Light BG)
- [x] Typography uses Orbitron (headings) + Exo 2 (body)
- [x] No emojis used as icons (SVG only)
- [x] Accessibility notes included (focus states, screen readers)
- [x] Responsive breakpoints specified
- [x] Hover states defined with transitions
- [x] Motion preferences respected (prefers-reduced-motion)

---

## PM Decisions (2026-02-08 23:43)

✅ **Service Detail Pages:** Required — All 6 services have detail pages (`/services/{service-id}`)  
✅ **Case Studies:** Not on main Services page — Detail pages can link to Projects page  
✅ **Trust Signals:** Not needed — No client cases yet  

**Updated Design:**
- All cards clickable → navigate to detail pages
- No in-card "詳細を見る" button (entire card is the button)
- Detail page structure defined below (see Service Detail Page Specs)

---

# Service Detail Page Specifications

## Overview

Each of the 6 services has a dedicated detail page accessible at `/{lang}/services/{service-id}`.

**Design Goals:**
1. Deep-dive into service value proposition
2. Clear call-to-action (contact + view projects)
3. Establish technical credibility
4. Support SEO (unique H1, meta descriptions)

---

## URL Structure & Routing

| Service | JA URL | EN URL |
|---------|--------|--------|
| Smart Contract | `/ja/services/smart-contract` | `/en/services/smart-contract` |
| AI Agent Development | `/ja/services/ai-agent-development` | `/en/services/ai-agent-development` |
| AI Workflow Automation | `/ja/services/ai-workflow-automation` | `/en/services/ai-workflow-automation` |
| AI Applications | `/ja/services/ai-applications` | `/en/services/ai-applications` |
| Blockchain Development | `/ja/services/blockchain-development` | `/en/services/blockchain-development` |
| Web3 Consulting | `/ja/services/web3-consulting` | `/en/services/web3-consulting` |

**Implementation Note:** Use Next.js 13+ App Router dynamic routes: `app/[lang]/services/[serviceId]/page.tsx`

---

## Page Layout Structure

### 1. Breadcrumb Navigation
```
Home > Services > [Service Name]
ホーム > サービス > [サービス名]
```

**Style:**
- Font size: 0.875rem (14px)
- Color: `var(--text-tertiary)` with gold hover
- Separator: `/` (not `>` chevron)
- Current page: Bold, no link

**Implementation:**
```tsx
<nav aria-label="Breadcrumb" className={styles.breadcrumb}>
  <Link href="/">ホーム</Link>
  <span>/</span>
  <Link href="/services">サービス</Link>
  <span>/</span>
  <span aria-current="page">AI エージェント開発</span>
</nav>
```

### 2. Hero Section
**Layout:**
```
┌─────────────────────────────────────┐
│  [Icon]                             │
│  [Service Title (H1)]               │
│  [Service Subtitle/Tagline]         │
│  [CTA Buttons: お問い合わせ | 実績]  │
└─────────────────────────────────────┘
```

**Spacing:**
- Top padding: 40px (below breadcrumb)
- Bottom padding: 60px
- Content: Centered, max-width 800px

**Visual Treatment:**
- Icon: 64px container (vs 44px on main page)
- H1: `clamp(2rem, 5vw, 3rem)`, Orbitron 600
- Subtitle: `1.125rem`, Exo 2 400, color `var(--text-secondary)`
- CTA buttons: Side-by-side, 16px gap

### 3. Main Content Sections

#### Section A: "このサービスについて" / "About this service"
**Content:**
- 2-3 paragraphs explaining service in depth
- Who it's for
- What problems it solves
- Why choose Nebula Infinity

**Style:**
- Max-width: 720px (narrow for readability)
- Line height: 1.8
- Font size: 1.05rem
- Margin bottom: 80px

#### Section B: "主な機能・特徴" / "Key features"
**Layout:** 2-column grid (desktop), 1-column (mobile)

Each feature block:
```
┌─────────────────────────┐
│ [Icon]                  │
│ [Feature Title (H3)]    │
│ [Feature Description]   │
└─────────────────────────┘
```

**Content per service:**
- 4-6 feature blocks
- Each block: 60-80 words
- Icon: Same style as main page (line art, gold background)

**Example (Smart Contract):**
1. **Solidity 開発 / Solidity Development**  
   エンタープライズグレードのスマートコントラクトを設計・実装。ERC 標準準拠、カスタムロジック対応。
   
2. **セキュリティ監査 / Security Audits**  
   包括的な脆弱性診断。Reentrancy、Overflow、Access Control などの一般的な攻撃ベクトルをカバー。
   
3. **ガス最適化 / Gas Optimization**  
   トランザクションコストを最小化。ストレージ最適化、バッチ処理、効率的なデータ構造設計。
   
4. **テスト自動化 / Test Automation**  
   Hardhat/Foundry による包括的テストスイート。カバレッジ 90%+ 目標。

#### Section C: "使用技術・ツール" / "Technologies & tools"
**Layout:** Horizontal tag list (flexbox wrap)

**Content:**
- 8-12 technology tags per service
- Style: Rounded rectangles, light background
- Example tags (Smart Contract): Solidity, Hardhat, Foundry, OpenZeppelin, Ethers.js, Slither, Mythril, Tenderly

**Tag Style:**
```css
.techTag {
  padding: 8px 16px;
  background: rgba(202, 138, 4, 0.08);
  border: 1px solid rgba(202, 138, 4, 0.2);
  border-radius: 20px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  display: inline-block;
  margin: 4px;
}
```

#### Section D: "プロセス" / "Process"
**Layout:** Vertical timeline (4-5 steps)

**Visual Style:**
```
1 ────┐
      │ [Step Title]
      │ [Step Description]
      │
2 ────┤
      │ [Step Title]
      │ [Step Description]
      │
3 ────┤
      ...
```

**Generic Process Steps (adapt per service):**
1. **要件定義 / Requirements** — Initial consultation and scope definition
2. **設計 / Design** — Architecture planning and specification
3. **開発 / Development** — Implementation and iteration
4. **テスト / Testing** — QA, security review, optimization
5. **納品 / Delivery** — Deployment and documentation

**Timeline Visual:**
- Left side: Step number in gold circle (32px)
- Connecting line: 2px solid gold (vertical)
- Right side: Step content (title + description)

#### Section E: "関連プロジェクト" / "Related projects"
**Content:**
- Heading: "このサービスを使った実績" / "Projects using this service"
- Body text: "詳細は実績ページをご覧ください。" / "View our project portfolio for examples."
- CTA button: "実績を見る" / "View Projects" → Link to `/projects` page

**Visual Treatment:**
- Light gold background card
- Icon: Arrow right (→)
- No project cards displayed (per PM decision)

### 4. CTA Section (Bottom)
**Same as main Services page:**
- "サービスについてご相談ください" / "Discuss our services"
- Two buttons: "お問い合わせ" (primary) + "すべてのサービス" (outline, back to `/services`)

---

## Content Matrix for 6 Services

### 1. Smart Contract Design, Development & Audit

**H1 (JA):** スマートコントラクト設計・開発・監査  
**H1 (EN):** Smart Contract Design, Development & Audit

**Subtitle (JA):** ブロックチェーンの信頼性を支える、セキュアで効率的なスマートコントラクト開発  
**Subtitle (EN):** Secure, efficient smart contract development — the foundation of blockchain trust

**About (JA):**
スマートコントラクトはブロックチェーンアプリケーションの心臓部です。一度デプロイすると変更不可能なため、設計段階でのセキュリティと効率性が極めて重要です。

Nebula Infinity は、Solidity による堅牢なスマートコントラクト開発から、包括的なセキュリティ監査、ガス最適化まで、エンドツーエンドでサポートします。ERC 標準準拠はもちろん、カスタムロジックの実装、複雑なトークノミクス設計にも対応。

エンタープライズグレードの品質基準で、あなたのプロジェクトを成功に導きます。

**About (EN):**
Smart contracts are the heart of blockchain applications. Once deployed, they are immutable — making security and efficiency at the design stage absolutely critical.

Nebula Infinity provides end-to-end support: from robust Solidity development to comprehensive security audits and gas optimization. We handle ERC standard compliance, custom logic implementation, and complex tokenomics design.

With enterprise-grade quality standards, we guide your project to success.

**Technologies:** Solidity, Hardhat, Foundry, OpenZeppelin, Ethers.js, Web3.js, Slither, Mythril, Tenderly, Remix, Truffle, Ganache

---

### 2. AI Agent Development

**H1 (JA):** AI エージェント開発  
**H1 (EN):** AI Agent Development

**Subtitle (JA):** ビジネスプロセスを理解し、自律的に行動する AI エージェント  
**Subtitle (EN):** AI agents that understand your business and act autonomously

**About (JA):**
AI エージェントは、単なるチャットボットではありません。業務フローを理解し、判断し、アクションを実行する、次世代の自動化ツールです。

OpenAI、Anthropic Claude、Llama などのマルチモデルに対応。エージェント間連携（マルチエージェントシステム）により、複雑なタスクも段階的に処理します。

カスタマーサポート、データ分析、コンテンツ生成など、あらゆるビジネスシーンで活躍する AI エージェントを構築します。

**About (EN):**
AI agents go far beyond chatbots. They understand workflows, make decisions, and execute actions — the next generation of automation.

We support multi-model architectures: OpenAI, Anthropic Claude, Llama, and more. Multi-agent orchestration enables step-by-step handling of complex tasks.

From customer support to data analysis and content generation, we build AI agents that excel in every business scenario.

**Technologies:** OpenAI API, Anthropic Claude, LangChain, LlamaIndex, AutoGen, LangGraph, Ollama, Hugging Face, Vector DBs (Pinecone, Weaviate), Function Calling

---

### 3. AI Workflow Automation

**H1 (JA):** AI 自動化ワークフロー構築  
**H1 (EN):** AI Workflow Automation

**Subtitle (JA):** 手作業を AI で効率化、生産性を劇的に向上  
**Subtitle (EN):** Replace manual work with AI — dramatically boost productivity

**About (JA):**
ドキュメント処理、データ抽出、レポート生成など、繰り返し行う手作業を AI で自動化。時間とコストを削減し、ヒューマンエラーを防ぎます。

既存システム（CRM、ERP、データベース）との連携もスムーズ。API 統合やカスタムワークフローエンジンで、あなたの業務フローに最適な自動化を実現します。

導入から運用まで、一貫したサポートを提供します。

**About (EN):**
Automate repetitive manual tasks — document processing, data extraction, report generation — with AI. Reduce time and costs while eliminating human error.

Seamless integration with existing systems (CRM, ERP, databases). API integration and custom workflow engines deliver automation perfectly tailored to your business.

We provide consistent support from deployment through operations.

**Technologies:** n8n, Zapier, Make (Integromat), Apache Airflow, Langchain, OpenAI API, Document AI, OCR (Tesseract, Azure), Python, Node.js

---

### 4. AI Applications

**H1 (JA):** AI アプリケーション開発  
**H1 (EN):** AI Application Development

**Subtitle (JA):** RAG、画像生成、音声処理 — カスタム AI アプリを実現  
**Subtitle (EN):** RAG, image generation, voice processing — custom AI apps tailored to you

**About (JA):**
AI 技術を活用した独自アプリケーションを開発。RAG（検索拡張生成）による社内ナレッジ活用、画像生成ツール、音声アシスタントなど、幅広いユースケースに対応します。

ファインチューニングやモデル最適化により、あなたのデータに特化した高精度 AI を構築。API 設計、フロントエンド開発、インフラ構築まで、フルスタックで提供します。

**About (EN):**
Develop custom applications powered by AI. From RAG (Retrieval-Augmented Generation) for internal knowledge systems to image generation tools and voice assistants — we cover a wide range of use cases.

Fine-tuning and model optimization deliver high-precision AI tailored to your data. Full-stack delivery: API design, frontend development, and infrastructure setup.

**Technologies:** OpenAI API, Stable Diffusion, Whisper, ElevenLabs, ChromaDB, FAISS, Hugging Face, FastAPI, Next.js, LangChain, Gradio

---

### 5. Blockchain / Web3.0 Development

**H1 (JA):** ブロックチェーン / Web3.0 アプリケーション開発  
**H1 (EN):** Blockchain / Web3.0 Application Development

**Subtitle (JA):** NFT、DApps、メタバース — Web3 時代のアプリケーション  
**Subtitle (EN):** NFTs, DApps, metaverse — applications for the Web3 era

**About (JA):**
NFT コレクション、分散型アプリケーション（DApps）、メタバース体験など、Web3.0 時代のアプリケーションを設計・開発します。

ウォレット連携（MetaMask、WalletConnect）、トランザクション設計、トークノミクス最適化まで対応。フロントエンドは React / Next.js、バックエンドはスマートコントラクトと API で構築します。

ユーザー体験を重視した、実用的な Web3 アプリを提供します。

**About (EN):**
Design and develop Web3.0-era applications: NFT collections, decentralized applications (DApps), metaverse experiences, and more.

We handle wallet integration (MetaMask, WalletConnect), transaction design, and tokenomics optimization. Frontend built with React/Next.js, backend powered by smart contracts and APIs.

We deliver practical Web3 apps with a focus on user experience.

**Technologies:** Ethereum, Polygon, Solana, React, Next.js, Ethers.js, Web3.js, IPFS, Arweave, The Graph, MetaMask, WalletConnect, Hardhat

---

### 6. Web3.0 Consulting

**H1 (JA):** Web3.0 コンサルティング  
**H1 (EN):** Web3.0 Consulting

**Subtitle (JA):** ブロックチェーン導入から戦略立案、チーム育成まで包括支援  
**Subtitle (EN):** Comprehensive support: from blockchain adoption to strategy and team training

**About (JA):**
Web3.0 プロジェクトの成功には、技術選定、トークノミクス設計、コミュニティ戦略、規制対応など、多岐にわたる専門知識が必要です。

Nebula Infinity は、プロジェクト初期のフィージビリティスタディから、技術アーキテクチャ設計、開発チーム育成、ローンチ後のサポートまで、包括的にコンサルティングします。

あなたのビジョンを、実現可能なロードマップに落とし込みます。

**About (EN):**
Successful Web3.0 projects require expertise across technology selection, tokenomics design, community strategy, regulatory compliance, and more.

Nebula Infinity provides comprehensive consulting: from initial feasibility studies to technical architecture design, team training, and post-launch support.

We transform your vision into an actionable roadmap.

**Technologies:** (Consulting — no specific tools listed, or use:) Ethereum, Solidity, Tokenomics Frameworks, Governance Models, DAO Tools, Discord, Notion, Figma

---

## Responsive Behavior (Detail Pages)

### Desktop (1024px+)
- Content max-width: 1200px (container)
- Feature grid: 2 columns
- Process timeline: Horizontal layout option (if preferred)

### Tablet (768-1023px)
- Feature grid: 2 columns (narrower)
- Process timeline: Vertical (same as mobile)

### Mobile (375-767px)
- All content: Single column
- Feature blocks: Stacked
- CTA buttons: Stacked (full-width)
- Breadcrumb: Scrollable horizontal (overflow-x: auto)

---

## SEO & Metadata

### Meta Tags per Service
```tsx
export async function generateMetadata({ params }: { params: { lang: Language, serviceId: string } }) {
  const service = getServiceById(params.serviceId);
  const title = params.lang === 'ja' ? service.titleJa : service.titleEn;
  const description = params.lang === 'ja' ? service.descriptionJa : service.descriptionEn;
  
  return {
    title: `${title} - Nebula Infinity`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'website',
    },
  };
}
```

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Smart Contract Design, Development & Audit",
  "provider": {
    "@type": "Organization",
    "name": "Nebula Infinity"
  },
  "description": "Secure, efficient smart contract development...",
  "url": "https://nebulainfinity.com/en/services/smart-contract"
}
```

---

## Accessibility Notes (Detail Pages)

- **Skip to content link:** Add for keyboard users
- **Heading hierarchy:** H1 (service title) → H2 (section titles) → H3 (feature titles)
- **Breadcrumb:** `aria-label="Breadcrumb"`, current page has `aria-current="page"`
- **CTA buttons:** High contrast (4.5:1 minimum)
- **Focus indicators:** Visible on all interactive elements
- **Timeline:** Use `<ol>` (ordered list) for semantic structure

---

## Design Decisions Log

| Decision | Reasoning | Alternative Considered |
|----------|-----------|------------------------|
| Smart Contract as Featured | Core differentiator, highest trust signal | AI Agent (emerging market) |
| 6-column featured span | Optimal aspect ratio for 5 features + description | 8-column (too wide) |
| AI services vertical stack | Related services grouped visually | Scattered placement |
| Gold icon backgrounds | Premium feel, consistent with accent color | Navy backgrounds (less contrast) |
| **Service detail pages (NEW)** | **PM requirement: deep-dive content per service** | **No detail pages (initial plan)** |
| **Entire card clickable** | **Simpler UX, larger click target** | **"詳細を見る" button inside card** |
| **No case studies on detail pages** | **PM decision: no client cases yet** | **Embedded project cards** |
| 12-column grid base | Industry standard, flexible responsive design | 16-column (overcomplicated) |

---

## Next Steps

### Phase 1: Services Main Page (Priority: High)
1. **Coder:** Implement `app/[lang]/services/page.tsx` with clickable cards
2. **Coder:** Create 6 SVG icon components based on skeletons
3. **Coder:** Add card click navigation to detail pages

### Phase 2: Service Detail Pages (Priority: High)
4. **Coder:** Create dynamic route `app/[lang]/services/[serviceId]/page.tsx`
5. **Coder:** Implement detail page layout (breadcrumb, hero, sections)
6. **PM:** Write detailed content for all 6 services (using content matrix as base)
7. **Coder:** Integrate content + translations

### Phase 3: Review & Deploy
8. **Designer:** Visual QA (main page + 6 detail pages)
9. **QA:** Responsive testing (375px, 768px, 1024px, 1440px)
10. **QA:** Accessibility audit (keyboard nav, screen reader, WCAG AA)
11. **PM:** Content review (JA/EN accuracy, tone consistency)
12. **PM:** Staging review → Production deploy

**Estimated Timeline:**
- Phase 1: 4-6 hours
- Phase 2: 8-12 hours (including content writing)
- Phase 3: 4-6 hours
- **Total: 16-24 hours**

---

**Designer Sign-off:** Ready for coder implementation  
**Date:** 2026-02-08  
**Contact:** designer@openclaw (for clarifications)

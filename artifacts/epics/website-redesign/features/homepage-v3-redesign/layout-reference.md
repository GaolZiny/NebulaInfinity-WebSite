# Homepage V3 — Layout & CSS Reference

> **Companion to**: `handoff.md`
> **Date**: 2026-02-14
> **Purpose**: CSS Modules の完全なリファレンス。Coder はこのファイルの仕様をそのまま `page.module.css` に転写できる。

---

## 目次

1. [依存するデザイントークン](#1-依存するデザイントークン)
2. [ページ全体](#2-ページ全体)
3. [Hero セクション](#3-hero-セクション)
4. [コンセプトセクション](#4-コンセプトセクション)
5. [コア・コンピタンスセクション](#5-コアコンピタンスセクション)
6. [ソリューションセクション](#6-ソリューションセクション)
7. [開発哲学セクション](#7-開発哲学セクション)
8. [CTA セクション](#8-cta-セクション)
9. [アニメーション](#9-アニメーション)
10. [レスポンシブ全体](#10-レスポンシブ全体)
11. [12-Column Grid 設計メモ](#11-12-column-grid-設計メモ)

---

## 1. 依存するデザイントークン

`styles/theme.css` で定義済み。**新規トークン追加不要**。

```
--font-heading:        'Orbitron', 'Noto Sans JP', 'Exo 2', sans-serif
--font-sans:           'Exo 2', 'Noto Sans JP', sans-serif
--color-primary:       #0F172A
--color-cta:           #CA8A04
--color-background:    #F8FAFC
--color-text:          #020617
--accent-primary:      #CA8A04
--text-primary:        #020617
--text-secondary:      #475569
--text-tertiary:       #A1A1AA
--surface:             #FFFFFF
--border:              #E4E4E7
--shadow-xs / sm / md / lg / xl  (defined in theme.css)
--radius-sm(4) / md(8) / lg(12) / xl(16) / full(9999)
--transition-fast(120) / base(200) / slow(300)
--space-1(4) .. --space-9(96)
--nav-height:          80px
```

---

## 2. ページ全体

```css
/* === Page Wrapper (既存流用) === */

.page {
  position: relative;
  padding-top: var(--nav-height);
  background: var(--background);
  color: var(--text-primary);
  overflow: hidden;
}

/* 背景オーブ（既存流用） */
.page::before,
.page::after {
  content: '';
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  z-index: 0;
  filter: blur(0.5px);
  pointer-events: none;
}

.page::before {
  top: -140px;
  right: -120px;
  background: radial-gradient(circle, rgba(202, 138, 4, 0.18), rgba(202, 138, 4, 0));
}

.page::after {
  bottom: -180px;
  left: -140px;
  background: radial-gradient(circle, rgba(15, 23, 42, 0.12), rgba(15, 23, 42, 0));
}
```

---

## 3. Hero セクション

```css
/* === Hero === */

.hero {
  position: relative;
  z-index: 1;
  padding: 96px 0 72px;
}

.heroContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  gap: 32px;
}

.heroTitle {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4.2rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--text-primary);
}

.heroSubtitle {
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 740px;
}

/* --- Badges Container --- */

.heroBadges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
}

/* --- Individual Badge --- */

.badge {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  background: #ffffff;
  border-radius: var(--radius-xl);            /* 16px */
  border: 1px solid rgba(202, 138, 4, 0.2);
  box-shadow:
    0 8px 24px rgba(15, 23, 42, 0.08),
    0 2px 8px rgba(15, 23, 42, 0.04);
  flex: 1 1 280px;
  max-width: 340px;
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base);
  /* 浮遊アニメーション — §9 参照 */
}

.badge:hover {
  transform: translateY(-3px);
  box-shadow:
    0 12px 32px rgba(15, 23, 42, 0.12),
    0 4px 12px rgba(15, 23, 42, 0.06);
}

.badgeIconWrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 12px;
  background: rgba(202, 138, 4, 0.1);
  color: var(--accent-primary);
}

.badgeIcon {
  width: 24px;
  height: 24px;
}

.badgeText {
  display: flex;
  flex-direction: column;
}

.badgeTitle {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.badgeDesc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-top: 2px;
}

/* --- Hero CTA --- */

.heroActions {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}
```

---

## 4. コンセプトセクション

```css
/* === Concept === */

.concept {
  position: relative;
  z-index: 1;
  padding: 80px 0;
}

.conceptContent {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.conceptTitle {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 3.2vw, 2.8rem);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.conceptLead {
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  line-height: 2;
  color: var(--text-secondary);
}

.conceptHighlight {
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--accent-primary);
}

/* --- 4 Keywords --- */

.conceptKeywords {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 8px;
}

.keyword {
  padding: 14px 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent-primary);
  border-radius: var(--radius-md);         /* 8px */
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-primary);
  text-align: center;
  transition: box-shadow var(--transition-base);
}

.keyword:hover {
  box-shadow: var(--shadow-md);
}
```

---

## 5. コア・コンピタンスセクション

```css
/* === Core Competence === */

.competence {
  position: relative;
  z-index: 1;
  padding: 80px 0;
}

/* --- Shared Section Header (reused in §6, §7) --- */

.sectionHeader {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 48px;
}

.sectionTitle {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  font-weight: 600;
  line-height: 1.3;
  color: var(--text-primary);
}

.sectionSubtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-top: 16px;
}

/* --- Competence Cards Stack --- */

.competenceCards {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.competenceCard {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px 36px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent-primary);  /* Gold accent bar */
  border-radius: var(--radius-lg);                /* 12px */
  box-shadow: var(--shadow-sm);
  transition:
    box-shadow var(--transition-base),
    transform var(--transition-base);
}

.competenceCard:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.cardEyebrow {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-primary);
  letter-spacing: 0.08em;
}

.cardHeading {
  font-family: var(--font-sans);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
}

.cardBody {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--text-secondary);
}
```

---

## 6. ソリューションセクション

```css
/* === Solutions === */

.solutions {
  position: relative;
  z-index: 1;
  padding: 80px 0;
}

.solutionGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.solutionCard {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition:
    box-shadow var(--transition-base),
    transform var(--transition-base);
}

.solutionCard:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-3px);
}

.solutionNumber {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(202, 138, 4, 0.15);    /* Ghost number */
  line-height: 1;
  letter-spacing: -0.04em;
}

.solutionTitle {
  font-family: var(--font-sans);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
}

.solutionLabel {
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--accent-primary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.solutionBody {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--text-secondary);
}
```

---

## 7. 開発哲学セクション

```css
/* === Philosophy === */

.philosophy {
  position: relative;
  z-index: 1;
  padding: 80px 0;
}

.philosophyGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.philosophyCard {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 28px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs);
  transition:
    box-shadow var(--transition-base),
    transform var(--transition-base);
}

.philosophyCard:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.philosophyIconWrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(202, 138, 4, 0.12);
  color: var(--accent-primary);
}

.philosophyIcon {
  width: 24px;
  height: 24px;
}

.philosophyTitle {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.philosophyDesc {
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--text-secondary);
}
```

---

## 8. CTA セクション

```css
/* === CTA === */

.ctaSection {
  position: relative;
  z-index: 1;
  padding: 64px 0 96px;
}

.ctaBanner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding: 64px 48px;
  border-radius: var(--radius-xl);
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.04) 0%,
    rgba(202, 138, 4, 0.1) 50%,
    rgba(15, 23, 42, 0.06) 100%
  );
  border: 1px solid rgba(202, 138, 4, 0.18);
  box-shadow: var(--shadow-md);
}

.ctaTitle {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 2.8vw, 2.2rem);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  max-width: 600px;
}

.ctaDescription {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 560px;
  margin: 0;
}

.ctaActions {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}
```

---

## 9. アニメーション

```css
/* === Badge Float Animation === */

@keyframes badgeFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.badge:nth-child(1) {
  animation: badgeFloat 4s ease-in-out infinite;
}

.badge:nth-child(2) {
  animation: badgeFloat 4s ease-in-out 0.5s infinite;
}

.badge:nth-child(3) {
  animation: badgeFloat 4s ease-in-out 1s infinite;
}

/* Pause on hover */
.badge:hover {
  animation-play-state: paused;
}

/* === Reduced Motion === */

@media (prefers-reduced-motion: reduce) {
  .badge {
    animation: none;
  }

  .badge:hover,
  .competenceCard:hover,
  .solutionCard:hover,
  .philosophyCard:hover {
    transform: none;
  }
}
```

---

## 10. レスポンシブ全体

```css
/* ===========================
   Breakpoint: 1024px (Tablet)
   =========================== */

@media (max-width: 1024px) {

  /* Hero */
  .heroBadges {
    gap: 16px;
  }

  .badge {
    flex: 1 1 240px;
  }

  /* Solutions: 3-col → 1-col */
  .solutionGrid {
    grid-template-columns: 1fr;
  }

  /* Philosophy: 3-col → 2-col (3rd centered) */
  .philosophyGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .philosophyCard:last-child {
    grid-column: 1 / -1;
    max-width: 50%;
    margin: 0 auto;
  }
}

/* ===========================
   Breakpoint: 768px (Mobile L)
   =========================== */

@media (max-width: 768px) {

  /* Hero */
  .hero {
    padding: 64px 0 48px;
  }

  .heroContent {
    gap: 24px;
  }

  /* Concept keywords: 4 → 2 columns */
  .conceptKeywords {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Competence cards */
  .competenceCard {
    padding: 24px 20px;
  }

  /* Solution cards */
  .solutionCard {
    padding: 24px 20px;
  }

  /* Philosophy: 2-col → 1-col */
  .philosophyGrid {
    grid-template-columns: 1fr;
  }

  .philosophyCard:last-child {
    max-width: 100%;
  }

  /* CTA */
  .ctaBanner {
    padding: 48px 24px;
  }

  /* Section spacing */
  .concept,
  .competence,
  .solutions,
  .philosophy {
    padding: 64px 0;
  }
}

/* ===========================
   Breakpoint: 480px (Mobile S)
   =========================== */

@media (max-width: 480px) {

  /* Hero */
  .hero {
    padding: 48px 0 36px;
  }

  .heroTitle {
    font-size: clamp(2rem, 8vw, 2.8rem);
  }

  /* Badges: horizontal → vertical */
  .heroBadges {
    flex-direction: column;
    align-items: stretch;
  }

  .badge {
    max-width: 100%;
    flex: none;
  }

  /* Concept keywords: 2 → 1 column */
  .conceptKeywords {
    grid-template-columns: 1fr;
  }

  /* Competence cards */
  .competenceCard {
    padding: 20px 16px;
  }

  .cardEyebrow {
    font-size: 0.75rem;
  }

  /* CTA */
  .ctaBanner {
    padding: 36px 20px;
  }

  /* Section spacing */
  .concept,
  .competence,
  .solutions,
  .philosophy {
    padding: 48px 0;
  }

  .ctaSection {
    padding: 48px 0 64px;
  }
}
```

---

## 11. 12-Column Grid 設計メモ

本デザインでは、12-column grid は `.container` (max-width: 1200px) 内でのコンテンツ配置の指針として使用。

### 各セクションの論理カラム使用量

| セクション | Desktop Grid | 備考 |
|-----------|-------------|------|
| Hero (.heroContent) | 中央 10 col (max-width: 900px) | 12col の 83% |
| Concept (.conceptContent) | 中央 8 col (max-width: 800px) | 12col の 67% |
| Competence Cards | 全幅 12 col | full-width カード |
| Solution Grid | 3 × 4 col | `repeat(3, 1fr)` = 各 4 col |
| Philosophy Grid | 3 × 4 col | 同上 |
| CTA Banner | 全幅 12 col | 内部テキストは max-width 制限 |

### 論理グリッド値

```
container: 1200px
1 col = 1200 / 12 = 100px
gap (論理): 24px
```

> ⚠️ 実装上は `grid-template-columns: repeat(N, 1fr)` + `gap` で十分。明示的な 12-column grid 定義は不要。`max-width` でコンテンツ幅を制御。

---

## CSS クラス名一覧（全セクション）

Coder がコピペで `page.module.css` に追加できるクラス名リスト:

```
/* Page */
.page

/* Hero */
.hero
.heroContent
.heroTitle
.heroSubtitle
.heroBadges
.badge
.badgeIconWrap
.badgeIcon
.badgeText
.badgeTitle
.badgeDesc
.heroActions

/* Concept */
.concept
.conceptContent
.conceptTitle
.conceptLead
.conceptHighlight
.conceptKeywords
.keyword

/* Competence */
.competence
.sectionHeader          ← shared
.sectionTitle           ← shared
.sectionSubtitle        ← shared (solutions only)
.competenceCards
.competenceCard
.cardEyebrow
.cardHeading
.cardBody

/* Solutions */
.solutions
.solutionGrid
.solutionCard
.solutionNumber
.solutionTitle
.solutionLabel
.solutionBody

/* Philosophy */
.philosophy
.philosophyGrid
.philosophyCard
.philosophyIconWrap
.philosophyIcon
.philosophyTitle
.philosophyDesc

/* CTA */
.ctaSection
.ctaBanner
.ctaTitle
.ctaDescription
.ctaActions
```

### 削除対象クラス名（旧デザイン）

```
/* 以下を page.module.css から完全削除 */
.heroInner
.heroCopy
.heroDescription
.heroPanel
.heroPanelHeader
.heroPanelTag
.heroPanelGrid
.panelCard
.panelDot
.panelLabel
.panelValue
.heroPanelFooter
.panelFlow
.flowDivider
.bentoSection
.bentoGrid
.bentoCard
.bentoUniform
.cardHeader
.cardIconWrap
.cardIcon
.cardTitle
.cardDescription
.cardList
.principlesSection
.principlesGrid
.principleCard
.principleIconWrap
.principleIcon
.principleTitle
.principleDescription
.ctaCard
```

---

## ファイル変更サマリ

| ファイル | 操作 |
|---------|------|
| `app/[lang]/page.module.css` | 全面書き換え（このドキュメントの CSS をベースに） |
| `app/[lang]/page.tsx` | 全面書き換え（handoff.md のコンポーネント構造に準拠） |
| `data/translations/ja.json` | `hero`, `concept`, `competence`, `solutions`, `philosophy`, `cta` キー追加 |
| `data/translations/en.json` | 同上 |
| `styles/theme.css` | 変更なし |
| `styles/globals.css` | 変更なし |
| `components/ui/Button.tsx` | 変更なし（既存を使用） |
| `components/ui/Card.tsx` | 使用しない（page.module.css 内でカードスタイルを直接定義）|

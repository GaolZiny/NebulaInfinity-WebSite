# Homepage V3 — Design Handoff

> **Designer**: AI Designer Agent
> **Date**: 2026-02-14
> **Status**: Ready for Implementation
> **Companion doc**: `layout-reference.md` (CSS/grid の詳細仕様)

---

## 目次

1. [全体構造](#1-全体構造)
2. [Hero セクション](#2-hero-セクション)
3. [コンセプトセクション](#3-コンセプトセクション)
4. [コア・コンピタンスセクション](#4-コアコンピタンスセクション)
5. [ソリューションセクション](#5-ソリューションセクション)
6. [開発哲学セクション](#6-開発哲学セクション)
7. [CTA セクション](#7-cta-セクション)
8. [SVG アイコン仕様](#8-svg-アイコン仕様)
9. [アニメーション仕様](#9-アニメーション仕様)
10. [アクセシビリティ](#10-アクセシビリティ)
11. [英語版対応メモ](#11-英語版対応メモ)

---

## 1. 全体構造

### ページラッパー

```
.page
├── section.hero
├── section.concept
├── section.competence
├── section.solutions
├── section.philosophy
└── section.cta
```

- **ファイル**: `app/[lang]/page.tsx` + `app/[lang]/page.module.css`
- 既存の `.page` ラッパー（背景デコ含む）をそのまま流用
- 既存 `.container` (max-width: 1200px, padding: 0 24px) を全セクションで使用
- 旧セクション（`.bentoSection`, `.heroPanel` 等）は完全削除

### 背景デコレーション

既存の `.page::before` / `.page::after` の radial-gradient オーブをそのまま維持。ページ全体の奥行き感を演出。

### セクション間余白

| 位置 | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| Hero padding-top | 96px | 80px | 64px |
| Hero padding-bottom | 72px | 60px | 48px |
| 各セクション padding | 80px 0 | 64px 0 | 48px 0 |
| CTA padding-bottom | 96px | 80px | 64px |

---

## 2. Hero セクション

### 概要

旧デザインの 7:5 二カラム構造を廃止。**シングルカラム・センター寄り構成**に変更。メインキャッチ → サブキャッチ → バッジ 3 枚 → CTA ボタンの縦フロー。

### コンポーネント構造

```
section.hero
└── div.container
    └── div.heroContent           ← 中央寄せラッパー
        ├── h1.heroTitle          ← メインキャッチ（2行）
        ├── p.heroSubtitle        ← サブキャッチ（3行）
        ├── div.heroBadges        ← バッジ 3 枚コンテナ
        │   ├── div.badge         ← バッジ 1（速度）
        │   │   ├── span.badgeIconWrap
        │   │   │   └── svg      ← 雷アイコン
        │   │   └── div.badgeText
        │   │       ├── span.badgeTitle
        │   │       └── span.badgeDesc
        │   ├── div.badge         ← バッジ 2（コスト）
        │   └── div.badge         ← バッジ 3（品質）
        └── div.heroActions
            └── Link > Button     ← CTA（1 つ）
```

### `.heroContent`

| Property | Value |
|----------|-------|
| display | flex |
| flex-direction | column |
| align-items | center |
| text-align | center |
| max-width | 900px |
| margin | 0 auto |
| gap | 32px |

### `.heroTitle`

| Property | Value |
|----------|-------|
| font-family | var(--font-heading) (Orbitron) |
| font-size | clamp(2.5rem, 5vw, 4.2rem) |
| font-weight | 700 |
| line-height | 1.1 |
| letter-spacing | -0.03em |
| color | var(--text-primary) |

**テキスト**:
```
JA: AIを本物の「生産力」に\n御社の「AI社会実装」のパートナー
EN: Turn AI into real\n"productive power"
```

「生産力」と「AI社会実装」は通常テキスト（特別な装飾なし）。Orbitron のウェイトで十分にインパクトがある。

### `.heroSubtitle`

| Property | Value |
|----------|-------|
| font-family | var(--font-sans) (Exo 2 + Noto Sans JP) |
| font-size | clamp(1rem, 1.8vw, 1.2rem) |
| line-height | 1.8 |
| color | var(--text-secondary) |
| max-width | 740px |

### ⚠️ `.heroBadges` — **最重要コンポーネント**

**レイアウト**: 横 3 列（Desktop/Tablet）→ 縦 1 列（Mobile）

| Property | Value |
|----------|-------|
| display | flex |
| flex-wrap | wrap |
| justify-content | center |
| gap | 20px |
| width | 100% |

### ⚠️ `.badge` — 個別バッジ

**デザイン意図**: Z の指示「軽いシャドウの角丸白背景ボックス、浮遊感」を最大限に表現。ページ訪問者の第一印象でこの 3 つに目が行くこと。

| Property | Value | 備考 |
|----------|-------|------|
| display | flex | |
| align-items | center | |
| gap | 16px | アイコンとテキスト間 |
| padding | 16px 24px | 十分な内部余白 |
| background | #FFFFFF | 白背景 |
| border-radius | 16px | var(--radius-xl) — 大きめ角丸 |
| border | 1px solid rgba(202, 138, 4, 0.2) | Gold の薄いボーダー |
| box-shadow | 0 8px 24px rgba(15, 23, 42, 0.08), 0 2px 8px rgba(15, 23, 42, 0.04) | **カスタム浮遊シャドウ** |
| flex | 1 1 280px | 均等幅・最小 280px |
| max-width | 340px | 広がりすぎ防止 |
| cursor | default | クリック要素ではない |
| transition | transform var(--transition-base), box-shadow var(--transition-base) | |

**hover**:
```css
.badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12), 0 4px 12px rgba(15, 23, 42, 0.06);
}
```

### `.badgeIconWrap`

| Property | Value |
|----------|-------|
| display | inline-flex |
| align-items | center |
| justify-content | center |
| width | 48px |
| height | 48px |
| min-width | 48px |
| border-radius | 12px |
| background | rgba(202, 138, 4, 0.1) |
| color | var(--accent-primary) (#CA8A04) |

**アイコンは SVG**: 24×24 viewBox、stroke ベース（詳細は §8 参照）

### `.badgeTitle`

| Property | Value |
|----------|-------|
| display | block |
| font-family | var(--font-heading) (Orbitron) |
| font-size | 1.05rem |
| font-weight | 700 |
| color | var(--text-primary) |
| letter-spacing | -0.01em |

### `.badgeDesc`

| Property | Value |
|----------|-------|
| display | block |
| font-size | 0.85rem |
| color | var(--text-secondary) |
| line-height | 1.5 |
| margin-top | 2px |

### バッジデータ（3 枚）

| # | Icon | badgeTitle (JA) | badgeDesc (JA) | badgeTitle (EN) | badgeDesc (EN) |
|---|------|----------------|----------------|-----------------|-----------------|
| 1 | Lightning (雷) | 圧倒的スピード | 最短1時間〜1営業日でMVP提供 | Overwhelming Speed | MVP delivery in 1 hour to 1 business day |
| 2 | ArrowDown (下降矢印) | コストと時間を圧縮 | 従来の1/3以下に | Compress Cost & Time | Reduce to 1/3 or less |
| 3 | Shield (盾) | 確かな品質保証 | AI × 人のハイブリッド検証 | Proven Quality | AI + Human hybrid testing |

> ⚠️ EN の badgeDesc は content-v3.md の原文より短縮表示を推奨。バッジは「一目で伝わる」ことが最重要。JA も同様に短文に調整済み。

### `.heroActions`

| Property | Value |
|----------|-------|
| display | flex |
| justify-content | center |
| margin-top | 8px |

CTA ボタンは既存 `<Button size="lg">` を使用。variant="primary" (Gold 背景)。

**ボタンテキスト**:
- JA: `まずは無料で相談・MVP作成を依頼する`
- EN: `Get a Free Consultation & Request Your MVP`

### Hero レスポンシブ

| Breakpoint | 変更 |
|------------|------|
| ≤ 1024px | `.heroBadges` gap: 16px, `.badge` flex: 1 1 240px |
| ≤ 768px | `.hero` padding: 64px 0 48px, `.heroTitle` font-size min 2.2rem |
| ≤ 480px | `.heroBadges` flex-direction: column, `.badge` max-width: 100%, flex: none, width: 100% |

---

## 3. コンセプトセクション

### 概要

テキスト中心のシンプルなセクション。「AI Native Solution」を視覚的に強調し、4 つのキーワードを目立たせる。

### コンポーネント構造

```
section.concept
└── div.container
    └── div.conceptContent        ← 中央寄せ
        ├── h2.conceptTitle       ← セクション見出し
        ├── div.conceptLead       ← リード文（ハイライト含む）
        │   └── span.conceptHighlight  ← "AI Native Solution" ハイライト
        └── div.conceptKeywords   ← 4 つのキーワード
            ├── div.keyword
            ├── div.keyword
            ├── div.keyword
            └── div.keyword
```

### `.conceptContent`

| Property | Value |
|----------|-------|
| text-align | center |
| max-width | 800px |
| margin | 0 auto |
| display | flex |
| flex-direction | column |
| gap | 32px |

### `.conceptTitle`

| Property | Value |
|----------|-------|
| font-family | var(--font-heading) |
| font-size | clamp(1.8rem, 3.2vw, 2.8rem) |
| font-weight | 600 |
| color | var(--text-primary) |

**テキスト**:
- JA: `私たちが提供する「AI Native Solution」とは`
- EN: `What is our "AI Native Solution"?`

「AI Native Solution」の部分は `.conceptTitle` 内でそのまま表示（Orbitron フォントで英語部分が自然に目立つ）。

### `.conceptLead`

| Property | Value |
|----------|-------|
| font-size | clamp(1rem, 1.6vw, 1.15rem) |
| line-height | 2 |
| color | var(--text-secondary) |

### `.conceptHighlight`

「AI Native Solution」を引用符付きで強調表示。

| Property | Value |
|----------|-------|
| display | inline |
| font-family | var(--font-heading) (Orbitron) |
| font-weight | 700 |
| color | var(--accent-primary) (#CA8A04) |
| position | relative |

装飾: `::before` / `::after` で左右に微小な引用符（`「」`）を Gold カラーで表示してもよいが、テキスト自体に括弧があるため省略可。フォント＋色だけで十分区別される。

### `.conceptKeywords` — 4 つのキーワードバー

レイアウト: 横 4 列 → 2×2 (Tablet) → 縦 1 列 (Mobile)

| Property | Value |
|----------|-------|
| display | grid |
| grid-template-columns | repeat(4, 1fr) |
| gap | 16px |
| margin-top | 8px |

### `.keyword`

| Property | Value |
|----------|-------|
| padding | 14px 16px |
| background | var(--surface) (#FFFFFF) |
| border | 1px solid var(--border) |
| border-left | 3px solid var(--accent-primary) |
| border-radius | var(--radius-md) (8px) |
| font-weight | 600 |
| font-size | 0.95rem |
| color | var(--text-primary) |
| text-align | center |
| transition | box-shadow var(--transition-base) |

**hover**:
```css
.keyword:hover {
  box-shadow: var(--shadow-md);
}
```

**4 つのキーワード**:

| # | JA | EN |
|---|----|----|
| 1 | 効率化 | Efficiency |
| 2 | 品質向上 | Quality |
| 3 | コスト削減 | Cost Reduction |
| 4 | 期間短縮 | Time Savings |

### コンセプト レスポンシブ

| Breakpoint | 変更 |
|------------|------|
| ≤ 768px | `.conceptKeywords` grid-template-columns: repeat(2, 1fr) |
| ≤ 480px | `.conceptKeywords` grid-template-columns: 1fr |

---

## 4. コア・コンピタンスセクション

### 概要

3 つの大型カードで「なぜそれが可能なのか」を伝える。本文が長い（各 2-3 段落相当）ため、**縦積みレイアウト（full-width カード × 3 段）** を採用。各カードの左端に Gold アクセントバーを配置し、視覚的リズムを作る。

### コンポーネント構造

```
section.competence
└── div.container
    ├── div.sectionHeader
    │   └── h2.sectionTitle
    └── div.competenceCards       ← 縦積みコンテナ
        ├── div.competenceCard    ← カード 1
        │   ├── span.cardEyebrow ← ラベル（理由1:...）
        │   ├── h3.cardHeading   ← 見出し
        │   └── p.cardBody       ← 本文
        ├── div.competenceCard    ← カード 2
        └── div.competenceCard    ← カード 3
```

### `.sectionHeader`（共通 — コンピタンス/ソリューション/哲学で流用）

| Property | Value |
|----------|-------|
| text-align | center |
| max-width | 720px |
| margin | 0 auto 48px |

### `.sectionTitle`（共通）

| Property | Value |
|----------|-------|
| font-family | var(--font-heading) |
| font-size | clamp(1.8rem, 3.2vw, 2.6rem) |
| font-weight | 600 |
| line-height | 1.3 |

**テキスト**:
- JA: `圧倒的なスピードと品質を両立する「3つの理由」`
- EN: `3 Reasons We Achieve Both Speed and Quality`

### `.competenceCards`

| Property | Value |
|----------|-------|
| display | flex |
| flex-direction | column |
| gap | 24px |

### `.competenceCard`

| Property | Value | 備考 |
|----------|-------|------|
| display | flex |
| flex-direction | column |
| gap | 12px |
| padding | 32px 36px | 十分な余白 |
| background | var(--surface) | 白背景 |
| border | 1px solid var(--border) | |
| border-left | 4px solid var(--accent-primary) | **Gold アクセントバー** |
| border-radius | var(--radius-lg) (12px) | |
| box-shadow | var(--shadow-sm) | |
| transition | box-shadow var(--transition-base), transform var(--transition-base) | |

**hover**:
```css
.competenceCard:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

### `.cardEyebrow`

| Property | Value |
|----------|-------|
| font-size | 0.8rem |
| font-weight | 600 |
| color | var(--accent-primary) (#CA8A04) |
| text-transform | uppercase |
| letter-spacing | 0.08em |

**テキスト例**: `理由1：【強み】プロのコンサルタントによる「業務整理・分析力」`

EN: `Reason 1: Professional Business Analysis & Consulting`

### `.cardHeading`

| Property | Value |
|----------|-------|
| font-family | var(--font-sans) (Exo 2 + Noto Sans JP) |
| font-size | clamp(1.2rem, 2vw, 1.5rem) |
| font-weight | 700 |
| color | var(--text-primary) |
| line-height | 1.4 |

> **注**: `.cardHeading` は Orbitron ではなく Exo 2 / Noto Sans JP を使用。理由: 日本語の長い見出しを Orbitron で表示すると Noto Sans JP にフォールバックし、混在感が出る。body フォントで統一して可読性を確保。

### `.cardBody`

| Property | Value |
|----------|-------|
| font-size | 1rem |
| line-height | 1.85 |
| color | var(--text-secondary) |

### カードデータ（3 枚）

> テキストは `content-v3.md` の通り。Coder はそのまま使用すること。

| # | eyebrow (JA 要約) | heading (JA) |
|---|-------------------|--------------|
| 1 | 理由1：【強み】プロのコンサルタントによる「業務整理・分析力」 | ソリューション設計の前に、真のニーズを的確に抽出。 |
| 2 | 理由2：【手段】独自の「AI駆動開発方法論」 | 最短1時間で動くMVPを提供。 |
| 3 | 理由3：【品質】AI ＋ 人工の「ハイブリッド・テスト体制」 | スピード重視でも、品質は絶対に妥協しない。 |

### コア・コンピタンス レスポンシブ

| Breakpoint | 変更 |
|------------|------|
| ≤ 768px | `.competenceCard` padding: 24px 20px |
| ≤ 480px | `.competenceCard` padding: 20px 16px, `.cardEyebrow` font-size: 0.75rem |

---

## 5. ソリューションセクション

### 概要

3 つの具体的ソリューションを紹介。テキストがコア・コンピタンスより短いため、**Desktop は 3 列グリッド**を採用。各カードに番号ラベルで視覚的な順序感を出す。

### コンポーネント構造

```
section.solutions
└── div.container
    ├── div.sectionHeader
    │   ├── h2.sectionTitle
    │   └── p.sectionSubtitle     ← （このセクションのみサブタイトルあり）
    └── div.solutionGrid
        ├── div.solutionCard
        │   ├── span.solutionNumber  ← "01"
        │   ├── h3.solutionTitle
        │   ├── span.solutionLabel   ← 英語ラベル
        │   └── p.solutionBody
        ├── div.solutionCard
        └── div.solutionCard
```

### `.solutionGrid`

| Property | Value |
|----------|-------|
| display | grid |
| grid-template-columns | repeat(3, 1fr) |
| gap | 24px |

### `.solutionCard`

| Property | Value |
|----------|-------|
| display | flex |
| flex-direction | column |
| gap | 12px |
| padding | 28px |
| background | var(--surface) |
| border | 1px solid var(--border) |
| border-radius | var(--radius-lg) |
| box-shadow | var(--shadow-sm) |
| transition | box-shadow var(--transition-base), transform var(--transition-base) |

**hover**: `box-shadow: var(--shadow-lg); transform: translateY(-3px);`

### `.solutionNumber`

| Property | Value |
|----------|-------|
| font-family | var(--font-heading) (Orbitron) |
| font-size | 2.5rem |
| font-weight | 700 |
| color | rgba(202, 138, 4, 0.15) | ← Gold の 15% 不透明度 |
| line-height | 1 |
| letter-spacing | -0.04em |

表示: `01`, `02`, `03`（ゼロ埋め）

### `.solutionTitle`

| Property | Value |
|----------|-------|
| font-family | var(--font-sans) |
| font-size | 1.2rem |
| font-weight | 700 |
| color | var(--text-primary) |
| line-height | 1.4 |

**テキスト例** (JA): `業務フローへのAI統合`

### `.solutionLabel`

| Property | Value |
|----------|-------|
| font-family | var(--font-heading) (Orbitron) |
| font-size | 0.75rem |
| font-weight | 500 |
| color | var(--accent-primary) |
| letter-spacing | 0.1em |
| text-transform | uppercase |

**テキスト例**: `AI Native Workflow`

### `.solutionBody`

| Property | Value |
|----------|-------|
| font-size | 0.95rem |
| line-height | 1.8 |
| color | var(--text-secondary) |

### カードデータ

| # | Number | Title (JA) | Label | Title (EN) |
|---|--------|-----------|-------|------------|
| 1 | 01 | 業務フローへのAI統合 | AI Native Workflow | AI Integration into Business Workflows |
| 2 | 02 | コアサービス・プロダクトへのAI融合 | AI Native Application | AI Fusion into Core Products |
| 3 | 03 | 開発におけるAI活用 | AI Native Development | AI-Powered Development |

### ソリューション レスポンシブ

| Breakpoint | 変更 |
|------------|------|
| ≤ 1024px | `.solutionGrid` grid-template-columns: 1fr (縦積み、カードの幅が狭くなるとテキストが窮屈) |
| ≤ 768px | `.solutionCard` padding: 24px 20px |

> **設計判断**: 1024px 以下で 1 列に切り替える。768px で 2 列にすると各カードが狭くなりすぎ、日本語の長文が読みにくくなるため。

---

## 6. 開発哲学セクション

### 概要

3 つの原則をコンパクトなカードで表示。英語タイトルが主役（Orbitron 大文字）、日本語説明文が補足。

### コンポーネント構造

```
section.philosophy
└── div.container
    ├── div.sectionHeader
    │   └── h2.sectionTitle
    └── div.philosophyGrid
        ├── div.philosophyCard
        │   ├── div.philosophyIconWrap
        │   │   └── svg
        │   ├── h3.philosophyTitle     ← 英語タイトル
        │   └── p.philosophyDesc       ← 日本語説明
        ├── div.philosophyCard
        └── div.philosophyCard
```

### `.philosophyGrid`

| Property | Value |
|----------|-------|
| display | grid |
| grid-template-columns | repeat(3, 1fr) |
| gap | 24px |

### `.philosophyCard`

既存 `.principleCard` をリネーム・調整。

| Property | Value |
|----------|-------|
| display | flex |
| flex-direction | column |
| gap | 14px |
| padding | 28px |
| background | var(--surface) |
| border | 1px solid var(--border) |
| border-radius | var(--radius-lg) |
| box-shadow | var(--shadow-xs) |
| transition | box-shadow var(--transition-base), transform var(--transition-base) |

**hover**: `box-shadow: var(--shadow-md); transform: translateY(-2px);`

### `.philosophyIconWrap`

既存の `.principleIconWrap` と同じスタイル流用。

| Property | Value |
|----------|-------|
| display | inline-flex |
| align-items | center |
| justify-content | center |
| width | 48px |
| height | 48px |
| border-radius | 12px |
| background | rgba(202, 138, 4, 0.12) |
| color | var(--accent-primary) |

SVG アイコン: 24×24、既存の principle アイコン SVG を流用（ハンドシェイク、目、ロケット）。

### `.philosophyTitle`

| Property | Value |
|----------|-------|
| font-family | var(--font-heading) (Orbitron) |
| font-size | 1.1rem |
| font-weight | 600 |
| color | var(--text-primary) |
| letter-spacing | -0.01em |

### `.philosophyDesc`

| Property | Value |
|----------|-------|
| font-size | 0.95rem |
| line-height | 1.75 |
| color | var(--text-secondary) |

### カードデータ

| # | Icon | Title | Desc (JA) |
|---|------|-------|-----------|
| 1 | Strategy (ハンドシェイク) | Business Logic First | 技術ありきではなく、お客様のビジネスの成功から逆算します。 |
| 2 | Eye (透明性) | No Blackbox | AIの処理ロジックを可視化し、お客様自身が所有・コントロールできる安心なソリューションを提供します。 |
| 3 | Rocket (速度) | Speed is Value | 不確実な時代において、1日でも早く「動くもの」に触れていただくことを最優先します。 |

### 哲学 レスポンシブ

| Breakpoint | 変更 |
|------------|------|
| ≤ 1024px | `.philosophyGrid` grid-template-columns: repeat(2, 1fr); 3 枚目が 2 列目中央にまたがる: `.philosophyCard:last-child { grid-column: 1 / -1; max-width: 50%; margin: 0 auto; }` |
| ≤ 768px | `.philosophyGrid` grid-template-columns: 1fr; `.philosophyCard:last-child { max-width: 100%; }` |

---

## 7. CTA セクション

### 概要

ページ最下部のコンバージョンセクション。背景にグラデーションを敷き、視覚的にページの「締め」を演出。

### コンポーネント構造

```
section.ctaSection
└── div.container
    └── div.ctaBanner               ← グラデーション背景カード
        ├── h2.ctaTitle             ← 見出し（2 行）
        ├── p.ctaDescription        ← 本文
        └── div.ctaActions
            └── Link > Button       ← CTA（1 つ）
```

### `.ctaBanner`

| Property | Value |
|----------|-------|
| display | flex |
| flex-direction | column |
| align-items | center |
| text-align | center |
| gap | 24px |
| padding | 64px 48px |
| border-radius | var(--radius-xl) (16px) |
| background | linear-gradient(135deg, rgba(15, 23, 42, 0.04) 0%, rgba(202, 138, 4, 0.1) 50%, rgba(15, 23, 42, 0.06) 100%) |
| border | 1px solid rgba(202, 138, 4, 0.18) |
| box-shadow | var(--shadow-md) |

### `.ctaTitle`

| Property | Value |
|----------|-------|
| font-family | var(--font-heading) |
| font-size | clamp(1.5rem, 2.8vw, 2.2rem) |
| font-weight | 600 |
| color | var(--text-primary) |
| line-height | 1.4 |
| max-width | 600px |

**テキスト**:
- JA: `「うちの業務、どこまでAI化できる？」\nまずはプロのコンサルタントにご相談ください。`
- EN: `"How much of our work can be automated with AI?"\nConsult with our professional team first.`

### `.ctaDescription`

| Property | Value |
|----------|-------|
| font-size | 1.05rem |
| line-height | 1.8 |
| color | var(--text-secondary) |
| max-width | 560px |

### `.ctaActions`

| Property | Value |
|----------|-------|
| display | flex |
| justify-content | center |
| margin-top | 8px |

ボタン 1 つのみ。`<Button size="lg">` primary variant。

**ボタンテキスト**:
- JA: `無料で相談し、1 Day MVPを体験する`
- EN: `Get a Free Consultation & Experience 1-Day MVP`

### CTA レスポンシブ

| Breakpoint | 変更 |
|------------|------|
| ≤ 768px | `.ctaBanner` padding: 48px 24px |
| ≤ 480px | `.ctaBanner` padding: 36px 20px |

---

## 8. SVG アイコン仕様

### バッジアイコン（3 種 — Hero セクション用）

すべて `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `strokeWidth="1.7"`, `strokeLinecap="round"`, `strokeLinejoin="round"`。サイズは CSS で `width: 24px; height: 24px;`。

#### 8.1 Lightning（雷・稲妻）— 速度

```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
     strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
     aria-hidden="true">
  <path d="M13 2L4.5 13h6l-1 9L19 11h-6l1-9z" />
</svg>
```

> 既存コードベースの稲妻アイコンと同一パス。

#### 8.2 ArrowTrendDown（下降矢印）— コスト削減

```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
     strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
     aria-hidden="true">
  <path d="M21 17H13L7 7H3" />
  <path d="M21 7v10h-10" />
</svg>
```

> **代替案（推奨）**: 下方向トレンドライン + 矢印。よりスマートなデザイン:

```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
     strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
     aria-hidden="true">
  <path d="M3 7l6 6 4-4 8 8" />
  <path d="M17 17h4v-4" />
</svg>
```

> ⚠️ Coder はいずれかを使用。後者（トレンドライン型）を推奨。既存コードベースの cost-performance アイコン `M5 15.5l7-7 3 3 4-4` のような上昇トレンドの反転版。

#### 8.3 Shield（盾）— 品質保証

```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
     strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
     aria-hidden="true">
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  <path d="M9 12l2 2 4-4" />
</svg>
```

> 盾 + チェックマーク。品質保証のメタファーとして最適。

### 哲学アイコン（3 種 — 既存 SVG 流用）

既存 `page.tsx` の `principleIcons` 配列から流用:

1. **Business Logic First**: ハンドシェイク/戦略アイコン（既存パス）
2. **No Blackbox**: 目/透明性アイコン（既存パス）
3. **Speed is Value**: ロケットアイコン（既存パス）

---

## 9. アニメーション仕様

すべて **CSS のみ**。JS アニメーションライブラリ禁止。

### 9.1 バッジ浮遊アニメーション

```css
@keyframes badgeFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.badge:nth-child(1) { animation: badgeFloat 4s ease-in-out infinite; }
.badge:nth-child(2) { animation: badgeFloat 4s ease-in-out 0.5s infinite; }
.badge:nth-child(3) { animation: badgeFloat 4s ease-in-out 1s infinite; }
```

> 各バッジの delay をずらし、波のような浮遊感を演出。`hover` 時はアニメーション一時停止: `animation-play-state: paused;`

### 9.2 フェードイン（セクション出現）

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
```

> ⚠️ IntersectionObserver による JS トリガーは静的エクスポートでも動作するが、ここでは **CSS `animation` + `animation-delay` による初回読み込み時のフェードイン**を推奨。scroll-triggered が必要な場合は `page.tsx` 内の最小限の `useEffect` + IntersectionObserver で className を付与する形式で。

### 9.3 prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  .badge { animation: none; }
  .badge:hover { transform: none; }
  /* 全 hover の transform も無効化 */
}
```

---

## 10. アクセシビリティ

| 項目 | 仕様 |
|------|------|
| SVG アイコン | `aria-hidden="true"` — 装飾的要素 |
| セクション | `<section>` タグで構造化、各セクションに `aria-labelledby` で h2 の id を参照 |
| CTA ボタン | `<Link>` + `<Button>` — キーボードフォーカス可能 |
| コントラスト比 | テキスト `#020617` on `#F8FAFC` = 17.6:1 ✅ / `#475569` on `#FFFFFF` = 7.2:1 ✅ / `#CA8A04` on `#FFFFFF` = 3.5:1 ⚠️ (装飾用途のみで使用、テキストには使用しない — eyebrow のような小テキストは `font-weight: 600` + 大きめサイズで補償) |
| focus-visible | 既存 globals.css の `*:focus-visible` ルールがすべてに適用 |
| セマンティクス | h1 (Hero) → h2 (各セクション) → h3 (カード内) の正しい見出しレベル |

---

## 11. 英語版対応メモ

### テキスト長の差異

| セクション | JA 文字数目安 | EN 文字数目安 | 対応 |
|-----------|-------------|-------------|------|
| Hero Title | 28 字 | 30 chars | 同一デザインで収まる |
| Hero Subtitle | 90 字 | 140 chars | EN が長い — `max-width: 740px` で折り返しOK |
| Badge Title | 7-8 字 | 15-20 chars | EN が長い — `flex: 1 1 280px` で吸収 |
| Badge Desc | 15-20 字 | 30-35 chars | EN は 2 行になる可能性あり — 問題なし |
| コア・コンピタンス eyebrow | 25-30 字 | 40-50 chars | 折り返し許容 |
| CTA ボタン | 18 字 | 45 chars | EN が長い — ボタンの `padding` が吸収。`min-width` なし |

### フォント切り替え

- **Heading (Orbitron)**: 英語のみ。日本語テキストは `Noto Sans JP` にフォールバック
- **Body (Exo 2)**: 英語。日本語は `Noto Sans JP`
- `font-family` の指定順序: `'Orbitron', 'Noto Sans JP', 'Exo 2', sans-serif` (heading) / `'Exo 2', 'Noto Sans JP', sans-serif` (body)
- これは既存 `theme.css` の `--font-heading` / `--font-sans` と一致

### i18n データ構造

Coder は `translations/ja.json` と `translations/en.json` に新しいキーを追加すること。推奨構造:

```json
{
  "hero": {
    "title": "...",
    "subtitle": "...",
    "cta": "...",
    "badges": [
      { "title": "...", "desc": "..." },
      { "title": "...", "desc": "..." },
      { "title": "...", "desc": "..." }
    ]
  },
  "concept": {
    "title": "...",
    "lead": "...",
    "keywords": ["...", "...", "...", "..."]
  },
  "competence": {
    "title": "...",
    "cards": [
      { "eyebrow": "...", "heading": "...", "body": "..." },
      ...
    ]
  },
  "solutions": {
    "title": "...",
    "subtitle": "...",
    "cards": [
      { "number": "01", "title": "...", "label": "...", "body": "..." },
      ...
    ]
  },
  "philosophy": {
    "title": "...",
    "cards": [
      { "title": "...", "desc": "..." },
      ...
    ]
  },
  "cta": {
    "title": "...",
    "description": "...",
    "button": "..."
  }
}
```

---

## 実装チェックリスト（Coder 向け）

- [ ] 旧セクション（`.bentoSection`, `.heroPanel`, `.heroPanelGrid` 等）を完全削除
- [ ] 6 セクション全て実装（Hero, Concept, Competence, Solutions, Philosophy, CTA）
- [ ] Badge コンポーネント: 浮遊シャドウ + Gold ボーダー + SVG アイコン
- [ ] Badge 浮遊アニメーション（CSS @keyframes のみ）
- [ ] 全 SVG に `aria-hidden="true"`
- [ ] 3 ブレークポイント対応（1024px / 768px / 480px）
- [ ] `prefers-reduced-motion` 対応
- [ ] JA / EN 両方のテキストでレイアウト崩れがないこと
- [ ] CSS Modules のみ使用（Tailwind/styled-components 禁止）
- [ ] 新規 npm パッケージ追加なし
- [ ] `cursor: pointer` は CTA ボタンのみ（バッジ・カードはクリック要素ではないが、hover エフェクトはあり）
- [ ] 全 hover に `transition` 付き（150-300ms）

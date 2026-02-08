# ARCHITECTURE — NebulaInfinity Website

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 14.2.18 |
| Language | TypeScript | 5.6.3 |
| UI | React | 18.3.1 |
| Styling | CSS Modules + CSS Variables | — |
| Fonts | Orbitron (headings) / Exo 2 (body) | Google Fonts |
| Deploy | Cloudflare Pages (static export) | — |
| Domain | nebulainfinity.com | Cloudflare DNS |
| VCS | GitHub | cjttca-cd/NebulaInfinity-WebSite |

## Module Boundaries

```
nebulainfinity-website/
├── app/                        # Next.js App Router（ルーティング）
│   ├── [lang]/                 # 動的言語ルーティング (ja | en)
│   │   ├── page.tsx            # ホーム
│   │   ├── about/              # 会社概要
│   │   ├── services/           # サービス詳細
│   │   ├── projects/           # プロジェクト一覧 + [slug]
│   │   ├── contact/            # お問い合わせ
│   │   ├── blog/               # 【新規】ブログ一覧 + [slug]
│   │   └── layout.tsx          # 言語レイアウト（Header/Footer）
│   ├── sitemap.ts              # サイトマップ生成
│   └── layout.tsx              # ルートレイアウト
│
├── components/                 # React コンポーネント
│   ├── layout/                 # Header, Footer
│   ├── ui/                     # Button, Card（汎用 UI）
│   ├── seo/                    # SEO コンポーネント
│   └── blog/                   # 【新規】BlogCard, BlogList 等
│
├── data/                       # 静的データ（ビルド時読み込み）
│   ├── translations/           # i18n (ja.json, en.json)
│   ├── projects/               # プロジェクトデータ (JSON)
│   └── blog/                   # 【新規】ブログ記事 (Markdown or JSON)
│
├── styles/                     # グローバルスタイル
│   ├── theme.css               # CSS Variables（カラー、スペーシング、シャドウ）
│   └── globals.css             # グローバルリセット、基本スタイル
│
├── design-system/              # デザインシステム資料
├── lib/                        # ユーティリティ
│   └── i18n.ts                 # 国際化ヘルパー
│
├── public/                     # 静的アセット
│   ├── images/                 # 画像
│   └── _redirects              # Cloudflare リダイレクトルール
│
├── functions/                  # Cloudflare Functions（お問い合わせフォーム等）
│
├── artifacts/                  # PM 管理ドキュメント（git 管理）
│   ├── project/                # BRIEF / REQUIREMENTS / ARCHITECTURE / PROJECT_MEMORY
│   └── epics/                  # Epic → Feature → 作業ドキュメント
│
├── next.config.js              # Next.js 設定（static export）
├── tsconfig.json               # TypeScript 設定
└── package.json                # 依存関係
```

## Data Flow

```
[Markdown/JSON in data/]
        │
        ▼ (build time)
[Next.js Static Generation]
        │
        ▼
[HTML/CSS/JS in out/]
        │
        ▼ (deploy)
[Cloudflare Pages CDN]
        │
        ▼ (request)
[User Browser] ◄──── [Cloudflare Functions (form submit)]
```

## i18n Architecture

- ルーティング: `/ja/...` と `/en/...`（動的 `[lang]` パラメータ）
- 翻訳データ: `data/translations/{lang}.json`
- デフォルト言語: 日本語（`/` → `/ja/` リダイレクト）
- 対応言語: `ja`, `en`（`lib/i18n.ts` で定義）

## Blog Architecture（新規）

```
data/blog/
├── posts/
│   ├── 2026-02-01-ai-agent-trends.md    # 記事ファイル (frontmatter + body)
│   └── 2026-02-08-web3-update.md
└── index.json                            # 記事メタデータ一覧（ビルド用）

Frontmatter:
---
title: "記事タイトル"
titleEn: "English Title"
date: "2026-02-01"
tags: ["AI", "Agent"]
summary: "概要テキスト"
summaryEn: "English summary"
slug: "ai-agent-trends"
---
```

- 記事は Markdown ファイルベース（CMS 不要）
- ビルド時に `generateStaticParams` で静的ページ生成
- 一覧ページ: `/[lang]/blog/` — 最新順、タグフィルタ（Nice-to-have）
- 個別ページ: `/[lang]/blog/[slug]/`
- i18n: frontmatter に日英両方のタイトル・概要を持つ（or 言語別ファイル）

## Design System

- **カラー**: Navy (#0f172a) + Gold (#ca8a04) + Light BG (#f8fafc)
- **タイポグラフィ**: Orbitron (headings, display) / Exo 2 (body, UI)
- **レイアウト**: Bento Grid (12 column)
- **コンポーネント**: Card (glass/hover), Button (primary/outline/ghost)
- **スペーシング**: 8px base grid
- **レスポンシブ**: 1024px / 768px / 480px breakpoints
- **詳細**: `SITE_V2_DESIGN_SYSTEM.md`, `design-system/` ディレクトリ参照

## External Dependencies

| Service | Purpose | Required |
|---------|---------|----------|
| Cloudflare Pages | Hosting + CDN | Yes |
| Cloudflare DNS | Domain management | Yes |
| Cloudflare Functions | Form submission handler | Yes |
| Google Fonts | Orbitron + Exo 2 | Yes |
| GitHub | Source code hosting | Yes |

## Constraints for Workers

- CSS Modules のみ使用（Tailwind, styled-components 等禁止）
- 新規 npm 依存は最小限（追加時は PM に相談）
- `next build` で静的エクスポート可能であること（SSR 機能使用禁止）
- 画像は `public/images/` に配置
- コンポーネントは `components/` 配下に適切に分類
- ブログ記事データは `data/blog/` に配置（外部 CMS 接続禁止）

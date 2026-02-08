# REQUIREMENTS — NebulaInfinity Website

## Must-have（必須）

### 機能
- [ ] 全ページ正常レンダリング（エラーなし）
- [ ] 国際化（日本語 / 英語）ルーティング正常動作
- [ ] お問い合わせフォーム送信機能
- [ ] レスポンシブ対応（モバイル ≤768px / タブレット / デスクトップ）
  - モバイル: 100%完璧な適応は不要だが、全ページ正常表示が必須
  - レイアウト崩れ・テキスト切れ・操作不能は NG
- [ ] SEO 基本対応（メタタグ、OGP、sitemap.xml）
- [ ] **ブログ / ニュースセクション** — 技術・プロダクト動向の記事を投稿・表示

### ページ構成
- [ ] ホーム（Hero + サービス概要 + 実績ハイライト + CTA）
- [ ] 会社概要（About）
- [ ] サービス詳細（Services）
- [ ] プロジェクト展示（Projects）— agent-skills-jp を含む
- [ ] お問い合わせ（Contact）
- [ ] **ブログ / ニュース一覧 + 個別記事ページ**
- [ ] 404 ページ

### デザイン
- [ ] 現行の Light Premium Bento スタイルを維持
- [ ] Navy (#0f172a) + Gold (#ca8a04) のカラーパレット
- [ ] Orbitron（見出し）/ Exo 2（本文）フォント
- [ ] WCAG AA テキストコントラスト（4.5:1 以上）
- [ ] フォーカスステート可視（アクセシビリティ）

### コンテンツ
- [ ] 全サービスの具体的な説明文（AI エージェント、AI 自動化、AI アプリ、Web3.0、スマートコントラクト、コンサルティング）
- [ ] プロジェクト展示に agent-skills-jp を追加
- [ ] 日本語 / 英語の翻訳対応

### パフォーマンス
- [ ] 静的エクスポート（Cloudflare Pages デプロイ可能）
- [ ] Core Web Vitals 合格（LCP < 2.5s, FID < 100ms, CLS < 0.1）

## Nice-to-have（あると良い）
- [ ] ダークモード切り替え
- [ ] 記事の RSS フィード
- [ ] ブログ記事のタグ / カテゴリフィルタ
- [ ] アニメーション（スクロール連動、ページ遷移）
- [ ] 構造化データ（JSON-LD）
- [ ] パフォーマンス最適化（画像 WebP、lazy loading）

## Out-of-scope（対象外）
- CMS 統合（Headless CMS 等）— 記事は Markdown / JSON ファイルベース
- 決済機能
- ユーザー認証
- サーバーサイドレンダリング（SSR）— 静的エクスポートのみ
- 多言語追加（日英以外）

## Constraints（制約）
- **フレームワーク**: Next.js 14 (App Router) — 変更不可
- **言語**: TypeScript — 変更不可
- **スタイル**: CSS Modules + CSS Variables — Tailwind 等の追加禁止
- **デプロイ**: Cloudflare Pages **無料プラン** 静的エクスポート — `next build` で `out/` 生成
  - SSR / Edge Functions 等の有料機能は使用不可
  - ビルド回数: 500回/月（無料枠）
  - サイトサイズ: 25MB 以下（無料枠）
- **依存関係**: 最小限に保つ（重い UI ライブラリ追加禁止）
- **デザイン方向性**: 現行の Light Premium Bento スタイルを基盤とする
- **ブログ記事データ**: ファイルベース（`data/blog/` に Markdown）
  - 動的レンダリングなし — ビルド時に静的 HTML 生成
  - 記事追加フロー: `.md` 作成 → `git commit` → `push` → Cloudflare Pages 自動リビルド
  - CMS 不要、git でコンテンツ管理

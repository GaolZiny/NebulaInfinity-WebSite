# Homepage Content Update — Full Specification

> Z が指定した日本語コンテンツを忠実に反映し、英語版も対応する。

---

## 変更対象ファイル
- `app/[lang]/page.tsx` — メインコンポーネント
- `app/[lang]/page.module.css` — スタイル
- `data/translations/ja.json` — hero.title / hero.subtitle / hero.cta
- `data/translations/en.json` — 同上（英語版）

---

## セクション別コンテンツ

### 1. Hero セクション

**Eyebrow**: 削除 or 非表示（新コンテンツに eyebrow なし）

**メインキャッチコピー (heroTitle)**:
- JA: `「人」は創造に。「AI」は実務に。`
- EN: `Humans create. AI executes.`

**サブキャッチコピー (heroSubtitle)** — 1行目:
- JA: `業務コストを削減し、サービス開発を加速させる。次世代のAI実装パートナー`
- EN: `Reduce operational costs. Accelerate service development. Your next-gen AI implementation partner.`

**サブキャッチコピー 2行目** (新しい要素 — heroSubtitle の下に追加、もしくは heroSubtitle を2段に):
- JA: `繰り返される業務フローも、高度なバックエンド処理も、AIの力を最大限に引き出す。Nebula Infinityは、業務プロセスの「完全自動化」と、AIネイティブサービスの「高速開発」を通じて、御社の競争力を最大化する、AI実装のスペシャリストです。`
- EN: `From repetitive workflows to complex backend processing — we maximize the power of AI. Nebula Infinity specializes in full process automation and rapid AI-native service development, maximizing your competitive edge.`

**Hero Highlights (heroMeta — 3枚のミニカード)**:
| JA Label | JA Value | EN Label | EN Value |
|----------|----------|----------|----------|
| 自動化ワークフロー | 業務コスト大幅削減 | Automation Workflows | Dramatic cost reduction |
| AIネイティブアプリケーション | 低予算と高度な処理の両立 | AI-Native Applications | Advanced processing, lower budgets |
| AI駆動開発 | 最短1時間でMVP | AI-Driven Development | MVP in as little as 1 hour |

**Hero Panel (右側カード)**: heroHighlights の内容を反映するように更新。
- タイトル: JA=`ソリューション概要`, EN=`Solution Overview` (or similar — 旧「ワークフロー設計図」から変更)
- タグ: 維持 or 適切に変更
- 3つのカード = Hero Highlights と同じ3項目

**CTA ボタン**:
- 左（メインカラー）: JA=`サービスを見る`, EN=`View Services`（変更なし）
- 右（白抜き）: JA=`お問い合わせ`, EN=`Contact`（変更なし）

---

### 2. Bento Cards セクション (bentoSection)

**セクション見出し (sectionTitle)**:
- JA: `ビジネス課題を解決する、「実益重視」のAIソリューション`
- EN: `ROI-focused AI solutions that solve real business challenges`

**リード文 (sectionSubtitle)**:
- JA: `曖昧な概念ではなく、業務のボトルネックを解消し、アイデアを即座に形にするためのソリューションを提供します。`
- EN: `Not abstract concepts — we deliver solutions that eliminate operational bottlenecks and turn ideas into reality.`

**カード（6枚）**:

#### Card 1: 本質的な課題の特定 (Consulting)
- JA Title: `本質的な課題の特定`
- JA Desc: `プロのコンサルタントによる業務整理`
- JA Bullets: `業務フローを可視化、潜在課題とニーズを発掘` / `スコープと目標を明確に定義`
- EN Title: `Identifying Core Challenges`
- EN Desc: `Professional business process analysis by expert consultants`
- EN Bullets: `Visualize workflows, uncover latent issues and needs` / `Clearly define scope and objectives`

#### Card 2: ワークフローの設計 (Workflow Design)
- JA Title: `ワークフローの設計`
- JA Desc: `業務フローを徹底的に分析し、自動化ワークフローの実行ロジックへ変換`
- JA Sub: `例外処理や複雑な分岐も網羅し、止まることのない現場で使える自動化フローを設計`
- EN Title: `Workflow Design`
- EN Desc: `Thoroughly analyze business flows and convert them into automation workflow execution logic`
- EN Sub: `Covering edge cases and complex branching — designing automation flows that never stop in production`

#### Card 3: 超高速プロトタイプ開発 (Rapid Prototyping)
- JA Title: `超高速プロトタイプ開発`
- JA Desc: `独自のAI駆動開発方法論により、アイデアを最短1時間で検証可能なMVP（試作品）を提供可能`
- JA Sub: `机上の空論で終わらせず、動くプロダクトで即座に仮説検証`
- EN Title: `Ultra-Rapid Prototyping`
- EN Desc: `Our proprietary AI-driven development methodology delivers testable MVPs in as little as 1 hour`
- EN Sub: `No more theory — validate hypotheses instantly with working products`

#### Card 4: 最先端技術の実装 (Advanced Tech)
- JA Title: `最先端技術の実装`
- JA Desc: `常に最新の技術トレンドをキャッチアップし、ビジネスにフィットする形で実装`
- EN Title: `Cutting-Edge Implementation`
- EN Desc: `We stay current with the latest technology trends and implement them in ways that fit your business`

#### Card 5: 構想から運用まで一気通貫 (One-Stop Service)
- JA Title: `構想から運用まで一気通貫`
- JA Desc: `企画・要件定義から、UI/UXデザイン、フロントエンド・バックエンド開発、そして導入後の保守運用まで、ワンチームで責任を持って完遂`
- EN Title: `End-to-End, One Team`
- EN Desc: `From planning and requirements to UI/UX design, full-stack development, and post-launch maintenance — one team takes full responsibility`

#### Card 6: 圧倒的なコストパフォーマンス (High ROI)
- JA Title: `圧倒的なコストパフォーマンス`
- JA Desc: `AI駆動型開発により、従来の手法と比較して開発期間とコストを大幅に圧縮。投資対効果（ROI）の高いソリューションを提供`
- EN Title: `Exceptional Cost Performance`
- EN Desc: `AI-driven development dramatically reduces timelines and costs compared to traditional methods. We deliver solutions with outstanding ROI.`

**グリッドレイアウト（推奨）**:
- Card 1 (Consulting): bentoFeatured (span 6, 2 rows) — bullets 付き
- Card 2-3: bentoCompact (span 3 each) — 右列
- Card 4-6: span 4 each（3列均等） or 適切なレイアウト
- ⚠️ Z は「6つ→5つ」と書いたが、実際には6枚のコンテンツを指定。**6枚全て実装すること。**

---

### 3. 横長バナー (credentialsSection) → ⚠️ 完全削除

現在の "AI x Web3.0統合設計" バナーセクション (`credentialsSection`) を **完全に削除**。
TSX + CSS の両方からコードを除去。

---

### 4. プロセスバー (新セクション — processSection)

credentialsSection があった位置に新しいセクションを追加。

**セクション見出し**:
- JA: `ソリューション提供の流れ`
- EN: `Our Solution Process`

**4ステップ**:
| Step | JA | EN |
|------|----|----|
| 1 | 業務整理・課題特定 | Business Analysis |
| 2 | ソリューション設計 | Solution Design |
| 3 | 実装 | Implementation |
| 4 | 運用・保守 | Operation & Maintenance |

**デザイン**: ステップ間を矢印やラインで繋ぐ水平プロセスバー（Bento Light デザインシステムに合わせる）。
モバイルでは縦並びに切り替え。

---

### 5. 私たちの原則 (principlesSection)

**セクション見出し (sectionTitle)**:
- JA: `理念`
- EN: `Principles`

**サブタイトル (sectionSubtitle)**:
- JA: `AIソリューションの成功率を高めるための、3つの約束`
- EN: `Three commitments to maximize AI solution success`

**3つのカラム**:

#### Principle 1: Business Logic First
- Title: `Business Logic First`（日英共通）
- JA Desc: `ビジネスモデルや業務フローを深く理解しない限り、真に役立つソリューションは作れないと考えており、「開発者」である前に、御社の「ビジネスパートナー」であり続けます。`
- EN Desc: `We believe truly useful solutions require deep understanding of business models and workflows. Before being developers, we remain your business partners.`

#### Principle 2: No Blackbox
- Title: `No Blackbox`（日英共通）
- JA Desc: `処理ロジックやAIの判断根拠を可能な限り可視化。御社がコントロールでき、安心して運用できる設計を徹底します。`
- EN Desc: `We make processing logic and AI decision rationale as transparent as possible. We ensure designs you can control and operate with confidence.`

#### Principle 3: Speed is Value
- Title: `Speed is Value`（日英共通）
- JA Desc: `不確実な時代において、スピードは最大のリスクヘッジです。独自の開発手法で圧倒的な速度でMVPを構築し、変化に合わせて柔軟にプロダクトを進化させ続ける開発スタイルを提供します。`
- EN Desc: `In an era of uncertainty, speed is the ultimate risk hedge. Our proprietary methods build MVPs at exceptional speed, enabling continuous product evolution that adapts to change.`

---

### 6. ボトム CTA (ctaSection)

**大見出し (ctaTitle)**:
- JA: `「最初の一歩」を、一緒に踏み出しませんか？`
- EN: `Ready to take the first step — together?`

**サブコピー (ctaDescription)**:
- JA: `業務整理から実装、運用まで。「どんな使い方ができるか」の無料診断から承ります。お気軽にご相談ください。`
- EN: `From business analysis to implementation and operations. We offer free consultations to explore what's possible. Feel free to reach out.`

**ボタン（⚠️ 幅を揃える）**:
- 左（メイン色）: JA=`お問い合わせ`, EN=`Contact Us` → `/[lang]/contact`
- 右（白抜き）: JA=`サービス詳細`, EN=`Service Details` → `/[lang]/services`
- CSS: 両ボタンの `min-width` を揃える（例: `min-width: 200px`）

---

## translation JSON の更新

`data/translations/ja.json` の `hero` キー:
```json
{
  "hero": {
    "title": "「人」は創造に。「AI」は実務に。",
    "subtitle": "業務コストを削減し、サービス開発を加速させる。次世代のAI実装パートナー",
    "cta": "サービスを見る"
  }
}
```

`data/translations/en.json` の `hero` キー:
```json
{
  "hero": {
    "title": "Humans create. AI executes.",
    "subtitle": "Reduce operational costs. Accelerate service development. Your next-gen AI implementation partner.",
    "cta": "View Services"
  }
}
```

---

## ⚠️ 注意事項
- CSS Modules のみ使用（Tailwind/styled-components 禁止）
- 新しい npm 依存追加禁止
- SVG アイコンのみ（絵文字禁止）
- レスポンシブ対応必須（Desktop/Tablet/Mobile）
- Bento Light デザインシステム準拠（Navy #0F172A / Gold #CA8A04 / Light BG #F8FAFC）
- フォント: Orbitron (headings/EN), Noto Sans JP (日本語), Exo 2 (body)

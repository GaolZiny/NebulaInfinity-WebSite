# NI Website 更新指示書: Astra + 全体メッセージング改善

> **作成日**: 2026-03-17
> **作成者**: Strategist
> **目的**: Astra プロジェクト追加 + Gaijin Life Navi 上線済み反映 + NI 統一メッセージング強化
> **優先度**: 中（Astra 開発進行に合わせて段階的に実施可）

---

## 1. projects.json の更新

**ファイル**: `data/projects/projects.json`

`projects` 配列に以下を追加（gaijin-life-navi の後、agent-skills-jp の前に挿入）:

```json
{
  "id": "astra",
  "slug": "astra",
  "name": { "ja": "Astra", "en": "Astra" },
  "icon": null,
  "shortDescription": {
    "ja": "OpenClaw派生のオープンソースAI PM フレームワーク。Workflow Engine + LLM ハイブリッド実行と4層記憶システムにより、使うほど賢くなるPM Agentを実現。",
    "en": "Open-source AI PM framework derived from OpenClaw. Hybrid Workflow Engine + LLM execution with a 4-layer memory system creates a PM agent that gets smarter over time."
  },
  "tags": ["AI Agent", "OpenClaw", "Open Source", "Workflow Engine", "Multi-LLM", "Python"],
  "category": "ai",
  "status": "in-progress"
}
```

**注意**: `status` は開発完了・GitHub 公開後に `"live"` に変更し、`"url"` フィールドに GitHub URL を追加すること。

**詳細データ**: `data/projects/astra.json` は作成済み。

---

## 2. services.ts の更新

**ファイル**: `data/services.ts`

### 2.1 ai-workflow の aboutJa 3段目の末尾に追記

現在:
> 導入から運用まで、一貫したサポートを提供します。...段階的な導入により、リスクを最小限に抑えながら確実に自動化を進められます。

末尾に追記:
> 自社開発の AI PM フレームワーク「Astra」で培った、ワークフロー自動化の実践知見を活用。お客様の業務を AI Agent で自動化する際の設計パターンと注意点を熟知しています。

### 2.2 ai-product の aboutJa 3段目を更新

現在:
> 自社プロダクト（Japan Life Navi / Rigel）で培ったノウハウを、お客様のプロジェクトに活かします。

更新後:
> 自社プロダクト — Rigel（AI 記帳）、Japan Life Navi（在日外国人向け AI 生活ガイド）、Astra（オープンソース AI PM フレームワーク）— の開発で培った実戦ノウハウを、お客様のプロジェクトに活かします。

### 2.3 ai-product の aboutEn 3段目を更新

現在:
> We apply the expertise gained from our own products (Japan Life Navi / Rigel) to your projects.

更新後:
> We apply the expertise from our own products — Rigel (AI bookkeeping), Japan Life Navi (AI life guide for foreign residents), and Astra (open-source AI PM framework) — to your projects.

### 2.4 ai-development の features 実績更新

現在:
> Rigel（33K+ LOC / 367 テスト）、Japan Life Navi（336 ガイド × 7 言語）

更新後:
> Rigel（33K+ LOC / 367 テスト）、Japan Life Navi（336 ガイド × 7 言語）、Astra（オープンソース AI PM フレームワーク）

英語版も同様に更新。

---

## 3. translations/ja.json の更新

### 3.1 about.company.products

現在:
> "products": "Japan Life Navi / Rigel / AgentSkills.jp / Carina"

更新後:
> "products": "Japan Life Navi / Rigel / Astra / AgentSkills.jp / Carina"

### 3.2 about.vision.description（オプション — ビジョン強化）

現在:
> "誰もが先端技術を使いこなせる世界へ。\n技術の複雑さを取り除き、誰もが AI エージェントを当たり前のように活用できる未来を創ります。"

更新案:
> "すべての業務が AI Workflow になる世界へ。\n技術の複雑さを取り除き、AI Agent が日常業務を自律的に実行し、人間は判断と創造に集中できる未来を創ります。"

---

## 4. translations/en.json の更新

上記 ja.json と同様の箇所を英語版にも反映。

### 4.1 about.company.products
> "products": "Japan Life Navi / Rigel / Astra / AgentSkills.jp / Carina"

### 4.2 about.vision.description（オプション）
> "Toward a world where every business process becomes an AI Workflow.\nWe remove the complexity of technology and create a future where AI agents autonomously execute daily operations, freeing humans to focus on judgment and creativity."

---

## 5. 統一メッセージングの方向性（参考情報）

NI の全プロダクトが伝えるべきストーリー:

```
1. NI は AI Agent の専門家集団
   ↓
2. 自社プロダクトで実証済み（4 プロダクト）
   - Rigel: 会計業務を AI で自動化（有料 SaaS）
   - Japan Life Navi: 生活情報を AI で多言語提供（公開済みアプリ）
   - Astra: PM を AI Agent で自動化（OpenClaw 派生 OSS）
   - AgentSkills.jp: AI スキルの日本語プラットフォーム
   ↓
3. この実績に基づくサービスを提供
   - 業務フロー AI 化 / AI プロダクト開発 / AI 協調開発
   ↓
4. ビジョン: 全業務を AI Workflow 化。人間は判断と創造に集中。
```

**差別化の 3 本柱:**
1. **自社プロダクトで実証済み** — 机上の空論ではない
2. **AI Agent 専門の技術力** — 9 Agent Pipeline、マルチエージェント協調
3. **日本市場に根ざしたサポート** — 日本法人、日本語ネイティブ

---

## 6. 実施優先度

| 優先度 | 項目 | 工数 |
|--------|------|------|
| 🔴 高 | projects.json に Astra 追加 | 小 |
| 🔴 高 | services.ts のプロダクト言及更新 | 小 |
| 🔴 高 | about セクションの products 更新 | 小 |
| 🟡 中 | ビジョン文言の更新 | 小 |
| 🟢 低 | Astra の status を live に変更 + GitHub URL 追加 | Astra 公開時 |

---

*Strategist 📊 | 2026-03-17*

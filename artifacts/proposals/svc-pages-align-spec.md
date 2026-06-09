# サービス詳細ページ整合 — 最終 Spec（svc-pages-align）

**日付:** 2026-06-10 · **状態:** 文案定稿（strategist / designer 双方 ≥8.5 收敛、コード落地済み）
**担当:** writer（日英バイリンガル文案） / strategist（messaging） / designer（结构・版式） / team-lead（口径拍板）
**対象ファイル:**
- `app/[lang]/services/[serviceId]/page.tsx` — `pageContent['ai-application']` と `pageContent['ai-driven-development']` の2オブジェクト
- `app/[lang]/page.tsx` — 首页 serviceCards の ai-application / ai-driven-development 2枚（日英）

> 本 spec は「已落地のコードを SSOT として記録」するもの。文案・结构・口径・決策の根拠を一括して残し、後続レビュー／実装引き継ぎの基準とする。

---

## 0. 背景と目的

`ai-workflow` 详情页は HEC 整合の质量基准としてリワーク済み。本タスクは残る2本（`ai-application` / `ai-driven-development`）を同じ基准へ引き上げ、首页 serviceCards との物語を一致させる。

**三本のライン区分（互いに代替しない）:**
- **AI Workflow** ＝ AIを既存の业务プロセスに组み込む（流程）
- **AI Application** ＝ AIを画面のある、毎日使われる产品にする（产品）
- **AI-Driven Development** ＝ 地基・引擎（开発そのものが AI 駆動）

---

## 1. 結論サマリー

- 両页を基准 `ai-workflow` の段落骨架へ统一：**hero → 課題認識(3卡) → deliverables(4项+subtitle) → 方法块(transformationAfterDeliverables:true + 金色收口) → proof**。
- 両页とも **steps 块を削除**。`ai-driven-development` の独立 **cta 块も削除**（精神を hero subtitle へ吸収）。
- 钩子（日文母版 / 英文地道）:
  - AI Application: 「すごいデモ」で終わったAIを、毎日使われるプロダクトへ。
  - AI-Driven Development: 構想のままのアイデアを、来週には動くプロダクトへ。
- **速度口径**: 対外は **「最短24時間でMVP」**（首页 valuePanels と统一）。Rigel の **約16時間でMVP・約1週間でローンチ** は当該 case の sourced 事実として **body 内のみ** に記載。hero/chips/strip/標語层には 16h を出さない。「超高速」等の hype 词は不使用。
- **proof 決策**: `ai-driven-development` は **Rigel 単卡（gridAuto）＋単卡加厚**。第2卡候補（Astra / ai-dev-flow / 本站自身）はいずれも不採用（§5）。

---

## 2. AI Application 详情页 — 完整文案

### hero
| 字段 | 日本語 | English |
|---|---|---|
| eyebrow | AI Application Solution | AI Application Solution |
| title | 「すごいデモ」で終わったAIを、毎日使われるプロダクトへ。 | From an AI demo that wowed once — to a product people use every day. |
| subtitle | AI機能だけを作っても、現場や顧客が毎日使ってくれるとは限りません。Nebula Infinityは、誰がどの場面で何のために使うのかを起点に、画面・AI応答・データ・業務との接続まで一つの体験として設計し、実装します。一度きりのデモではなく、毎日の業務や暮らしに定着するプロダクトに仕上げます。 | Building an AI feature does not guarantee that your customers or your team will reach for it every day. Nebula Infinity starts from who uses it, when, and for what — then designs screens, AI responses, data, and the connection to real work as one experience, and builds it. Not a one-off demo, but a product that takes root in everyday work and life. |
| chips | 顧客向けプロダクト / 社内ツール / RAG・マルチモーダル・リアルタイム | Customer-facing products / Internal tools / RAG · Multimodal · Realtime |
| primaryCta | この領域で相談する | Discuss this service |
| secondaryCta | サービス選択に戻る | Back to Home Services |

### sectionA — 3つの課題認識（3卡 grid3）
1. デモは盛り上がったが、毎日は使われない / 試した時は反応が良くても、日々の業務には組み込まれず、いつの間にか使われなくなる。
2. AI機能はあるが、業務やデータに繋がっていない / 単体では動くものの、実際の画面や手順、社内データと接続されておらず、現場の判断に使えない。
3. 作って終わりで、定着も改善も続かない / 公開した後の運用、評価、改善の仕組みがなく、価値が伝わらないまま放置される。

（英文は本文ファイル参照。日英 1:1 成对。）

### deliverables（4项 grid2 + subtitle）
- **subtitle(ja):** プロダクトが使われない理由の多くは、AIの精度ではなく、利用者の体験・業務・データが繋がっていないことにあります。AI Application Solution は、体験の設計から実装、運用・改善までを一体で組み立て、毎日使われる状態まで仕上げます。
- 体験設計 / フロントエンド・バックエンド実装 / AI機能実装 / 運用・改善機能実装

### transformation（方法块・3栏 grid3・产品落地叙事 + 金色收口）
- eyebrow: プロダクトとして使われる設計 / title: AI機能を、毎日使われる体験に変える
- 3栏: **利用者と場面** → **体験として実装** → **毎日使われる状態**
- closing(ja): 使われてこそプロダクトです。体験・業務・データを一つに繋ぎ、毎日使われる状態まで設計・実装します。

### proof（2卡 grid2・产品向 strip）
- **note(ja):** これらは代表例であり、AI Application の対象を限定するものではありません。顧客向けサービスから社内ツール、ナレッジ活用、業務コパイロットまで、毎日使われる体験が求められるあらゆるプロダクトを、各社に合わせて設計・実装できます。
- **Japan Life Navi** — strip: 毎日の暮らしで利用 / 多言語対応 / 情報を継続更新（slug: gaijin-life-navi）
- **Rigel**（产品角度: 毎日使われる）— strip: 日々の記帳で利用 / 自然言語で入力 / 業種別テンプレート（slug: rigel）

---

## 3. AI-Driven Development 详情页 — 完整文案

### hero
| 字段 | 日本語 | English |
|---|---|---|
| eyebrow | AI-Driven Development | AI-Driven Development |
| title | 構想のままのアイデアを、来週には動くプロダクトへ。 | From an idea on a slide — to a product running next week. |
| subtitle | 明確な仕様がなくても構いません。目的、制約、最初に動かす範囲から一緒に整理し、AI駆動の開発体制で速く確かに実装します。開発待ちで止まっていた構想を、最短で動く形まで進めます。 | You do not need a finished spec. We start from your purpose, constraints, and the first scope worth running, then implement it fast and reliably with an AI-driven delivery model. Ideas stuck waiting for development reach a working form, fast. |
| chips | Agentic Workflow / Quality Gates / Delivery Acceleration | （同左） |
| primaryCta | この領域で相談する | Discuss this service |
| secondaryCta | サービス選択に戻る | Back to Home Services |

> 旧 `cta` 块（「明確な仕様がなくても…目的・制約・最初に動かす範囲から一緒に」）の精神は hero subtitle へ吸収・统一。独立 cta 块は削除。subtitle は基准 ai-workflow の3句密度に合わせ、方法块两栏（AIエージェントが担う / 人が担う）と重复する「谁担什么」の役割细节は hero から外し、方法块の初出に讓る。hero は「速く確かに実装」＋钩子回扣（開発待ち→最短で動く）に绞る。

### sectionA — 3つの課題認識（3卡 grid3）
1. アイデアや要望が、開発待ちで止まっている / やりたいことはあるのに、リソースや段取りが追いつかず、構想のまま先に進まない。
2. 仕様変更が多く、作っても追いつかない / 前提が動くたびに手戻りが増え、レビューや改善が回らないまま開発が重くなる。
3. 速さと品質が、両立しない / 速く作ると品質が下がり、品質を守ると遅くなる——どちらかを諦める前提になっている。

### deliverables（4项 grid2 + subtitle）
- **subtitle(ja):** 速さと品質が両立しないのは、AIを単発の作業補助としてしか使えていないからです。AI-Driven Development は、要件から実装・レビュー・検証までの流れをAI前提で組み直し、AIエージェントと人の役割を設計することで、速度と品質を同時に成立させます。
- 開発ワークフロー設計（AIエージェント役割を含む） / プロダクト実装 / 品質ゲート整備 / 運用・改善ハンドオフ

> 原5项の「AIエージェント役割設計」は「開発ワークフロー設計」へ统合し4项化。原5段フロー（Brief→…→Handoff）の价值もこの项に浓缩。

### transformation（方法块・2栏对照 grid2 + 金色收口）
- eyebrow: AIと人の協働 / title: AIエージェントと人で、速度と品質を両立する
- **AIエージェントが担う**: 実装ドラフトの作成 / 横断的な調査と下調べ / 差分・テストの下準備
- **人が担う**: 要件と受け入れ基準の決定 / 責任を伴う設計判断 / レビューゲートの通過判定
- closing(ja): 速さと品質は、人が品質を握る一点で両立します。AIに任せる範囲と、人が判断する範囲を設計し、速いまま確かな実装を実現します。

### proof（**Rigel 単卡 gridAuto + 单卡加厚**）
- **note(ja):** Rigel は、構想から動くプロダクトまでを最短サイクルで実装した、AI駆動開発の代表 proof です。一例に絞っていますが、対象は記帳アプリに限りません。新規プロダクトから社内ツール、業務システムまで、速度と品質の両立が求められるあらゆる開発に、同じAI駆動の体制と品質ゲートを適用できます。（「聚焦」语气＝「缺货」ではない）
- **Rigel**（開発角度: 速さ×品質）— body は基准三卡より厚く、構想→最短24時間でMVP→約16時間でMVP→約1週間でローンチ→各サイクルに品質ゲート→速さと品質両立 の短周期・带门叙事を讲足。strip: **最短24時間でMVP / 品質ゲート運用 / 約1週間でローンチ**（slug: rigel）

---

## 4. 首页 serviceCards 改动（title 不动、body + proofLine のみ）

| カード | 项目 | 旧 | 新 |
|---|---|---|---|
| ai-application | body(ja) | 社内ツールから顧客向けサービスまで、AI機能を価値が伝わる体験として実現します。 | すごいデモで終わらせず、体験・データ・業務との接続まで設計し、毎日使われるプロダクトに仕上げます。 |
| ai-application | body(en) | From internal tools to customer-facing products, we design and build AI into an experience whose value is obvious to users. | Beyond a demo that wows once — we connect experience, data, and real work, and finish it into a product people use every day. |
| ai-application | proofLine(ja/en) | 例：Chatbot、サービスロジック、ナレッジ活用 / Examples: chatbots, service logic, knowledge use | 例：顧客向けサービス、社内ツール、ナレッジ活用 / Examples: customer services, internal tools, knowledge use |
| ai-driven-development | body(ja) | AI主軸の開発手法により、速さと品質を両立した実装を提供します。 | 構想のままで止まったアイデアを、AI駆動の開発体制で、速さと品質を両立して動く形まで進めます。 |
| ai-driven-development | body(en) | With an AI-first development method, we deliver implementation that balances speed and quality. | We move ideas stuck on a slide into a running product — with an AI-driven delivery model that holds speed and quality together. |
| ai-driven-development | proofLine(ja/en) | 例：24時間MVP、アジャイル型開発 / Examples: 24-hour MVP, agile development | 例：最短24時間MVP、アジャイル型開発 / Examples: MVP in as little as 24 hours, agile development |

> title（AIをプロダクトの一部に / AIを開発・実現の主力に）は3卡の排比を守るため不动。proofLine は详情页 proof との口径整合のため対齐。

---

## 5. 結构骨架と grid 阈值（防 linter 数错・実装チェックリスト）

レンダリングは `page.tsx` の既存分岐に依存。下记の卡数・栏数を厳守。

| ブロック | レンダリング条件 | ai-application | ai-driven-development |
|---|---|---|---|
| sectionA | `cards.length === 3 ? grid3 : grid2` | **3卡** → grid3 | **3卡** → grid3 |
| deliverables | `length === 4 ? grid2 : grid3` | **4项** → grid2 | **4项** → grid2 |
| transformation | `columns.length === 2 ? grid2 : length > 3 ? gridAuto : grid3` | **3栏** → grid3 | **2栏** → grid2 |
| transformationAfterDeliverables | flag が true なら deliverables の後 | **true** | **true** |
| closing 金色收口 | `closingJa || closingEn` 非空で表示（roleReviewBand） | Ja+En 充填 | Ja+En 充填 |
| proof | `length === 1 ? gridAuto : length === 3 ? grid3 : grid2` | **2卡** → grid2 | **1卡** → gridAuto |

両页とも **steps 块なし**、ai-driven は **独立 cta 块なし**。

---

## 6. 速度口径（team-lead 拍板）

- **対外・一般口径 = 「最短24時間でMVP」**（首页 valuePanels「最短24時間内で動くMVP」と完全统一）。
- **16時間 / 約1週間** は Rigel という具体 case の sourced 事実として、**Rigel カードの body 内のみ** に記載（公約より速い＝亮点）。
- **hero / chips / strip / 標語层には 16h を書かない**。`1時間` 等の打架口径も不可。
- 「超高速」「ultra-fast」等の hype 词は不使用（「速さと品質を両立」で表現）。

---

## 7. 重要決策記録 — proof 構成

### AI-Driven Development の第2卡 = なし（Rigel 単卡を採用）

writer が `data/projects/astra.json` を核査し、Astra をこの页の第2卡に置くことの真实性张力を flag。結果、strategist / designer / team-lead で三方収敛：

- **方案2 不採用（Astra を角度変更して保留）:** Astra の project ページは「AI Workflow / PMO proof」と明记し、本文に「**速度だけではなく**…」とある。techStack/results も通篇 workflow/PMO。AI-Driven（速度×品质の地基线）に置くと、どう角度を変えても借位。かつ Astra は基准 `ai-workflow` 页で既に proof のため、両线が同一証拠を指し「流程 vs 地基が分かれていない」を坐实する。
- **方案1 不採用（このサイト自体）:** team-lead が弱自指（外部检证不可・gimmick 寄り）を否决。
- **候補 `ai-dev-flow` 不採用:** designer 考据により、当该ページの eyebrow 字面が "AI Workflow Proof"・主题が「複雑业务の workflow 化」。リンクすると「地基 vs 流程」境界を再び焊回す。基准页が既にこれをリンク済み。
- **採用 = 方案3（Rigel 単卡 gridAuto）:** 「対称のための弱 proof 注水」をせず、单卡を加厚（body・note・strip）して「聚焦＝缺货ではない」语气で見せる。

---

## 8. 残留リスク / 確認事項

1. **真实性ガード:** 全 proof は既存 project データに基づく。新たな指标・顾客ストーリー・法務/会计クレームの捏造なし。Rigel の 16h/1週間 は `homeProjects` と Rigel 详情页の sourced 値。
2. **Astra カテゴリの一貫性:** 首页 `homeProjects` で Astra は `category: 'AI Workflow'`。本 spec の決策（Astra を AI-Driven proof にしない）と整合。
3. **コード変更範囲:** 文案・口径のみ。`DetailContent` 型は既存の全开关（transformationAfterDeliverables / closing / subtitle / ProofLink）を支持済みのため、型変更なし。
4. **基准 ai-workflow:** 本タスクで未变更（质量基准として维持）。
5. **launch 前提:** main へ入るが、Cloudflare ビルド修正は別タスク（live は V1 にピン留め継続）。

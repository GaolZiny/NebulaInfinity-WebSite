# JA Home + Services 全量文案审阅表

**项目**：NebulaInfinity-WebSite / website-redesign / v1-positioning-rebuild  
**用途**：给 PM / Z 审阅 Home 与 Services index 的日文对外文案；通过后再交给 Coder 实装。  
**状态**：review draft  
**受众**：project handoff；其中日文文案块面向官网公开页面，但需 Z 最终确认后发布。  
**范围**：只覆盖当前 HEAD 可见的 Home 与 Services index 区块；不新增页面结构，不修改代码或数据。

---

## 0. 写作基准

### 0.1 本稿采用的已确认方向

- Home Hero 采用 Z 选择的方向 A：`「AI」を、現場の「即戦力」へ。`
- Services intro 采用完整版本：  
  `業務プロセスの整理、AIアプリケーションの設計・開発、Web3.0基盤の実装まで。Nebula Infinityは、技術導入を目的化せず、現場で使われる仕組みとして具体化します。`
- 三条服务线固定为：
  1. `AI Workflow Design & Development`
  2. `AI Application Design & Development`
  3. `Web3.0 / Blockchain Application Design & Development`
- AI Workflow 的边界：任何公司中可重复的业务、判断、审核、交接流程，都可以被整理为 AI 与人共同执行的 workflow 资产；Nebula 自身的企画・開発流程只是代表例之一。
- 对外文案不绑定 OpenClaw，也不暗示服务只能用某一种 AI 工具实现；可根据客户环境使用 Claude Code 或其他 AI / 自动化基盘，但官网主文案不展开工具名。
- Web3.0 以“不可篡改记录带来的业务信任基础”为主，不使用投机、币价、炒作语气。

### 0.2 全站口吻控制

- 日文 B2B 语气：短、稳、具体、可咨询。
- 优先使用：`整理する` / `設計する` / `実装する` / `運用に落とし込む` / `改善する` / `資産化する`。
- 不使用：`最短1時間` / `爆速` / `劇的に削減` / `圧倒的` / `1/3以下` / 无来源的强保证。
- proof 只使用公开或已在项目资料中出现的代表例，不编造客户故事、效果数字或第三方评价。

---

# 1. Home 文案

## 1.1 Hero：eyebrow / title / body / CTA

**中文说明**：首屏只完成一个任务——让客户立刻理解 Nebula Infinity 是把 AI / Web3.0 落到现场业务能力里的实现伙伴。避免把所有能力、速度和成果都塞进首屏。

| 元素 | 日文文案 |
|---|---|
| Eyebrow | `AI社会実装のパートナー` |
| Title | `「AI」を、現場の「即戦力」へ。` |
| Body | `Nebula Infinityは、属人化した業務ノウハウを整理し、AIワークフロー、AIアプリケーション、Web3.0基盤として実装するパートナーです。技術導入を目的化せず、現場で使われる仕組みとして具体化します。` |
| Primary CTA | `まずは要件を整理する` |
| Secondary CTA | `サービスを見る` |

**服务线 chip / badge 文案**：

```text
AI Workflow Design & Development
AI Application Design & Development
Web3.0 / Blockchain Application Design & Development
```

---

## 1.2 Hero side value panels

**中文说明**：右侧 value panels 用来补足“为什么可信、为什么适合咨询”的三点，不再重复服务详情。

| Panel | Title | Body |
|---|---|---|
| 1 | `属人業務を、資産に` | `担当者ごとに閉じた判断基準や手順を整理し、組織で引き継げる仕組みに変えます。` |
| 2 | `構想から実装まで` | `要件整理、設計、試作、実装、運用設計まで、一つの流れとして伴走します。` |
| 3 | `AIとWeb3.0を事業へ` | `AIの活用と、改ざんされにくい記録基盤を、事業要件に合わせて設計します。` |

---

## 1.3 Transformation / assetization section

**中文说明**：这一段承接品牌核心“属人的 know-how 资产化”。重点不是“AI 很强”，而是“业务知识如何从个人经验变成组织可复用机制”。

| 元素 | 日文文案 |
|---|---|
| Eyebrow | `Why assetization matters` |
| Title | `属人のノウハウを、組織の資産に。` |
| Subtitle | `AI導入が止まる理由の多くは、技術そのものではなく、判断基準や業務知識が人に閉じていることにあります。Nebula Infinityは、その知見を整理し、AIと人が再現性をもって動ける仕組みに変えていきます。` |

**三列内容**：

| Column label | Bullets |
|---|---|
| `Current state` | `担当者ごとに判断がばらつく`<br>`引き継ぎに時間がかかる`<br>`AIを入れても運用に乗らない` |
| `System design` | `判断基準と手順を可視化する`<br>`AIと人の役割分担を設計する`<br>`レビュー導線と改善ログを残す` |
| `Business outcome` | `再現性のある実務フローになる`<br>`組織で引き継げる資産になる`<br>`継続的に改善できる運用になる` |

---

## 1.4 Home services section intro + service cards

### 1.4.1 Section intro

| 元素 | 日文文案 |
|---|---|
| Eyebrow | `Services` |
| Title | `3つの実装ラインで、構想を事業に落とし込む` |
| Subtitle | `業務フローの資産化、AIアプリケーション開発、Web3.0 / Blockchain活用まで。Nebula Infinityは、目的に合わせて必要な実装ラインを設計します。` |

### 1.4.2 Service card 1 — AI Workflow

| 元素 | 日文文案 |
|---|---|
| Official line | `AI Workflow Design & Development` |
| Title | `属人業務を、再現できるワークフローへ` |
| Body | `判断基準や手順を整理し、AIと人が協働できる業務プロセスとして設計・実装します。` |
| Fit bullet 1 | `社内ノウハウが担当者に偏っている` |
| Fit bullet 2 | `判断を伴う反復業務を標準化したい` |
| Fit bullet 3 | `既存の業務やツールと接続しながら改善したい` |
| Proof line | `代表例：企画整理、開発プロセス、リサーチ業務など、判断と手順が繰り返される業務のワークフロー化` |
| CTA | `AI Workflowを見る` |

### 1.4.3 Service card 2 — AI Application

| 元素 | 日文文案 |
|---|---|
| Official line | `AI Application Design & Development` |
| Title | `AIを、使われるプロダクトへ` |
| Body | `社内ツールから顧客向けサービスまで、AI機能を価値が伝わる体験として組み込みます。` |
| Fit bullet 1 | `AIを活かした新規サービスを作りたい` |
| Fit bullet 2 | `既存プロダクトにAI機能を組み込みたい` |
| Fit bullet 3 | `業務知識をプロダクト体験に落とし込みたい` |
| Proof line | `代表実績：Japan Life Navi / Rigel` |
| CTA | `AI Applicationを見る` |

### 1.4.4 Service card 3 — Web3.0 / Blockchain

| 元素 | 日文文案 |
|---|---|
| Official line | `Web3.0 / Blockchain Application Design & Development` |
| Title | `改ざんされにくい記録を、事業の信頼基盤へ` |
| Body | `ポイント、CRM、レビュー、契約、トレーサビリティなど、信頼が価値になる領域にWeb3.0を実装します。` |
| Fit bullet 1 | `顧客接点や会員基盤に信頼性を持たせたい` |
| Fit bullet 2 | `履歴・評価・合意を改ざんされにくい形で残したい` |
| Fit bullet 3 | `既存サービスと接続できるWeb3.0活用を検討したい` |
| Proof line | `代表実績：Carina` |
| CTA | `Web3.0 / Blockchainを見る` |

---

## 1.5 Process section

**中文说明**：流程不承诺“极快交付”，而强调即使需求不清，也可以从业务整理开始并逐步进入实现。

| 元素 | 日文文案 |
|---|---|
| Eyebrow | `Process` |
| Title | `要件整理から、運用に乗る形まで。` |
| Subtitle | `完成した仕様書がなくても構いません。現場の流れを整理し、小さく検証しながら、実装と定着に向けて進めます。` |

**Steps**：

| Step | Title | Body |
|---|---|---|
| 1 | `課題を整理する` | `現場の流れ、判断基準、制約、関係者を確認します。` |
| 2 | `実装方針を設計する` | `AI、アプリケーション、Web3.0の役割分担と構成を定義します。` |
| 3 | `小さく検証する` | `必要な機能を絞り、使われ方を確認しながら形にします。` |
| 4 | `運用に落とし込む` | `引き継ぎ、レビュー、改善の流れまで整理します。` |

---

## 1.6 Proof section：AI Workflow example + project proof wording

**中文说明**：Home proof 只展示代表性，不展开长案例。AI Workflow 使用“代表例”，AI Application / Web3 使用“代表実績”。不写无来源指标。

| 元素 | 日文文案 |
|---|---|
| Eyebrow | `Proof` |
| Title | `実装領域を、代表例で示す` |
| Subtitle | `公開できる範囲の代表例を通じて、AI Workflow、AI Application、Web3.0 / Blockchainの実装領域を示します。` |

### 1.6.1 Featured proof — AI Workflow representative example

| 元素 | 日文文案 |
|---|---|
| Label | `AI Workflow Design & Development` |
| Title | `ワークフロー資産化の代表例` |
| Summary | `企画整理、開発プロセス、リサーチ業務など、判断や手順が繰り返される業務を、AIと人が再現性をもって動けるワークフローとして設計します。これは一例であり、対象は開発業務に限定されません。` |
| Pill 1 | `判断基準の明文化` |
| Pill 2 | `人とAIの役割設計` |
| Pill 3 | `レビュー導線の整理` |
| CTA | `AI Workflowを見る` |

### 1.6.2 Project proof — Japan Life Navi

| 元素 | 日文文案 |
|---|---|
| Label | `AI Application Design & Development` |
| Title | `Japan Life Navi` |
| Summary | `在日外国人向けの生活支援アプリとして、多言語コンテンツ、領域特化AI、リアルタイム対話、画像分析を一つの体験にまとめた代表実績です。` |
| Pill 1 | `多言語生活支援` |
| Pill 2 | `領域特化AI` |
| Pill 3 | `リアルタイム対話` |
| CTA | `詳細を見る` |

### 1.6.3 Project proof — Rigel

| 元素 | 日文文案 |
|---|---|
| Label | `AI Application Design & Development` |
| Title | `Rigel` |
| Summary | `AI記帳SaaSとして、業務知識、制度対応、OCR、UX、バックエンド実装をまとめて成立させた代表実績です。` |
| Pill 1 | `業務知識の実装` |
| Pill 2 | `OCR・AI処理` |
| Pill 3 | `SaaS開発` |
| CTA | `詳細を見る` |

### 1.6.4 Project proof — Carina

| 元素 | 日文文案 |
|---|---|
| Label | `Web3.0 / Blockchain Application Design & Development` |
| Title | `Carina` |
| Summary | `小売向けCRMにWeb3.0を接続し、ポイント、クーポン、会員証などの顧客接点をブロックチェーン基盤で扱う代表実績です。` |
| Pill 1 | `Retail CRM` |
| Pill 2 | `Membership` |
| Pill 3 | `Traceability` |
| CTA | `詳細を見る` |

---

## 1.7 Trust / How we work section

**中文说明**：信任区块不再写抽象价值观，而用 Nebula 做项目时的三条工作标准说明“怎么合作”。

| 元素 | 日文文案 |
|---|---|
| Eyebrow | `How we work` |
| Title | `Nebula Infinityが重視する3つの基準` |

| Card | Title | Body |
|---|---|---|
| 1 | `Business Logic First` | `技術を選ぶ前に、現場の判断、制約、事業要件を整理します。` |
| 2 | `Asset-minded Delivery` | `その場限りの自動化ではなく、引き継げる運用資産として残します。` |
| 3 | `Business-ready Implementation` | `AIもWeb3.0も、実務で使われる形まで設計・実装します。` |

---

## 1.8 Final CTA band

**中文说明**：底部 CTA 要降低咨询门槛。避免“马上做 MVP”给需求未整理的客户压力。

| 元素 | 日文文案 |
|---|---|
| Title | `要件が固まっていなくても、ご相談ください。` |
| Body | `現場の課題、作りたいプロダクト、Web3.0活用の検討段階でも構いません。Nebula Infinityが、実装の入口から一緒に整理します。` |
| Support | `内容を確認し、次の進め方をご連絡します。` |
| Primary CTA | `まずは要件を整理する` |

---

# 2. Services index 文案

## 2.1 Services Hero intro

**中文说明**：Services 首页要让客户知道这不是“泛 AI 菜单”，而是围绕业务流程、AI 产品体验、Web3.0 信任基盘三种入口来选择。

| 元素 | 日文文案 |
|---|---|
| Eyebrow | `Services` |
| Title | `事業課題に合わせて、AI / Web3.0を実装する3つのサービス` |
| Subtitle | `業務プロセスの整理、AIアプリケーションの設計・開発、Web3.0基盤の実装まで。Nebula Infinityは、技術導入を目的化せず、現場で使われる仕組みとして具体化します。` |

**服务线 chip / badge 文案**：

```text
AI Workflow Design & Development
AI Application Design & Development
Web3.0 / Blockchain Application Design & Development
```

---

## 2.2 Decision guide block

**中文说明**：这个区块帮助客户快速判断入口，不要求客户已经知道自己需要什么技术。

| 元素 | 日文文案 |
|---|---|
| Title | `どのラインから始めるべきか、こう考える` |
| Bullet 1 | `業務の属人化や運用のばらつきが課題なら：AI Workflow` |
| Bullet 2 | `使われるAIプロダクトや業務ツールを作りたいなら：AI Application` |
| Bullet 3 | `履歴、評価、契約、会員基盤などの信頼性を価値にしたいなら：Web3.0 / Blockchain` |

---

## 2.3 Three service cards

### 2.3.1 Service card 1 — AI Workflow

| 元素 | 日文文案 |
|---|---|
| Official line | `AI Workflow Design & Development` |
| Title | `属人業務を、再現できる仕組みに` |
| Body | `属人化した業務の判断基準や手順を、AIと人が再現できるワークフローとして資産化します。` |
| Fit bullet 1 | `社内ノウハウが担当者に偏っている` |
| Fit bullet 2 | `判断を伴う反復業務を標準化したい` |
| Fit bullet 3 | `既存業務を置き換えすぎず、運用可能な形で改善したい` |
| Representative line | `代表例：企画整理、開発プロセス、リサーチ業務のワークフロー化` |
| CTA | `AI Workflowを見る` |

### 2.3.2 Service card 2 — AI Application

| 元素 | 日文文案 |
|---|---|
| Official line | `AI Application Design & Development` |
| Title | `AIを、使われるプロダクトへ` |
| Body | `AI機能を、社内外のユーザーに使われるプロダクト体験として設計・実装します。` |
| Fit bullet 1 | `AIを活かした新規サービスを作りたい` |
| Fit bullet 2 | `既存プロダクトにAI機能を組み込みたい` |
| Fit bullet 3 | `業務知識や専門知識をアプリ体験に落とし込みたい` |
| Representative line | `代表実績：Japan Life Navi / Rigel` |
| CTA | `AI Applicationを見る` |

### 2.3.3 Service card 3 — Web3.0 / Blockchain

| 元素 | 日文文案 |
|---|---|
| Official line | `Web3.0 / Blockchain Application Design & Development` |
| Title | `Web3.0テクノロジーを、ビジネスへ` |
| Body | `改ざんされにくい記録を、顧客体験・契約・評価・トレーサビリティを支える信頼基盤として活用します。` |
| Fit bullet 1 | `ポイント、CRM、レビュー、契約履歴を事業に組み込みたい` |
| Fit bullet 2 | `真正性やトレーサビリティを価値にしたい` |
| Fit bullet 3 | `既存サービスと接続できるWeb3.0活用を検討したい` |
| Representative line | `代表実績：Carina` |
| CTA | `Web3.0 / Blockchainを見る` |

---

## 2.4 Matrix / how-to-choose rows

**中文说明**：当前 Services index 的 matrix 结构是按 service line 重复展示 `誰に向くか / 何を作るか / 何で証明するか`。这里给出可直接替换的日文。

| Service line | 誰に向くか | 何を作るか | 何で証明するか |
|---|---|---|---|
| `AI Workflow Design & Development` | `オペレーション責任者 / 現場改善責任者 / 業務設計担当` | `現行業務整理 / 判断基準の明文化 / AIワークフロー設計 / 人のレビュー導線 / 既存ツール連携` | `企画整理、開発プロセス、リサーチ業務など、判断と手順が繰り返される業務のワークフロー化` |
| `AI Application Design & Development` | `新規事業責任者 / プロダクトオーナー / DX推進担当` | `体験設計 / AI機能設計 / フロントエンド・バックエンド実装 / データ連携 / 運用設計` | `Japan Life Navi / Rigel` |
| `Web3.0 / Blockchain Application Design & Development` | `事業開発 / CRM責任者 / 会員基盤責任者 / Web3.0施策担当` | `要件整理 / チェーン設計 / スマートコントラクト設計 / UI実装 / 既存サービス連携` | `Carina。ポイント、CRM、レビュー、契約、トレーサビリティなど、改ざん耐性が価値になる領域へ応用可能です。` |

---

## 2.5 Representative proof section

**中文说明**：Services index 的 proof 应比 Home 稍微明确，但仍不展开成案例页。AI Workflow 使用“代表例”，AI Application / Web3 使用“代表実績”。

| 元素 | 日文文案 |
|---|---|
| Eyebrow | `Representative proof` |
| Title | `サービスごとの代表例` |
| Support | `公開できる範囲の代表例をもとに、各サービスラインの実装領域を整理しています。詳細な案件整理や非公開事例は、ご相談時に目的に合わせて共有します。` |

| Service line | Proof title | Summary | CTA |
|---|---|---|---|
| `AI Workflow Design & Development` | `代表例：ワークフロー資産化` | `業務の判断基準、手順、レビュー導線を整理し、AIと人が再現性をもって動ける運用フローとして設計します。企画整理や開発プロセスは一例であり、対象業務はそれに限定されません。` | `AI Workflowを見る` |
| `AI Application Design & Development` | `代表実績：Japan Life Navi / Rigel` | `多言語生活支援アプリやAI記帳SaaSなど、AIをユーザーが使えるプロダクト体験として成立させた実績です。` | `AI Applicationを見る` |
| `Web3.0 / Blockchain Application Design & Development` | `代表実績：Carina` | `ポイント、クーポン、会員証をブロックチェーン基盤で扱うCRMの代表実績です。レビュー、契約、トレーサビリティなど、信頼できる記録が価値になる領域にも応用できます。` | `Web3.0 / Blockchainを見る` |

---

## 2.6 Overlap / combined-services block

**中文说明**：这里要解释三条服务线是入口分类，不是交付边界。特别补一句 AI + Web3 的结合价值。

| 元素 | 日文文案 |
|---|---|
| Title | `サービスは分断せず、必要に応じて接続する` |
| Body | `AI Workflowで業務を整理したあとにAI Applicationへ進むケースや、AI ApplicationとWeb3.0 / Blockchainを組み合わせて顧客体験を設計するケースもあります。AIで業務情報を整理・活用し、Blockchainで重要な履歴や合意を信頼できる記録として残すことで、より追跡可能な業務システムを構築できます。Nebula Infinityは、入口は分けつつ、実装は分断しません。` |

---

## 2.7 Final CTA band

**中文说明**：Services 页底部 CTA 继续降低咨询门槛，鼓励客户带着问题来，而不是先自己判断技术路线。

| 元素 | 日文文案 |
|---|---|
| Title | `どのラインから始めるべきか、相談しながら決められます。` |
| Body | `現場課題、プロダクト構想、Web3.0施策の検討段階でも構いません。背景を共有いただければ、適した入口と進め方を一緒に整理します。` |
| Primary CTA | `まずは要件を整理する` |
| Secondary CTA | `実績を見る` |

---

# 3. 実装時の注意

- 本稿是 copy sheet，不要求一次性修改 EN 文案；本次只面向 JA review。
- 若实装时继续沿用当前数据结构，可优先替换 `homeCopy.ja`、`valuePanels.ja`、`transformationColumns.ja`、`processSteps.ja`、`trustCards.ja`、`workflowProof.ja`、`Services copy.ja`、`decisionBullets.ja`、`matrixRows.*.ja`、`services.ts` 中的 JA 字段。
- Web3 文案必须保持“business-ready / trust infrastructure”方向，不使用 crypto 投机语气。
- AI Workflow 文案必须保持广义业务资产化方向，不绑定 OpenClaw 或任何单一开发方法论。
- 当前稿不保留需要 Z 选择的开放方案；Z 如需调整，建议只在 CTA 语气和 proof 展开程度上微调。

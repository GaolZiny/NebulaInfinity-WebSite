# JA Copy Direction Proposal — Home + Services First

**用途**：面向 Nebula Infinity 官网 V1 的日文对外文案方向提案。本文先锁定 Home 与 Services，不直接改写全站，也不修改现有页面结构或视觉设计。  
**状态**：final proposal  
**适用范围**：Brand / Content、Localization/i18n、Marketing positioning  
**前提**：保留当前 Light Premium Bento 视觉方向；本提案只处理文案密度、表达优先级与 proof/example 的放置方式。

---

## 1. 总体判断

现有日文文案已经能传达「AI 実装」的大方向，但对日本企业客户来说，表达仍偏长、偏强销售、偏 AI-only，并且部分承诺过快过满。V1 首页与服务页需要从「我们很快、AI 很强」转成：

> **Nebula Infinity は、AI / Web3.0 を現場で使える業務能力へ落とし込み、属人化したノウハウを組織の資産に変える実装パートナーである。**

因此，文案策略不应追求更华丽，而应追求：

1. **更短**：每个模块只讲一个主张。
2. **更具体**：先讲业务结果，再讲 AI / Web3 技术。
3. **更可信**：少用极限速度、成本压缩等强承诺；多用适用场景、交付物、代表例。
4. **更一致**：全站统一为 3 条服务线，不再使用旧的 AI-only 服务分类。
5. **更日本企业友好**：低 buzzword、低煽动、高信赖、可咨询。

---

## 2. 当前 JA 文案的主要问题

以下问题来自现有 `data/translations/ja.json` 与 `data/services.ts` 的日文内容，用作后续 rewrite 的诊断依据。

### 2.1 Hero 信息过密，首屏难以快速理解

当前例：

> `業務フロー、プロダクト、自社のシステム開発、あらゆるビジネスシーンにAIをネイティブに統合し、品質を担保しながら時間とコストを劇的に削減。...`

问题：一句话同时塞入业务流、产品、系统开发、质量、时间、成本、竞争力，首屏阅读负担过高。日本企业站首屏应让访客 3 秒内知道「适合谁」「解决什么」「为什么可信」。

### 2.2 强承诺过多，缺少可验证支撑

当前例：

> `最短1時間〜1営業日でMVP提供`  
> `従来の1/3以下に`  
> `時間とコストを劇的に削減`

问题：这些数字与强表达如果没有公开 proof、前提条件、适用范围，会显得像广告承诺。建议 Home 首屏不再主打极限数字，而把速度表达降级为 proof 或咨询后说明。

### 2.3 服务分类仍是旧 AI-only 结构

当前例：

> `業務フローへのAI統合`  
> `コアサービス・プロダクトへのAI融合`  
> `開発におけるAI活用`

问题：这与已批准的 V1 三条服务线不一致，且第三项「開発におけるAI活用」会把 AI Workflow 误读成开发方法论服务。V1 应严格使用：

1. `AI Workflow Design & Development`
2. `AI Application Design & Development`
3. `Web3.0 / Blockchain Application Design & Development`

### 2.4 AI Workflow 被窄化成自动化 / 开发效率

当前例：

> `反復作業の自動化から複雑な意思決定支援まで`  
> `独自のAI駆動開発方法論`

问题：AI Workflow 的核心不是「用 AI 加速开发」或「自动化反复任务」本身，而是把公司内部可重复的业务工作固化为可交接、可复用、可改善的资产。开发 / 规划流程只是 Nebula 自身业务中的一个代表例，不应成为服务边界。

### 2.5 Web3.0 缺席或弱化

当前 Home/Services 主体仍以 AI Native 为中心，Web3.0 只在新版 `services.ts` 中出现。V1 必须把 Web3.0 / Blockchain 作为三条服务线之一，且表达重点应从「币、投机、潮流」转成「不可篡改记录带来的业务信任基础」。

### 2.6 语气偏煽动，不够日本 B2B

当前例：

> `爆速で市場に投入`  
> `他社には真似できない`  
> `圧倒的なスピード`

问题：这些表达容易降低高信赖感。建议改成更稳健的表达，如 `短い検証サイクルで具体化します`、`独自の業務文脈に合わせて設計します`、`実装可能な形まで落とし込みます`。

### 2.7 术语混杂，品牌记忆点分散

当前同时出现：

> `AI社会実装` / `AI Native Solution` / `AI Native Workflow` / `AI駆動開発` / `AI活用開発`

问题：术语过多会削弱客户理解。V1 应保留少数核心锚点，并让三条服务线成为导航与认知主结构。

### 2.8 CTA 太重，降低咨询门槛的作用不足

当前例：

> `まずは無料で相談・MVP作成を依頼する`  
> `無料で相談し、1 Day MVPを体験する`

问题：一开始就要求「MVP 作成」会让需求尚未清楚的客户产生压力。Home 与 Services 的首选 CTA 应更低摩擦：先整理用例、确认适合度。

---

## 3. 站点级 JA Copy Rule Set

### 3.1 段落长度

- Hero subtitle：**1–2 句，80–120 日文字符以内**。
- 普通段落：**每段 1 个主张，最多 2 句**。
- Service card body：**45–70 日文字符**，避免超过 2 行半。
- Proof / example：不要混入长段解释，使用短 label + 一句说明。

### 3.2 Headline 风格

- 优先使用「业务结果 + 实装感」结构。
- 使用日文自然表达，不追求英文概念直译。
- 可保留关键品牌锚点：
  - `AI社会実装のパートナー`
  - `「AI」を、現場の「即戦力」へ`
  - `「属人」のノウハウを、組織の「資産」に`
  - `Web3.0テクノロジーを、ビジネスへ`
- 避免过度抽象：`未来を変える`、`可能性を最大化`、`革新を加速`。

### 3.3 CTA 风格

推荐 CTA：

- `まずは要件を整理する`
- `サービスについて相談する`
- `代表実績を見る`
- `自社の業務に合うか相談する`
- `Web3.0活用を相談する`

避免 CTA：

- `今すぐ革命を始める`
- `爆速で未来を手に入れる`
- `1 Day MVPを体験する`
- `最短1時間で依頼する`

### 3.4 禁止或慎用的模糊 / 强销售表达

| 避免表达 | 理由 | 推荐替代表达 |
|---|---|---|
| `劇的に削減` | 过强且需证明 | `削減余地を見極める` / `効率化につなげる` |
| `圧倒的` | 广告感强 | `短い検証サイクル` / `実装まで一貫` |
| `爆速` | 不适合高信赖 B2B | `すばやく具体化` |
| `他社には真似できない` | 竞争声明过强 | `自社の業務文脈に合わせた` |
| `あらゆるシーン` | 过宽泛 | `反復性のある業務、判断を伴う業務、顧客接点` |
| `AI Native` 单独使用 | 概念不够直观 | 首次解释为 `AIを前提に設計された業務・プロダクト` |

### 3.5 Tone

- **可信**：不用夸张形容词堆叠，而用结构、适用场景、交付物说服。
- **冷静**：保持专业温度，不使用投机、煽动、过快承诺。
- **实施导向**：多用 `設計する`、`実装する`、`整理する`、`運用に落とし込む`、`改善する`。
- **咨询友好**：承认客户未必已经有完整要件，强调可以从业务整理开始。

### 3.6 Proof 使用规则

- proof 先服务于主张，不独立堆砌。
- Home：每条服务线最多放 1 个代表 proof label。
- Services index：每张 service card 放 `代表例 / 代表実績` 一行。
- Detail page：再展开 use case、deliverables、proof。
- 没有公开案例细节时，不编造指标、客户故事或成果数字。

---

## 4. 核心服务解释口径

### 4.1 AI Workflow 的正确边界

AI Workflow 的本质是：

> **会社の中で繰り返される業務・判断・レビューの流れを整理し、AI と人が再現性をもって動けるワークフローとして設計・実装すること。**

重要澄清：

- 任何公司的可重复业务工作，都可能被固化为 AI workflow。
- 目标是让经验、判断标准、流程和检查方式成为公司拥有的资产，而不是只留在个别员工头脑里。
- Nebula 自身的企画・開発流程可以作为一个代表例，但不能让客户误以为服务只面向规划 / 开发工作。
- OpenClaw 只是可选实现方式之一。根据客户环境，也可以使用 Claude Code 或其他 AI 工具 / 自动化基盘来实现。
- 对外表达应避免绑定具体内部工具；先讲 workflow asset，再讲可选技术实现。

推荐日文表达：

> `属人化した判断基準や手順を整理し、AIと人が同じ品質で再現できる業務ワークフローとして設計・実装します。`

### 4.2 AI Application 的正确边界

AI Application 不是单纯「在产品里接一个 AI API」，而是把 AI 能力设计成用户能理解、愿意使用、并能持续带来业务价值的应用体验。

推荐日文表达：

> `顧客向けサービスや社内ツールにAI機能を組み込み、使われ続けるプロダクト体験として設計・実装します。`

Proof 使用：

- Japan Life Navi
- Rigel

### 4.3 Web3.0 / Blockchain 的正确边界

Web3.0 / Blockchain 应被解释为业务信任基础设施，而不是投机性概念。重点是：

- 不可篡改性
- 履歴 / 証跡
- トレーサビリティ
- 所有権 / 権限 / 契約记录
- 客户体验与业务系统的结合

可提及用例：

- ポイント / 会員制度
- CRM / 顧客接点履歴
- レビュー / 評価記録
- 契約 / 合意履歴
- 流通・製造・コンテンツのトレーサビリティ
- 改ざん耐性が価値になる業務記録

AI 结合后的额外价值：

- AI 生成、整理、推荐、判断业务信息。
- Blockchain 保留关键记录、履历、合意、评价或资产状态。
- 两者结合时，可以把「智能处理」与「可信记录」连接起来，形成更可审计、更可追溯的业务系统。

推荐日文表达：

> `改ざんされにくい記録を、ポイント、CRM、レビュー、契約、トレーサビリティなどの業務に組み込み、信頼できる顧客体験と運用基盤を設計します。`

---

## 5. Home first-pass rewrite proposal

### 5.1 Home hero headline / subtitle / CTA direction

目标：Hero 不再讲所有服务细节，而是建立一个清晰定位：AI / Web3.0 的业务实装伙伴。

#### 推荐 Hero 方案 A：最稳健

**Headline**

> `「AI」を、現場の「即戦力」へ。`

**Subtitle**

> `Nebula Infinityは、属人化した業務ノウハウを整理し、AIワークフロー、AIアプリケーション、Web3.0基盤として実装するパートナーです。`

**Primary CTA**

> `まずは要件を整理する`

**Secondary CTA**

> `サービスを見る`

优点：保留批准定位，且在 subtitle 中一次性引出三条服务线。

#### 推荐 Hero 方案 B：更强调组织资产

**Headline**

> `属人のノウハウを、組織の資産に。`

**Subtitle**

> `業務の判断基準、プロダクト体験、信頼できる記録基盤を、AI / Web3.0で運用可能な仕組みに変えていきます。`

**Primary CTA**

> `自社の業務に合うか相談する`

**Secondary CTA**

> `代表実績を見る`

优点：与 AI Workflow 的核心价值更强绑定，也能自然扩展到 Web3.0 的信任记录。

#### 不推荐延续的方向

> `最短1時間〜1営業日でMVP提供` 作为 Hero badge 主诉求。

原因：速度可以是 proof，但不应成为首屏最高层定位。它会把 Nebula 从「高信赖实现伙伴」拉向「快交付外包」。

### 5.2 Home service cards direction

Home 的 service cards 应做到：一眼看懂 3 条服务线；每张卡只保留「适合场景 + 一句价值 + proof label」。

#### Card 1 — AI Workflow Design & Development

**Title**

> `属人業務を、再現できるワークフローへ`

**Body**

> `判断基準や手順を整理し、AIと人が協働できる業務プロセスとして設計・実装します。`

**Proof line**

> `代表例：業務設計・開発プロセス・リサーチ業務のワークフロー化`

**CTA**

> `AI Workflowを見る`

#### Card 2 — AI Application Design & Development

**Title**

> `AIを、使われるプロダクトへ`

**Body**

> `社内ツールから顧客向けサービスまで、AI機能を価値が伝わる体験として組み込みます。`

**Proof line**

> `代表実績：Japan Life Navi / Rigel`

**CTA**

> `AI Applicationを見る`

#### Card 3 — Web3.0 / Blockchain Application Design & Development

**Title**

> `改ざんされにくい記録を、事業の信頼基盤へ`

**Body**

> `ポイント、CRM、レビュー、契約、トレーサビリティなど、信頼が価値になる領域にWeb3.0を実装します。`

**Proof line**

> `代表実績：Carina`

**CTA**

> `Web3.0 / Blockchainを見る`

### 5.3 Home proof / example placement rules

Home では proof を長く説明しない。おすすめの配置は以下。

1. Hero 下：3 service cards に短い proof line。
2. Mid section：代表実績 3 件を `AI Application / Web3.0 / Workflow Example` の label 付きで表示。
3. CTA 前：`要件が固まっていない段階から相談可能` を短く補足。

禁止：Home の service card 内で詳細な開発方法論や長い case story を書くこと。詳細は Services detail または Projects に送る。

---

## 6. Services index first-pass rewrite proposal

### 6.1 Services index intro direction

Services index 的 intro 应让客户知道：这不是泛 AI 菜单，而是从业务设计到应用、信任基盘的三条实现路线。

**Recommended heading**

> `事業課題に合わせて、AI / Web3.0を実装する3つのサービス`

**Recommended intro**

> `業務プロセスの整理、AIアプリケーションの設計・開発、Web3.0基盤の実装まで。Nebula Infinityは、技術導入を目的化せず、現場で使われる仕組みとして具体化します。`

**Alternative shorter intro**

> `AI / Web3.0を、業務・プロダクト・信頼基盤の3つの観点から実装します。要件が固まる前の整理からご相談いただけます。`

### 6.2 3 service-line one-sentence sales expressions

These should be used consistently on Services index and can be reused in Contact inquiry descriptions.

1. **AI Workflow Design & Development**

   > `属人化した業務の判断基準や手順を、AIと人が再現できるワークフローとして資産化します。`

2. **AI Application Design & Development**

   > `AI機能を、社内外のユーザーに使われるプロダクト体験として設計・実装します。`

3. **Web3.0 / Blockchain Application Design & Development**

   > `改ざんされにくい記録を、顧客体験・契約・評価・トレーサビリティを支える信頼基盤として活用します。`

### 6.3 Services cards density rule

Each Services index card should follow this compact order:

1. Official service line name
2. Japanese benefit headline
3. One-sentence body
4. `向いている相談` bullets, max 3
5. `代表例 / 代表実績` one line
6. CTA

Example for AI Workflow:

> **AI Workflow Design & Development**  
> `属人業務を、再現できる仕組みに`  
> `判断基準、手順、レビューの流れを整理し、AIと人が協働できるワークフローとして実装します。`  
> `向いている相談：担当者依存の業務 / 判断を伴う反復作業 / 引き継ぎにくい運用`  
> `代表例：企画整理、開発プロセス、リサーチ業務のワークフロー化`

---

## 7. Proof / example 放置规则

### 7.1 AI Workflow

- 使用 `代表例`，不要使用 `代表実績`，除非该 workflow 可作为公开案例说明。
- 例子要明确为「一例」，不能让客户误以为服务只限于 Nebula 自身的企画・開発业务。
- 公开 copy 推荐写法：

> `代表例：企画整理、開発プロセス、リサーチ業務など、判断と手順が繰り返される業務のワークフロー化`

### 7.2 AI Application

- 使用 `代表実績：Japan Life Navi / Rigel`。
- 证明重点不是「用了 AI」，而是「AI 被包装成用户可使用的产品体验」。
- 不编造用户数、转化率、性能指标。

### 7.3 Web3.0 / Blockchain

- 使用 `代表実績：Carina`，但必须补一句 broader capability。
- 推荐写法：

> `代表実績：Carina。ポイント、CRM、レビュー、契約、トレーサビリティなど、改ざん耐性が価値になる領域へ応用可能です。`

### 7.4 AI + Web3 combination

当页面需要解释 AI × Web3 的组合价值时，保持一句话即可：

> `AIで業務情報を整理・活用し、Blockchainで重要な履歴や合意を信頼できる記録として残すことで、より追跡可能な業務システムを構築できます。`

---

## 8. Recommended migration sequence

不建议一次全站重写。建议按以下顺序推进：

1. **Home Hero + Services cards**：先修正最高可见区域与服务认知。
2. **Services index intro + 3 service cards**：统一分类与咨询入口。
3. **Contact inquiry taxonomy**：改成 3 服务线 + other。
4. **Service detail pages**：展开 use cases / deliverables / proof。
5. **Projects / Cases mapping**：让 Japan Life Navi、Rigel、Carina 与服务线对应。
6. **About page**：最后统一公司介绍中的服务表述。

此顺序可以在不改变当前视觉结构的前提下，先降低文案密度并修正定位偏差。

---

## 9. Final copy direction summary

V1 JA copy 的核心方向可以归纳为：

> **短く、具体的に、実装可能性から話す。**

具体执行标准：

- Hero 只讲一个定位：AI / Web3.0 的业务实装伙伴。
- Home service cards 必须固定为 3 条已批准服务线。
- AI Workflow 必须讲「属人知的资产化」，不限定于开发流程或 OpenClaw。
- AI Application 必须讲「被用户使用的产品体验」，proof 用 Japan Life Navi / Rigel。
- Web3.0 必须讲「不可篡改记录作为业务信任基础」，proof 用 Carina，同时展示更广业务应用。
- CTA 从「马上做 MVP」降级为「先整理需求 / 相談する」。
- 删除或弱化没有公开证明的强数字承诺。
- 不新增页面结构，不改变 Light Premium Bento 方向，仅调整文案密度、顺序与 proof placement。

# Home-led IA 整合提案（Z Review Proposal）

> 状态：提案，等待 Z / PM review。本文只提出 IA / 内容整合建议，不代表最终批准，也不包含源码实现。

## 0. 结论 / 推荐方向

建议采用 **Home-led IA**：把 Services index 与 About 的必要信息压缩并并入 Home，Global navigation 中的 `Services` / `About` 改为 Home 内锚点；保留 service detail pages、Projects、Contact 作为独立页面；移除 Home 的 standalone Proof section。

推荐后的核心信息流：

```text
Home hero
→ Why assetization matters
→ Services（#services，服务选择与 3 条服务线入口）
→ Process
→ About / Company overview（#about，公司概览 + 工作原则）
→ Contact CTA
```

这样做的理由：

- V1 的主要任务是让访客快速理解 Nebula Infinity 的定位与 3 条服务线；当前 `/services` 与 `/about` 大量重复 Home，增加导航负担。
- Proof 信息已经在 service detail pages 与 Projects 中承担得更具体；Home 再放一整段 Proof 会让页面叙事重复。
- 保留 `/[lang]/services/{serviceId}` 与 `/[lang]/projects`，可以继续承接深入阅读与案例验证，不会把所有信息塞进 Home。
- `/[lang]/services` 与 `/[lang]/about` 不建议直接删除；应作为兼容路由/redirect 处理，避免 SEO 与外链风险。

主要 tradeoff：Home 会变得更长，因此 Services 与 About 必须做成紧凑模块，不能把原 Services/About 页面整页搬入。

---

## 1. Proposed global navigation after consolidation

### 1.1 推荐导航结构

| Nav item | JA label | Target | 说明 |
|---|---|---|---|
| Home | `ホーム` | `/[lang]/` | 仍回到 Home 顶部。Logo 同样指向 Home。 |
| Services | `サービス` | `/[lang]/#services` | 不再进入 Services index；跳到 Home 的 Services 区块。 |
| Projects | `プロジェクト` | `/[lang]/projects` | 保持独立页面，用于承接实绩/案例验证。 |
| About | `会社概要` | `/[lang]/#about` | 不再进入 About standalone page；跳到 Home 的公司概览区块。 |
| Contact | `お問い合わせ` | `/[lang]/contact` | 保持独立询盘页面。 |

### 1.2 Link behavior 建议

- Home hero secondary CTA：从 `/[lang]/services` 改为 `/[lang]/#services`，JA label 可保持 `サービスを見る`。
- Home service cards：每张卡必须直接链接到对应 service detail page：
  - `/[lang]/services/ai-workflow`
  - `/[lang]/services/ai-application`
  - `/[lang]/services/web3-blockchain`
- Service detail breadcrumb / back CTA：建议把 “Services / サービス一覧へ” 类链接改到 `/[lang]/#services`，避免用户被带回 compatibility page。
- About 相关 footer/header 链接：统一指向 `/[lang]/#about`。
- Anchor offset：实现时需要考虑 sticky header，`#services` / `#about` 的 scroll margin 需避免标题被 header 遮住。

---

## 2. Proposed Home section order and current-section decisions

| Order | Proposed Home section | Anchor | Decision | 当前内容处理 |
|---:|---|---|---|---|
| 1 | Hero | top | Keep / adjust CTA | 保留当前定位：`AI社会実装のパートナー`、`「AI」を、現場の「即戦力」へ。`；secondary CTA 改为 Home Services anchor。 |
| 2 | Why assetization matters | — | Keep | 保留 current Transformation section，继续解释 `属人のノウハウ → 組織の資産`。 |
| 3 | Services | `#services` | Keep / expand | 当前 Home Services 区块升级为主服务选择区；折入 Services index 的“如何选择”和部分 service-card 信息。 |
| 4 | Process | — | Keep | 保留 current Process，强调从整理到实现/运营普及。 |
| 5 | Proof | — | Remove | 移除 Home standalone Proof section；对应内容转由 service detail pages 与 Projects 承担。详见第 4 节。 |
| 6 | About / Company overview | `#about` | Add / move | 从 About 页面折入必要公司信息；同时吸收当前 Trust / How we work 内容。 |
| 7 | Trust / working principles | inside `#about` | Move / consolidate | 不再作为单独 section；合并到 About/company overview 下，避免重复。 |
| 8 | CTA band | — | Keep | 保留最终询盘 CTA；文案继续保持“要件未固定也可相談”的低门槛。 |

推荐最终 Home 顺序：

```text
Hero
→ Why assetization matters
→ Services (#services)
→ Process
→ About / Company overview (#about)
→ CTA band
```

不建议在 Home 新增独立 Projects teaser。Projects 已在 global nav 中保留，Services cards 与 service detail proof 可以自然导向 Projects；Home 再加入 Projects teaser 会接近被移除的 Proof section，削弱本次整合目标。

---

## 3. Proposed Services area on Home

### 3.1 折入 Home Services 的内容

建议把 Services index 中最有决策价值的内容折入 Home 的 `#services` 区块：

1. **Services section heading**
   - JA eyebrow：`Services`
   - JA title：沿用/微调当前 Home：`3つの実装ラインで、構想を事業に落とし込む`
   - 支持文案保留 “AI Workflow / AI Application / Web3.0 / Blockchain” 三条线与 “事業要件から設計する” 的表达。

2. **How to choose mini band**（来自 Services index `どのラインから始めるべきか、こう考える`）
   - `業務の属人化や運用のばらつきが課題なら：AI Workflow`
   - `使われるAIプロダクトや業務ツールを作りたいなら：AI Application`
   - `履歴、評価、契約、会員基盤などの信頼性を価値にしたいなら：Web3.0 / Blockchain`
   - 建议做成 3 个简短 choice chips / choice rows，而不是大段说明。

3. **3 service cards**
   - 继续严格展示 exactly 3 service lines：
     - `AI Workflow Design & Development`
     - `AI Application Design & Development`
     - `Web3.0 / Blockchain Application Design & Development`
   - 每张卡包含：official line、JA title、1 段 body、3 条 fit bullets、1 条 proof line、detail CTA。
   - CTA/link 行为：整卡或 CTA 指向 `/[lang]/services/{serviceId}`。

4. **Overlap note**（压缩折入，不独立成段）
   - 建议在 Services 区块末尾增加一句短 note：
     - `入口は分けつつ、実装は分断しません。AI Workflow から AI Application へ進むケースや、AI Application と Web3.0 / Blockchain を組み合わせるケースにも対応します。`

### 3.2 不建议折入 Home 的 Services index 内容

| Services index content | 推荐处理 | 理由 |
|---|---|---|
| Full Services hero | Omit / absorb into section heading | Home 已有 hero；再复制会重复。 |
| Full fit matrix | Compress into cards | Matrix 有价值，但整段放入 Home 会过长；每张卡内保留 `fit / deliverables / proof` 的精华即可。 |
| Proof mapping cards | Do not fold into Home | 会变成 Home Proof section 的替代版本，违背 Z 的第 2 点。 |
| Services CTA band | Omit | Home 已有 final CTA band。 |
| Services standalone page structure | Do not preserve as primary nav destination | 会继续制造导航重复。 |

### 3.3 Home service card 推荐信息边界

| Service | Home card should include | Detail page should retain only / expand |
|---|---|---|
| AI Workflow | 属人化/判断基準/レビュー導線/既存ツール連携；代表例一行即可。 | 具体 workflow categories、deliverables、proof examples、engagement steps。 |
| AI Application | 顧客向け/社内ツール/AI-native product；RAG、multimodal、realtime 可作为 fit/module hint。 | Japan Life Navi / Rigel 的具体 proof、module list、implementation scope。 |
| Web3.0 / Blockchain | 会員基盤、証跡、CRM、トレーサビリティ；必须强调 business application。 | Carina proof、Web3 business-ready guardrails、chain/contract/UI/ops scope。 |

---

## 4. Home Proof removal and proof-content mapping

建议删除 Home 的 current Proof section：

- JA eyebrow：`Proof`
- JA title：`Nebula Infinityの実装力`
- JA subtitle：`一部の実装例(プロジェクト)を公開します。`
- Proof cards：AI Workflow / Japan Life Navi / Rigel / Carina

删除原因：这些内容已经在 service detail pages 与 Projects 中有更明确的位置。Home 只保留 Services cards 上的 proof line，不再保留 standalone Proof grid。

### 4.1 Current Home proof cards mapping

| Current Home proof card/content | 覆盖状态 | 推荐归属 | 具体处理建议 |
|---|---|---|---|
| `AI Workflow Design & Development` / `ワークフロー資産化` / `企画整理、開発プロセス、リサーチ業務...` / pills: `プロセス整理`, `役割設計`, `レビュー導線` | Mostly covered；`開発プロセス`、`リサーチ業務`、`役割設計`、`レビュー導線` 已在 AI Workflow detail 覆盖。`企画整理` 当前 detail 中不够显性。 | `/[lang]/services/ai-workflow` | 删除 Home card；在 AI Workflow detail 的 proof 或 categories 中补一条 `企画整理ワークフロー`，或在现有 proof note 中显性加入 `企画整理`。不要放到 Projects，除非之后新增 workflow case data。 |
| `Japan Life Navi` / `多言語コンテンツ`, `領域特化AI`, `リアルタイム対話` | Covered | `/[lang]/services/ai-application` + `/[lang]/projects/gaijin-life-navi` | 删除 Home card；AI Application detail 已有 Japan Life Navi proof，Projects detail/data 已覆盖多语言、领域特化 AI、实时对话。无需新增内容。 |
| `Rigel` / `業務知識の実装`, `OCR・AI処理`, `SaaS開発` | Covered | `/[lang]/services/ai-application` + `/[lang]/projects/rigel` | 删除 Home card；AI Application detail 已覆盖业务知识、制度/法规、OCR、UX、backend quality；Projects detail/data 继续承接深入验证。无需新增内容。 |
| `Carina` / `Retail CRM`, `Membership`, `Traceability` | Covered | `/[lang]/services/web3-blockchain` + `/[lang]/projects/carina` | 删除 Home card；Web3 detail 已覆盖 retail CRM、points/coupons/membership、traceability 与 business-ready Web3；Projects detail/data 继续承接案例。无需新增内容。 |

### 4.2 Projects 的处理建议

- `/[lang]/projects` 保持独立，用于承接“想看实绩”的用户。
- Home 不再展示 Projects teaser；用户通过 global nav `プロジェクト` 进入 Projects。
- 当前 Projects data 中没有 `workflow` 类公开 project。若未来要让 Projects 完整覆盖 architecture 中的 3 proof categories，可另起内容任务新增 workflow case data；本次 Home consolidation 不应临时制造假案例。

---

## 5. Proposed About / company overview on Home

### 5.1 About 中需要折入 Home 的内容

当前 About 页面真正独有且值得保留的是 “公司是谁” 与 “为什么可信”。建议在 Home 末段新增 `#about` 区块，标题可为：

- JA eyebrow：`About Nebula Infinity`
- JA title：`AI社会実装のパートナー`
- JA body：`Nebula Infinity は、AI と Web3.0 を机上の構想で終わらせず、現場で使える仕組みとして設計・開発する日本発のチームです。`

建议 `#about` 区块包含 2 个紧凑模块：

1. **Company snapshot**
   - `Company` — `Nebula Infinity（ネビュラインフィニティ）`
   - `Base` — `Japan`
   - `Domain` — `nebulainfinity.com`
   - `Focus` — `AI Workflow / AI Application / Web3.0 / Blockchain`
   - `Representative products` — `Japan Life Navi / Rigel / Carina`

2. **How we work / working principles**
   - `Business Logic First` — `技術選定より先に、現場の流れと判断を整理します。`
   - `Asset-minded` — `その場限りの自動化ではなく、引き継げる資産を残します。`
   - `Implementation-minded` — `提案で終わらせず、設計・実装・定着まで進めます。`
   - `Calm, business-ready Web3` — `Web3.0 も投機ではなく、事業価値から設計します。`

### 5.2 About 中可以省略/不直接搬入的内容

| About current content | 推荐处理 | 理由 |
|---|---|---|
| Positioning pillars 4 cards | Compress into #about headline/badges, not full cards | Home hero、Transformation、Services 已重复表达这些 brand anchors。 |
| What we do / 3 service cards | Omit from About; covered by `#services` | 避免 Home 内出现第二组 Services cards。 |
| About CTA band | Omit | Home final CTA 已覆盖。 |
| Full standalone About page layout | Do not preserve as primary route | 对 V1 conversion 不如 Home-led flow 清晰。 |

### 5.3 About menu/anchor behavior

- Global nav `会社概要` / `About` 指向 `/[lang]/#about`。
- `/[lang]/about` 作为兼容路由保留；具体路由处理见第 6 节。
- `#about` 区块应该有真实可聚焦标题或 landmark，方便键盘用户与屏幕阅读器定位。

---

## 6. Route treatment recommendation

### 6.1 Recommendation

不建议直接删除 `/[lang]/services` 与 `/[lang]/about`。建议保留为兼容路由，优先级如下：

1. **最佳：hosting-level redirects**
   - `/ja/services` → `/ja/#services`
   - `/en/services` → `/en/#services`
   - `/ja/about` → `/ja/#about`
   - `/en/about` → `/en/#about`
   - 若 Cloudflare Pages `_redirects` 或等效机制可用，建议用 301/308。

2. **次佳：static compatibility pages**（更符合 current Next static export 的安全实现）
   - 保留 `/[lang]/services` 与 `/[lang]/about` 页面，但改成极薄兼容页：
     - 明确提示内容已并入 Home 对应区块；
     - 提供主按钮跳到 `/[lang]/#services` 或 `/[lang]/#about`；
     - 添加 canonical 指向 `/[lang]/`；
     - 如实现可行，添加 `noindex`，降低重复内容风险。

由于项目要求 static export compatibility，不能默认依赖 Next.js server redirect。若没有确认 hosting redirects 可用，推荐先做 static compatibility pages，避免 404 和部署差异。

### 6.2 SEO / backlink 风险

| 处理方式 | 风险 | 建议 |
|---|---|---|
| 直接删除 `/services` / `/about` | 外链、已分享链接、搜索索引变 404；损伤可信度。 | 不采用。 |
| 直接 301 到 Home anchor | 用户路径最干净；但 hash anchor 对搜索引擎与 analytics 识别不如独立 URL 稳定。 | 可采用，但需确认 Cloudflare static redirect 支持。 |
| 保留 thin compatibility pages | 用户多一次点击或自动跳转；但最稳，static export 兼容。 | V1 推荐默认方案。 |
| 保留完整 old pages | 重复内容继续存在，违背 Home-led IA。 | 不推荐。 |

---

## 7. Implementation sequence if Z approves

1. **Docs update**
   - 更新 `design/visual/home.md`：新的 Home section order、`#services` / `#about` 规格、Proof removal。
   - 更新 `design/visual/services-index.md`：标记为 compatibility/redirect 规格，而非 primary index。
   - 更新 `design/visual/about.md`：标记为 compatibility/redirect 规格，核心内容迁入 Home `#about`。
   - 如有 screen hierarchy / navigation docs，也同步 nav target。

2. **Coder implementation**
   - Header nav targets：Services/About 改为 Home anchors。
   - Home：扩展 Services 区块、删除 Proof 区块、新增 About/company overview 区块、合并 Trust。
   - Service detail pages：breadcrumb/back CTA 从 `/[lang]/services` 改为 `/[lang]/#services`。
   - `/[lang]/services` 与 `/[lang]/about`：实现 compatibility route 或 hosting redirect。
   - 保持 static export compatibility，不引入 SSR-only redirect assumptions。

3. **Tester QA**
   - Build/static export 验证。
   - Desktop/mobile nav flow QA。
   - Anchor scroll offset、keyboard focus、language toggle、old URL compatibility。
   - SEO metadata/canonical/noindex 或 redirect behavior 检查。

---

## 8. Acceptance criteria for implementation

- Global nav 显示顺序为 `Home / Services / Projects / About / Contact`；JA labels 为 `ホーム / サービス / プロジェクト / 会社概要 / お問い合わせ`。
- Header `Services` 指向 `/[lang]/#services`，`About` 指向 `/[lang]/#about`；mobile menu 中行为一致。
- Home 上存在唯一 `#services` 区块，并且清楚展示 exactly 3 service lines。
- Home service cards 直接链接到：
  - `/[lang]/services/ai-workflow`
  - `/[lang]/services/ai-application`
  - `/[lang]/services/web3-blockchain`
- Home 不再有 standalone `Proof` section / `Nebula Infinityの実装力` section。
- Home 上存在 `#about` 区块，包含 compact company overview 与 working principles；不重复一整页 About。
- `/[lang]/projects` 仍为独立 global nav item；Japan Life Navi / Rigel / Carina proof 仍可通过 Projects 与 service detail pages 到达。
- AI Workflow detail 显性覆盖 Home proof 中的 `企画整理`，或在 implementation notes 中确认它已被现有 proof/categories 覆盖。
- `/[lang]/services` 与 `/[lang]/about` 不返回 404；作为 redirect 或 static compatibility pages 保留。
- 若使用 compatibility pages，需避免完整重复内容，并设置 canonical/noindex（实现可行时）。
- Static export build 不因 route/redirect 变化失败。
- Sticky header 下，`#services` / `#about` anchor 不被遮挡；键盘 focus-visible 和屏幕阅读器 landmark/heading 可用。
- 语言切换在 anchor/compatibility route 场景下不产生断链。
- Web3 copy 继续强调 business application，不出现 speculative/crypto-first messaging。
- Workflow examples 不暗示 AI Workflow 只限于当前示例。

---

## 9. Final recommendation

建议提交给 Z review 的方向是：

> **采用 Home-led IA；Global nav 的 Services/About 改为 Home anchors；Home Services 区块承担服务选择；Home Proof 删除；About 压缩为 Home company overview；保留 service detail pages、Projects、Contact；`/services` 与 `/about` 作为兼容路由处理，不直接删除。**

这是一条比“保留所有 standalone pages”更清晰、比“直接删除路由”更安全的折中方案，符合 V1 的定位重建目标，也保留 SEO / backward-link 的安全垫。

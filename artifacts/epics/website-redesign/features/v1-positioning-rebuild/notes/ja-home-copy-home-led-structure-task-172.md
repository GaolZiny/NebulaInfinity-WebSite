# JA Home Copy — Home-led IA Structure Rewrite (task-172)

**Project:** NebulaInfinity-WebSite
**Scope:** Copy / documentation only
**Audience:** project handoff; JA copy blocks were the source for public website implementation after PM/Z confirmation
**Status:** superseded / adjusted by Z's 08:54 changes in task-174
**Canonical target after task-174:** `design/visual/home.md` and `design/visual/ai-workflow.md`
**Current approved Home order:** Hero → Services(#services) → Projects → Process → About(#about) → Contact CTA

## 0. Supersession note from Z 08:54 / task-174

Task-172 remains the source for the improved JA Home copy, especially Hero, Services, Process, working principles, and Contact CTA. It is **not** stale, but the implementation target changed in these areas:

1. The task-172 Home assetization section is no longer a Home section. Its content moves to the AI Workflow detail page with title `属人のノウハウを、組織の資産に。`.
2. Home now includes a concise `Projects` section between `Services(#services)` and `Process`.
3. Home Projects cards are exactly `Japan Life Navi`, `Rigel`, and `Carina`, each linking to `/[lang]/projects/{slug}` after Coder resolves exact slugs from `data/projects` / current routes.
4. Home About company snapshot rows are now exactly:
   - `Company` — `Nebula Infinity（ネビュラインフィニティ）`
   - `Location` — `Japan`
5. Home About no longer carries the three extra snapshot rows from task-172; the snapshot is limited to Company and Location only.

Use `design/visual/home.md` and `design/visual/ai-workflow.md` as the canonical implementation specs after task-174.

## 1. Recovered source requirements from 2026-05-04 15:00-22:00 JST

### 1.1 Overall direction

- Z judged the visible page copy as still far from acceptable: `文案还远远不行`.
- Visual direction and layout were broadly acceptable; the primary gap was the page copy.
- The copy must be customer-presentable Japanese: sharper, less generic, sales-capable, and implementation-oriented.
- Home is the most important surface. In the new IA, Services and About are Home anchors, not standalone overview pages.
- The V1 service taxonomy must stay exactly three official service lines:
  1. `AI Workflow Design & Development`
  2. `AI Application Design & Development`
  3. `Web3.0 / Blockchain Application Design & Development`

### 1.2 Hero requirements

- Use Z-selected Hero option A, not option B.
- JA title: `「AI」を、現場の「即戦力」へ。`
- Supporting copy direction:
  - Eyebrow: `AI社会実装のパートナー`
  - Body: `Nebula Infinityは、属人化した業務ノウハウを整理し、AIワークフロー、AIアプリケーション、Web3.0基盤として実装するパートナーです。技術導入を目的化せず、現場で使われる仕組みとして具体化します。`
  - Primary CTA: `まずは要件を整理する`
  - Secondary CTA: `サービスを見る`
- Because the current IA uses Home anchors, the secondary CTA target must be `/[lang]/#services`.

### 1.3 AI Workflow correction

- AI Workflow must not be limited to Nebula/OpenClaw planning or development workflow.
- The definition is broader: any repeatable business process in a company can be transformed into an AI workflow and owned asset.
- Nebula's strategist → PM → milestone development workflow is only an example/proof, not the service definition.
- Core concept: `人に依存していた業務プロセスを、AI workflow として会社の資産に変える`.
- Final Home service-card wording uses:
  - `属人業務を、再現できるワークフローへ`
  - `判断基準や手順を整理し、AIと人が協働できる業務プロセスとして設計・実装します。`
  - Fit bullets for偏り, judgment-based repeat work, and connection with existing operations/tools.
  - Compact proof only: `企画整理、開発プロセス、リサーチ業務など、判断と手順が繰り返される業務のワークフロー化`.
- Task-174 adjustment: full assetization logic now belongs to `design/visual/ai-workflow.md`, not Home.

### 1.4 Web3 correction

- Web3 must not be framed crypto/speculation-first.
- Web3 is tamper-resistant business trust infrastructure.
- Explicit domains from the discussion: points, CRM, reviews, contracts, traceability.
- Final Home wording uses:
  - `改ざんされにくい記録を、事業の信頼基盤へ`
  - `ポイント、CRM、レビュー、契約、トレーサビリティなど、信頼が価値になる領域にWeb3.0を実装します。`

### 1.5 Process correction

Z explicitly corrected the visible Process step labels. The labels must be exactly:

1. `プロセス整理`
2. `実装方針設計`
3. `検証・最適化`
4. `運用・普及`

Old labels such as `課題を整理する`, `小さく検証する`, `MVP・実装を進める`, or `定着と改善を支援する` must not be used as the visible step labels.

### 1.6 Proof / Projects correction

- Old Home Proof requested title/subtitle:
  - `Nebula Infinityの実装力`
  - `一部の実装例(プロジェクト)を公開します。`
- Task-172 removed standalone Home Proof. Task-174 keeps that removal, but adds a new Z-requested concise Home Projects routing section.
- The new Projects section is **not** the old proof grid. It contains exactly three concise cards:
  - `Japan Life Navi` — AI Application proof
  - `Rigel` — AI Application proof
  - `Carina` — Web3.0 / Blockchain proof
- Each card links to `/[lang]/projects/{slug}` after exact slug resolution from `data/projects` / current routes.

### 1.7 About and final CTA

- About must remain compact: company identity + working principles only.
- About must not include Focus/service-domain summaries or representative products.
- About must not list Japan Life Navi / Rigel / Carina.
- Task-174 adjusted the company snapshot to exactly `Company` and `Location` rows.
- Working principles to preserve:
  - `Business Logic First` — `技術を選ぶ前に、現場の判断、制約、事業要件を整理します。`
  - `Asset-minded Delivery` — `その場限りの自動化ではなく、引き継げる運用資産として残します。`
  - `Business-ready Implementation` — `AIもWeb3.0も、実務で使われる形まで設計・実装します。`
- Final Contact CTA must use exactly:
  - Title: `明確な要件がなくても、ご相談頂けます。`
  - Support: `アイデア/要件を頂き、最短24時間以内に動くデモをお見せできます。`
  - CTA: `お問い合わせ`

## 2. Mapping from task-172 copy to task-174 implementation specs

| Current implementation surface | Source content used | Task-174 mapping decision |
|---|---|---|
| Home Hero | Z-selected option A from the 18:04 review draft and full copy sheet | Kept option A title, positioning eyebrow/body, primary CTA, and secondary CTA. Secondary CTA target is the Home `#services` anchor. |
| AI Workflow detail assetization panel | Old Home Transformation / assetization section | Moved out of Home and into `design/visual/ai-workflow.md` with Current state → System design → Business outcome logic. |
| Home Services `#services` | Old Home services section + compressed Services index decision guide/cards | Mapped into one compact Home anchor with choice guide, exactly three service cards, fit bullets, compact proof lines, and detail CTAs. No full Services index clone. |
| Home Projects | Z 08:54 adjustment + Projects index taxonomy | New concise Home section between Services and Process. Exactly Japan Life Navi, Rigel, Carina. |
| Home Process | Old Home process section + Z 21:51 correction | Rewrote step labels exactly as corrected and kept body copy around process organization, implementation direction, validation/optimization, and rollout/adoption. |
| Home About `#about` | Old Trust / How we work copy + compact company identity from Home-led IA proposal | Kept compact company identity and three working principles only; snapshot rows adjusted to Company and Location only. |
| Home Contact CTA | Z 21:51 correction | Replaced old low-friction CTA/support copy with Z's exact title, support, and CTA. |

## 3. Final JA copy by current Home section

### 3.1 Hero

| Element | JA copy |
|---|---|
| Eyebrow | `AI社会実装のパートナー` |
| Title | `「AI」を、現場の「即戦力」へ。` |
| Body | `Nebula Infinityは、属人化した業務ノウハウを整理し、AIワークフロー、AIアプリケーション、Web3.0基盤として実装するパートナーです。技術導入を目的化せず、現場で使われる仕組みとして具体化します。` |
| Primary CTA | `まずは要件を整理する` |
| Secondary CTA | `サービスを見る` → `/[lang]/#services` |

Value panels:

| Panel | Title | Body |
|---|---|---|
| 1 | `属人業務を、資産に` | `担当者ごとに閉じた判断基準や手順を整理し、組織で引き継げる仕組みに変えます。` |
| 2 | `構想から実装まで` | `要件整理、設計、試作、実装、運用設計まで、一つの流れとして伴走します。` |
| 3 | `AIとWeb3.0を事業へ` | `AIの活用と、改ざんされにくい記録基盤を、事業要件に合わせて設計します。` |

### 3.2 Services `#services`

| Element | JA copy |
|---|---|
| Eyebrow | `Services` |
| Title | `3つの実装ラインで、構想を事業に落とし込む` |
| Subtitle | `業務フローの資産化、AIアプリケーション開発、Web3.0 / Blockchain活用まで。Nebula Infinityは、目的に合わせて必要な実装ラインを設計します。` |

Choice guide:

| If | Start with |
|---|---|
| `業務の属人化や運用のばらつきが課題なら` | `AI Workflow Design & Development` |
| `使われるAIプロダクトや業務ツールを作りたいなら` | `AI Application Design & Development` |
| `履歴、評価、契約、会員基盤などの信頼性を価値にしたいなら` | `Web3.0 / Blockchain Application Design & Development` |

Service cards:

| Official line | Title | Body | Fit bullets | Proof line | CTA |
|---|---|---|---|---|---|
| `AI Workflow Design & Development` | `属人業務を、再現できるワークフローへ` | `判断基準や手順を整理し、AIと人が協働できる業務プロセスとして設計・実装します。` | `社内ノウハウが担当者に偏っている`<br>`判断を伴う反復業務を標準化したい`<br>`既存の業務やツールと接続しながら改善したい` | `代表例：企画整理、開発プロセス、リサーチ業務など、判断と手順が繰り返される業務のワークフロー化` | `AI Workflowを見る` |
| `AI Application Design & Development` | `AIを、使われるプロダクトへ` | `社内ツールから顧客向けサービスまで、AI機能を価値が伝わる体験として組み込みます。` | `AIを活かした新規サービスを作りたい`<br>`既存プロダクトにAI機能を組み込みたい`<br>`業務知識をプロダクト体験に落とし込みたい` | `代表実績：Japan Life Navi / Rigel` | `AI Applicationを見る` |
| `Web3.0 / Blockchain Application Design & Development` | `改ざんされにくい記録を、事業の信頼基盤へ` | `ポイント、CRM、レビュー、契約、トレーサビリティなど、信頼が価値になる領域にWeb3.0を実装します。` | `顧客接点や会員基盤に信頼性を持たせたい`<br>`履歴・評価・合意を改ざんされにくい形で残したい`<br>`既存サービスと接続できるWeb3.0活用を検討したい` | `代表実績：Carina` | `Web3.0 / Blockchainを見る` |

Overlap note:

`入口は分けつつ、実装は分断しません。AI Workflow から AI Application へ進むケースや、AI Application と Web3.0 / Blockchain を組み合わせるケースにも対応します。`

### 3.3 Projects

| Project | Proof purpose | Link target pattern | JA card summary |
|---|---|---|---|
| `Japan Life Navi` | AI Application proof | `/[lang]/projects/{slug}` | `生活情報を分かりやすく案内するAIアプリケーションの実装例。AI機能を、ユーザーが使えるプロダクト体験として成立させた証明として扱います。` |
| `Rigel` | AI Application proof | `/[lang]/projects/{slug}` | `業務や業界要件に合わせてAI機能を組み込むアプリケーション実装例。AIを単体機能ではなく、継続して使われる体験に落とし込む証明として扱います。` |
| `Carina` | Web3.0 / Blockchain proof | `/[lang]/projects/{slug}` | `ポイント、クーポン、会員証をブロックチェーン基盤で扱うCRM。Web3.0を顧客体験と運用に接続する証明として扱います。` |

Coder must resolve exact slugs from `data/projects` / current routes before implementation.

### 3.4 Process

| Element | JA copy |
|---|---|
| Eyebrow | `Process` |
| Title | `整理から実装、運用・普及まで。` |
| Subtitle | `完成した仕様書がなくても構いません。業務の流れを整理し、実装方針を定め、検証しながら現場に広げます。` |

| Step | Title | Body |
|---|---|---|
| 1 | `プロセス整理` | `現場の流れ、判断基準、関係者、制約を確認し、実装すべき対象を整理します。` |
| 2 | `実装方針設計` | `AI、アプリケーション、Web3.0の使い分けと、必要な構成・進め方を設計します。` |
| 3 | `検証・最適化` | `小さく形にして使われ方を確認し、機能・導線・運用条件を調整します。` |
| 4 | `運用・普及` | `引き継ぎ、レビュー、改善の流れを整え、組織で使い続けられる状態にします。` |

### 3.5 About `#about`

| Element | JA copy |
|---|---|
| Eyebrow | `About Nebula Infinity` |
| Title | `AI社会実装のパートナー` |
| Body | `Nebula Infinity は、AI と Web3.0 を机上の構想で終わらせず、現場で使える仕組みとして設計・開発する日本発のチームです。` |

Company snapshot:

| Label | Value |
|---|---|
| `Company` | `Nebula Infinity（ネビュラインフィニティ）` |
| `Location` | `Japan` |

Working principles:

| Principle | Body |
|---|---|
| `Business Logic First` | `技術を選ぶ前に、現場の判断、制約、事業要件を整理します。` |
| `Asset-minded Delivery` | `その場限りの自動化ではなく、引き継げる運用資産として残します。` |
| `Business-ready Implementation` | `AIもWeb3.0も、実務で使われる形まで設計・実装します。` |

### 3.6 Contact CTA

| Element | JA copy |
|---|---|
| Title | `明確な要件がなくても、ご相談頂けます。` |
| Support | `アイデア/要件を頂き、最短24時間以内に動くデモをお見せできます。` |
| CTA | `お問い合わせ` |

## 4. Content now owned by AI Workflow detail

The following task-172 assetization copy has moved from Home to `design/visual/ai-workflow.md`:

| Element | JA copy |
|---|---|
| Title | `属人のノウハウを、組織の資産に。` |
| Subtitle | `AI導入が止まる理由の多くは、技術そのものではなく、判断基準や業務知識が人に閉じていることにあります。Nebula Infinityは、その知見を整理し、AIと人が再現性をもって動ける仕組みに変えていきます。` |

| Column | Bullets |
|---|---|
| `Current state` | `担当者ごとに判断がばらつく`<br>`引き継ぎに時間がかかる`<br>`AIを入れても運用に乗らない` |
| `System design` | `判断基準と手順を可視化する`<br>`AIと人の役割分担を設計する`<br>`レビュー導線と改善ログを残す` |
| `Business outcome` | `再現性のある実務フローになる`<br>`組織で引き継げる資産になる`<br>`継続的に改善できる運用になる` |

## 5. Explicit notes for removed old sections

### 5.1 Old standalone Proof grid

- Do not re-add the old Home Proof section as an implementation target.
- Do not implement a Home section titled `Nebula Infinityの実装力`.
- Do not implement a broad Home proof grid or metrics wall.
- Mapping after task-174: service-card compact proof lines + concise Home Projects routing cards + service detail pages + independent Projects route.

### 5.2 Services representative proof and combined-services sections

- The standalone Services index is not canonical in the Home-led IA.
- Do not copy full Services representative proof cards into Home.
- Do not add a Combined services section as a separate Home section.
- Keep only the compact overlap note inside Services:
  - `入口は分けつつ、実装は分断しません。AI Workflow から AI Application へ進むケースや、AI Application と Web3.0 / Blockchain を組み合わせるケースにも対応します。`

### 5.3 Standalone About / Services

- `/[lang]/services` standalone index copy is not a canonical implementation target.
- `/[lang]/about` standalone page copy is not a canonical implementation target.
- Home `#services` is the service-selection surface.
- Home `#about` is the compact company overview surface.
- Service detail routes remain canonical for deeper reading:
  - `/[lang]/services/ai-workflow`
  - `/[lang]/services/ai-application`
  - `/[lang]/services/web3-blockchain`

## 6. Compliance / claims note

- No new metrics, customer outcomes, testimonials, awards, prices, or competitive claims were invented.
- The only speed-related claim retained is Z's explicit final CTA line: `最短24時間以内に動くデモ`.
- Japan Life Navi, Rigel, and Carina are used as compact representative proof names in service cards and as the three-card Home Projects routing section, not as expanded customer stories.
- Web3 copy is framed as business trust infrastructure and avoids speculation/crypto-first language.

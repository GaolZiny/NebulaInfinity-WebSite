# Home Copy Editing Sheet — 2026-05-05

Purpose: this is the editable source sheet for a full Home page copy rewrite.

Scope:
- Page: `app/[lang]/page.tsx`
- Languages: JA and EN
- Current Home order: `Hero → Services(#services) → Projects → Process → About(#about) → Contact CTA`
- Edit text freely, but keep section intent and route identifiers unless you intentionally want IA/link changes.

Implementation notes for PM/Coder:
- Treat this document as Z's copy source after review.
- Preserve service IDs unless explicitly changed: `ai-workflow`, `ai-application`, `web3-blockchain`.
- Preserve project slugs unless explicitly changed: `gaijin-life-navi`, `rigel`, `carina`.
- If JA and EN diverge, JA is the primary source unless Z says otherwise.
- Metadata currently derives from Hero title/body.

---

## JA — 日本語 Home copy

### 1. Hero

**Eyebrow**
```text
AI社会実装のパートナー
```

**H1 Title**
```text
「AI」を、現場の「即戦力」へ。
```

**Body**
```text
Nebula Infinityは、属人化した業務ノウハウを整理し、AIワークフロー、AIアプリケーション、Web3.0基盤として実装するパートナーです。技術導入を目的化せず、現場で使われる仕組みとして具体化します。
```

**Primary CTA**
```text
まずは要件を整理する
```

**Secondary CTA**
```text
サービスを見る
```

**Service line chips**
```text
AI Workflow Design & Development
AI Application Design & Development
Web3.0 / Blockchain Application Design & Development
```

**Hero value panels**

1. Title
```text
属人業務を、資産に
```
Body
```text
担当者ごとに閉じた判断基準や手順を整理し、組織で引き継げる仕組みに変えます。
```

2. Title
```text
構想から実装まで
```
Body
```text
要件整理、設計、試作、実装、運用設計まで、一つの流れとして伴走します。
```

3. Title
```text
AIとWeb3.0を事業へ
```
Body
```text
AIの活用と、改ざんされにくい記録基盤を、事業要件に合わせて設計します。
```

---

### 2. Services section (`#services`)

**Eyebrow**
```text
Services
```

**Title**
```text
3つの実装ラインで、構想を事業に落とし込む
```

**Subtitle**
```text
業務フローの資産化、AIアプリケーション開発、Web3.0 / Blockchain活用まで。Nebula Infinityは、目的に合わせて必要な実装ラインを設計します。
```

**Choice guide title**
```text
どのラインから始めるべきか
```

**Choice guide rows**

1. Prompt
```text
業務の属人化や運用のばらつきが課題なら
```
Line
```text
AI Workflow Design & Development
```

2. Prompt
```text
使われるAIプロダクトや業務ツールを作りたいなら
```
Line
```text
AI Application Design & Development
```

3. Prompt
```text
履歴、評価、契約、会員基盤などの信頼性を価値にしたいなら
```
Line
```text
Web3.0 / Blockchain Application Design & Development
```

#### Service card: AI Workflow

**Official line**
```text
AI Workflow Design & Development
```

**Title**
```text
属人業務を、再現できるワークフローへ
```

**Body**
```text
判断基準や手順を整理し、AIと人が協働できる業務プロセスとして設計・実装します。
```

**Fit bullets**
```text
社内ノウハウが担当者に偏っている
判断を伴う反復業務を標準化したい
既存の業務やツールと接続しながら改善したい
```

**Proof line**
```text
代表例：企画整理、開発プロセス、リサーチ業務など、判断と手順が繰り返される業務のワークフロー化
```

**CTA**
```text
AI Workflowを見る
```

#### Service card: AI Application

**Official line**
```text
AI Application Design & Development
```

**Title**
```text
AIを、使われるプロダクトへ
```

**Body**
```text
社内ツールから顧客向けサービスまで、AI機能を価値が伝わる体験として組み込みます。
```

**Fit bullets**
```text
AIを活かした新規サービスを作りたい
既存プロダクトにAI機能を組み込みたい
業務知識をプロダクト体験に落とし込みたい
```

**Proof line**
```text
代表実績：Japan Life Navi / Rigel
```

**CTA**
```text
AI Applicationを見る
```

#### Service card: Web3.0 / Blockchain

**Official line**
```text
Web3.0 / Blockchain Application Design & Development
```

**Title**
```text
改ざんされにくい記録を、事業の信頼基盤へ
```

**Body**
```text
ポイント、CRM、レビュー、契約、トレーサビリティなど、信頼が価値になる領域にWeb3.0を実装します。
```

**Fit bullets**
```text
顧客接点や会員基盤に信頼性を持たせたい
履歴・評価・合意を改ざんされにくい形で残したい
既存サービスと接続できるWeb3.0活用を検討したい
```

**Proof line**
```text
代表実績：Carina
```

**CTA**
```text
Web3.0 / Blockchainを見る
```

**Overlap note**
```text
入口は分けつつ、実装は分断しません。AI Workflow から AI Application へ進むケースや、AI Application と Web3.0 / Blockchain を組み合わせるケースにも対応します。
```

---

### 3. Projects section

**Eyebrow**
```text
Projects
```

**Title**
```text
プロジェクト
```

**Subtitle**
```text
一部の実装例(プロジェクト)を公開します。サービス領域ごとの詳細は、各プロジェクトページで確認できます。
```

#### Project card: Japan Life Navi

**Category**
```text
AI Application
```

**Name**
```text
Japan Life Navi
```

**Summary**
```text
生活情報を分かりやすく案内するAIアプリケーションの実装例。AI機能を、ユーザーが使えるプロダクト体験として成立させた証明として扱います。
```

**CTA**
```text
Japan Life Navi 詳細
```

**Slug / link target — do not edit unless route should change**
```text
gaijin-life-navi
```

#### Project card: Rigel

**Category**
```text
AI Application
```

**Name**
```text
Rigel
```

**Summary**
```text
業務や業界要件に合わせてAI機能を組み込むアプリケーション実装例。AIを単体機能ではなく、継続して使われる体験に落とし込む証明として扱います。
```

**CTA**
```text
Rigel 詳細
```

**Slug / link target — do not edit unless route should change**
```text
rigel
```

#### Project card: Carina

**Category**
```text
Web3.0 / Blockchain
```

**Name**
```text
Carina
```

**Summary**
```text
ポイント、クーポン、会員証をブロックチェーン基盤で扱うCRM。Web3.0を顧客体験と運用に接続する証明として扱います。
```

**CTA**
```text
Carina 詳細
```

**Slug / link target — do not edit unless route should change**
```text
carina
```

---

### 4. Process section

**Eyebrow**
```text
Process
```

**Title**
```text
整理から実装、運用・普及まで。
```

**Subtitle**
```text
完成した仕様書がなくても構いません。業務の流れを整理し、実装方針を定め、検証しながら現場に広げます。
```

**Steps**

1. Title
```text
プロセス整理
```
Body
```text
現場の流れ、判断基準、関係者、制約を確認し、実装すべき対象を整理します。
```

2. Title
```text
実装方針設計
```
Body
```text
AI、アプリケーション、Web3.0の使い分けと、必要な構成・進め方を設計します。
```

3. Title
```text
検証・最適化
```
Body
```text
小さく形にして使われ方を確認し、機能・導線・運用条件を調整します。
```

4. Title
```text
運用・普及
```
Body
```text
引き継ぎ、レビュー、改善の流れを整え、組織で使い続けられる状態にします。
```

---

### 5. About section (`#about`)

**Eyebrow**
```text
About Nebula Infinity
```

**Title**
```text
AI社会実装のパートナー
```

**Body**
```text
Nebula Infinity は、AI と Web3.0 を机上の構想で終わらせず、現場で使える仕組みとして設計・開発する日本発のチームです。
```

**Company snapshot**

Label / value
```text
Company: Nebula Infinity（ネビュラインフィニティ）
Location: Japan
```

**Working principles**

1. Title
```text
Business Logic First
```
Body
```text
技術を選ぶ前に、現場の判断、制約、事業要件を整理します。
```

2. Title
```text
Asset-minded Delivery
```
Body
```text
その場限りの自動化ではなく、引き継げる運用資産として残します。
```

3. Title
```text
Business-ready Implementation
```
Body
```text
AIもWeb3.0も、実務で使われる形まで設計・実装します。
```

---

### 6. Final CTA section

**Title**
```text
明確な要件がなくても、ご相談頂けます。
```

**Body**
```text
アイデア/要件を頂き、最短24時間以内に動くデモをお見せできます。
```

**CTA**
```text
お問い合わせ
```

---

## EN — English Home copy

### 1. Hero

**Eyebrow**
```text
AI Social Implementation Partner
```

**H1 Title**
```text
Turn AI into front-line capability
```

**Body**
```text
Nebula Infinity organizes people-dependent operational know-how and implements it as AI workflows, AI applications, and Web3.0 infrastructure. We do not treat technology adoption as the goal; we turn it into systems used in real operations.
```

**Primary CTA**
```text
Clarify requirements first
```

**Secondary CTA**
```text
View Services
```

**Service line chips**
```text
AI Workflow Design & Development
AI Application Design & Development
Web3.0 / Blockchain Application Design & Development
```

**Hero value panels**

1. Title
```text
Turn dependent work into assets
```
Body
```text
We structure individual decision rules and procedures into systems the organization can inherit.
```

2. Title
```text
From concept to implementation
```
Body
```text
We support requirements, design, prototyping, implementation, and operating design as one flow.
```

3. Title
```text
AI and Web3.0 for business
```
Body
```text
We design AI use and tamper-resistant record infrastructure around business requirements.
```

---

### 2. Services section (`#services`)

**Eyebrow**
```text
Services
```

**Title**
```text
Three implementation lines, one business partner
```

**Subtitle**
```text
From workflow assetization to AI application development and Web3.0 / blockchain use, Nebula Infinity designs the implementation line your business goal requires.
```

**Choice guide title**
```text
Where to start
```

**Choice guide rows**

1. Prompt
```text
If people-dependence or inconsistent operation is the issue
```
Line
```text
AI Workflow Design & Development
```

2. Prompt
```text
If you need an AI product or operational tool people will actually use
```
Line
```text
AI Application Design & Development
```

3. Prompt
```text
If history, evaluation, contracts, or membership trust should become business value
```
Line
```text
Web3.0 / Blockchain Application Design & Development
```

#### Service card: AI Workflow

**Official line**
```text
AI Workflow Design & Development
```

**Title**
```text
Turn people-dependent work into repeatable workflows
```

**Body**
```text
We organize decision criteria and procedures, then design and implement business processes where AI and people can work together.
```

**Fit bullets**
```text
Internal know-how is concentrated in specific people
You want to standardize repeat work that involves judgment
You need improvement while connecting to existing operations and tools
```

**Proof line**
```text
Examples: workflowization of repeated judgment and procedure, including planning, development processes, and research work
```

**CTA**
```text
View AI Workflow
```

#### Service card: AI Application

**Official line**
```text
AI Application Design & Development
```

**Title**
```text
Turn AI into products people actually use
```

**Body**
```text
From internal tools to customer-facing services, we embed AI capability as an experience whose value is clear to users.
```

**Fit bullets**
```text
You want to build a new service that uses AI meaningfully
You want to add AI capability to an existing product
You want operational knowledge to become product experience
```

**Proof line**
```text
Representative proof: Japan Life Navi / Rigel
```

**CTA**
```text
View AI Application
```

#### Service card: Web3.0 / Blockchain

**Official line**
```text
Web3.0 / Blockchain Application Design & Development
```

**Title**
```text
Turn tamper-resistant records into business trust infrastructure
```

**Body**
```text
We implement Web3.0 in areas where trust creates value, including points, CRM, reviews, contracts, and traceability.
```

**Fit bullets**
```text
Customer touchpoints or membership systems need a stronger trust layer
History, evaluation, and agreement records should be hard to tamper with
You are exploring Web3.0 use that connects with an existing service
```

**Proof line**
```text
Representative proof: Carina
```

**CTA**
```text
View Web3.0 / Blockchain
```

**Overlap note**
```text
We separate the entry point, not the implementation. Work can begin with AI Workflow and expand into AI Application, or combine AI Application with Web3.0 / blockchain when the business problem requires it.
```

---

### 3. Projects section

**Eyebrow**
```text
Projects
```

**Title**
```text
Projects
```

**Subtitle**
```text
A focused set of public implementation examples. Each card routes to the relevant project detail page.
```

#### Project card: Japan Life Navi

**Category**
```text
AI Application
```

**Name**
```text
Japan Life Navi
```

**Summary**
```text
An AI application proof showing how AI capability becomes a usable product experience for navigating life information.
```

**CTA**
```text
View Japan Life Navi
```

**Slug / link target — do not edit unless route should change**
```text
gaijin-life-navi
```

#### Project card: Rigel

**Category**
```text
AI Application
```

**Name**
```text
Rigel
```

**Summary**
```text
An AI application proof showing AI embedded into a product experience shaped around operational and industry requirements.
```

**CTA**
```text
View Rigel
```

**Slug / link target — do not edit unless route should change**
```text
rigel
```

#### Project card: Carina

**Category**
```text
Web3.0 / Blockchain
```

**Name**
```text
Carina
```

**Summary**
```text
A CRM proof using blockchain infrastructure for points, coupons, and membership, connecting Web3.0 to customer experience and operations.
```

**CTA**
```text
View Carina
```

**Slug / link target — do not edit unless route should change**
```text
carina
```

---

### 4. Process section

**Eyebrow**
```text
Process
```

**Title**
```text
From process organization to implementation, operation, and adoption
```

**Subtitle**
```text
You do not need a finished specification. We organize the business flow, define the implementation direction, validate the approach, and help it spread into operations.
```

**Steps**

1. Title
```text
Process organization
```
Body
```text
Clarify the operational flow, decision criteria, stakeholders, and constraints.
```

2. Title
```text
Implementation direction design
```
Body
```text
Define how AI, applications, and Web3.0 should be used and how the work should proceed.
```

3. Title
```text
Validation and optimization
```
Body
```text
Shape the smallest useful version, observe use, and adjust functions, flows, and operating conditions.
```

4. Title
```text
Operation and adoption
```
Body
```text
Prepare handoff, review, and improvement loops so the organization can keep using the system.
```

---

### 5. About section (`#about`)

**Eyebrow**
```text
About Nebula Infinity
```

**Title**
```text
An implementation partner for AI in real business
```

**Body**
```text
Nebula Infinity is a Japan-based team that does not leave AI and Web3.0 as strategy alone. We design and build them as systems that can operate in real business.
```

**Company snapshot**

Label / value
```text
Company: Nebula Infinity
Location: Japan
```

**Working principles**

1. Title
```text
Business Logic First
```
Body
```text
Before choosing technology, we organize on-site judgment, constraints, and business requirements.
```

2. Title
```text
Asset-minded Delivery
```
Body
```text
We do not leave behind one-off automation; we leave operating assets the organization can inherit.
```

3. Title
```text
Business-ready Implementation
```
Body
```text
We design and implement AI and Web3.0 in forms that are used in real work.
```

---

### 6. Final CTA section

**Title**
```text
You can reach out even before requirements are clear.
```

**Body**
```text
Share an idea or requirements, and we can show a working demo in as little as 24 hours.
```

**CTA**
```text
Contact Us
```

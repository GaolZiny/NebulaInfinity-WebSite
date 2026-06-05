# Designer Handoff — AI Workflow Copy Realignment [task-206]

**Status:** Coder-ready copy/content handoff
**Scope:** documentation only; no implementation source edits
**Japanese baseline:** Yes
**Allowed next implementation target:** task-207 / Coder
**Task-206 iter1 refresh:** verified as documentation-only; implementation source remains read-only
**Routes unchanged:** `/[lang]/services/ai-workflow`, `/[lang]/services/ai-workflow/ai-dev-flow`, `/[lang]/projects/astra`

## 1. Problem diagnosis — Z differences resolved

1. **`ai-dev-flow` factual content is useful, but the frame is wrong.**
   Current framing can read as if Nebula Infinity will package and build this exact AI-native product delivery workflow for every customer. The corrected frame: this page is Nebula Infinity's own complex business/delivery workflow proof. It proves that long-running, multi-step operations with role separation, review gates, evidence, and improvement loops can be implemented as AI Workflow. For clients, the reusable promise is not “we install this same workflow,” but “we can design and implement similarly complex workflows around your business operations.”

2. **AI Workflow parent card `Agentic AI 開発ワークフロー` needs Z-sheet alignment.**
   The card should read as a representative proof of multi-agent development/business delivery workflow: role design, review gates, and self-improvement. It should link to the service sub-detail route only: `/[lang]/services/ai-workflow/ai-dev-flow`.

3. **`Astra PMワークフロー` must be one of the three parent AI Workflow examples.**
   Astra is AI Workflow / PMO / project-management workflow proof, not AI-Driven Development proof. Its CTA must link to `/[lang]/projects/astra`.

4. **`プロダクトリサーチワークフロー` needs the stronger Z-edited business-operations frame.**
   Copy must explicitly include autonomous market / competitor / internal-information collection, proprietary know-how based analysis and summarization, human decision-making, and downstream business-system linkage. No detail route should be introduced unless PM/Z later approve one.

## 2. AI Workflow parent page — final JA target examples

Implementation target: AI Workflow detail page representative examples section in `app/[lang]/services/[serviceId]/page.tsx` (or extracted content module if Coder refactors without changing routes).

Section note JA:
```text
これらは代表例であり、AI Workflow の提供範囲を限定するものではありません。開発、PMO、リサーチのように、判断・手順・レビュー・連携が複雑な業務を、各社の状況に合わせて AI Workflow として設計・実装できます。
```

### Example 1 — service sub-detail route

```text
Title: Agentic AI 開発ワークフロー
Body: Nebula Infinity 自社のビジネス構想、要件定義、設計、実装、検証の一連の開発フローを、複数の AI エージェントと人のレビューゲートで運用するワークフロー proof です。長期・多段階の業務を AI Workflow として実装し、定期的な振り返りと改善提案により自己進化する仕組みを持たせています。
Proof: 役割設計 / レビューゲート / 自己進化
CTA: 開発ワークフロー詳細
Link: /[lang]/services/ai-workflow/ai-dev-flow
```

### Example 2 — Astra detail route

```text
Title: Astra PMワークフロー
Body: プロジェクト内で分散しやすい情報を AI エージェントが一元管理し、進捗、課題、リスク、リソースなどの PM 管理作業を AI ワークフローとして自律的に支援します。進捗報告、課題・リスク分析、リソース一覧などの資料を即時生成し、低コストで効率的なプロジェクト運営を可能にします。
Proof: PM業務 / 情報整理 / 自律作業
CTA: Astra 詳細
Link: /[lang]/projects/astra
```

### Example 3 — no detail route

```text
Title: プロダクトリサーチワークフロー
Body: 売れ筋商品発掘のため、AI エージェントがリアルタイムの市場情報収集、競合分析、自社情報集約、独自ノウハウに基づく傾向分析・要約を自律的に行うワークフローです。人がアウトプットをもとに意思決定を行い、その結果を後続の業務システムへ連携します。
Proof: 情報収集・分析 / 独自ノウハウ / 他システム連携
CTA: この類型を相談する
Link: /[lang]/contact?inquiry=AI%20Workflow%20Design%20%26%20Development
Route note: no active detail route; do not add `/projects/product-research` or a service sub-detail unless PM/Z approve later.
```

## 3. `ai-dev-flow` page — final JA target copy for sections needing reframing

Implementation target: `data/service-subdetails/aiDevFlow.ts` copy. Page component/layout can stay unless Coder needs a small label or card-count adjustment.

### Metadata [target-task-207]

```text
Title: Agentic AI 開発ワークフロー - Nebula Infinity
Description: Nebula Infinity が自社の企画・設計・開発・検証・受け入れ業務を AI Workflow として実装した proof です。複雑な業務を、AI Agent と人のレビューゲートで運用できる形へ設計する考え方を紹介します。
```

### Breadcrumb current item [target-task-207]

```text
Agentic AI 開発ワークフロー
```

### Hero [target-task-207]

```text
Eyebrow: AI Workflow Proof
H1: 複雑な事業運営を、AIワークフローとして実装する
Lead: このページは、Nebula Infinity が自社の市場機会整理、プロダクト企画、UX/IA、技術設計、実装、QA、Milestone Acceptance までの業務を AI Workflow として実装した proof です。当社固有の開発ワークフローをそのまま顧客に納品するという意味ではありません。長期・多段階・複数役割の業務でも、判断、成果物、レビューゲート、改善ログを設計すれば、AI と人が協働して運用できるワークフローにできることを示しています。
Chips: Nebula internal proof / Multi-step operations / Human review gates
Primary CTA: 自社の複雑業務を相談する
Secondary CTA: AI Workflow に戻る
```

Hero support panel:
```text
Panel title: Nebula internal proof → Client workflow design
1. 自社業務を対象にする — 企画、設計、実装、QA、受け入れまでの実運用を AI Workflow 化する
2. 判断と証跡を残す — 役割、レビュー、受け入れ条件、改善ログをプロセスに組み込む
3. 顧客業務へ応用する — 同じ設計思想で、各社固有の複雑な業務ワークフローを設計・実装する
```

### Premise section [target-task-207]

```text
Title: 証明したいのは、開発手順そのものではなく、複雑業務を実装できること
Subtitle: AI Workflow の価値は、特定の作業を速くするだけではありません。複数の役割、長い工程、判断の分岐、レビュー、証跡、次工程への引き渡しが必要な業務を、AI と人が協働できる運用プロセスとして形にすることです。
```

Cards:
```text
長期・多段階の業務を扱える
市場調査、企画、設計、実装、検証、受け入れのように、工程が長く依存関係が多い業務でも、段階と成果物を分けて設計できます。

役割分担とレビューを組み込める
AI Agent に任せる作業、人が判断する作業、レビューすべき地点を分けることで、速度と品質を同時に管理できます。

各社固有の業務へ応用できる
このページの流れは Nebula Infinity 自社の proof です。顧客向けには、PMO、リサーチ、審査、運用、社内管理など、各社の業務に合わせて再設計します。
```

### Workflow map intro [target-task-207]

Keep the existing six stage cards unless Z requests deeper edits. Change the section intro to:

```text
Eyebrow: Workflow proof
Title: Nebula Infinity 自社ワークフローの実装例
Subtitle: 以下は、当社が自社の事業・開発業務に実装している AI Workflow の一例です。重要なのは順番を固定することではなく、判断、成果物、レビュー、受け入れ条件、改善点を次の工程へ渡せる形で残すことです。顧客プロジェクトでは、同じ設計思想を使い、対象業務に合わせて段階・役割・ゲートを組み替えます。
```

### Roles / gates [target-task-207]

Existing role cards and quality gate rows can remain, but add/keep this meaning in surrounding copy:

```text
Role note: 役割名は Nebula Infinity の自社ワークフロー上の例です。顧客業務では、営業、PMO、審査、CS、バックオフィスなど、対象業務に合わせた役割へ置き換えて設計します。
Gate note: ゲートは開発専用ではなく、業務上の判断・承認・例外処理・引き渡しにも適用できます。
```

### Deliverables intro [target-task-207]

Keep the current deliverable card list if layout cost matters. Replace the title/subtitle with:

```text
Title: 複雑業務を、引き継げる運用資産として残す
Subtitle: 成果物は、Nebula Infinity 自社ワークフローで使っている実装証跡の例です。顧客向けには、対象業務に応じて調査結果、判断基準、レビュー記録、連携仕様、改善ログなどを残し、担当者に閉じない運用資産へ変えていきます。
```

### Suitable use cases [target-task-207]

Replace the current product-development-only use-case set with:

```text
Title: この proof から相談しやすい複雑業務
Subtitle: 開発ワークフローそのものを導入したい場合だけでなく、長期・多段階・判断分岐の多い業務を AI Workflow 化したい相談に向いています。

商品・市場リサーチ
市場、競合、自社データ、独自ノウハウを集め、意思決定と後続システム連携までつなげたい。

PMO・プロジェクト管理
進捗、課題、リスク、リソース、意思決定ログを整理し、プロジェクト運営を継続改善したい。

審査・レビュー・承認業務
判断基準、例外処理、レビュー証跡を残しながら、属人化しやすい確認業務を整えたい。

複数システムをまたぐ業務運用
人の判断、AI の処理、既存ツールやデータ連携を一つの業務フローとしてつなげたい。
```

### CTA band [target-task-207]

```text
Title: 自社固有の複雑業務を、AI Workflow として設計できます
Body: このページの開発ワークフローは、Nebula Infinity 自社の proof です。同じものをそのまま導入するのではなく、貴社の業務、判断基準、レビュー導線、既存システムに合わせて、再現可能な AI Workflow を一緒に設計します。
Primary CTA: 自社の複雑業務を相談する
Secondary CTA: AI Workflow に戻る
Tertiary link: サービス選択に戻る
```

## 4. Aligned EN copy / guidance

### Parent examples — EN target

```text
Section note:
These are representative examples only; they do not define the boundary of the AI Workflow service. The same approach can be applied to business operations with complex decisions, procedures, reviews, and handoffs.

Agentic AI development workflow
A workflow proof from Nebula Infinity's own business and development operations, covering concept framing, requirements, design, implementation, and verification with multiple AI agents and human review gates. It shows how long-running, multi-step work can be implemented as AI Workflow with role design, review gates, and self-improvement loops.
Proof: Role design / Review gates / Self-improvement
CTA: Development workflow details
Link: /[lang]/services/ai-workflow/ai-dev-flow

Astra PM workflow
A PMO workflow that uses AI agents to organize information scattered across a project, including progress, issues, risks, and resources. It supports immediate generation of progress reports, issue/risk analysis, and resource views so project operations can run with lower cost and higher efficiency.
Proof: PM work / Information organization / Autonomous support
CTA: View Astra
Link: /[lang]/projects/astra

Product research workflow
A workflow where AI agents autonomously collect real-time market information, analyze competitors, gather internal information, and summarize trends through proprietary know-how. Humans make decisions from the outputs, and the results connect into downstream business systems.
Proof: Collection and analysis / Proprietary know-how / Business-system linkage
CTA: Discuss this workflow type
Link: /[lang]/contact?inquiry=AI%20Workflow%20Design%20%26%20Development
```

### `ai-dev-flow` EN target frame

```text
Eyebrow: AI Workflow Proof
H1: Implement complex business operations as AI workflows
Lead: This page is proof of how Nebula Infinity implemented its own market opportunity, product planning, UX/IA, architecture, implementation, QA, and milestone acceptance operations as AI Workflow. It does not mean that Nebula Infinity installs this exact development workflow for every client. It demonstrates that long-running, multi-step operations with multiple roles can become AI-and-human workflows when decisions, artifacts, review gates, and improvement logs are designed into the process.
Primary CTA: Discuss your complex workflow
Secondary CTA: Back to AI Workflow
```

EN implementation rule: mirror the Japanese meaning, even if sentences are shortened for readability. Do not revert to “generic product delivery methodology” language that hides the “Nebula internal proof → client-specific workflow design” distinction.

### `ai-dev-flow` EN section-by-section semantic target

Use these as the English implementation baseline where the data object needs full visible-section copy.

```text
Metadata title: Agentic AI development workflow - Nebula Infinity
Metadata description: Proof that Nebula Infinity implemented its own planning, design, development, verification, and acceptance operations as an AI Workflow. The page explains how complex work can be designed so AI agents and human review gates can operate it.

Hero eyebrow: AI Workflow Proof
Hero H1: Implement complex business operations as AI workflows
Hero lead: This page is proof of how Nebula Infinity implemented its own market opportunity, product planning, UX/IA, architecture, implementation, QA, and milestone acceptance operations as AI Workflow. It does not mean that Nebula Infinity installs this exact development workflow for every client. It demonstrates that long-running, multi-step operations with multiple roles can become AI-and-human workflows when decisions, artifacts, review gates, and improvement logs are designed into the process.
Hero chips: Nebula internal proof / Multi-step operations / Human review gates
Primary CTA: Discuss your complex workflow
Secondary CTA: Back to AI Workflow

Hero panel title: Nebula internal proof → Client workflow design
Panel rows: Target Nebula's own work / Preserve decisions and evidence / Apply the design to customer operations

Premise title: The proof is not the development procedure itself; it is that complex work can be implemented
Premise subtitle: AI Workflow is not only about making one task faster. It is about turning work with multiple roles, long processes, decision branches, reviews, evidence, and handoffs into an operating process where AI and people collaborate.
Premise cards: Handle long-running multi-step work / Build in role separation and reviews / Apply the approach to each company's own operations

Workflow proof title: Example implementation of Nebula Infinity's own workflow
Workflow proof subtitle: The flow below is one example of AI Workflow implemented in Nebula Infinity's own business and development operations. The important point is not freezing this order; it is preserving decisions, artifacts, reviews, acceptance criteria, and improvements so they can move into the next phase. Customer projects should reuse the design principle while changing stages, roles, and gates around the target operation.
Stage titles: Design the market lens / Screen and validate opportunities / Translate into product planning / Align UX/IA and architecture / Orchestrate execution through PM / Accept the milestone and connect to the next iteration

Role note: The role names are examples from Nebula Infinity's own workflow. For customer operations, replace them with roles such as sales, PMO, review, customer support, back office, or other business-specific roles.
Gate note: Gates are not development-only. They can also apply to business judgment, approval, exception handling, and handoff.

Deliverables title: Leave complex operations as transferable operating assets
Deliverables subtitle: The artifacts shown are examples of evidence used in Nebula Infinity's own workflow. For customers, deliverables should preserve research results, decision criteria, review records, integration specifications, and improvement logs according to the target operation.

Use cases title: Complex operations that can start from this proof
Use cases subtitle: The page is useful not only when a client wants a development workflow, but when long-running, multi-step, decision-heavy work should become AI Workflow.
Use case cards: Product and market research / PMO and project management / Screening, review, and approval work / Operations spanning multiple systems

CTA title: Design your own complex business operation as an AI Workflow
CTA body: The development workflow on this page is Nebula Infinity's internal proof. Instead of introducing the same workflow unchanged, we design a repeatable AI Workflow around your work, decision criteria, review paths, and existing systems.
```

## 5. Exact Coder instructions

### Files likely to edit

- `app/[lang]/services/[serviceId]/page.tsx`
  - Update AI Workflow representative examples to exactly three target examples.
  - Add Astra link as `/[lang]/projects/astra`.
  - Keep Product research as no-detail-route/contact CTA unless PM/Z approve a route.
- `data/service-subdetails/aiDevFlow.ts`
  - Reframe JA/EN metadata, hero, premise, workflow intro, deliverables intro, use cases, and CTA as above.
- `app/[lang]/services/ai-workflow/ai-dev-flow/page.tsx`
  - Edit only if needed to support labels/notes from the data object; keep route and static export behavior unchanged.
- Do **not** edit implementation source in this Designer task. These are downstream Coder instructions only.

### Explicit non-scope / forbidden implementation changes

For the next Coder task, keep the change as copy/content alignment only:

- Do not modify or overwrite Z-owned sheets:
  - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/home-copy-editing-sheet-2026-05-05.md`
  - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/non-home-copy-editing-sheet-2026-05-06.md`
- Do not touch unrelated docs/evidence:
  - `docs/nebulainfinity-design-consultation.md`
  - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/tester-ai-dev-flow-task-205.md`
  - `artifacts/epics/website-redesign/features/v1-positioning-rebuild/screenshots/task-205-ai-dev-flow/`
- Do not create `/[lang]/projects/ai-dev-flow`, revive `/[lang]/projects`, add a product-research detail route, or add compatibility routes.
- Preserve static export: no SSR, middleware, redirects, server-only fetches, or runtime-dependent route generation.
- Preserve the existing neutral Service-page design tone; no palette, component, layout, or visual-style changes are requested.
- Do not reintroduce Web3/Carina active copy or categorize Astra as AI-Driven Development proof.

### Acceptance criteria for task-207

1. AI Workflow parent page shows exactly three representative examples in this order:
   1. `Agentic AI 開発ワークフロー` → `/[lang]/services/ai-workflow/ai-dev-flow`
   2. `Astra PMワークフロー` → `/[lang]/projects/astra`
   3. `プロダクトリサーチワークフロー` → contact CTA or no detail CTA; no new detail route
2. Parent page note states examples do not define the full service boundary.
3. `ai-dev-flow` page clearly states it is Nebula Infinity's own workflow proof, not a promise to build the identical workflow for every customer.
4. `ai-dev-flow` reusable claim is: similarly complex client business workflows can be designed and implemented as AI Workflow.
5. No `/[lang]/projects/ai-dev-flow`, no Projects index revival, no new Product research route.
6. Astra remains AI Workflow / PMO proof in public copy and links to `/[lang]/projects/astra`.
7. EN pages preserve the same route model, proof set, and semantics as JA.
8. Static export constraints remain; no middleware, SSR-only behavior, or server redirects.

### Phrases / implications to avoid

- “Nebula Infinity will build this exact AI-native product delivery workflow for every client.”
- “This development workflow is the AI Workflow service definition.”
- “AI agents autonomously complete the full workflow without human review.”
- “Astra is AI-Driven Development proof.”
- “`ai-dev-flow` is a project detail.”
- “Add `/projects/ai-dev-flow`.”
- Universal `24h` delivery guarantees.
- Legal/tax/compliance guarantee wording such as `完全準拠` or `税務リスクを排除` unless separately reviewed.

## 6. Risks / TBDs

- Product research currently has no active detail route. Recommendation: keep it as a no-detail-route representative example with contact CTA.
- If current UI can only display two proof cards cleanly, Coder should adjust layout to support three cards; do not drop Astra.
- Existing Home copy still contains some older editing-sheet wording (`Web Contents / Web3.0`, broad `最短24時間` phrasing). That is outside this task's implementation scope but is captured in the Japanese copy master for Z editing continuity.

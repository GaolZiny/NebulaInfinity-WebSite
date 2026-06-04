# Visual Spec — Contact

## 1. Page role
- Primary goal: convert qualified interest into a real inquiry with the right service taxonomy.
- Audience: prospects ready to start a conversation, even if requirements are incomplete.
- Primary action: submit the contact form successfully.
- Secondary action: understand what happens next.

## 2. Header / navigation flow
- Header: global shell.
- Page transitions:
  - Successful form -> success state on same page
  - Secondary contextual links -> Services / Projects if present in side panel
- Back destination: any main nav route; logo -> Home.
- Unauthenticated flow: fully open.
- No-dead-end rule: form always paired with process expectation and optional routes back to Services/Projects.

## 3. Hi-Fi ASCII layout

### Desktop
```text
Header
Hero: reassurance headline + subtitle
Main section split 7 / 5
  Left: contact form card
  Right: what happens next card + contact expectations + service-intent chips
FAQ accordion (4 items)
CTA safety note / reassurance line
```

### Mobile
```text
Header
Hero
Service-intent chips
Form card
What happens next card
Expectation cards
FAQ accordion
Reassurance note
```

## 4. Section-by-section spec

### S1. Hero
**Final display copy**
- JA eyebrow: `Contact`
- EN eyebrow: `Contact`
- JA title: `要件が固まっていなくても、ご相談ください`
- EN title: `You can contact us before the requirements are fixed`
- JA subtitle: `現場課題、AIアプリケーション構想、Web3.0施策の検討段階でも構いません。Nebula Infinity が、背景整理からご一緒します。`
- EN subtitle: `Whether you are dealing with an operational issue, shaping an AI application idea, or exploring a Web3.0 initiative, Nebula Infinity can help structure the next step with you.`

**Style guidance**
- Text-only hero, centered and reassuring.
- No giant illustration; keep focus on the form.

**States**
- Static.

**Responsive**
- Hero remains compact to bring form above the fold faster.

### S2. Service-intent chips
**Final display copy**
- JA title: `ご相談テーマ`
- EN title: `Inquiry themes`
- Chips shown above or beside the form:
  - `AI Workflow Design & Development`
  - `AI Application Design & Development`
  - `Web3.0 / Blockchain Application Design & Development`
  - `まだ整理中 / Other`
- JA helper: `どれに近いか分からない場合は「まだ整理中」を選択してください。`
- EN helper: `If you are unsure which line fits best, choose “Still defining / Other.”`

**Style guidance**
- Chips are mirrored by the select field below.
- Active chip state uses gold outline + light gold background.

**States**
- Chips: default / hover / active / focus-visible.

**Responsive**
- 2x2 grid on mobile.

### S3. Contact form card
**Final display copy**
- JA form title: `お問い合わせフォーム`
- EN form title: `Inquiry form`
- JA fields:
  - `お名前` / placeholder `山田 太郎`
  - `会社名` / placeholder `株式会社〇〇`
  - `メールアドレス` / placeholder `example@company.com`
  - `電話番号` / placeholder `03-1234-5678`
  - `お問い合わせ種別`
  - `ご相談内容`
- EN fields:
  - `Name` / placeholder `Your name`
  - `Company` / placeholder `Your company`
  - `Email` / placeholder `your.email@example.com`
  - `Phone` / placeholder `Your phone`
  - `Inquiry type`
  - `Message`
- JA inquiry type options:
  1. `AI Workflow Design & Development`
  2. `AI Application Design & Development`
  3. `Web3.0 / Blockchain Application Design & Development`
  4. `まだ整理中 / Other`
- EN inquiry type options:
  1. `AI Workflow Design & Development`
  2. `AI Application Design & Development`
  3. `Web3.0 / Blockchain Application Design & Development`
  4. `Still defining / Other`
- JA message placeholder: `現状の課題、作りたいもの、対象ユーザー、悩んでいる点などを分かる範囲でご記入ください。`
- EN message placeholder: `Share the current challenge, what you want to build, who it is for, and any open questions you have.`
- JA submit: `送信する`
- EN submit: `Send inquiry`
- JA submitting: `送信中...`
- EN submitting: `Sending...`
- JA success: `お問い合わせありがとうございます。通常 2 営業日以内にご返信します。`
- EN success: `Thank you for reaching out. We usually reply within 2 business days.`
- JA error: `送信に失敗しました。時間をおいて再度お試しいただくか、メールでご連絡ください。`
- EN error: `We could not send the form. Please try again later or contact us by email.`
- JA validation helper examples:
  - `必須項目です`
  - `メールアドレスの形式をご確認ください`
- EN validation helper examples:
  - `This field is required`
  - `Please check the email format`

**Style guidance**
- Use one large white form card with 32px desktop padding / 24px mobile.
- Form title small and calm; hero already carries the main messaging.
- Required labels marked with text + color, not color alone.
- Select field must use custom inline SVG caret consistent with icon system.

**Required states**
- Input / select / textarea: default / hover / focus / filled / error / success / disabled.
- Submit button: default / hover / pressed / focus-visible / loading / disabled.
- Form card: success and error message banners with icon + text.

**Responsive notes**
- Email and phone share one row on desktop, stack on mobile.
- Message field min 160px height desktop / 140px mobile.

### S4. What happens next / expectation panel
**Final display copy**
- JA title: `送信後の流れ`
- EN title: `What happens next`
- JA steps:
  1. `内容確認` — `ご相談テーマと背景を確認します。`
  2. `初回返信` — `通常 2 営業日以内にご返信します。`
  3. `整理ミーティング` — `必要に応じて、課題と進め方を短く整理します。`
  4. `次の提案` — `適したサービスラインと進め方をご提案します。`
- EN steps:
  1. `Review` — `We review your theme and background.`
  2. `Initial reply` — `We usually respond within 2 business days.`
  3. `Scoping conversation` — `If needed, we organize the challenge and next step together.`
  4. `Suggested path` — `We propose the best-fit service line and engagement path.`

**Style guidance**
- Use Step Rail pattern in a compact vertical form.
- Right column top card, featured with subtle gold wash.

**States**
- Static.

**Responsive**
- Moves below form on mobile.

### S5. Contact expectation cards
**Final display copy**
- JA cards:
  1. `返信目安` — `通常 2 営業日以内`
  2. `対象テーマ` — `AI Workflow / AI Application / Web3.0 / Blockchain`
  3. `相談段階` — `要件未整理でも可`
- EN cards:
  1. `Response window` — `Usually within 2 business days`
  2. `Themes covered` — `AI Workflow / AI Application / Web3.0 / Blockchain`
  3. `Stage accepted` — `Even before requirements are fixed`
- JA reassurance note: `営業的な誇張ではなく、現状整理から始める前提でご案内します。`
- EN reassurance note: `The first conversation starts from clarifying the current situation, not from forcing a sales script.`

**Style guidance**
- 3 compact cards beneath the step panel.
- Use icon wrappers; no social media card in V1 primary contact flow.

**States**
- Static.

**Responsive**
- Stack cards one by one on mobile.

### S6. FAQ accordion
**Final display copy**
- JA eyebrow: `FAQ`
- EN eyebrow: `FAQ`
- JA title: `よくあるご質問`
- EN title: `Frequently asked questions`
- JA items:
  1. `要件がまとまっていなくても相談できますか？` -> `はい。現状の課題や作りたい方向性の段階から整理できます。`
  2. `どのサービスを選べばよいか分からないです。` -> `背景をもとに、AI Workflow / AI Application / Web3.0 / Blockchain のどこから始めるのが適切か整理します。`
  3. `オンラインで相談できますか？` -> `はい。初回の整理はオンライン前提で対応できます。`
  4. `非公開事例も相談時に見られますか？` -> `内容に応じて、近い類型や守秘範囲に配慮した形で共有します。`
- EN items:
  1. `Can I reach out before the requirements are clear?` -> `Yes. We can start from the current issue or the rough direction of what you want to build.`
  2. `I am not sure which service line fits.` -> `We can structure whether AI Workflow, AI Application, or Web3.0 / Blockchain is the right starting point.`
  3. `Can the first conversation happen online?` -> `Yes. The initial scoping conversation can be handled online.`
  4. `Can we discuss non-public examples?` -> `Yes. When relevant, we can share similar examples in a confidentiality-aware way.`

**Style guidance**
- FAQ uses light accordion with visible border and focus state.
- Chevron rotates on open.

**Required states**
- Accordion: closed / hover / focus-visible / open.

**Responsive notes**
- Full width on all viewports.

### S7. Reassurance note
**Final display copy**
- JA body: `Nebula Infinity は、相談内容をもとに最適な入口を整理します。AI Workflow、AI Application、Web3.0 / Blockchain のどれに近いか分からない状態でも問題ありません。`
- EN body: `Nebula Infinity will help organize the right entry point from your situation. It is fine if you do not yet know whether the issue is closer to AI Workflow, AI Application, or Web3.0 / Blockchain.`

**Style guidance**
- One centered caption-style band at the bottom of the page.

**States**
- Static.

**Responsive**
- Keep short; do not create a second CTA section.

## 5. Global state checklist
- Chips: default / hover / active / focus-visible.
- Inputs: default / hover / focus / error / success / disabled.
- Submit button: default / hover / pressed / focus-visible / loading / disabled.
- FAQ accordion: closed / hover / focus-visible / open.

## 6. Responsive summary
- On mobile, bring theme chips above the form so users can orient quickly.
- Keep the right-column information compact; the form remains primary.

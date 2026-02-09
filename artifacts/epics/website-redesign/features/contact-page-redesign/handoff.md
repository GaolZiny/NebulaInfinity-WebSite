# Contact Page Redesign — Handoff

## Intent

Redesign the「お問い合わせ」(Contact) page to match the design quality of the homepage and Services page, fix the duplicate Hero title issue, enhance form styling, add richer info cards, and introduce a FAQ accordion section.

## Non-goals

- No backend logic changes (POST /api/contact stays the same)
- No new npm dependencies
- No changes to other pages or shared components

## Status

✅ **Complete** — All deliverables implemented and build verified.

## What Changed

### 1. Hero Section — Title Deduplication
- **Before**: eyebrow "お問い合わせ" + H1 "お問い合わせ" (identical)
- **After**:
  - eyebrow: "お問い合わせ" / "Contact" (smaller, tracking-wide label)
  - H1: "プロジェクトについてご相談ください" / "Let's discuss your project"
  - subtitle: "お気軽にお問い合わせください。通常1営業日以内にご返信します。" / "Get in touch with us. We typically respond within 1 business day."
- eyebrow downsized from clamp(1.25rem, 3vw, 1.75rem) to clamp(0.8rem, 1.5vw, 0.95rem) — more consistent with label role

### 2. Form Enhancement
- Increased gap (24px → 28px) for better breathing room
- Enhanced focus state: gold border + subtle gold box-shadow + warm tint background (#fffdf7)
- Hover state on inputs (border-hover)
- Custom select dropdown arrow (SVG via background-image)
- Required field asterisk styled in gold
- Card padding increased to 40px, shadow enhanced
- Status messages now include inline SVG icons

### 3. Inquiry Types Expanded
- **Before**: 4 options (Smart Contract / Web3.0 / AI / Other)
- **After**: 6 options matching current service portfolio:
  - AIエージェント開発 / AI Agent Development
  - AI自動化ワークフロー / AI Workflow Automation
  - AIアプリケーション開発 / AI Application Development
  - Web3.0/ブロックチェーン開発 / Web3.0 / Blockchain Development
  - スマートコントラクト / Smart Contracts
  - その他 / Other

### 4. Right-Side Info Cards (4 total, was 2)
- **Email card** — retained
- **Social (X/Twitter) card** — redesigned with inline link button
- **Business Hours card** (NEW) — 平日 10:00–18:00 (JST)
- **Response Time card** (NEW) — 通常1営業日以内
- Info cards are sticky on desktop (top: nav-height + 32px)
- On tablet (≤1024px): 2-column grid, moved above form
- On mobile (≤768px): single column stack

### 5. FAQ Section (NEW)
- `<details>/<summary>` accordion — pure CSS, no JS
- 4 Q&A items (bilingual):
  1. Free consultation? → Yes
  2. Project process? → Hearing → Requirements → Design → Development → Testing → Delivery
  3. International clients? → Yes, English supported
  4. NDA? → Yes, upon request
- Chevron icon rotates on open (CSS transform)
- Gold accent border + shadow on open state
- Centered layout, max-width 760px

### 6. Translation Updates
Both `ja.json` and `en.json` updated:
- `contact.eyebrow` — new field
- `contact.title` / `contact.subtitle` — new copy
- `contact.form.inquiryTypes` — expanded from 4 to 6 options
- `contact.form.submit` — "送信する" / "Send Message" (more inviting)
- `contact.info.hours` / `contact.info.hoursValue` — new
- `contact.info.response` / `contact.info.responseValue` — new
- `contact.faq` — entirely new section (title, subtitle, items[])

## Files Modified

| File | Action |
|------|--------|
| `app/[lang]/contact/page.tsx` | Rewritten |
| `app/[lang]/contact/page.module.css` | Rewritten |
| `data/translations/ja.json` | Updated (contact section) |
| `data/translations/en.json` | Updated (contact section) |

## Verification

```bash
cd /root/.openclaw/projects/NebulaInfinity-WebSite
npm run build   # ✅ Compiles, lints, generates 33 static pages
```

Visual checks:
- `/ja/contact` — Japanese version with all sections
- `/en/contact` — English version with all sections
- Responsive: desktop (2-col) → tablet (info grid above form) → mobile (stack)
- Form submission logic unchanged (POST /api/contact)

## Gaps

- No animation/transition on FAQ open (pure CSS `<details>` doesn't smoothly animate height in all browsers). Could add JS-based accordion in the future if needed.
- Form validation is browser-native (`required` attribute). No custom validation UI.

## Next Steps

- QA visual testing on actual devices
- Verify form submission works end-to-end with backend

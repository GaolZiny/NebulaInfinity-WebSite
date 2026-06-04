# Designer Notes — V1 Design Foundation

**Date:** 2026-04-09  
**Task:** Establish project-level design foundation before V1 page redesign work  
**Status:** ✅ Complete

---

## Part 1: Visual Design

### Design intent
Create a design foundation that keeps the current Light Premium Bento direction, but re-anchors it around the approved V1 business positioning:

- AI社会実装のパートナー
- 「AI」を、現場の「即戦力」へ
- 「属人」のノウハウを、組織の「資産」に
- Web3.0テクノロジーを、ビジネスへ

This foundation is deliberately **system-level only**. It does not redesign individual pages yet.

### Target users / platform
- **Primary:** founders, directors, CIO/CTO, operations leads
- **Secondary:** product owners and innovation stakeholders evaluating AI / Web3 implementation partners
- **Platform:** bilingual responsive website (`ja` / `en`), static-exported Next.js site

### Visual direction
- **Design style:** Light Premium Bento
- **Mood:** business-trustworthy, structured, modern, implementation-first
- **Core palette:** navy + gold + light neutral surfaces
- **Typography:** Orbitron for headings and numeric emphasis, Exo 2 / Noto Sans JP for reading comfort
- **Interaction tone:** subtle, crisp, accessible, low-noise

### Component system covered
The design foundation now defines rules for:
- color palette and token mapping
- typography scale
- spacing and 12-column bento grid rhythm
- radius and shadow/elevation
- buttons, cards, inputs, lists, navigation, dialogs
- states: default / hover / focus / active / disabled / loading / empty / error / success
- accessibility and reduced-motion rules

### Responsive breakpoint spec
- **Wide / desktop:** 1280px reference viewport
- **Desktop:** 1024px+
- **Tablet:** 768-1023px
- **Mobile:** <= 767px
- **Small mobile:** 480px reference tightening point

### Accessibility notes
- focus-visible ring uses restrained gold
- minimum 44px interactive hit area
- WCAG AA contrast baseline
- decorative SVG only, no emoji-based UI
- reduced-motion support required for hover lifts and reveal effects

---

## Part 1.5: Navigation Flow Foundation

This task does **not** redesign page-level navigation, but the foundation locks the expected public-site flow so future page designs stay coherent.

### Header / App shell rules
- fixed light header
- logo at left
- primary nav items surface core public pages only
- optional single primary CTA in header
- language toggle remains secondary to the main CTA

### Public-site transition model
```text
Home <-> About <-> Services <-> Projects <-> Contact
Services -> AI Workflow detail
Services -> AI Application detail
Services -> Web3.0 / Blockchain detail
Projects -> Case detail
404 -> Home / Services
```

### Back / guest behavior
- This is a public website, so all primary pages must be accessible to unauthenticated visitors.
- No auth wall or gated preview should appear in V1 public flows.
- Contact remains available to guests as the primary conversion path.
- Every detail page must provide an obvious route back to index-level content.

### No-dead-end rule
Future page redesign work should preserve at least one obvious return path on every page:
- header navigation,
- local back link,
- or CTA path to adjacent primary page.

---

## Part 2: Page Content / Brand Content Direction

### Core tone
- professional
- implementation-oriented
- specific
- calm confidence

### Messaging priorities
1. Nebula Infinity is an **implementation partner**, not a concept studio.
2. AI Workflow must be framed as **organizational assetization of know-how**, not just automation.
3. AI Application proof should visibly connect to **Japan Life Navi** and **Rigel**.
4. Web3 proof can include **Carina**, but Web3 must read as a broader business capability.
5. Blog/news direction stays out of V1.

### Copy-length guardrails
- Home hero headline: 2 lines max
- Standard page H1: short and concrete
- Card title: short enough to survive JA/EN without layout collapse
- CTA support copy: one sentence

### Text-to-visual mapping guidance
- hero lines belong in open, uncluttered zones
- service taxonomy belongs in structured card/grid layouts
- proof points belong in metric cards, case cards, or process steps
- organizational assetization should be visualized with flow/system cards rather than dense prose

---

## Part 3: Content-Visual Rationale

### Why this direction
The current light palette, navy structure, and gold emphasis already form a strong trust signal. The gap was not the base aesthetic; it was the absence of a locked design foundation tied to the new V1 positioning.

By formalizing the token system and brand rules now, future page redesign work can:
- stay consistent across JA/EN
- avoid backsliding into legacy AI-only or six-service framing
- keep Web3 inside the same business-grade visual system
- improve implementation speed because the existing CSS variable architecture already supports this foundation

### Why headline/content discipline matters
Nebula Infinity's strongest positioning is compact and sharp. Short, structured headings pair better with bento layouts and preserve authority. Long aspirational copy would weaken both the layout and the brand.

### CTA logic
The site should convert through calm clarity:
- clear capability framing
- proof of delivery
- single next-step CTA

That fits the brand better than hype-heavy conversion patterns.

---

## Notes for Coder / PM

1. `design/DESIGN_SYSTEM.md` and `design/BRAND_GUIDELINES.md` should be treated as the source of truth before page-level redesign dispatch.
2. Keep the existing CSS variable architecture; it already aligns well with this design foundation.
3. Remove emoji-based UI treatments during future page redesign work.
4. The current site still contains legacy service taxonomy (`ai-product`, `ai-development`) that must be reconciled with the approved 3-service model in the upcoming page/content rebuild.
5. Do not add any blog/news visual or structural direction in V1.
6. Home page remains the strongest current visual reference, but its messaging and some project/status treatments still need alignment in future tasks.

---

## Output files
- `design/DESIGN_SYSTEM.md`
- `design/BRAND_GUIDELINES.md`
- `artifacts/epics/website-redesign/features/v1-design-foundation/notes/designer.md`

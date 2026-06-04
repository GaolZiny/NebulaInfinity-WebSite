# Nebula Infinity V1 Design System

**Version:** V1 foundation  
**Applies to:** Public marketing site (`/[lang]/` pages only)  
**Stack fit:** Next.js 14 + TypeScript + CSS Modules + CSS Variables + Cloudflare Pages static export  
**Design direction:** Light Premium Bento

---

## 0. Purpose

This document defines the visual foundation that all V1 page redesign work must follow.

It is built to support Nebula Infinity's approved positioning reset:

- **AI社会実装のパートナー**
- **「AI」を、現場の「即戦力」へ**
- **「属人」のノウハウを、組織の「資産」に**
- **Web3.0テクノロジーを、ビジネスへ**

### Design intent
- Present Nebula Infinity as a **credible business implementation partner**, not an experimental lab.
- Keep the current **Light Premium Bento** direction because it already communicates trust, technical depth, and clarity.
- Use visual hierarchy to make complex capabilities feel structured and actionable.
- Stay compatible with the existing codebase by leaning on **CSS variables, simple gradients, inline SVG icons, and reusable card/button patterns**.

### Core visual principles
1. **Light first, premium second, flashy never.**
2. **Structure communicates intelligence.** Bento grids, clean borders, and consistent spacing should do most of the work.
3. **Gold is emphasis, not decoration.** Use it to highlight action, trust, and value inflection points.
4. **Business-ready technology.** Show system thinking, workflow clarity, and practical outcomes over sci-fi spectacle.

---

## 1. Color Palette

### 1.1 Brand anchors

| Token | Hex | Usage |
|---|---:|---|
| Ink Navy | `#0F172A` | Brand structure, navigation, strong headings, dark accents |
| Deep Ink | `#020617` | Maximum-contrast text, critical labels, footer/logo text |
| Nebula Gold | `#CA8A04` | Primary CTA, icon emphasis, focus ring, premium accent |
| Nebula Gold Hover | `#B07A03` | Hover/pressed state for primary CTA |
| Slate | `#334155` | Secondary brand text, structural support, outlined emphasis |
| Steel | `#475569` | Default body copy, secondary information |

### 1.2 Neutral system

| Token | Hex | Usage |
|---|---:|---|
| Background | `#F8FAFC` | Page background |
| Surface | `#FFFFFF` | Cards, inputs, dialogs |
| Surface Hover | `#F1F5F9` | Hover state for cards, rows, secondary surfaces |
| Accent Subtle | `#E2E8F0` | Soft chips, tags, secondary fills |
| Border | `#E4E4E7` | Default borders |
| Border Hover | `#D4D4D8` | Hover border state |
| Text Primary | `#020617` | Main reading text |
| Text Secondary | `#475569` | Paragraphs, supporting descriptions |
| Text Tertiary | `#A1A1AA` | Meta labels, eyebrow support, timestamps |
| Text Muted | `#D4D4D8` | Disabled or unavailable states |
| Backdrop | `rgba(2, 6, 23, 0.44)` | Dialog overlay, nav overlay |

### 1.3 Semantic colors

| Token | Hex | Usage |
|---|---:|---|
| Success | `#059669` | Positive delivery, completed/live state, success messages |
| Warning | `#D97706` | Caution, pending state, soft alerts |
| Error | `#DC2626` | Validation errors, destructive warnings |
| Info | `#2563EB` | Informational highlights, optional guidance banners |

### 1.4 Color usage rules

- **Default page impression:** 80-90% light neutrals, 8-12% navy/ink, 2-6% gold.
- **Gold must signal importance.** Use it for primary actions, icon containers, selected elements, progress steps, and value highlights.
- **Do not introduce purple, cyan-neon, or multi-color AI gradients** into V1 marketing pages.
- **Web3 sections still use the same system.** Do not switch to crypto-native black/purple palettes.
- Cards may use **subtle gold-tinted or navy-tinted gradients**, but backgrounds must remain visibly light.

### 1.5 Recommended CSS variable mapping

These should remain the canonical variable names for implementation:

```css
--color-primary: #0f172a;
--color-secondary: #334155;
--color-cta: #ca8a04;
--color-background: #f8fafc;
--color-text: #020617;

--background: #f8fafc;
--background-secondary: #ffffff;
--surface: #ffffff;
--surface-hover: #f1f5f9;
--accent-primary: #ca8a04;
--accent-primary-hover: #b07a03;
--accent-secondary: #0f172a;
--accent-subtle: #e2e8f0;
--border: #e4e4e7;
--border-hover: #d4d4d8;
--border-focus: #a1a1aa;
--text-primary: #020617;
--text-secondary: #475569;
--text-tertiary: #a1a1aa;
--text-muted: #d4d4d8;
```

---

## 2. Typography Scale

### 2.1 Font stack

| Role | Font family | Usage |
|---|---|---|
| Heading | `Orbitron`, `Noto Sans JP`, `Exo 2`, sans-serif | H1-H3, numeric KPIs, short premium labels |
| Body | `Exo 2`, `Noto Sans JP`, system sans-serif | Paragraphs, cards, form text, navigation |
| Japanese fallback | `Noto Sans JP` | Ensures clean bilingual rendering without layout breakage |

### 2.2 Type scale

| Style | Desktop | Mobile | Weight | Line-height | Tracking | Usage |
|---|---|---|---:|---:|---:|---|
| Display / Hero XL | 64px | 40px | 700 | 1.08 | `-0.03em` | Home hero only |
| H1 | 56px | 36px | 700 | 1.1 | `-0.02em` | Page hero titles |
| H2 | 40px | 32px | 600 | 1.2 | `-0.015em` | Major section titles |
| H3 | 28px | 22px | 600 | 1.3 | `-0.01em` | Card titles, sub-sections |
| H4 / Lead label | 20px | 18px | 600 | 1.4 | `0` | Compact headings |
| Body L | 18px | 17px | 400/500 | 1.7 | `0` | Hero subtitles, key intros |
| Body M | 16px | 16px | 400 | 1.75 | `0` | Standard paragraphs |
| Body S | 14px | 14px | 400/500 | 1.65 | `0.005em` | Supporting descriptions |
| Caption | 13px | 13px | 500 | 1.5 | `0.02em` | Meta, helper text |
| Overline / Eyebrow | 12px | 12px | 700 | 1.4 | `0.14em` | Small uppercase section context |
| KPI / Numeric Accent | 20-24px | 18-20px | 700 | 1.2 | `-0.02em` | Counts, metrics, highlighted numbers |

### 2.3 Typography rules

- Use **Orbitron sparingly** for impact: H1-H3, KPIs, selected labels, not long body blocks.
- Use **Exo 2 / Noto Sans JP** for all paragraphs, lists, form text, and explanatory content.
- Japanese copy should prioritize readability over compression. Avoid overly tight letter spacing on long Japanese headings.
- Default paragraph width should stay within **56-72 characters** for English and roughly **28-38 full-width characters** for Japanese.
- Avoid more than **2 lines for hero titles** and **3 lines for section intros** on desktop.

---

## 3. Spacing System

### 3.1 Base rhythm

- **Base unit:** 4px
- **Primary design rhythm:** 8px
- Use 4px increments for micro spacing and 8px increments for layout rhythm.

### 3.2 Spacing scale

| Token | Value | Usage |
|---|---:|---|
| `--space-1` | 4px | Icon-label gaps, micro offsets |
| `--space-2` | 8px | Tight inline spacing, chips |
| `--space-3` | 12px | Small stacks, compact cards |
| `--space-4` | 16px | Default component internal gap |
| `--space-5` | 24px | Card padding baseline, grid gap on mobile |
| `--space-6` | 32px | Larger cards, form groups, section internals |
| `--space-7` | 48px | Tablet section spacing, CTA card padding |
| `--space-8` | 64px | Standard section block on desktop |
| `--space-9` | 96px | Hero spacing and major vertical separation |

### 3.3 Layout spacing rules

- **Container width:** `1200px` max (`1400px` for wide layouts only).
- **Page top offset:** `80px` nav height.
- **Section spacing:**
  - Hero: `96px top / 72px bottom`
  - Standard section: `64-80px vertical`
  - CTA section: `64-96px vertical`
- **Card padding:**
  - Compact: `20-24px`
  - Standard: `24-32px`
  - Featured: `40-48px`
- **Grid gaps:**
  - Desktop: `24px`
  - Tablet: `20px`
  - Mobile: `16px`

### 3.4 Bento grid rules

- Default marketing layouts use a **12-column grid**.
- Recommended spans:
  - featured card: `span 6`
  - standard card: `span 4` or `span 6`
  - compact card: `span 3`
  - full-width band: `span 12`
- Collapse pattern:
  - `>= 1024px`: 12-column bento
  - `768-1023px`: 2-column logical grouping
  - `<= 767px`: 1-column stack

---

## 4. Border Radius

| Token | Value | Primary usage |
|---|---:|---|
| `--radius-sm` | 8px | Tags, chips, status badges |
| `--radius-md` | 12px | Buttons, inputs, compact controls |
| `--radius-lg` | 16px | Standard cards, info panels |
| `--radius-xl` | 20px | CTA banners, dialogs, featured blocks |
| `--radius-full` | 9999px | Pills, step numbers, round icon badges |

### Element mapping

| Element | Radius |
|---|---:|
| Button | 12px |
| Input / Select / Textarea | 12px |
| Standard Card | 16px |
| Featured Card / CTA Card | 20px |
| Modal / Dialog | 20px |
| Badge / Tag | 8px |

Rule: keep corners soft and premium, but avoid over-rounding. V1 should feel precise, not playful.

---

## 5. Shadows / Elevation

### 5.1 Elevation scale

| Level | CSS shadow | Usage |
|---|---|---|
| 0 | `none` | Flat sections, resting backgrounds |
| 1 | `0 1px 2px rgba(0,0,0,0.04)` | Inputs, subtle cards, default surfaces |
| 2 | `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` | Standard cards, header on rest |
| 3 | `0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.03)` | Hovered cards, sticky header, highlighted panels |
| 4 | `0 10px 15px rgba(0,0,0,0.05), 0 4px 6px rgba(0,0,0,0.02)` | Large CTA blocks, dialog panels |

### 5.2 Interaction shadow rules

- Default cards should start at **Level 1 or 2**.
- Hover can increase by **one elevation level only**.
- Avoid large, dark, dramatic drop shadows.
- Gold glow is allowed only as a **focus or emphasis hint**, never as a permanent halo.

### 5.3 Focus ring

```css
box-shadow: 0 0 0 3px rgba(202, 138, 4, 0.25);
```

Use for buttons, links, inputs, and any keyboard-focusable control.

---

## 6. Core Component Styles

### 6.1 Buttons

#### Shared button sizing

| Size | Height | Padding | Font |
|---|---:|---|---|
| Small | 36px | `8px 16px` | 14px / 600 |
| Medium | 44px | `10px 20px` | 15px / 600 |
| Large | 48px | `12px 24px` | 16px / 600 |

Minimum hit target on touch devices: **44px**.

#### Primary button

| State | Style |
|---|---|
| Default | Gold fill `#CA8A04`, white text, no visible border |
| Hover | `#B07A03`, Level 2 shadow |
| Pressed | Darker gold feel, Level 1 shadow |
| Disabled | 50% opacity, no shadow, no hover lift |
| Focus | 3px gold focus ring |

Use for: contact, primary conversion, final confirm actions.

#### Secondary button

| State | Style |
|---|---|
| Default | `#E2E8F0` or white fill, border `#E4E4E7`, ink text |
| Hover | Surface hover fill, border `#D4D4D8` |
| Pressed | Slightly darker neutral fill |
| Disabled | Text muted, border muted |
| Focus | 3px gold focus ring |

Use for: secondary actions alongside a primary CTA.

#### Text button (ghost)

| State | Style |
|---|---|
| Default | Transparent background, ink or slate text |
| Hover | Soft neutral wash behind text |
| Pressed | Slightly stronger neutral wash |
| Disabled | Muted text only |
| Focus | 3px gold focus ring |

Use for: low-emphasis actions, tertiary navigation, inline UI actions.

#### Outline button (allowed extension)

Implementation may retain outline as an additional variant for page CTAs. Use navy border, transparent fill, and neutral hover.

### 6.2 Cards

#### Standard card
- Background: white
- Border: `1px solid #E4E4E7`
- Radius: 16px
- Shadow: Level 1 or 2
- Padding: 24-32px

#### Featured card
- Same structure as standard card, with one elevated emphasis:
  - subtle gold-tinted background wash **or** structured gradient
  - slightly stronger border emphasis
  - larger padding (`40-48px`)

#### Card states

| State | Style |
|---|---|
| Default | White surface, soft border, Level 1/2 shadow |
| Hover | Border becomes warmer/darker, Level +1 shadow, optional `translateY(-2px)` |
| Active | Remove lift, maintain clarity |
| Disabled / unavailable | Reduced contrast, no hover |
| Focus within | Gold focus ring or gold border accent |

Rules:
- Do not stack many featured cards adjacent to each other.
- One featured card per major group is usually enough.
- Never use emoji as the primary card icon.

### 6.3 Inputs

| State | Style |
|---|---|
| Default | White fill, 1.5px border, 12px radius, 14-16px text |
| Hover | Border darkens to `#D4D4D8` |
| Focus | Gold border + 3px soft gold ring + optional warm white fill |
| Error | Error border `#DC2626`, error helper text |
| Success | Success border `#059669`, success helper text |
| Disabled | Muted background and text, no active affordance |

Input rules:
- Vertical padding should feel calm and premium, not cramped.
- Placeholder text uses tertiary tone only; it must not compete with entered values.
- For select elements, use a custom inline SVG caret that matches icon stroke style.

### 6.4 Lists

#### Feature / benefit list
- Use short rows with **inline SVG check, node, or directional icons**.
- Gap between rows: `8-12px`.
- Use body small or body medium text.

#### Case / project list card
- Title, short description, tags, and next-action link.
- Tag chips use subtle neutral or gold-tinted fills.
- Status badges use semantic colors only when they communicate real state.

#### Content list rules
- Never create long dense bullet walls on marketing pages.
- Limit visible bullets per card to **3-5**.
- Break long capability inventories into grouped cards instead of single large lists.

### 6.5 Navigation

| Element | Spec |
|---|---|
| Header height | 80px |
| Behavior | Sticky/fixed with light background and soft border |
| Logo text | Heading font |
| Nav links | Body small / medium, 500 weight |
| Link hover | Underline grow or color shift to ink/gold accent |
| Active link | Ink text with visible underline or border cue |
| Lang toggle | Outline/secondary control, never dominant over main CTA |
| Mobile nav | Light drawer/drop panel with clear spacing and border |

Navigation rules:
- The header should feel stable and trustworthy, never translucent/neon.
- Maintain visible separation from page content with a border and optional shadow on scroll.
- If a primary header CTA exists, there should be only one.

### 6.6 Proof snapshot card

Use for: service-to-case mapping, representative case cards, and highlighted evidence blocks.

| Element | Spec |
|---|---|
| Structure | Eyebrow/tag + title + 2-3 line summary + proof strip + CTA row |
| Background | White or subtle tinted surface |
| Border | 1px solid `#E4E4E7`; featured variant may use gold-tinted border |
| Radius | 16px standard, 20px featured |
| Padding | 24-32px |
| Proof strip | 2-4 KPI or evidence items separated by soft dividers |
| CTA row | Text link or secondary button aligned to bottom |

Rules:
- One proof card should communicate one capability clearly.
- Keep summary copy within 2-3 lines on desktop.
- Use real proof points, named deliverables, or explicit outcome statements — never vague praise.

### 6.7 Transformation flow panel

Use for: workflow assetization explanation, before/after framing, and system/process explanation on landing or service pages.

| Element | Spec |
|---|---|
| Structure | 3 columns minimum: `Current state` → `System design` → `Business outcome` |
| Background | White surface on light section background |
| Border | Default border with optional gold connector accents |
| Radius | 20px |
| Padding | 24px mobile / 32-40px desktop |
| Connectors | Thin lines or arrows only; avoid heavy illustration dependency |
| Content density | Max 3 bullets or chips per column |

Rules:
- Current-state column should make the operational problem tangible.
- System-design column should show capture/structure/review logic.
- Outcome column should end on repeatability, ownership, quality, or speed.

### 6.8 Step rail

Use for: engagement process, delivery flow, and contact expectation timeline.

| Element | Spec |
|---|---|
| Structure | 3-5 ordered steps with number node, title, and short description |
| Layout | Horizontal on desktop, vertical on tablet/mobile |
| Node | 36-44px circular badge with ink or gold accent |
| Rail | 1px line in neutral border color between steps |
| Card style | Optional transparent or bordered step container |
| Copy limit | Title max 1 line, description max 2 lines |

Rules:
- Use verbs in titles (`整理する`, `設計する`, `実装する`, `定着させる`).
- Keep the rail short and scannable; detailed process belongs in body copy or supporting cards.
- Final step should clarify the business handoff or next action.

### 6.9 Dialog / modal

| Element | Spec |
|---|---|
| Backdrop | `rgba(2, 6, 23, 0.44)` |
| Panel | White surface, 20px radius, Level 4 shadow |
| Width | 480-720px typical marketing modal width |
| Padding | 24-32px |
| Title | H3 or H4 styling |
| Actions | Right-aligned on desktop, stacked on small mobile |

Dialog states:
- Opening/closing motion must be subtle and respect reduced-motion settings.
- Keyboard focus must land inside the modal.
- Escape / close affordance must be obvious.

---

## 7. States, Accessibility, and Motion

### 7.1 Required states to design for
Every future page/component spec must cover:
- default
- hover
- focus-visible
- active / pressed
- disabled
- loading
- empty
- error
- success where relevant

### 7.2 Accessibility baseline

- Maintain **WCAG AA contrast** for all body text and controls.
- All decorative SVGs must be `aria-hidden="true"`.
- Avoid color-only communication for critical status. Pair color with text/icon.
- Interactive targets should be **44px minimum** in one dimension.
- Use proper heading hierarchy and semantic lists.

### 7.3 Motion rules

- Standard transitions: `120ms-200ms ease-out`.
- Hover lifts should stay within `-2px to -3px`.
- Do not use constant floating animation on marketing cards.
- Respect `prefers-reduced-motion: reduce` by disabling non-essential transitions and transforms.

---

## 8. Dark Mode

**V1 support status: Not supported.**

Rationale:
- Nebula Infinity's public marketing site should present a single controlled premium-light experience in V1.
- A poor auto-inverted dark mode would weaken trust and introduce QA overhead across bilingual pages.
- If dark mode is explored later, it must be treated as a separate designed theme, not a token inversion shortcut.

### Future dark-mode rule
If dark mode is added later:
- keep gold accent restrained,
- preserve contrast and hierarchy,
- do not use neon cyberpunk treatment,
- maintain the same business-first tone.

---

## 9. Usage Rules for V1 Page Redesign Work

1. **Use exactly 3 service-line visual identities only:**
   - AI Workflow Design & Development
   - AI Application Design & Development
   - Web3.0 / Blockchain Application Design & Development
2. **Do not design blog/news cards, editorial indices, or publishing taxonomy** into V1 layouts.
3. **Do not reintroduce legacy AI-only or six-service taxonomy visuals.**
4. **Web3 should look business-grade.** No coin, moon, rocket, price-chart, or speculative-trading visual language.
5. **Workflow pages must visualize assetization.** Favor before/after process, system handoff, and institutional memory metaphors.
6. **Keep implementation light.** Prefer CSS gradients, borders, shadows, and inline SVG over heavy visual dependencies.

---

## 10. Practical Reference Patterns from Current Implementation

The current site already contains patterns worth preserving and systematizing:

- `styles/theme.css` for token structure
- `styles/globals.css` for container widths and global rhythm
- `components/ui/Button.module.css` for button sizing/focus behavior
- `components/ui/Card.module.css` for card/radius/shadow baseline
- `components/layout/Header.module.css` and `Footer.module.css` for stable marketing shell
- `app/[lang]/page.module.css` for the strongest existing Light Premium Bento reference

### Keep
- Navy + gold + light background palette
- Orbitron + Exo 2 pairing
- Inline SVG icon approach
- 12-column bento logic
- CTA banners with soft premium gradient wash

### Normalize during page redesign
- Remove emoji-driven status or icon treatments
- Bring page heroes to one consistent eyebrow/title/subtitle rhythm
- Update legacy service taxonomy to the approved 3-line model
- Standardize status, tags, and project cards under this system

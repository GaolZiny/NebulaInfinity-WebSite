# Designer Notes — Services Page Design

**Date:** 2026-02-08  
**Task:** Complete services page design covering 6 core business offerings  
**Status:** ✅ Complete  

---

## Design Intent

Transform the existing 4-service showcase into a comprehensive 6-service Bento Grid layout that:
1. Clearly differentiates AI services (3) from Web3 services (3)
2. Establishes Smart Contract as the hero/featured offering
3. Maintains Light Premium Bento aesthetic (Navy + Gold)
4. Supports bilingual content (JA/EN) without layout shift

---

## Target Users & Context

**Primary:** Enterprise decision-makers evaluating blockchain/AI partners  
**Secondary:** Technical leads researching specific services  
**Platform:** Responsive web, mobile-first (375px → 1440px+)  

**User Journey:**
1. Land on Services page from nav or homepage
2. Scan featured service (Smart Contract) for depth signal
3. Browse other 5 services to assess breadth
4. Click CTA to contact or view projects

---

## Visual Direction

### Style Applied
- **Design System:** Light Premium Bento (Navy + Gold)
- **Reference:** `design-system/nebula-infinity-website-v2-(bento-light)/MASTER.md`
- **Mood:** Trust & Authority (vs typical AI purple/pink gradient)

### Color Rationale
- **Navy (`#0F172A`):** Primary brand, authority, technical depth
- **Gold (`#CA8A04`):** Premium positioning, CTA focus, icon backgrounds
- **Light BG (`#F8FAFC`):** Clean, spacious, reduces cognitive load

### Typography Choices
- **Orbitron (headings):** Futuristic, technical, Web3-appropriate
- **Exo 2 (body/features):** Excellent readability, pairs well with Orbitron
- **Letter spacing:** +0.01em on headings for breathing room

---

## Component List & States

### 1. Service Card (Standard)
**Variants:** 
- Standard (3-column span)
- Featured (6-column span, 2-row height)

**Structure:**
```
┌─────────────────────┐
│ [Icon]     [Label]  │  ← Featured only
│                     │
│ Title (H3)          │
│ Description (p)     │
│                     │
│ • Feature 1         │
│ • Feature 2         │
│ • Feature 3         │
│ • Feature 4         │
│ [• Feature 5]       │  ← Featured only
└─────────────────────┘
```

**States:**
- Default: `box-shadow: var(--shadow-sm)`, `border: 1px solid var(--border)`
- Hover: `translateY(-2px)`, `box-shadow: var(--shadow-lg)`, `border-color: gold-30%`
- Focus: `outline: 3px solid gold-30%` (keyboard navigation)

### 2. Service Icon
**Container:** 44px × 44px rounded square  
**Background:** `rgba(202, 138, 4, 0.12)` (gold 12% opacity)  
**Icon Color:** Inherits gold from parent  
**Stroke Width:** 1.7px (crisp at all sizes)  

**Hover Behavior:**
- Background: `rgba(202, 138, 4, 0.2)` (20% opacity)
- Transform: `scale(1.05)`
- Transition: 200ms ease

### 3. Feature List Bullets
- **Style:** Solid circle (6px diameter)
- **Color:** Gold (`#CA8A04`)
- **Spacing:** 8px gap between items
- **Alignment:** Top-aligned with first line of text

---

## Layout Specification

### Bento Grid (Desktop 1024px+)
```
12-column grid, 24px gaps

┌──────────────────────┬──────────┐
│                      │ AI Agent │
│   Smart Contract     ├──────────┤
│   (FEATURED)         │ AI Work  │
│   6 cols × 2 rows    ├──────────┤
│                      │ AI Apps  │
├──────────────────────┼──────────┤
│  Blockchain Dev (4)  │ Web3 (4) │
└──────────────────────┴──────────┘
```

**Why This Layout?**
1. **Featured prominence:** 2× area of standard cards
2. **Category grouping:** AI services stack vertically (visual cohesion)
3. **Reading flow:** F-pattern (Featured → AI stack → Bottom row)
4. **Balance:** Equal visual weight on left (1 large) vs right (3 small + 1 medium)

### Responsive Strategy
- **1440px+:** 12-column grid, 1200px max-width container
- **1024-1439px:** 12-column grid, full-width
- **768-1023px:** 2-column grid, all cards equal height
- **375-767px:** 1-column stack, 16px gaps, reduced padding

---

## Interaction Flow

### Page Load Sequence (Recommended)
1. Hero section (0ms delay)
2. Bento grid stagger reveal (100ms + 50ms per card)
3. CTA section (after grid visible)

**Implementation:**
```javascript
// Intersection Observer on .bentoCard
cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 50}ms`;
});
```

### User Actions
- **Card hover:** Visual feedback (lift + shadow)
- **Card click:** No action (cards are informational, not navigable)
- **CTA button:** Navigate to `/contact` or `/projects`

---

## Service Content Strategy

### Service Grouping
**AI Services (3):**
1. AI Agent Development — Autonomous intelligence
2. AI Workflow Automation — Process efficiency
3. AI Applications — Custom AI tools (RAG, multimodal)

**Web3 Services (3):**
1. Smart Contract (Featured) — Foundation of blockchain trust
2. Blockchain/Web3.0 Development — DApps, NFTs, metaverse
3. Web3.0 Consulting — Strategy, training, adoption

### Featured Service Selection
**Chosen:** Smart Contract Design, Development & Audit

**Why?**
1. **Differentiation:** Security audits + gas optimization (not all agencies offer)
2. **Trust signal:** Positions as technical authority
3. **Business value:** Highest-margin service
4. **Market demand:** Every blockchain project needs this

**Alternative considered:** AI Agent Development (emerging market, high buzz)  
**Decision:** Smart Contract has stronger trust positioning for enterprise audience

---

## Accessibility & Inclusive Design

### WCAG 2.1 AA Compliance
- **Color contrast:** Text/background exceeds 4.5:1 (Navy on Light BG = 14.6:1)
- **Focus indicators:** Visible 3px outline (gold 30% opacity)
- **Heading hierarchy:** H1 (page) → H2 (sections) → H3 (services)
- **Semantic HTML:** Proper `<ul>` for features, `<article>` for cards
- **Keyboard navigation:** All interactive elements focusable, logical tab order

### Screen Reader Support
- Icons: `aria-hidden="true"` (decorative)
- Cards: `role="article"` or `<article>` element
- Feature lists: Native `<ul>` (screen reader announces "list, 4 items")

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Icon Design Rationale

Each icon designed to:
1. **Convey service essence** at a glance
2. **Maintain visual consistency** (line art, 1.7px stroke)
3. **Scale gracefully** (44px container, 22px icon)
4. **Avoid clichés** (no generic gears, lightbulbs)

### Icon-Service Mapping
| Service | Icon Concept | Why? |
|---------|--------------|------|
| AI Agent | Neural network + gear | Autonomous intelligence in action |
| AI Workflow | Pipeline + sparkle | Automation magic |
| AI Applications | App window + layers | Modular AI components |
| Blockchain Dev | Connected blocks | Distributed ledger visualization |
| Smart Contract | Code brackets | Development + security |
| Web3 Consulting | Compass | Guidance, direction, strategy |

---

## Key Design Decisions

### 1. Why 6-column Featured (not 8 or 4)?
- **8 columns:** Too wide, creates awkward whitespace
- **4 columns:** Too small, doesn't feel "featured"
- **6 columns:** Golden ratio-ish, perfect for 5 features + description

### 2. Why AI Services on Right (not Left)?
- **F-pattern reading:** Users scan left first (Featured), then right (AI stack)
- **Visual balance:** Large card left, vertical stack right
- **Category clarity:** Right column = all AI, easy mental model

### 3. Why No Service Detail Pages?
- **Scope:** Not in current requirements
- **IA simplicity:** Fewer URLs to maintain
- **Conversion focus:** Direct to contact, not browsing
- **Future-proof:** Can add later without breaking current design

### 4. Why Gold Icon Backgrounds (not Navy)?
- **Contrast:** Gold pops on light background
- **Brand consistency:** Accent color reinforcement
- **Premium feel:** Metallic suggestion
- **Accessibility:** Better visual separation

---

## Handoff Artifacts

### Delivered Files
1. **`handoff.md`** — Complete design spec (18KB)
   - All 6 services: titles, descriptions, features (JA/EN)
   - SVG icon skeletons
   - Layout strategy
   - Component states
   - Accessibility notes
   - Responsive behavior

2. **`notes/designer.md`** — This file (design rationale)

### Not Delivered (Out of Scope)
- ❌ Final SVG icons (skeleton code provided, coder to implement)
- ❌ Page implementation code (coder task)
- ❌ Content translations review (PM task)
- ❌ Service detail pages (not in requirements)

---

## PM Feedback & Updated Design (2026-02-08 23:43)

### PM Decisions
✅ **Service detail pages required** — Each service needs dedicated page  
✅ **No case studies on pages** — Link to Projects page instead  
✅ **No trust signals yet** — No client cases to display  

### Updated Design Scope
**Added:**
- 6 service detail page specifications (`/services/{service-id}`)
- Clickable card interactions (entire card = button)
- Breadcrumb navigation component
- Detail page content structure (5 sections per page)
- Content matrix for all 6 services (JA/EN)

**Removed:**
- ~~Floating CTA button~~ (not needed with detail pages)
- ~~Client logo section~~ (no cases yet)
- ~~In-card "詳細を見る" button~~ (entire card clickable)

### Detail Page Design Rationale

**Why 5-section structure?**
1. **About** — Establishes value proposition (2-3 paragraphs)
2. **Features** — Scannable 2-column grid (4-6 features)
3. **Technologies** — Trust signal (shows technical depth)
4. **Process** — Reduces uncertainty (5-step timeline)
5. **Related Projects** — Soft CTA to portfolio (not forced)

**Why no embedded project cards?**
- PM confirmed no client cases yet
- Cleaner design without placeholder content
- Easier to add later when projects exist

**Why entire card clickable (not button inside)?**
- Larger click target (better UX, especially mobile)
- Simpler visual design (less UI clutter)
- Industry standard (see Stripe, Vercel, Linear)

### Content Strategy for Detail Pages

**Tone:** Professional, technical, confident (not salesy)  
**Length per section:**
- About: 150-200 words
- Feature descriptions: 60-80 words each
- Process steps: 40-60 words each

**Content Matrix provided:** All 6 services have:
- H1 titles (JA/EN)
- Subtitles (JA/EN)
- About paragraphs (JA/EN)
- Technology lists (8-12 tags each)

**PM action required:** Expand content matrix into full detail page copy

---

## Recommendations for Next Phase

### High Priority (Required for Launch)
1. **Coder:** Implement main Services page with clickable cards
2. **Coder:** Implement 6 detail pages (dynamic route)
3. **PM:** Write detailed content for all pages
4. **Designer:** Visual QA (7 total pages)

### Medium Priority (Post-Launch Polish)
4. **Stagger animation:** Add Intersection Observer for card reveals
5. **Microinteractions:** Icon rotate on hover, smooth section reveals
6. **Print styles:** For PDF proposals/pitch decks

### Low Priority (Future Enhancements)
7. **Dark mode:** Design system doesn't specify yet
8. **Service comparison table:** If users need to compare services
9. **FAQ section per service:** If common questions emerge

---

## Constraints & Trade-offs

### What We Optimized For
✅ Comprehensive coverage (all 6 services)  
✅ Clear differentiation (AI vs Web3)  
✅ Trust positioning (Featured service)  
✅ Bilingual support (no layout shift)  
✅ Accessibility (WCAG AA)  
✅ Mobile experience (responsive from 375px)  

### What We Deprioritized
⚠️ Animation complexity (simple hover states only)  
⚠️ Customization (no user preferences/filters)  
⚠️ Interactivity (cards are informational, not clickable)  
⚠️ Rich media (no videos, just SVG icons)  

---

## Technical Notes for Coder

### CSS Custom Properties Usage
```css
/* Use design tokens, not hardcoded values */
.serviceCard {
  background: var(--surface);        /* not #F8FAFC */
  color: var(--text-primary);        /* not #020617 */
  border: 1px solid var(--border);   /* not #E2E8F0 */
  padding: var(--space-lg);          /* not 24px */
}
```

### Grid Layout Implementation
Recommend **CSS Grid Template Areas** for clarity:
```css
.bentoGrid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-lg);
}

@media (min-width: 1024px) {
  .bentoGrid {
    grid-template-areas:
      "f f f f f f a a a w w w"
      "f f f f f f b b b p p p"
      "d d d d d d c c c c c c";
  }
}
```
(f=featured, a=ai-agent, w=ai-workflow, b=ai-apps, d=blockchain-dev, c=web3-consulting, p=placeholder)

### Performance Optimization
- **Critical CSS:** Inline above-fold styles (hero + first 3 cards)
- **Font loading:** `font-display: swap` to prevent FOIT
- **No JavaScript required:** Page is fully functional without JS (progressive enhancement)
- **Image optimization:** N/A (SVG icons only, no raster images)

---

## QA Testing Checklist

Before marking complete:
- [ ] Visual QA on 375px, 768px, 1024px, 1440px viewports
- [ ] Keyboard navigation (Tab, Shift+Tab, Enter)
- [ ] Screen reader test (VoiceOver on macOS, NVDA on Windows)
- [ ] Color contrast check (all text passes WCAG AA)
- [ ] Hover state transitions smooth (200ms ease)
- [ ] Focus indicators visible and consistent
- [ ] No horizontal scroll on mobile
- [ ] Content translations accurate (JA ↔ EN)
- [ ] Print stylesheet renders cleanly
- [ ] `prefers-reduced-motion` respected

---

## Lessons Learned / Process Notes

### What Went Well
✅ Design system adherence (no deviations from MASTER.md)  
✅ Clear service differentiation (AI vs Web3 categories)  
✅ Comprehensive documentation (handoff + notes)  

### What Could Be Improved
⚠️ **Icon design:** Provided skeletons, not final assets (time constraint)  
⚠️ **No visual mockup:** Text-only spec (could add Figma/HTML preview)  
⚠️ **Content source:** Used task description, didn't verify against BRIEF.md (file missing)  
⚠️ **Initial assumption wrong:** Assumed no detail pages, but PM required them (added mid-project)  

### Process Improvements for Next Task
1. **Clarify IA requirements upfront** (detail pages? nested routes?)
2. **Request design review meeting** before starting (align on direction)
3. **Create quick HTML prototype** for visual validation (not just spec)
4. **Add design tokens file** (JSON export for coder import)

### What Went Well (Update)
✅ **Rapid pivot:** Incorporated PM feedback and added detail page specs within 30 minutes  
✅ **Content matrix:** Provided starter content for all 6 services (saves PM time)  
✅ **Comprehensive spec:** 7 pages (1 main + 6 details) fully specified

---

**Designer:** OpenClaw Designer Worker  
**Date:** 2026-02-08 23:02 JST (Initial) → 23:50 JST (Updated with detail pages)  
**Status:** ✅ Ready for coder implementation  
**Est. Dev Time:** 16-24 hours (main page + 6 detail pages + icons + content integration)

---

## Deliverables Summary

### Files Created
1. **`handoff.md`** (28KB) — Complete design specification
   - Services main page (Bento Grid layout)
   - 6 service detail page structures
   - Content matrix (JA/EN starter content)
   - Component specs, interactions, responsive behavior
   - Accessibility guidelines, SEO metadata

2. **`notes/designer.md`** (This file, 15KB) — Design rationale & decisions

### Pages Specified
- **Main:** `/services` (1 page)
- **Details:** `/services/{service-id}` (6 pages)
- **Total:** 7 pages fully designed

### Next Owner
- **PM:** Review content matrix, write detailed copy for detail pages
- **Coder:** Implement 7 pages based on handoff.md specs
- **Designer:** Visual QA after implementation

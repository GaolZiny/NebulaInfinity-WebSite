# Services Page Design — Quick Reference

**Status:** ✅ Complete & Ready for Implementation  
**Last Updated:** 2026-02-08 23:50 JST  
**Designer:** OpenClaw Designer Worker  

---

## 📋 What's Included

This feature includes **complete design specifications** for:

1. **Services Main Page** (`/services`)  
   - Bento Grid layout showcasing 6 services
   - Clickable cards navigating to detail pages
   - Responsive design (375px → 1440px+)

2. **6 Service Detail Pages** (`/services/{service-id}`)  
   - Smart Contract Design, Development & Audit
   - AI Agent Development
   - AI Workflow Automation
   - AI Applications
   - Blockchain / Web3.0 Development
   - Web3.0 Consulting

**Total Pages Designed:** 7 (1 main + 6 details)

---

## 📂 File Structure

```
services-page-design/
├── README.md          ← You are here (quick reference)
├── handoff.md         ← Complete design spec (28KB)
└── notes/
    └── designer.md    ← Design rationale & decisions (15KB)
```

---

## 🚀 Quick Start Guide

### For PM
**Action Required:**
1. Review `handoff.md` → "Content Matrix for 6 Services" section
2. Expand starter content into full detail page copy
3. Approve design direction

**What's Provided:**
- All 6 services: Titles, subtitles, about paragraphs (JA/EN)
- Feature lists (4-5 per service, JA/EN)
- Technology tags (8-12 per service)
- Generic process steps (adapt per service)

### For Coder
**Implementation Order:**
1. **Main Services Page** (4-6 hours)
   - Implement Bento Grid layout
   - Create 6 SVG icon components
   - Add click navigation

2. **Service Detail Pages** (8-12 hours)
   - Create dynamic route `[serviceId]/page.tsx`
   - Implement 5-section layout
   - Integrate translations

**Key Files to Create:**
```
app/[lang]/services/
├── page.tsx                    ← Main page
├── page.module.css
├── [serviceId]/
│   ├── page.tsx                ← Dynamic detail page
│   └── page.module.css
├── components/
│   ├── ServiceCard.tsx         ← Reusable card
│   └── ServiceIcon.tsx         ← Icon component
└── data/
    └── services.ts             ← Service data array
```

### For QA
**Testing Checklist:**
- [ ] Main page: Card hover states, click navigation
- [ ] Detail pages: All 6 pages render correctly
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] Accessibility: Keyboard nav, screen reader, WCAG AA
- [ ] SEO: Meta tags, structured data, heading hierarchy
- [ ] Translations: JA ↔ EN switch, no layout shift

---

## 🎨 Design Highlights

### Main Services Page
- **Layout:** 12-column Bento Grid
- **Featured Service:** Smart Contract (6 cols × 2 rows)
- **Color Scheme:** Navy (`#0F172A`) + Gold (`#CA8A04`) on Light BG (`#F8FAFC`)
- **Interaction:** All cards clickable, smooth hover states

### Service Detail Pages
**5-Section Structure:**
1. **Hero** — Title, subtitle, CTA buttons
2. **About** — Value proposition (2-3 paragraphs)
3. **Features** — 2-column grid, 4-6 features
4. **Technologies** — Tag cloud (8-12 tags)
5. **Process** — 5-step vertical timeline

**Navigation:**
- Breadcrumb: Home > Services > [Service Name]
- CTA: "お問い合わせ" + "すべてのサービス"

---

## 📊 Content Overview

### 6 Services Summary

| ID | Service Name (EN) | Category | Featured? |
|----|-------------------|----------|-----------|
| `smart-contract` | Smart Contract Design, Development & Audit | Web3 | ✅ Yes |
| `ai-agent-development` | AI Agent Development | AI | No |
| `ai-workflow-automation` | AI Workflow Automation | AI | No |
| `ai-applications` | AI Applications | AI | No |
| `blockchain-development` | Blockchain / Web3.0 Development | Web3 | No |
| `web3-consulting` | Web3.0 Consulting | Web3 | No |

### Content Status

| Content Type | Status | Owner |
|-------------|--------|-------|
| Titles (JA/EN) | ✅ Complete | Designer |
| Descriptions (JA/EN) | ✅ Complete | Designer |
| Feature lists (JA/EN) | ✅ Complete | Designer |
| About paragraphs (JA/EN) | ✅ Starter provided | PM to expand |
| Technology tags | ✅ Complete | Designer |
| Process steps | 🟡 Generic provided | PM to adapt |
| SVG icons | 🟡 Skeletons provided | Coder to finalize |

---

## 🎯 Key Design Decisions

### Why Smart Contract as Featured?
1. **Differentiation:** Security audits + gas optimization (not all agencies offer)
2. **Trust signal:** Positions as technical authority
3. **Business value:** Highest-margin service
4. **Market demand:** Every blockchain project needs this

### Why Entire Card Clickable (Not Button Inside)?
- Larger click target → better mobile UX
- Cleaner visual design
- Industry standard (Stripe, Vercel, Linear)

### Why No Case Studies on Pages?
- PM decision: No client cases yet
- Cleaner design without placeholder content
- Easy to add later when projects exist

### Why 5-Section Detail Page Structure?
- **About:** Establishes value (why us?)
- **Features:** Scannable benefits (what you get)
- **Technologies:** Trust signal (how we do it)
- **Process:** Reduces uncertainty (how it works)
- **Projects Link:** Soft CTA (proof of work)

---

## 📐 Technical Specs at a Glance

### Design System Compliance
✅ Color Palette: Navy + Gold + Light BG  
✅ Typography: Orbitron (headings) + Exo 2 (body)  
✅ Spacing: Design tokens (`--space-*`)  
✅ Shadows: `--shadow-sm/md/lg`  
✅ No emojis as icons (SVG only)  
✅ WCAG AA compliant (4.5:1 contrast)  

### Responsive Breakpoints
- **375px:** 1-column, 16px gaps, 20px padding
- **768px:** 2-column, 20px gaps, 24px padding
- **1024px:** Bento Grid, 24px gaps, 36px featured padding
- **1440px+:** Max-width 1200px container

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile: iOS Safari 14+, Chrome Android 90+

---

## ⏱️ Estimated Timeline

### Development
- **Phase 1 (Main Page):** 4-6 hours
- **Phase 2 (Detail Pages):** 8-12 hours
- **Phase 3 (Review & QA):** 4-6 hours
- **Total:** 16-24 hours

### Content Writing (PM)
- Expand 6 detail page copy: 6-8 hours
- Review + approval: 2 hours
- **Total:** 8-10 hours

**Grand Total:** 24-34 hours (dev + content)

---

## 🔗 External References

### Design System
- **Master File:** `design-system/nebula-infinity-website-v2-(bento-light)/MASTER.md`
- **Style:** Trust & Authority (not AI purple/pink)
- **Pattern:** Bento Grid Showcase (Apple-style)

### Current Implementation (Reference)
- `app/[lang]/services/page.tsx` (4 services, to be replaced)
- `app/[lang]/services/page.module.css`

### Icon Libraries (For SVG Implementation)
- **Recommended:** Heroicons, Lucide, Simple Icons
- **Fallback:** Custom line art (1.7px stroke, currentColor)

---

## ❓ FAQ

### Q: Why is Smart Contract featured (not AI Agent)?
**A:** Business decision. Smart Contract shows technical depth + security focus, which builds trust with enterprise clients. AI Agent is emerging market but less differentiated.

### Q: Do detail pages need unique URLs for SEO?
**A:** Yes. Each service has `/services/{service-id}` route with unique meta tags, H1, and structured data (JSON-LD).

### Q: Can we add client case studies later?
**A:** Yes. Design has placeholder section "Related Projects" linking to `/projects`. When client cases exist, update to embed 2-3 project cards.

### Q: Are icons final or placeholder?
**A:** Skeleton SVG code provided. Coder to implement as React components. Visual QA by designer after implementation.

### Q: Can detail page structure be customized per service?
**A:** Structure should be consistent (UX consistency). Content adapts per service. If specific service needs extra section, consult designer first.

---

## 📞 Contact & Support

**For Design Questions:**
- **Designer:** OpenClaw Designer Worker
- **Channel:** Refer to PM (Z)

**For Content Questions:**
- **PM:** Z (Telegram group)

**For Implementation Questions:**
- **Refer to:** `handoff.md` first
- **Then ask:** PM or Designer

---

## ✅ Sign-off

**Designer:** Ready for implementation ✅  
**PM:** Awaiting approval + content expansion  
**Coder:** Ready to start Phase 1  

**Date:** 2026-02-08 23:50 JST  
**Next Review:** After Phase 1 implementation (main page)

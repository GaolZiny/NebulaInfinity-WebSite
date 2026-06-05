# Visual Spec Tombstone — Web3.0 / Blockchain Detail

**Status:** Retired / non-canonical / do not implement
**Old route:** `/[lang]/services/web3-blockchain`
**Replacement active service line:** `AI-Driven Development`
**Replacement active detail spec:** `design/visual/ai-driven-development.md`

This file is intentionally kept as a tombstone so active Workers do not reuse the former Web3 / Blockchain service detail as an implementation source.

## 1. Retirement decision

The former Web3.0 / Blockchain service detail page is retired from the active V1 service model.

Required implementation direction:
- Do not build or export `/[lang]/services/web3-blockchain`.
- Do not emit `web3-blockchain` from service data, static params, sitemap, metadata, breadcrumbs, language-switch data, Home service cards, footer links, or CTA data.
- Do not create a hidden compatibility page, thin redirect page, or Next.js middleware/server redirect for this route. The site is a Cloudflare Pages static export.
- If legacy traffic later matters, evaluate hosting-level redirects in a separate deployment/config task.

## 2. Active service model

Use exactly these active service detail routes:
1. `/[lang]/services/ai-workflow`
2. `/[lang]/services/ai-application`
3. `/[lang]/services/ai-driven-development`

The third active service line is `AI-Driven Development` and is specified in `design/visual/ai-driven-development.md`.

## 3. Retired proof mapping

- Carina was formerly used as Web3 / Blockchain proof.
- Carina is retired from active Home/project proof requirements.
- Do not show Carina in the Home Projects trio, active service proof, sitemap/static params, or active project proof requirements.
- Astra replaces Carina as the active AI-Driven Development proof point.

## 4. Verification checklist for Coder / QA

- Static params expose only `ai-workflow`, `ai-application`, and `ai-driven-development` for service details.
- Grep active emitted links for `/services/web3-blockchain`; none should remain.
- Home service cards show AI Workflow, AI Application, and AI-Driven Development only.
- Home Projects shows Japan Life Navi, Rigel, and Astra only.
- Breadcrumb/back-to-services links target `/[lang]/#services`, not `/[lang]/services`.
- Sitemap, metadata, language switch, header, footer, and CTA data do not advertise the retired route.

## 5. Non-goals

- No active visual layout, copy, or component states are defined here.
- No Web3 / Blockchain service replacement copy should be inferred from this tombstone.
- No code or data implementation is performed by this design task.

# artifacts/legacy/ — archived material

Files moved here during the 2026-06-05 repo cleanup (after adopting the
homepage-anchor trunk). Nothing here is used by the live Next.js app or the
build; retained for history. All moves used `git mv`, so history is preserved.

## static-site/
The pre-Next.js static site (`index.html`, `css/`, `js/`, root `images/`,
`public-index.html`). It was served on the retired VPS; the live site is now the
Next.js app on Cloudflare Pages.

## design-history/
Superseded design artifacts: `design-system/` (design-system-pro intermediates)
and root `SITE_V2_DESIGN_SYSTEM.md` / `COLOR_SCHEME_UPDATE.md` /
`REDESIGN-PROPOSAL.md`. The current design SSOT lives in `design/`.

## qa-scripts/
Standalone Python QA scripts (`test_services_qa.py`, `test_services_simple.py`).
Not referenced by CI or `npm test` (active tests are `lib/*.test.ts`).

## deployToVPS.yml.disabled
The retired GitHub Actions workflow that rsynced the repo to a VPS. Deploy is now
Cloudflare Pages following GitHub; moving it out of `.github/workflows/` disables it.

## Also removed in this cleanup (not archived — recoverable via git history)
Five dead `app/.../page.module.css` files that no page imported (all pages use the
shared `styles/marketing.module.css`).

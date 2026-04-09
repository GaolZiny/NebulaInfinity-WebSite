# Coder Notes — V1 Positioning Rebuild

## Iteration summary
This iteration finished the remaining V1 route/taxonomy cleanup, stabilized the contact delivery path, added validation/unit coverage, and updated the project to a vulnerability-free Next.js line that still preserves static export.

## Working tree state when this iteration started
The repository already contained partial redesign work in the route/UI/data layer. The main partially modified areas present before completion were:
- `app/[lang]/*` marketing routes (home, services, service detail, projects, project detail, about, contact, not-found)
- `components/layout/*`, `components/contact/*`, `components/projects/*`
- `data/services.ts`, `data/projects/projects.json`
- `functions/api/contact.ts`, `lib/contact.ts`
- `styles/marketing.module.css`, theme/global styling, `_redirects`, and Next config

## What this iteration completed
- Finished the remaining route/taxonomy cleanup so legacy service URLs redirect to the final three-service taxonomy.
- Finalized service/detail rendering so all three service detail pages statically build correctly.
- Localized the contact inquiry taxonomy so JA shows `まだ整理中 / Other` while the backend keeps a canonical value.
- Added normalization + validation helpers for the contact form and unit tests for those helpers.
- Verified the provider-missing path returns an honest 503 response instead of fake success.
- Refreshed Carina detail copy to match the approved broader Web3 capability framing.
- Updated the project from vulnerable Next 14.x to Next `15.5.14` and added a local ESLint flat config so required static analysis can run.
- Patched App Router files for Next 15 async `params` and made `sitemap.xml` compatible with `output: 'export'`.

## Verification run in this iteration
- `npx eslint . --max-warnings 0`
- `npx tsc --noEmit`
- `npm audit --audit-level=high`
- `npx tsx --test lib/contact.test.ts`
- `npm run build`
- Exported-site regression checks on a temporary local static server (`python3 -m http.server 4173 -d out`) covering:
  - `/ja/`, `/en/`
  - `/ja/services/`, `/en/services/`
  - all 3 service detail pages in both languages
  - `/ja/projects/`, `/en/projects/`
  - project detail pages for `gaijin-life-navi`, `rigel`, `carina` in both languages
  - `/ja/contact/`, `/en/contact/`
- Browser verification confirmed hydrated contact forms render the expected localized chips/fields in both JA and EN.
- Direct function verification confirmed missing SendGrid config returns:
  - HTTP `503`
  - `provider_not_configured`
  - honest fallback message directing users to `info@nebulainfinity.com`

## Notable environment issue
The repo’s managed `nebula-devserver` systemd service is currently misaligned with the project’s static-export setup and returned 500s after the required restart/smoke-test attempt. I stopped the broken service instead of leaving a 500ing local instance running. The site itself still passed the exported-site regression/build verification above.

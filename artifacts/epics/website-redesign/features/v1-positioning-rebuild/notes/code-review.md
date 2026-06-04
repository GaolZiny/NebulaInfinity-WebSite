## Code Review Report
1. Review targets:
- functions/api/contact.ts
- lib/contact.ts
- lib/contact.test.ts
- components/contact/ContactForm.tsx
- app/[lang]/contact/page.tsx
- app/[lang]/page.tsx
- app/[lang]/services/page.tsx
- app/[lang]/services/[serviceId]/page.tsx
- app/[lang]/projects/page.tsx
- app/[lang]/projects/[slug]/page.tsx
- data/services.ts
- data/projects/projects.json
- public/_redirects
- next.config.js
- package.json
- eslint.config.mjs

2. Verdict: REQUEST_CHANGES

3. Critical Issues:
- None.

4. Major Issues:
- **Wrong legacy redirect mapping for `ai-development`** — `public/_redirects:12-13` redirects `/[lang]/services/ai-development` to `/[lang]/services/web3-blockchain`. That legacy route previously represented the AI-assisted development / multi-agent delivery offer, not the Web3 line, so this sends existing links and bookmarks to the wrong taxonomy bucket. It breaks the requested route/data consistency and legacy redirect coverage. This redirect needs to point to the closest successor in the new 3-line model instead of Web3.
- **Contact endpoint still misses server-verifiable abuse protection** — `functions/api/contact.ts:15-24`, `87-119`, and `122-129` implement validation plus delivery/fallback handling, but they do not satisfy the architecture requirement for “basic abuse protection”. The only real barrier is the client honeypot field; on the server there is no rate limiting, Turnstile/challenge check, origin allowlist, or similar verifiable protection, while CORS is explicitly opened to `*`. Because this endpoint now triggers real SendGrid delivery, it is still trivial to script spam against the inbox/quota.

5. Minor Issues:
- **Lint gate regression after the Next 15 upgrade** — `eslint.config.mjs:1-29` only installs the TypeScript parser with an empty `rules` object, and `npm run lint` warns that the Next.js plugin is not detected. So the newly added lint setup no longer enforces meaningful Next/React/static-analysis rules even though the repo now depends on ESLint 9.
- **New contact tests are not wired into the project scripts** — `lib/contact.test.ts:1-9` passes when run with `npx tsx --test lib/contact.test.ts`, but there is no `test` script in `package.json:5-10`, and plain `node --test lib/contact.test.ts` currently fails module resolution. That makes the new validation coverage easy to miss in future verification.

6. Good Practices:
- **Honest contact failure behavior is implemented correctly** — `functions/api/contact.ts` returns 503 when the provider is not configured and 502 on delivery failure instead of faking success.
- **Client/server validation is centralized** — `lib/contact.ts` is reused by both the form UI and the Cloudflare Function, which reduces drift in inquiry-type handling and validation behavior.
- **PII handling in email content is reasonably careful** — HTML email content is escaped in `buildContactEmailHtml`, and the submitted payload is normalized before use.
- **V1 taxonomy/content alignment is largely solid** — the home/services/projects/contact pages and supporting data are consistently rebuilt around the 3-service model, and the representative proof selection for Japan Life Navi, Rigel, and Carina matches the feature docs.

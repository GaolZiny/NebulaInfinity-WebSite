# Coder Fix Review — task-158

## Summary
- Corrected the legacy `ai-development` redirect so it now lands on `ai-workflow`, matching the approved 3-service taxonomy.
- Hardened `functions/api/contact.ts` with a server-verifiable origin allowlist and aligned CORS behavior to the same rule.
- Added a dedicated origin/CORS helper plus tests for the new abuse-protection behavior.
- Restored a meaningful ESLint gate for the Next 15 upgrade path and added a project `test` script for the contact unit tests.

## Contact abuse protection
- The contact function now verifies the request origin server-side before parsing the payload or attempting delivery.
- Allowed origins are read from `CONTACT_ALLOWED_ORIGINS` as a comma-separated env var.
- If `CONTACT_ALLOWED_ORIGINS` is not set, the function falls back to the production site origins:
  - `https://www.nebulainfinity.com`
  - `https://nebulainfinity.com`
- CORS is no longer `*`; the function only returns `Access-Control-Allow-Origin` for an approved origin.
- Requests without an approved origin now receive `403 origin_not_allowed`.

## Verification
- `npm run lint`
- `npx tsc --noEmit`
- `npm test`
- `npm run build`

## Notes
- The allowlist design keeps V1 simple and server-verifiable without introducing new third-party challenge dependencies.
- Preview or local origins can be added explicitly through `CONTACT_ALLOWED_ORIGINS` when needed.

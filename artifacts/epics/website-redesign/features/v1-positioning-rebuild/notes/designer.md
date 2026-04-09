## Design Report
1. Design approach:
- Rebuilt the V1 page set around one consistent message hierarchy: Nebula Infinity is an `AI社会実装のパートナー` that turns AI into front-line capability, converts people-dependent know-how into organizational assets, and applies Web3.0 in business-ready form.
- Kept the Light Premium Bento direction and existing token architecture intact.
- Added only three reusable presentation patterns to the design system for implementation realism across pages:
  - Proof snapshot card
  - Transformation flow panel
  - Step rail
- Treated copy and layout as one system: hero length, card density, CTA phrasing, and proof placement were all designed together.

2. Output files:
- `design/DESIGN_SYSTEM.md` (updated with reusable patterns)
- `design/visual/home.md`
- `design/visual/services-index.md`
- `design/visual/ai-workflow.md`
- `design/visual/ai-application.md`
- `design/visual/web3-blockchain.md`
- `design/visual/projects-index.md`
- `design/visual/about.md`
- `design/visual/contact.md`
- `design/visual/REVIEW_SUMMARY.md`
- `artifacts/epics/website-redesign/features/v1-positioning-rebuild/notes/designer.md`

3. Key decisions:
- Locked the public taxonomy to exactly 3 service lines everywhere:
  1. `AI Workflow Design & Development`
  2. `AI Application Design & Development`
  3. `Web3.0 / Blockchain Application Design & Development`
- Framed AI Workflow as workflow assetization capability, not only a development pipeline service.
- Used Japan Life Navi and Rigel as the central AI Application proof points.
- Used Carina as the named Web3 proof point while explicitly preserving broader Web3 capability.
- Removed all V1 drift toward blog/news or editorial patterns.
- Repositioned Contact around low-friction business intake with taxonomy aligned to the 3 services.

4. Content summary:
- Tone: composed, implementation-minded, specific, and high-trust.
- Home and About lead with positioning and partner credibility.
- Services and detail pages clarify who each line is for, what gets delivered, and what proof supports it.
- Projects explicitly covers workflow examples, AI applications, and Web3 proof in one consistent structure.
- Contact copy reassures visitors that incomplete requirements are acceptable.

5. Notes for Coder:
- Use the page copy in the visual specs verbatim unless PM/strategy updates the source messaging.
- Preserve the official service line wording exactly.
- Keep workflow example cards presented as representative examples, not as the full service boundary.
- On `projects-index`, if no public detail route exists for workflow examples, route those cards to Contact or keep them as anchored detail surfaces; do not invent unsupported blog/case routes.
- Maintain keyboard-visible focus states on filter chips, CTA buttons, FAQ accordion, and form fields.
- Keep the light palette and restrained gold emphasis; do not drift into neon, dark crypto, or sci-fi styling.

6. Navigation flow:
- Global header on all V1 pages: `Home / Services / Projects / About / Contact + language toggle + primary Contact CTA`
- Minimum transition map:
```text
Home -> Services Index -> {AI Workflow | AI Application | Web3.0 / Blockchain}
Home -> Projects Index -> {Japan Life Navi | Rigel | Carina}
Home -> Contact
About -> Services / Contact
Projects Index -> Contact
Services Index -> Contact / Projects
Contact -> success state (same page)
```
- Back behavior:
  - Logo always returns to Home
  - Service detail breadcrumb returns to Services Index
  - Project detail route remains the existing detail page flow
- Unauthenticated users: all V1 marketing pages stay fully accessible.

7. To confirm / improvable:
- Whether workflow examples should remain non-detail cards in V1 or receive structured public detail pages later.
- Whether clean product screenshots exist for Japan Life Navi / Rigel / Carina; if not, use abstract framed placeholders first.
- Whether Contact should prefill the service select from service/project CTA origins during implementation.

8. Git commit:
- `design(v1-positioning-rebuild): add V1 page visual specs [task-154]` (final HEAD hash returned in completion callback)

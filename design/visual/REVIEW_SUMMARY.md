# Review Summary — V1 Positioning Rebuild Visual Direction

## 1. Screen list + key points
- `home.md`
  - Locks the V1 positioning into a premium light homepage.
  - Centers the message on practical AI implementation and know-how assetization.
  - Maps proof directly to the 3 approved service lines.
- `services-index.md`
  - Reframes services around 3 implementation lines only.
  - Adds clear buyer decision logic and proof mapping.
- `ai-workflow.md`
  - Explicitly frames AI Workflow as broad workflow assetization capability.
  - Keeps multi-agent development and product research as examples only.
- `ai-application.md`
  - Positions AI Application around product and tool delivery that people actually use.
  - Centers proof on Japan Life Navi and Rigel.
- `web3-blockchain.md`
  - Keeps Web3.0 business-first and non-speculative.
  - Uses Carina as proof without narrowing overall capability.
- `projects-index.md`
  - Shows representative proof across workflow examples, AI application cases, and Web3.
  - Preserves workflow breadth even though public workflow detail pages are limited.
- `about.md`
  - Repositions the company as an implementation partner, not a generic AI studio.
  - Anchors the approved message lines and 3 service lines.
- `contact.md`
  - Aligns inquiry taxonomy to the approved 3 services.
  - Makes the contact entry point practical and low-friction.

## 2. Design System application notes
- Kept the Light Premium Bento direction from `DESIGN_SYSTEM.md`.
- Preserved the CSS-variable-friendly palette and typography logic:
  - light neutral backgrounds
  - navy structure
  - restrained gold emphasis
  - Orbitron / Exo 2 pairing
- Reused and formalized the following cross-page patterns:
  - Proof snapshot card
  - Transformation flow panel
  - Step rail
- Avoided all non-V1 directions:
  - no blog/news surfaces
  - no legacy six-service taxonomy
  - no crypto-native black/neon styling
  - no AI-hype or sci-fi illustration language

## 3. Content consistency notes
- The approved positioning lines are preserved and distributed intentionally:
  - Home -> `AI社会実装のパートナー`, `「AI」を、現場の「即戦力」へ`
  - AI Workflow -> `「属人」のノウハウを、組織の「資産」に`
  - Web3 -> `Web3.0テクノロジーを、ビジネスへ`
- The official service lines are shown consistently as:
  1. `AI Workflow Design & Development`
  2. `AI Application Design & Development`
  3. `Web3.0 / Blockchain Application Design & Development`
- Japan Life Navi and Rigel are the named AI Application proof anchors.
- Carina is the named Web3 proof anchor.
- Workflow examples remain representative examples only and are not written as the service boundary.

## 4. States and responsive coverage
- All pages specify the required interaction states where relevant:
  - default
  - hover
  - focus-visible
  - pressed / active
  - disabled
  - loading / success / error where relevant on Contact
- Responsive behavior is defined for desktop, tablet, and mobile stacks.

## 5. Items the coder should preserve exactly
- Service taxonomy and wording above.
- Contact inquiry type options aligned to the 3 services + `Still defining / Other`.
- Workflow examples presented as examples, not the limit of the offering.
- Proof mapping on Home / Services / Projects.
- No blog/news components or routes in V1 page implementation.

## 6. Minor implementation watch-outs
- Workflow proof cards on `projects-index.md` are designed as representative-example surfaces; if no public case detail route exists for those, route them to Contact or keep them as anchored detail cards rather than inventing new public case routes.
- Use real product screenshots for Japan Life Navi / Rigel / Carina only if current assets are available and clean; otherwise use abstract system frames consistent with the brand guidelines.
- Keep filter chips and form controls keyboard accessible with visible focus states.

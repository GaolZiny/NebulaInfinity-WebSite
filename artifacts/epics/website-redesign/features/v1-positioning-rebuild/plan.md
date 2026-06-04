# Plan — v1-positioning-rebuild

## Execution Plan

### Phase 0 — PM Doc Lock
- Update project-level docs
- Lock feature handoff/spec/plan/tasks
- Confirm V1 exclusions (especially blog)

### Phase 1 — Page Content + Visual Direction
- Produce final page-level structure and page copy direction for:
  - Home
  - Services index
  - AI Workflow
  - AI Application
  - Web3.0 / Blockchain
  - Projects / Cases
  - About
  - Contact
- Ensure Japanese / English consistency

### Phase 2 — Implementation
- Update content/data structures as needed
- Update routes/pages/components
- Update case taxonomy and service metadata
- Implement real contact delivery path

### Phase 3 — Verification
- Build verification
- Route verification (ja/en)
- Responsive visual verification
- Contact form real submission verification
- 404 verification
- Deploy verification

## Rollout Notes
- Prefer route-safe, incremental implementation on existing structure
- Favor content/data migration over unnecessary technical churn
- Keep Cloudflare Pages compatibility at every step

## Rollback Strategy
- Preserve current working branch history via normal git commits
- If contact integration fails, keep existing UI but do not mark V1 usable
- If one service page slips, do not declare usable-state completion

## Risks
1. Legacy copy may remain in hidden data sources
2. Contact delivery may require external provider/environment configuration
3. Workflow cases may need a lightweight schema extension in current data layer
4. Japanese / English alignment may drift without a single approved source of truth

## Dependencies
- PM docs approved as source of truth
- Page-level copy/visual direction prepared before coding
- Contact delivery destination / provider confirmed during implementation

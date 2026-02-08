# PROJECT_MEMORY — NebulaInfinity Website

## Now
- Services ページ完全実装 + 品質修正完了（字体・レイアウト・詳細ページ・視覚 QA PASS）
- デプロイ可能状態
- 次のタスク待ち

## Status

### Project Docs
| Document | Status |
|----------|--------|
| BRIEF.md | ✅ done |
| REQUIREMENTS.md | ✅ done |
| ARCHITECTURE.md | ✅ done |
| PROJECT_MEMORY.md | ✅ done (this file) |

### Epics
| Epic | Status | Features |
|------|--------|----------|
| website-redesign | progressing | design-tokens-migration (done), services-page-design (done), services-page-implementation (progressing) |

## Next
- Z が Telegram 群組に topic 作成（NebulaInfinity-WebSite）
- PM が topic 経由でタスク受付開始
- 次の作業：ページデザイン細化 + コンテンツ充実 + ブログセクション新設 + agent-skills-jp プロジェクト追加

## Decisions
| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-07-17 | Adopt artifacts structure | Standardize feature delivery |
| 2025-07-17 | Epic: website-redesign | Dark → Light professional redesign |
| 2025-07-17 | First feature: design-tokens-migration | Foundation before component work |
| 2026-02-08 | Project init docs created | BRIEF / REQUIREMENTS / ARCHITECTURE for PM pipeline |
| 2026-02-08 | Blog section planned | Markdown-based, no CMS, SEO + lead generation |
| 2026-02-08 | Design direction: keep current | Light Premium Bento (Navy + Gold) style confirmed by Z |

## Glossary
| Term | Definition |
|------|-----------|
| Bento Grid | 12-column grid layout with card-based sections |
| Static Export | `next build` → `out/` → Cloudflare Pages deploy |
| i18n | Route-level internationalization (ja/en) |

# PROJECT_MEMORY — NebulaInfinity Website

## Now
- コンテンツ・リポジショニング完了（pipeline-035）
- サービス: 4→3 AI ソリューション（ai-workflow / ai-product / ai-development）
- プロジェクト: gaijin-life-navi + Rigel 追加、Astra 削除、regel→rigel 修正
- Homepage に実績ハイライトセクション追加（KPI 付き）
- 旧URL 301リダイレクト設定済み
- Cloudflare Pages デプロイ待ち

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
| website-redesign | progressing | design-tokens-migration (done), services-page-design (done), services-page-implementation (done), about-page-redesign (done), projects-page-redesign (done), contact-page-redesign (done), content-overhaul (progressing) |

## Next
- Cloudflare Pages デプロイ（git push 済み → 自動デプロイ確認）
- 方法論専用ページ（/method or /how-we-build）— 首頁セクションで暫定対応済み、専用ページは Z 判断
- ブログセクション新設
- Instant MVP (Phase 0) 再開

## Decisions
| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-07-17 | Adopt artifacts structure | Standardize feature delivery |
| 2025-07-17 | Epic: website-redesign | Dark → Light professional redesign |
| 2025-07-17 | First feature: design-tokens-migration | Foundation before component work |
| 2026-02-08 | Project init docs created | BRIEF / REQUIREMENTS / ARCHITECTURE for PM pipeline |
| 2026-02-08 | Blog section planned | Markdown-based, no CMS, SEO + lead generation |
| 2026-02-08 | Design direction: keep current | Light Premium Bento (Navy + Gold) style confirmed by Z |

## Technical Details
- **域名**: nebulainfinity.com (Cloudflare Pages 免费套餐)
- **技术栈**: Next.js 14 + TypeScript + CSS Modules + 静态导出
- **项目路径**: /root/.openclaw/projects/NebulaInfinity-WebSite
- **Dev server**: systemd 服務 (nebula-devserver.service) + scripts/devserver.sh + scripts/smoke-test.sh
- **Telegram Topic**: 66 (PJ-Work-Center 群組 -1003830068021)
- **已完成 Pipeline**: pipeline-001 (services-page-design), services-page-implementation, pipeline-002 (content-overhaul)

## Known Issues
- /ja 和 /en 在 dev mode 返回 404（build 正常）— Next.js dev + export + trailingSlash 交互問題
- homepage 404 修復待ち

## Backlog
- ROADMAP.md 創建
- miryo.AI 競品分析の設計灵感落地（互動 quiz hero、信頼徽章、価格錨定等）
- Blog セクション新設

## Instant MVP (Phase 0)
- **概念**: AI 解決方案模擬器 — 非技術用戶答題 → AI 診断・提案・見積
- **設計演進**: V1(全模板)→V2(模板+AI填充)→V3(純Agent)→V4(Agent+UI模板混合)
- **Phase 0 決定**: Quiz→AI生成PDF(診断+提案+見積)→Email。Agent不用、OpenClaw不用
- **Phase 0 技術**: Next.js静的→Cloudflare Worker→Anthropic API(sonnet)→PDF(Puppeteer)→Email(Resend)
- **成功基準**: 月30+ leads → Phase 1(Agent Demo)
- **詳細文档**: `docs/INSTANT_MVP_IDEA.md`, `docs/PHASE0_AI_ASSESSMENT.md`

## Glossary
| Term | Definition |
|------|-----------|
| Bento Grid | 12-column grid layout with card-based sections |
| Static Export | `next build` → `out/` → Cloudflare Pages deploy |
| i18n | Route-level internationalization (ja/en) |

# Nebula Infinity Website

Nebula Infinity（AI 社会実装のパートナー）的企业官网。首页为单页主叙事，围绕
3 条服务线（AI Workflow / AI Application / AI-Driven Development）与代表案例展开，
采用 Next.js 构建，静态导出后通过 Cloudflare Pages 部署。

## 🚀 技术栈

- **框架**: Next.js 15 (App Router, `output: 'export'` 静态导出)
- **语言**: TypeScript 5.6
- **UI**: React 18.3
- **样式**: CSS Modules + CSS Variables（共享样式表 `styles/marketing.module.css`）
- **字体**: Orbitron（标题）+ Exo 2 / Noto Sans JP（正文，Google Fonts）
- **部署**: Cloudflare Pages（跟随 GitHub `main` 自动构建部署）
- **国际化**: 路由级（日语 `ja` / 英语 `en`，根路径 `/` 重定向到 `/ja/`）

## 🧭 信息架构（首页锚点模式）

导航的 Services / Projects / About 滚动到**首页对应区块**；详情页与 Contact 为独立路由。

```
/[lang]/                              # 首页(单页叙事)
  #services                           #   服务区块 → 卡片链到各服务详情
  #projects                           #   代表案例区块 → 卡片链到各项目详情
  #about                              #   公司理念 + 公司信息
  /services/[serviceId]               # 服务详情:ai-workflow / ai-application / ai-driven-development
  /services/ai-workflow/ai-dev-flow   # AI Workflow 方法论子页(Agentic AI 開発ワークフロー)
  /projects/[slug]                    # 项目详情:gaijin-life-navi / rigel / astra
  /contact                            # 联系页(独立)
  /not-found                          # 404
```

> 已退役:独立的 `/services`、`/projects`、`/about` 索引页(并入首页锚点),以及
> `web3-blockchain` 服务线 / Carina 案例(被 AI-Driven Development / Astra 取代)。

## 📦 项目结构

```
app/[lang]/          # Next.js App Router 页面(见上方信息架构)
components/           # React 组件(layout / ui / seo / contact / projects)
data/                # 静态数据:services.ts、projects/、translations/(ja|en)
functions/api/       # Cloudflare Pages Function:contact.ts(表单投递)
lib/                 # 工具(i18n、contact 校验/投递)
styles/              # theme.css(tokens) + globals.css + marketing.module.css
design/              # 设计 SSOT(DESIGN_SYSTEM / BRAND_GUIDELINES / visual/)
public/              # 静态资源(_redirects、robots.txt、images/)
artifacts/           # 项目基线 + 历史归档(legacy/)
```

## 🛠️ 本地开发

```bash
npm install
npm run dev      # http://localhost:3000/ja
npm run build    # 静态导出到 out/
npm run lint
npm test         # tsx --test，跑 lib/*.test.ts
```

## 🌐 Cloudflare Pages 部署

在 Cloudflare Pages 控制台:

- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Node version**: 20（Next.js 15 需要 ≥ 18.18）

部署跟随 GitHub `main` 分支自动触发。

### 环境变量（联系表单需要）

联系表单经 Cloudflare Pages Function（`functions/api/contact.ts`）用 **SendGrid** 投递:

| 变量 | 说明 | 必需 |
|------|------|------|
| `SENDGRID_API_KEY` | SendGrid API 密钥 | 是 |
| `CONTACT_TO_EMAIL` | 收件邮箱(如 `info@nebulainfinity.com`) | 是 |
| `CONTACT_FROM_EMAIL` | 发件邮箱(需在 SendGrid 验证) | 是 |
| `CONTACT_ALLOWED_ORIGINS` | 来源白名单(逗号分隔,CORS/防滥用) | 否(有内置默认) |

未配置时表单返回 `503`、投递失败返回 `502`,并以日/英双语提示直接邮件联系
`info@nebulainfinity.com`。详见 [`docs/CLOUDFLARE_EMAIL_SETUP.md`](docs/CLOUDFLARE_EMAIL_SETUP.md)。

## 🎨 设计系统

**Light Premium Bento**(浅色、高信任、专业商务）。SSOT 见 [`design/`](design/)；
tokens 在 `styles/theme.css`:

- **主题**: 浅色(背景 `#f8fafc`,文字 `#020617`)
- **主色 (navy)**: `#0f172a`　**强调 / CTA (gold)**: `#ca8a04`
- **字体**: Orbitron / Exo 2 / Noto Sans JP

## 📝 内容更新

- **服务线**: `data/services.ts`
- **项目**: `data/projects/projects.json` + `data/projects/[slug].json`,图片放 `public/images/projects/`
- **翻译**: `data/translations/ja.json`、`data/translations/en.json`

## 🔍 SEO

Meta / OGP / Twitter Card / JSON-LD / `sitemap.ts` / `robots.txt` / hreflang 多语言 / canonical。

## 📄 许可证

© 2026 Nebula Infinity. All rights reserved.

# GOTCHAS.md - 项目踩坑记录

> Workers 在执行任务前必须读此文件。遇到新问题后更新。

## Next.js 开发相关

### .next 缓存损坏（2026-02-09，已发生 3 次）
- **触发条件**：dev server 运行中修改源文件
- **现象**：500 错误 / CSS/JS 404 / 页面无渲染
- **Coder 必须执行**：
  1. 开始编码前：`pkill -f "next dev" 2>/dev/null; rm -rf .next`
  2. 编码期间：禁止 `npm run dev`，用 `npm run build` 验证
  3. 编码完成后：`rm -rf .next` 再 commit
- **恢复**：`rm -rf .next && npm run dev`

### Dev server 管理（2026-02-11 彻底修复）
- **历史问题**：反复出现 dev server 不启动/被关闭/缓存损坏，改了 N 次提示词都没解决
- **根因**：靠 AI 记住复杂流程不可靠，nohup/tmux 进程会死
- **最终方案**：用**脚本 + systemd** 替代提示词规则
  - `scripts/devserver.sh` — dev server 管理脚本（start/stop/restart/status）
  - `scripts/smoke-test.sh` — 全量页面自动检测 + HTTP 状态验证
  - `nebula-devserver.service` — systemd 服务，崩溃自动重启，开机自启
- **Coder 流程**：
  1. 开始编码：`sudo systemctl stop nebula-devserver`
  2. 编码（禁止 dev server）
  3. `npm run build` → commit
  4. `sudo systemctl restart nebula-devserver && sleep 15`
  5. `bash scripts/smoke-test.sh` → 全部通过才能 announce
- **⛔ 禁止手动 pkill/kill/rm -rf .next** — 全部通过 systemctl 和脚本管理

### 静态导出注意
- 项目使用 `output: 'export'`（静态导出到 Cloudflare Pages）
- 不支持 API Routes、Server Components 等服务端功能
- `middleware.ts` 在静态导出模式下不生效（已 rename 为 .bak）

## Git 规范

### Commit 必须
- 每个任务完成后必须 commit（一任务一 commit）
- 格式：`<type>(<scope>): <summary> [<task-id>]`
- 禁止 push（PM 职责）

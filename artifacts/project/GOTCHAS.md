# GOTCHAS.md - 项目踩坑记录

> Workers 在执行任务前必须读此文件。遇到新问题后更新。

## Next.js 开发相关

### .next 缓存损坏（2026-02-09）
- **触发条件**：dev server 运行中修改源文件
- **现象**：500 错误，webpack chunk 找不到
- **预防**：编码工作时不启动 dev server
- **恢复**：`rm -rf .next && npm run dev`

### 静态导出注意
- 项目使用 `output: 'export'`（静态导出到 Cloudflare Pages）
- 不支持 API Routes、Server Components 等服务端功能
- `middleware.ts` 在静态导出模式下不生效（已 rename 为 .bak）

## Git 规范

### Commit 必须
- 每个任务完成后必须 commit（一任务一 commit）
- 格式：`<type>(<scope>): <summary> [<task-id>]`
- 禁止 push（PM 职责）

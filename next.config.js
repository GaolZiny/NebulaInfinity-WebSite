/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的导出配置 - 适用于 Cloudflare Pages
  output: 'export',

  // 禁用图片优化 - 避免使用 Cloudflare 边缘函数
  images: {
    unoptimized: true,
  },

  // 添加尾部斜杠
  trailingSlash: true,

  // 基础路径（如果需要可以配置）
  // basePath: '',

  // 禁用 x-powered-by 头
  poweredByHeader: false,

  // 严格模式
  reactStrictMode: true,

}

module.exports = nextConfig

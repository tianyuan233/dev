import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh',
  title: '前端开发技术笔记',
  titleTemplate: '记录前端开发技术和 Node.js 开发技术',
  description: '记录前端开发技术和 Node.js 开发技术',
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: false,
    nav: nav(),
    socialLinks: [{ icon: 'github', link: 'https://github.com/tianyuan233' }],
    footer: {
      copyright: 'Copyright © 2022-present tianyuan233',
    },
  },
})

function nav() {
  return [
    { text: '首页', link: '/' },
    { text: '前端基础', link: '/frontend/' },
    { text: '前端框架', link: '/frameworks/' },
    { text: '设计模式', link: '/design-pattern/',activeMatch: '/design-pattern/' },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
      ]
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
      ]
    },
    {
      text: 'Theme',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/guide/theme-introduction' },
      ]
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
        { text: 'Theme Configs', link: '/config/theme-configs' },
        { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' }
      ]
    }
  ]
}

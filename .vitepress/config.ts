import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }],
  ],
  title: '前端开发技术笔记',
  markdown: {
    lineNumbers: false,
  },
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: false,
    nav: nav(),
    sidebar: {
      '/design-pattern/': sidebarDesignPattern(),
      '/vue/': sidebarVue(),
      '/react/': sidebarReact(),
      '/frontend/': sidebarFrontend(),
      '/tool/': sidebarTool(),
      '/network/': sidebarNetwork(),
    },
    // algolia: {
    //   appId: '0L9ORWR03G',
    //   apiKey: '9d7caab1188b8191a518bc4efaa454ce',
    //   indexName: 'vitepress',
    // },
    socialLinks: [{ icon: 'github', link: 'https://github.com/tianyuan233' }],
    footer: {
      copyright: 'Copyright © 2022-present tianyuan233',
    },
  },
})

function nav() {
  return [
    { text: '首页', link: '/' },
    { text: '前端基础', link: '/frontend/javascript/es6' },
    {
      text: '前端框架',
      items: [
        { text: 'Vue.js', link: '/vue/vue3-start' },
        { text: 'React.js', link: '/react/base' },
      ]
    },
    {
      text: '通用知识',
      items: [
        { text: '设计模式', link: '/design-pattern/singleton' },
        { text: 'HTTP', link: '/network/http' },
      ]
    },
    {
      text: '开发工具',
      items: [
        { text: 'Git', link: '/tool/git-flow' },
        { text: 'VS Code', link: '/tool/vscode' },
      ]
    },

  ]
}

function sidebarDesignPattern() {
  return [
    {
      text: '设计模式',
      items: [
        { text: '单例模式', link: '/design-pattern/singleton' },
        { text: '代理模式', link: '/design-pattern/proxy' },
      ]
    }
  ]
}

function sidebarVue() {
  return [
    {
      text: 'Vue2',
      items: [
        { text: '插件', link: '/vue/plugin' },
      ]
    },
    {
      text: 'Vue3',
      items: [
        { text: '基础', link: '/vue/vue3-start.md' },
      ]
    }
  ]
}

function sidebarReact() {
  return [
    {
      text: 'React Learning',
      items: [
        { text: '基础', link: '/react/base' },
      ]
    },
    {
      text: 'Hooks',
      items: [
        { text: 'useMemo', link: '/react/hooks-useMemo' }
      ]
    }
  ]
}

function sidebarFrontend() {
  return [
    {
      text: 'JavaScript',
      items: [
        { text: 'ES6', link: '/frontend/javascript/es6' },
        { text: 'Event', link: '/frontend/javascript/event' },
        { text: 'Event Loop', link: '/frontend/javascript/event-loop' },
        { text: 'Promise', link: '/frontend/javascript/promise' },
        { text: '手写代码', link: '/frontend/javascript/interview' },
      ]
    },
    {
      text: 'CSS',
      items: [
        { text: 'SCSS语法', link: '/frontend/css/scss' },
      ]
    }
  ]
}
function sidebarTool() {
  return [
    {
      text: 'Git',
      items: [
        { text: 'Git 协作指南', link: '/tool/git-flow.md' },
        { text: 'Git 代理配置', link: '/tool/git-proxy.md' },
      ]
    },
    {
      text: 'VS Code',
      items: [
        { text: 'VS Code', link: '/tool/vscode.md' },
      ]
    }

  ]
}

function sidebarNetwork() {
  return [
    {
      text: 'HTTP',
      items:[
        {
          text: 'HTTP基础',
          link: '/network/http-base'
        },
      ]
    },
    {
      text: 'HTTPS',
      items:[
        {
          text: 'HTTPS基础',
          link: '/network/https-base'
        },
      ]
    },
  ]

}

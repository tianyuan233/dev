import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh',
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
      '/frontend/': sidebarFrontend()
    },
    algolia: {
      appId: '0L9ORWR03G',
      apiKey: '9d7caab1188b8191a518bc4efaa454ce',
      indexName: 'vitepress',
    },
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
    { text: '前端框架', 
      items: [
        { text: 'Vue.js', link: '/vue/' }
      ] 
    },
    { text: '设计模式', link: '/design-pattern/',activeMatch: '/design-pattern/' },
  ]
}

function sidebarDesignPattern() {
  return [
    {
      text: '设计模式',
      items: [
        { text: '单例模式', link: '/design-pattern/singleton' },
        { text: '代理模式', link: '/design-pattern/proxy'},
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
        { text: 'Introduction', link: '/config/introduction' },
      ]
    }
  ]
}

function sidebarFrontend() {
  return [
    {
      text: 'JavaScript',
      items: [
        { text: 'ES6', link: '/frontend/javascript/es6' }
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

export default {
  lang: 'zh',
  title: '前端开发技术笔记',
  titleTemplate: '分享前端开发技术和 Node.js 开发技术',
  description: '分享前端开发技术和 Node.js 开发技术',
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
  themeConfig: {
    // logo: '/icon.png',
    siteTitle: false,
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端基础',
        items: [
          { text: 'HTML', link: '/html' },
          { text: 'CSS', link: '/css' },
          { text: 'JavaScript', link: '/javascript' },
          { text: 'TypeScript', link: '/typescript' },
        ],
      },
      {
        text: '前端框架',
        items: [
          { text: 'Vue', link: '/vue' },
          { text: 'React', link: '/react' },
        ],
      },
      {
        text: '前端工程化',
        link: '/engineering',
      },
      {
        text: '性能优化',
        link: '/performance',
      },
      // {
      //   text: '浏览器原理',
      //   link: '/browser',
      // },
      // {
      //   text: '移动端',
      //   link: '/mobile',
      // },
      {
        text: 'Node.js',
        link: '/nodejs',
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/tianyuan233' }],
    footer: {
      copyright: 'Copyright © 2022-present tianyuan233',
    },
  },
}
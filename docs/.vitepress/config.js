import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { SearchPlugin } from 'vitepress-plugin-search'
import { version } from '../../package.json'

export default defineConfig({
  title: 'PrimeVue Nuxt 3',
  description: 'PrimeVue Nuxt 3',
  themeConfig: {
    footer: {
      message: 'VitePress Blog Starter',
      copyright: 'Copyright © 2022 SFXCode',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sfxcode/nuxt-primevue' },
    ],
    editLink: {
      pattern: 'https://github.com/sfxcode/nuxt-primevue/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  vite: {
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
      SearchPlugin(),
    ],
  },
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'Config', link: '/config/', activeMatch: '/config/' },
    {
      text: 'External Docs',
      items: [
        {
          text: 'PrimeVue',
          link: 'https://www.primefaces.org/primevue',
        },
        {
          text: 'Formkit',
          link: 'https://formkit.com',
        },
        {
          text: 'Formkit-PrimeVue',
          link: 'https://github.com/sfxcode/formkit-primevue',
        },
      ],
    },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/sfxcode/nuxt-primevue/blob/main/CHANGELOG.md',
        },
      ],
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is this?', link: '/guide/' },
        { text: 'Getting started', link: '/guide/getting-started' },
      ],
    },
    {
      text: 'PrimeVue',
      collapsible: true,
      items: [
        { text: 'About PrimeVue', link: '/guide/primevue' },
      ],
    },
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/' },
      ],
    },
  ]
}

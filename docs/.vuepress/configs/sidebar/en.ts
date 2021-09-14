import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/getting-started.md',
        '/guide/configuration.md',
        '/guide/upgrading.md',
        '/guide/clients.md',
        '/guide/credits.md',
      ],
    },
  ],
}

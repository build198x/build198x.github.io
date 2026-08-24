// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://build198x.github.io',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // github-dark sets comments at #6a737d on #24292e — 3.05:1, which fails
      // AA and makes the commentary in every listing the least readable part
      // of it. github-dark-default is the same family at 6.15:1.
      theme: 'github-dark-default',
      wrap: true,
    },
  },
});

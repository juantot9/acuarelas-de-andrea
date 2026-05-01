// @ts-check
import { defineConfig, sharpImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://acuarelasdeandrea.com',
  image: {
    service: sharpImageService(),
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/aviso-legal/') && !page.includes('/privacidad/'),
    }),
  ],
});

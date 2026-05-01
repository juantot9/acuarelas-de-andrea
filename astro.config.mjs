// @ts-check
import { defineConfig, sharpImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
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

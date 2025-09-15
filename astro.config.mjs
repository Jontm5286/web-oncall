// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@astrojs/tailwind';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [tailwindcss(), icon()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
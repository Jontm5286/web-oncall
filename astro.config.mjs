// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [tailwindcss(), icon()],
});
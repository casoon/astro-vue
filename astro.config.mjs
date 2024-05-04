import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 8080
  },
  integrations: [vue()],
  image: {
    // Example: Enable the Sharp-based image service with a custom config
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
  output: 'server',
  adapter: cloudflare(),
});

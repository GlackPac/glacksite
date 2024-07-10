import { defineConfig } from 'astro/config';
import { imageService } from '@unpic/astro/service';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://mylesg.me",
  outDir: './dist/',
  integrations: [preact()],
  image: {
    service: imageService({
      placeholder: "blurhash",
    }),
  },
});
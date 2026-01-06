// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://jisygmar.encognitio.com/',
  //site: 'https://dev-encognitio.github.io',
  //base: '/jisygmar_v0.01',
});

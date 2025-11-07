// svelte.config.js
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  compilerOptions: {
    compatibility: {
      componentApi: 4, // Support Svelte 4 component API compatibility
    },
  },
  preprocess: vitePreprocess(),
};

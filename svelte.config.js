import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess({})],

  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          '$assets': path.resolve('./assets'),
        }
      }
    }
  }
};

export default config;

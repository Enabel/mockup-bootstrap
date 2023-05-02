import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        ignored: ["**/.idea/**", "**/.git/**"],
      },
    },
    ssr: {
      noExternal: ["@fortawesome/*"],
    },
  },
});

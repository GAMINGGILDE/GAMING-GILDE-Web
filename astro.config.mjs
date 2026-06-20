import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { fileURLToPath, URL } from "node:url";

const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  output: "static",
  trailingSlash: "ignore",
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        "@": resolvePath("./src"),
      },
    },
  },
});

import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  site: "https://gaming-gilde.org",
  output: "static",
  trailingSlash: "ignore",
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": resolvePath("./src"),
      },
    },
  },
});

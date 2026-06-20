import { defineConfig } from "astro/config";
import icon from "astro-icon";
import { fileURLToPath, URL } from "node:url";

const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  output: "static",
  trailingSlash: "ignore",
  integrations: [icon()],
  vite: {
    resolve: {
      alias: {
        "@": resolvePath("./src"),
      },
    },
  },
});

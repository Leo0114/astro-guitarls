import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://Leo0114.github.io",
  base: "/astro-guitarls",
  integrations: [react()],
});

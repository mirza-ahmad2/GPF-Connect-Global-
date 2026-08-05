// @lovable.dev/vite-tanstack-config bundles TanStack Start, React, Tailwind, Nitro, and related plugins.
// You can pass additional config via defineConfig({ vite: { ... }, nitro: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
});

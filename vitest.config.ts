/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./tests/vitest.setup.ts"],
    exclude: ["node_modules", "dist", "**/.*", ".next", "vercel", "./src/generated/**", "prisma"],
    coverage: {
      reporter: "html",
    },
  },
});
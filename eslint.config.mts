import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextTs,
  ...nextVitals,
  globalIgnores([".next/**", "build/**", "dist/**", "node_modules/**", "next-env.d.ts"]),
]);
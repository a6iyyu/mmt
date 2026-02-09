import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import { configs } from "@eslint/js";
import { Linter } from "eslint";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const compat = new FlatCompat({
  allConfig: configs.all,
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: configs.recommended,
});

export default [
  { ignores: [".next/**", "build/**", "dist/**", "node_modules/**", "next-env.d.ts"] },
  ...fixupConfigRules(compat.extends("next/core-web-vitals", "next/typescript")),
] as Linter.Config[];
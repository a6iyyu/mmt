"use strict";

import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

/** @type {import("@eslint/eslintrc").FlatCompat} */
const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

/** @type {import("eslint").Linter.Config<import("eslint").Linter.RulesRecord>} */
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  { ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", "src/generated/**"] },
];

export default eslintConfig;
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js and TypeScript rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Specify parser options
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
    },
    rules: {
      // Example customizations
      "prefer-const": "error", // Enforce use of `const` when possible
      "no-console": "warn", // Warn on console statements
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ], // Ignore unused variables starting with `_`
    },
  },

  // Additional settings for JavaScript files
  {
    files: ["**/*.js"],
    rules: {
      "prefer-const": "error",
    },
  },
];

export default eslintConfig;

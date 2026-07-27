import stylistic from "@stylistic/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        plugins: { "@stylistic": stylistic },
        rules: {
            "@stylistic/indent": ["error", 4, { SwitchCase: 1 }],
            "@stylistic/jsx-indent-props": ["error", 4],
            "@stylistic/no-trailing-spaces": "error",
            "@stylistic/eol-last": ["error", "always"],
        },
    },
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
]);

export default eslintConfig;

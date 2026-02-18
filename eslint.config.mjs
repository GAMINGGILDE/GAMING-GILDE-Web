import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  eslintConfigPrettier,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "import/no-anonymous-default-export": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/static-components": "off",
      "react/no-children-prop": "off",
      "react/no-unescaped-entities": "off",
    },
  },
];

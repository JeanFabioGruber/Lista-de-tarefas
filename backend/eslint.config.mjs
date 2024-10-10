import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node, // Definindo os globais do Node.js
    },
  },
  pluginJs.configs.recommended, // Configuração recomendada do ESLint para JS
];

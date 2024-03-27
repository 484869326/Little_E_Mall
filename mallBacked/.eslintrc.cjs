/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    // 动态菜单暂时用svg标签 html 因为自动导入字体组件没有合适的方法
    "vue/no-v-text-v-html-on-component": "off"
  }
};

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'eslint:recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ERROR,
    '@typescript-eslint/no-unused-vars': WARN,
    '@typescript-eslint/no-explicit-any': OFF,
    'vue/multi-word-component-names': OFF,
  },
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // Customize rules as needed
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    'vue/no-v-html': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  ignorePatterns: [
    'node_modules/',
    '.nuxt/',
    '.output/',
    'dist/',
    '.nitro/',
    '.cache/',
  ],
}
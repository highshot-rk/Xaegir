module.exports = {
  // root: true,
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  // add your custom rules here
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-multi-spaces': ['error'],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', 'div'],
        allowEmptyLines: false,
      },
    ],
    // 'vue/singleline-html-element-content-newline': [
    //   'error',
    //   {
    //     ignoreWhenNoAttributes: true,
    //     ignoreWhenEmpty: true,
    //     ignores: ['pre', 'textarea'],
    //   },
    // ],
    // 'vue/singleline-html-element-content-newline': [
    //   'ignore',
    //   {
    //     ignoreWhenNoAttributes: true,
    //     ignoreWhenEmpty: true,
    //     ignores: ['pre', 'textarea', 'div'],
    //   },
    // ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'prettier/prettier': ['error', { singleQuote: true, semi: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    // 'node/no-unsupported-features/es-syntax': [ 'error', { ignores: ['modules'] },],
  },
};

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {

    quotes: [
      'warn',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true }
    ],
    semi: ['warn', 'never'],
    'no-console': ['warn', { allow: ['warn', 'error'] }]
  }
}

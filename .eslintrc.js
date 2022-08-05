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
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-types': ['error'],
    '@typescript-eslint/no-extra-semi': ['off'],
    'react/prop-types': ['off'],
    'react-hooks/exhaustive-deps': ['off'],
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-prototype-builtins': ['off'],
    quotes: [
      'warn',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true }
    ],
    semi: ['warn', 'never'],
    'no-console': ['warn', { allow: ['warn', 'error'] }]
  }
}

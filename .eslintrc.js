// .eslintrc.js example
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app', 'es6', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'additional-rule': 'warn',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extends',
          'apply',
          'tailwind',
          'components',
          'utilities',
          'screen',
        ],
      },
    ],
  },
  overrides: [
    {
      rules: {
        'jsx-a11y/anchor-is-valid': 'off',
      },
    },
  ],
}

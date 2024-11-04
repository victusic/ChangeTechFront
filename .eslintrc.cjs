module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['next.config.js', 'next-i18next.config.js'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^React$' }],
    'react/no-unknown-property': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off',
  },
};

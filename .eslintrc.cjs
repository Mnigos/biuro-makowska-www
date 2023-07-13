/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parser': '@typescript-eslint/parser',
    'import/resolver': {
      node: {
        paths: ['~/'],
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
      },
      alias: {
        map: [['~', './app/']],
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
      },
    },
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|html|vue)$',
    ],
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
    'prettier',
    'testing-library',
  ],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: '**/*.{md,mdx}',
      extends: 'plugin:mdx/recommended',
      settings: {
        'mdx/code-blocks': true,
      },
    },
    {
      files: ['**/*.cjs', '**/*.config.{js,ts}'],
      rules: {
        'unicorn/prefer-module': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
  ignorePatterns: ['**/node_modules/**', '**/dist/**', 'README.md'],
  rules: {
    'prettier/prettier': 'warn',
    'prefer-const': 'warn',
    'eslint-comments/no-unused-disable': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    // empty functions are helpful for defining default values
    '@typescript-eslint/no-empty-function': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/text-encoding-identifier-case': 'off',
    'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
        },
        ignore: ['/^$/', 'README.md$', 'App.tsx'],
      },
    ],
    'unicorn/no-null': 'off',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          Props: true,
          props: true,
          params: true,
          ref: true,
          env: true,
          db: true,
        },
      },
    ],
    'react/prop-types': 'off',
  },
}

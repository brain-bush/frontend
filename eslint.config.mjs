import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: true,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'plugin:prettier/recommended',
    ],
    plugins: [
      'react',
      'react-refresh',
      'react-hooks',
      '@conarti/feature-sliced',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    overrides: [
      {
        files: ['**/*.{ts,tsx}'],
        excludedFiles: ['dist/**'],
        rules: {
          ...tseslint.configs.recommended.rules,
          ...js.configs.recommended.rules,
          ...reactHooks.configs.recommended.rules,
          ...react.configs.flat.recommended.rules,
          ...react.configs.flat['jsx-runtime'].rules,
          'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
          ],
          '@typescript-eslint/consistent-type-imports': 'error',
          'no-console': 'warn',
          'no-undef': 'off',
          '@conarti/feature-sliced/layers-slices': 'error',
          '@conarti/feature-sliced/absolute-relative': 'error',
          '@conarti/feature-sliced/public-api': 'error',
        },
      },
      {
        files: ['**/*.{ts,tsx}'],
        excludedFiles: ['dist/**', 'app/**'],
        rules: {
          'react/function-component-definition': [
            'error',
            {
              namedComponents: 'arrow-function',
              unnamedComponents: 'arrow-function',
            },
          ],
        },
      },
    ],
    ecmaFeatures: {
      ecmaVersion: 2020,
      globals: globals.browser,
      jsx: true,
    },
  }),
];

export default eslintConfig;

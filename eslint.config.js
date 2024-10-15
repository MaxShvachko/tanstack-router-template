import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import { includeIgnoreFile } from '@eslint/compat';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import TSeslint from 'typescript-eslint';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReact from 'eslint-plugin-react';
import pluginRouter from '@tanstack/eslint-plugin-router';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default [
  includeIgnoreFile(gitignorePath),
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettierConfig,
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...TSeslint.configs.strict,
  {
    plugins: {
      '@tanstack/router': pluginRouter,
    },
    rules: {
      '@tanstack/router/create-route-property-order': 'error',
    },
  },
  {
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/prop-types': 'off',
    },
  },
  pluginReact.configs.flat['jsx-runtime'],
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: [
            'external',
            'builtin',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: 'src/constants/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/hooks/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/components/atoms/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/components/molecules/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/components/organisms/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/**/templates/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/features/**',
              group: 'internal',
              position: 'before',
            },
          ],
        },
      ],
      'import/no-unused-modules': 'warn',
      'import/no-duplicates': 'error',
    },
  },
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      ...prettierConfig.rules,
    },
  },
];

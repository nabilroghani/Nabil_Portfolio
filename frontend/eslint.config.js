import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'], // React 19 automatic JSX runtime — no `import React` needed
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    settings: {
      react: { version: 'detect' },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]', caughtErrorsIgnorePattern: '^_' }],
      // No PropTypes/TypeScript convention in this codebase — not enforcing it here.
      'react/prop-types': 'off',
      // Flags every standard "fetch on mount" effect (setState after an await
      // inside a try/catch) as a violation; too aggressive for this codebase's
      // data-fetching pattern until it's moved to a query library.
      'react-hooks/set-state-in-effect': 'off',
      // Context + its hook living in one file (ThemeContext.jsx) only costs a
      // Fast Refresh reset on edit, not correctness — warn, don't block.
      'react-refresh/only-export-components': 'warn',
    },
  },
])

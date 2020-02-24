module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import', 'react', 'typescript', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    browser: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.resolve.js'
      }
    },
    'import/ignore': ['node_modules'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx']
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-unused-vars': 2,
    'no-undef': 0,
    'no-debugger': 1,

    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    'react/no-unescaped-entities': 0,
    'react/jsx-tag-spacing': [
      2,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'allow'
      }
    ],

    'typescript/no-unused-vars': 2,
    // 'typescript/no-undef': 2,
    'import/no-unused-modules': 0,
    'import/group-exports': 2,
    'react/jsx-key': 1,

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};

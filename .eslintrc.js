module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],

      parser: 'babel-eslint',
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'no-unused-vars': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'import/no-duplicates': 0,
    'class-methods-use-this': 0,
    'react/forbid-prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-console': 0
  },
};

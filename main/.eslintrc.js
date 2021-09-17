'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: { legacyDecorators: true },
  },
  plugins: ['ember', 'prettier', '@babel', 'decorator-position', 'jsdoc'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended',
    'plugin:decorator-position/ember',
    'plugin:jsdoc/recommended',
  ],
  env: { browser: true },
  rules: {
    'no-console': 'error',
    'lines-between-class-members': 1,
    '@babel/new-cap': 'error',
    '@babel/no-unused-expressions': ['error', { allowShortCircuit: true }],
    '@babel/object-curly-spacing': ['error', 'always'],
    '@babel/semi': 'error',
    'decorator-position/decorator-position': ['error', { properties: 'above' }],
    'no-lonely-if': 'error',
    curly: 'error',
    'brace-style': 'error',
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreComments: true,
      },
    ],
    'no-multiple-empty-lines': 'error',
    'object-property-newline': 2,
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'array-bracket-newline': 2,
    'ember/no-get': 'warn',
    'operator-linebreak': 2,
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        augments: {
          message: '@extends is to be used over @augments as it is more evocative of classes than @augments',
          replacement: 'extends',
        },
      },
    },
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        '.ember-cli.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
      ],
      parserOptions: { sourceType: 'script' },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
        'no-console': 0,
        'no-var': 1,
        indent: ['error', 2, { SwitchCase: 1 }],
        semi: ['error', 'always'],
      },
    },
    {
      files: ['tests/**/*.js'],
      rules: { '@babel/no-invalid-this': 0 },
    },
  ],
};

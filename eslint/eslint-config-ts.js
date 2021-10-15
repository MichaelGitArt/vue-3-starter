const basic = require('./eslint-config-basic')

module.exports = {
  extends: [
    './eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],

  overrides: basic.overrides,

  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],

  rules: {
    'object-curly-spacing': ['error', 'always'],
    'space-before-blocks': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'quotes': ['error', 'single'],
    'key-spacing': ['error'],
    'space-infix-ops': 'error',
    'semi': ['warn', 'never'],
    'linebreak-style': ['off'],
    'space-before-function-paren': ['error', 'never'],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
}

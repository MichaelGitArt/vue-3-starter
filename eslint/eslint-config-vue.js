module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        'vue/html-self-closing': 'warn',
        'vue/padding-line-between-blocks': 'error',
        'vue/max-attributes-per-line': ['warn', {
          singleline: 2,
        }],
        'vue/component-name-in-template-casing': [
          'warn',
          'PascalCase',
          {
            registeredComponentsOnly: false,
          },
        ],
      },
    },
  ],

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue-scoped-css/vue3-recommended',
    'plugin:import/recommended',
    './eslint-config-ts',
  ],

  rules: {
    'import/named': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': ['off'],
    'import/newline-after-import': ['error', { count: 1 }],
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.vue',
          '.js',
          '.ts',
        ],
      },
    },
  },
}

module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'semi': ['error', 'always'],
    'no-unused-vars': 'error',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'no-trailing-spaces': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-extra-parens': 'error',
  },
};

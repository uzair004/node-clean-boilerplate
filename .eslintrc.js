module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': ['error', { allow: ['error', 'warn'] }],
    'no-ternary': 'error',
    'no-return-await': 'error',
    'no-plusplus': 'error',
    'no-lonely-if': 'error',
    'no-unused-vars': 'error',
    'no-undef': 'error',
    eqeqeq: ['error', 'always'],
    'no-var': 'error',
    'prefer-const': 'error',
    'no-await-in-loop': 'warn',
    'no-promise-executor-return': 'warn',
    'require-atomic-updates': 'warn',
    // 'eslint max-nested-callbacks': ["error", 3],
    // 'prefer-promise-reject-errors': 'warn',
    // 'node/handle-callback-err': 'warn',
    // 'node/no-sync': 'warn'
  },
  ignorePatterns: [''],
};

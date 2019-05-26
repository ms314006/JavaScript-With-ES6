module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: 'airbnb',
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      'comma-dangle': ['error', {
        arrays: 'never',
        objects: 'always',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }],
      'object-curly-spacing': ['error','always'],
      'quote-props': ['error', 'as-needed'],
      'key-spacing': ['warn', { 'beforeColon': false, 'afterColon': true  }],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      quotes: ['error','single'],
      'no-underscore-dangle': ['off'],
      'react/prop-types': ['warn'],
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'padded-blocks': ['warn', { 'blocks': 'never' }],
      'react/no-unused-state': ['off'],
      'max-len': ['off'],
      'no-empty-pattern': ['off'],
      'import/extensions': ['warn', 'always'],
  },
};
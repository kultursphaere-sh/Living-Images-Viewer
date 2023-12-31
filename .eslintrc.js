module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    '@vue/standard',
    'plugin:vue-i18n/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'no-trailing-spaces': [2, { 'skipBlankLines': true }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': {
        'max': 3,
        'allowFirstLine': true
      }
    }],
    'vue/singleline-html-element-content-newline': ['error', {
      'ignoreWhenNoAttributes': true,
      'ignoreWhenEmpty': true,
      'ignores': ['p', 'span', 'a', 'div', 'router-link']
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  settings: {
    'vue-i18n': {
      localeDir: 'locales/*.json' // extention is glob formatting!
    }
  }
}

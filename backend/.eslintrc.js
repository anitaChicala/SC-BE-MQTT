// module.exports = {
//   root: true,
//   parser: 'babel-eslint',
//   parserOptions: {
//     ecmaVersion: 6,
//     sourceType: 'module'
//   },
//   env: {
//     browser: true,
//     node: true
//   },
//   extends: ['airbnb-base', 'plugin:prettier/recommended'],
//   plugins: [
//     'html'
//   ],
//   // add your custom rules here
//   'rules': {
//     'no-unused-vars': 1,
//     'no-multiple-empty-lines': 2,
//     'class-methods-use-this': 0,
//     'comma-dangle': ['error', 'never'],
//     'no-console': ['error', { 'allow': ['warn', 'log'] }],
//     'func-names': ["error", "never"],
//     'prettier/prettier': ['error', { 
//       'singleQuote': true,
//       'semi':false,
//     }],
//     'import/prefer-default-export': 'off',

//     // allow paren-less arrow functions
//     'arrow-parens': process.env.NODE_ENV === 'production' ? 2 : 0,
//     // allow async-await
//     'generator-star-spacing': 0,
//     // allow debugger during development
//     'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
//   }
// }

module.exports = {
    root: true,
  
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    },
  
    env: {
      browser: true
    },
  
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
  
    // required to lint *.vue files
    plugins: ['html'],
  
    globals: {
      ga: true, // Google Analytics
      cordova: true,
      __statics: true,
      process: true
    },
  
    // add your custom rules here
    rules: {
      'prefer-promise-reject-errors': 'off',
      'require-atomic-updates': 'off',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          endOfLine: 'auto',
          trailingComma: "none",
        }
      ],
  
      // allow console.log during development only
      // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      "no-console": "off",
      // allow debugger during development only
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unused-vars': 1,
      'comma-dangle': ['error', 'never'],
      'no-multiple-empty-lines': 2,
      'class-methods-use-this': 0,
      'no-console': ['error', { 'allow': ['warn', 'log'] }],
      'func-names': ["error", "never"],
  
      'import/prefer-default-export': 'off',
  
      // allow paren-less arrow functions
      'arrow-parens': process.env.NODE_ENV === 'production' ? 2 : 0,
      // allow async-await
      'generator-star-spacing': 0,
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
  }
  
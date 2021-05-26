module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 0,
    // 'vue/valid-template-root': 0,
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     singleQuote: true,
    //     parser: 'flow',
    //     endOfLine: 'auto',
    //     usePrettierrc: false,
    //     fileInfoOptions: {
    //       withNodeModules: true,
    //     },
    //   },
    // ],
  },
}

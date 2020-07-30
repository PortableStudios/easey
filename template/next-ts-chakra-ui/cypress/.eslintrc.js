module.exports = {
  root: false,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  env: {
    'cypress/globals': true,
  },
  plugins: ['cypress'],
  extends: ['plugin:cypress/recommended'],
  rules: {
    'testing-library/await-async-query': 'off',
    'no-console': 'off',
  },
};

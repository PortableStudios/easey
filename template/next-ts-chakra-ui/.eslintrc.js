module.exports = {
  root: true,
  // Set up the basic rules for all files
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [
    {
      // Enable additional rules for TypeScript files
      files: ['**/*.{ts,tsx}'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
      rules: {
        // Allow implicit return types on functions
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
    },
    {
      // Enable additional rules for Jest tests
      files: ['**/*.test.{ts,tsx}'],
      extends: ['plugin:testing-library/react'],
    },
    {
      // Enable additional rules for Cypress files
      files: ['**/cypress/**/*.{ts,tsx}'],
      env: { 'cypress/globals': true },
      extends: ['plugin:cypress/recommended'],
    },
  ],
};

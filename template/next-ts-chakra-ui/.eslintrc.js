module.exports = {
  root: true,
  overrides: [
    // Add linting (and Prettier formatting) for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      plugins: ['react', '@typescript-eslint'],
      extends: [
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:testing-library/react',
        'next/core-web-vitals',
      ],
      rules: {
        'react/prop-types': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-indent': 0,
        '@typescript-eslint/comma-dangle': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_' },
        ],
        'object-shorthand': 0,
        'prefer-destructuring': 0,
        'import/prefer-default-export': 0,
        'global-require': 0,
      },
      overrides: [
        {
          // Allow importing dev dependencies in scripts, tests and stories
          files: [
            '**/scripts/*.ts?(x)',
            '**/*.test.ts?(x)',
            '**/*.stories.ts?(x)',
            '**/utils/testing/*.ts?(x)',
            '**/.storybook/*.ts?(x)',
            'jestSetup.ts',
          ],
          rules: {
            'import/no-extraneous-dependencies': 'off',
          },
        },
        {
          // Allow console.log in scripts
          files: ['**/scripts/*.ts?(x)'],
          rules: {
            'no-console': 'off',
          },
        },
      ],
    },
    {
      // Add basic linting (and Prettier formatting) for the few necessary JS files (i.e. `next.config.js`, `jest.config.js`, etc.)
      files: ['**/*.js'],
      extends: ['airbnb-base', 'plugin:prettier/recommended'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};

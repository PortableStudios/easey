import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

// TODO: Add `eslint-plugin-storybook` when it has been updated to support ESLint v9

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
			},
		},
	},
	{
		ignores: [
			'build/',
			'.svelte-kit/',
			'dist/',
			'storybook-static/',
			'**/vite.config.ts.timestamp-*',
		],
	},
	{
		files: ['**/*.svelte', '**/*.ts'],
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					// Allow unused arguments starting with an underscore
					argsIgnorePattern: '^_',
					// Allow certain unused types in Svelte components (e.g. $$Events)
					varsIgnorePattern: '^\\$\\$(Props|Events|Slots|Generic)$',
				},
			],
		},
	},
	{
		// Allow `any` and non-null assertions in tests and stories
		files: ['**/*.stories.svelte', '**/*.{spec,test}.ts'],
		rules: {
			'@typescript-eslint/no-explicit-any': 0,
			'@typescript-eslint/no-non-null-assertion': 0,
		},
	},
];

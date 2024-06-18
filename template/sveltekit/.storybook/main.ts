import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	framework: '@storybook/sveltekit',
	stories: ['../src/**/*.stories.svelte'],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
	],
};

export default config;

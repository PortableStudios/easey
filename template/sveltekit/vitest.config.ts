import path from 'path';
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		include: ['src/**/*.test.ts'],
		globals: true,
		environment: 'jsdom',
		setupFiles: 'vitest-setup.ts',
		alias: [
			{
				find: '$lib',
				replacement: path.resolve(__dirname, './src/lib'),
			},
		],
	},
});

<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';

	import { Home } from '.';

	export const meta = {
		title: 'Pages/Home',
		component: Home,
		parameters: {
			layout: 'fullscreen',
		},
	} satisfies Meta<Home>;
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';
</script>

<Story name="Default">
	<Home />
</Story>

<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import { Home } from '.';

	const { Story } = defineMeta({
		title: 'Pages/Home',
		component: Home,
		parameters: {
			layout: 'fullscreen',
		},
	});
</script>

<Story name="Default" />

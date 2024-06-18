<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';

	import spriteContents from '$lib/assets/icons.svg?raw';

	import { Icon } from '.';

	// Extract all icon names from the SVG sprite
	const iconNames = spriteContents
		.match(/<symbol id="([^"]+)"/g)!
		.map((match) => match.match(/<symbol id="([^"]+)"/)![1]);

	export const meta = {
		title: 'UI/Icon',
		component: Icon,
		argTypes: {
			class: { control: 'text' },
			name: { control: 'select', options: iconNames },
		},
		args: {
			class: 'text-slate-600 h-24 w-24',
			name: iconNames[0],
		},
	} satisfies Meta<Icon>;
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';
</script>

<Story name="One Icon" let:args>
	<Icon {...args} />
</Story>

<Story name="All Icons" let:args>
	<div class="flex flex-wrap gap-8">
		{#each iconNames as name}
			<div class="flex flex-col items-center gap-2">
				<Icon {...args} {name} />
				<p class="text-sm text-slate-600">{name}</p>
			</div>
		{/each}
	</div>
</Story>

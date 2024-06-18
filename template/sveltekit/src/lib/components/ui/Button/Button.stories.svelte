<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';

	import { Button, styles } from '.';

	export const meta = {
		title: 'UI/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			disabled: { control: 'boolean' },
			class: { control: 'text' },
			variant: {
				control: 'select',
				options: Object.keys(styles.variants.variant),
			},
			size: {
				control: 'select',
				options: Object.keys(styles.variants.size),
			},
		},
		args: {
			disabled: false,
			class: 'self-start',
			variant: styles.defaultVariants.variant,
			size: styles.defaultVariants.size,
		},
	} satisfies Meta<Button>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	import { Icon } from '$lib/components/ui';

	let count = 0;
	function handleClick(e: MouseEvent) {
		const button = e.currentTarget as HTMLButtonElement;
		if (button.getAttribute('aria-disabled') === 'true') {
			return;
		}

		count += 1;
	}
</script>

<Template let:args>
	<Button {...args} on:click on:click={handleClick}>
		You've clicked {count} times
	</Button>
</Template>

<Story name="Default" />

<Story name="With Icon">
	<Button class="self-start" on:click on:click={handleClick}>
		<Icon name="check" class="mr-2 h-5 w-5" />
		You've clicked {count} times
	</Button>
</Story>

<Story name="With Wrapped Text">
	<Button class="max-w-96 self-start">
		This is a really long button label that will definitely wrap to 2 lines
	</Button>
</Story>

<Story name="With Icon and Wrapped Text">
	<Button class="max-w-96 self-start">
		<Icon name="check" class="mr-2 h-5 w-5" />
		This is a really long button label that will definitely wrap to 2 lines
	</Button>
</Story>

<Story name="Small" args={{ size: 'sm' }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Loading" args={{ loading: true }} />

<Story name="Secondary" args={{ variant: 'secondary' }} />

<Story name="Outline" args={{ variant: 'outline' }} />

<Story name="Link" let:args args={{ variant: 'link', href: '/' }}>
	<Button {...args}>Home</Button>
</Story>

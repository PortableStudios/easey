<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import { Icon } from '$lib/components/ui';

	import { Button, styles } from '.';

	const { Story } = defineMeta({
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
	});
</script>

<script lang="ts">
	let count = 0;
	function handleClick(e: MouseEvent) {
		const button = e.currentTarget as HTMLButtonElement;
		if (button.getAttribute('aria-disabled') === 'true') {
			return;
		}

		count += 1;
	}
</script>

{#snippet template(args: Record<string, unknown>)}
	<Button {...args} on:click={handleClick}>
		You've clicked {count} times
	</Button>
{/snippet}

<Story name="Default" {template} />

<Story name="With Icon">
	{#snippet template()}
		<Button class="self-start" on:click={handleClick}>
			<Icon name="check" class="mr-2 h-5 w-5" />
			You've clicked {count} times
		</Button>
	{/snippet}
</Story>

<Story name="With Wrapped Text">
	{#snippet template()}
		<Button class="max-w-96 self-start">
			This is a really long button label that will definitely wrap to 2 lines
		</Button>
	{/snippet}
</Story>

<Story name="With Icon and Wrapped Text">
	{#snippet template()}
		<Button class="max-w-96 self-start">
			<Icon name="check" class="mr-2 h-5 w-5" />
			This is a really long button label that will definitely wrap to 2 lines
		</Button>
	{/snippet}
</Story>

<Story name="Small" args={{ size: 'sm' }} {template} />

<Story name="Disabled" args={{ disabled: true }} {template} />

<Story name="Loading" args={{ loading: true }} {template} />

<Story name="Secondary" args={{ variant: 'secondary' }} {template} />

<Story name="Outline" args={{ variant: 'outline' }} {template} />

<Story name="Link" args={{ variant: 'link', href: '/' }}>
	{#snippet template(args: Record<string, unknown>)}
		<Button {...args}>Home</Button>
	{/snippet}
</Story>

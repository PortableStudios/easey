<script lang="ts" context="module">
	import { tv } from 'tailwind-variants';

	export const styles = tv({
		base: 'inline-flex items-center justify-center rounded-[5rem] border-2 border-transparent bg-transparent text-center text-[1.125rem] font-bold text-white aria-disabled:cursor-not-allowed',
		variants: {
			variant: {
				primary: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-500 aria-disabled:bg-blue-400',
				secondary:
					'bg-violet-600 hover:bg-violet-700 active:bg-violet-500 aria-disabled:bg-violet-400',
				outline:
					'border-current text-blue-600 hover:bg-blue-50 hover:text-blue-700 active:text-blue-500 aria-disabled:text-blue-400',
				link: 'text-blue-600 underline underline-offset-4 hover:text-blue-700 hover:no-underline active:text-blue-500 aria-disabled:text-blue-400',
			},
			size: {
				default: 'px-3 py-2',
				sm: 'p-2 text-[1rem]',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default',
		},
	});
</script>

<script lang="ts">
	import { slide } from 'svelte/transition';
	import { Button as ButtonPrimitive } from 'bits-ui';
	import type { VariantProps } from 'tailwind-variants';

	import { Icon } from '$lib/components/ui';

	type $$Props = ButtonPrimitive.Props & {
		variant?: VariantProps<typeof styles>['variant'];
		size?: VariantProps<typeof styles>['size'];
		disabled?: boolean;
		loading?: boolean;
	};

	type $$Events = ButtonPrimitive.Events;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = styles.defaultVariants.variant;
	export let size: $$Props['size'] = styles.defaultVariants.size;
	export let builders: $$Props['builders'] = [];
	export let disabled: boolean | undefined = undefined;
	export let loading: boolean | undefined = undefined;
	export { className as class };
</script>

<ButtonPrimitive.Root
	{builders}
	type="button"
	class={styles({ variant, size, className })}
	aria-disabled={disabled || loading}
	{...$$restProps}
	on:click
	on:keydown
>
	{#if loading}
		<span transition:slide={{ axis: 'x', duration: 300 }}>
			<Icon name="loader" class="mr-2 h-5 w-5 animate-spin" />
		</span>
	{/if}
	<slot />
</ButtonPrimitive.Root>

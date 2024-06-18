<script lang="ts">
	import spriteUrl from '$lib/assets/icons.svg';
	import { combineClasses } from '$lib/utils/styling';

	export let name: string;
	export let label: string | undefined = undefined;
	let className: string | undefined = undefined;
	export { className as class };
</script>

<!--
	@component
	Displays an icon from the `icons.svg` sprite by name.
	All icons from the sprite can be viewed in Storybook.
	NOTE: SVG is hidden to screen readers unless you pass a `label` prop.
-->

<svg
	class={combineClasses('shrink-0', className)}
	aria-label={label}
	aria-hidden={label === undefined || label === ''}
	role="graphics-symbol"
>
	<use href="{spriteUrl}#{name}" />
</svg>

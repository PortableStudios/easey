<script lang="ts">
	import logoUrl from '$lib/assets/logo.svg';
	import { Button, Icon } from '$lib/components/ui';
</script>

<main class="flex w-full grow flex-col items-center justify-center gap-6 p-8 text-center">
	<img alt="Portable Logo" class="h-8" src={logoUrl} />
	<h1 class="text-[2rem] font-bold">
		Welcome to your new project
		<Icon name="heart" class="ml-1 inline h-8 w-8 text-red-500" />
	</h1>
	<p class="text-[1.25rem] font-semibold">Check out the README to get started!</p>
	<p class="max-w-[25rem] font-medium">
		The first thing you might want to customise is the Button component.
	</p>
	<p>Here are the built-in button variants:</p>
	<div class="flex w-full flex-wrap items-center justify-center gap-4">
		<Button variant="primary">Primary</Button>
		<Button variant="secondary">Secondary</Button>
		<Button variant="outline">Outline</Button>
		<Button variant="link">Link</Button>
	</div>
	<p>The built-in button sizes:</p>
	<div class="flex w-full flex-wrap items-center justify-center gap-4">
		<Button size="default">Default</Button>
		<Button size="sm">Small</Button>
	</div>
	<p>And the built-in button states:</p>
	<div class="flex w-full flex-wrap items-center justify-center gap-4">
		<Button>
			<Icon name="check" class="mr-2 h-5 w-5" />
			With Icon
		</Button>
		<Button disabled>Disabled</Button>
		<Button loading>Loading</Button>
	</div>
</main>

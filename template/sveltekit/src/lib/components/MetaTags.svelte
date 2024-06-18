<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description = 'A Portable website.';
	export let image = '/cover.png';
	export let skipTitleSuffix = false;

	$: siteUrl = $page.url.origin;
	$: fullImageUrl = `${siteUrl}${image}`;
	$: fullTitle = skipTitleSuffix ? title : `${title} | Portable`;
</script>

<!--
	@component
	Add meta tags to the head of the document for SEO and social sharing.
	https://kit.svelte.dev/docs/seo#manual-setup-title-and-meta
 -->

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="title" content={fullTitle} />
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={fullImageUrl} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={fullTitle} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={fullImageUrl} />
</svelte:head>

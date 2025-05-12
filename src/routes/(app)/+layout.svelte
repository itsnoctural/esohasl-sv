<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta
		name="description"
		content="Say goodbye to sketchy websites and unreliable scripts. EsohaSL is the trusted source for free, high-quality Roblox scripts that have been tested and approved."
	/>
	<meta
		property="og:description"
		content="Say goodbye to sketchy websites and unreliable scripts. EsohaSL is the trusted source for free, high-quality Roblox scripts that have been tested and approved."
	/>
	<meta property="og:site_name" content="esohasl.net" />
</svelte:head>

<Header />
{@render children()}
<Footer />

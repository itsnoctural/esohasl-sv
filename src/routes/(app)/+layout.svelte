<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta property="og:site_name" content="esohasl.net" />
</svelte:head>

<Header />
{@render children()}
<Footer />

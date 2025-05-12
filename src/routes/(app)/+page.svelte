<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import database from '$lib/scripts.json';

	let page = $state(1);
</script>

<svelte:head>
	<title>EsohaSL - Free Roblox Scripts</title>
	<meta property="og:title" content="EsohaSL - Free Roblox Scripts" />
</svelte:head>

<main class="mx-auto mt-3 flex w-full max-w-screen-xl flex-col">
	<div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
		{#each database.slice(0, 16 * page) as script (script.id)}
			<Card {...script} />
		{/each}
	</div>

	<div class="my-6 flex justify-center">
		{#if 16 * page < database.length}
			<Button class="w-80" onclick={() => (page += 1)}>Load more</Button>
		{/if}
	</div>
</main>

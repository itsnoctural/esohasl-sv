<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import { intlFormatFromNow } from '$lib/date';
	import { highlight } from '$lib/shiki';
	import { Check, Copy } from 'lucide-svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let isCopied = $state(false);

	function copyScript() {
		navigator.clipboard.writeText(data.script);
		isCopied = true;

		const handler = setTimeout(() => {
			isCopied = false;
		}, 1000);

		return () => {
			clearTimeout(handler);
		};
	}
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:title" content={data.title} />
	<meta property="description" content={data.description} />
	<meta property="og:description" content={data.description} />
	<meta property="og:image" content="https://esohasl.net/thumbnails/{data.id}.avif" />
</svelte:head>

<main class="mx-auto my-10 flex max-w-screen-xl flex-col justify-between gap-y-8">
	<div class="flex flex-col gap-y-4">
		<img
			src="/thumbnails/{data.id}.avif"
			width="720"
			height="405"
			class="aspect-video rounded-xl object-cover"
			alt="{data.title} thumbnail"
			fetchpriority="high"
		/>

		<div class="flex flex-col gap-y-1">
			<h1 class="text-2xl font-semibold">{data.title}</h1>
		</div>

		<div class="bg-muted/75 rounded-lg p-3">
			<div class="flex gap-x-4 font-medium">
				<span>{data.views} views</span>
				<span>{intlFormatFromNow(data.created_at)}</span>
			</div>
			{#if data.description}
				<p class="whitespace-pre-line">{data.description}</p>
			{/if}
		</div>

		<div class="border-border relative rounded-t-lg border">
			<div class="bg-background/85 flex items-center justify-between rounded-t-lg p-3">
				<span>esohasl.net</span>
				<div class="flex items-center gap-x-2">
					{#if data.game_id !== '0'}
						<Button
							as="a"
							variant="secondary"
							href="https://www.roblox.com/games/{data.game_id}"
							target="_blank">Game Link</Button
						>
					{/if}
					<Button size="icon" variant="secondary" onclick={copyScript} aria-label="Copy script">
						{#if isCopied}
							<Check size={16} />
						{:else}
							<Copy size={16} />
						{/if}
					</Button>
				</div>
			</div>
			{@html highlight(data.script)}
		</div>
		<div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
			{#each data.suggestions as suggestion (suggestion.id)}
				<Card {...suggestion} />
			{/each}
		</div>
	</div>
</main>

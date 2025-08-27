<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta property="og:site_name" content="esohasl.net" />
	<meta name="google-site-verification" content="Xh2vRqKR8DetRtFsUc5FpefruEImhzyJxqM1C1Dc3c4" />

	<script>
		{
			const theme = localStorage.getItem('sv:theme');

			document.documentElement.classList.add(
				!theme || theme === 'system'
					? window.matchMedia('(prefers-color-scheme: dark)').matches
						? 'dark'
						: 'light'
					: theme
			);
		}
	</script>
</svelte:head>

<div
	class="fixed inset-0 -z-50 size-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] dark:bg-[radial-gradient(#5e5e5e,transparent_1px)]"
></div>
{@render children()}

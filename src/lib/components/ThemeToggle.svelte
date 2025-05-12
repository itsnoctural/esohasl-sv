<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { theme } from '../state/theme.svelte';
	import Button from './Button.svelte';

	function toggle() {
		theme.current = theme.current === 'light' ? 'dark' : 'light';
	}

	$effect(() => {
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(theme.current);
	});
</script>

<Button variant="outline" size="icon" onclick={toggle} aria-label="Toggle dark mode">
	<Moon class="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
	<Sun class="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
</Button>

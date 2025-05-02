import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import scripts from './src/lib/scripts.json' with { type: 'json' };

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			entries: scripts.map((script) => `/script/${script.id}`)
		}
	}
};

export default config;

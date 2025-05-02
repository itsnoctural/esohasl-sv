// @from https://github.com/sveltejs/svelte.dev/blob/30648d0c8f6c5ef7e084a6b6db233a26ce76eb9e/packages/site-kit/src/lib/state/theme.svelte.ts
// @from https://github.com/sveltejs/svelte.dev/blob/30648d0c8f6c5ef7e084a6b6db233a26ce76eb9e/packages/site-kit/src/lib/state/Persisted.svelte.ts

import { on } from 'svelte/events';
import { createSubscriber, MediaQuery } from 'svelte/reactivity';

export class Persisted<T extends string = string> {
	#key: string;
	#storage: Storage | undefined;
	#fallback: T;
	#version = $state(0);

	#subscribe = createSubscriber((update) => {
		return on(window, 'storage', (e) => {
			if (e.key === this.#key) {
				update();
			}
		});
	});

	constructor(
		key: string,
		fallback: T,
		storage = typeof localStorage === 'undefined' ? undefined : localStorage
	) {
		this.#key = key;
		this.#fallback = fallback;
		this.#storage = storage;
	}

	get current() {
		this.#subscribe(); // handle cross-tab updates
		this.#version; // handle same-tab updates

		return (this.#storage?.getItem(this.#key) as T) ?? this.#fallback;
	}

	set current(v: T) {
		this.#storage?.setItem(this.#key, v);
		this.#version += 1;
	}
}

class Theme {
	#preference = new Persisted<'system' | 'light' | 'dark'>('sv:theme', 'system');
	#query = new MediaQuery('prefers-color-scheme: dark');
	#system = $derived<'dark' | 'light'>(this.#query.current ? 'dark' : 'light');

	get current() {
		return this.#preference.current === 'system' ? this.#system : this.#preference.current;
	}

	set current(value: 'light' | 'dark') {
		this.#preference.current = value === this.#system ? 'system' : value;
	}
}

export const theme = new Theme();

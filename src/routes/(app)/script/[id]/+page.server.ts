import { hash } from '$lib/hash';
import database from '$lib/scripts.json';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const script = database.find((script) => script.id === params.id);

	if (script) {
		const suggestions = [];
		const seed = hash(script.id);

		for (let i = 0; i < 8 && i < database.length; i++) {
			const index = (seed + i * 7) % database.length;
			suggestions.push(database[index]);
		}

		return { ...script, suggestions };
	}
	error(404, 'Not found');
};

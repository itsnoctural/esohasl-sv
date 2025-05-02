import database from '$lib/scripts.json';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const script = database.find((script) => script.id === params.id);

	if (script) {
		return { ...script, suggestions: database.slice(0, 8) };
	}
	error(404, 'Not found');
};

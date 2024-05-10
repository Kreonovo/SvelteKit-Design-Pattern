import { HttpRickAndMortyConsumer } from '$lib/server/httpConsumers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const query = url.search;
	const response = await HttpRickAndMortyConsumer.getCharacterCollection(query);
	return new Response(JSON.stringify(response));
};

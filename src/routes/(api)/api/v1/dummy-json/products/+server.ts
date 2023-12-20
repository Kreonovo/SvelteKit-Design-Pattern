import { HttpDummyJsonConsumer } from '$lib/server/httpConsumers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const query = url.search;
	const response = await HttpDummyJsonConsumer.getProductCollection(query);
	return new Response(JSON.stringify(response));
};

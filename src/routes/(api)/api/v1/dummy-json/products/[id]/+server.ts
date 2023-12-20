import { HttpDummyJsonConsumer } from '$lib/server/httpConsumers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, params }) => {
	const query = url.search;
	const id = params.id;
	const response = await HttpDummyJsonConsumer.getProduct(id, query);
	return new Response(JSON.stringify(response));
};

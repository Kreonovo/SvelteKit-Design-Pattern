import type { LocationResponse } from '$lib/server/httpConsumers';

export abstract class CharacterCard {
	id?: number;
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	gender?: string;
	location?: LocationResponse;
	image?: string;
}

import type { LocationResponse } from '../locations';

export class CharacterResponse {
	id?: number;
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	gender?: string;
	origin?: LocationResponse;
	location?: LocationResponse;
	image?: string;
	episode?: string[];
	url?: string;
	created?: string;
}

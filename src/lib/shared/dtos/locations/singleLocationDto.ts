import type { LocationResponse } from '$lib/server/httpConsumers';

export class SingleLocationDto {
	location: LocationResponse;

	constructor(locationResponse: LocationResponse | undefined) {
		this.location = locationResponse ?? ({} as LocationResponse);
	}
}

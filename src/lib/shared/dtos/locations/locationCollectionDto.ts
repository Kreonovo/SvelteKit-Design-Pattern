import { BasePaginationDto } from '../basePaginationDto';
import type { BaseCollectionResponse, LocationResponse } from '$lib/server/httpConsumers';

export class LocationCollectionDto extends BasePaginationDto {
	locations: LocationResponse[];

	constructor(
		locationCollectionResponse: BaseCollectionResponse<LocationResponse> | undefined,
		paginationLimit: number | undefined
	) {
		super();

		if (locationCollectionResponse && locationCollectionResponse.results) {
			this.locations = locationCollectionResponse.results;
			this.limit = paginationLimit ?? this.limit;
			this.total = locationCollectionResponse.info?.count ?? this.total;
		} else {
			this.locations = [];
		}
	}
}

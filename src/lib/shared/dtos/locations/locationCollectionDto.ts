import type { BaseCollectionResponse, LocationResponse } from '$lib/server/httpConsumers';
import { BasePaginationDto } from '../basePaginationDto';

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
			this.locations = [] as LocationResponse[];
		}
	}
}

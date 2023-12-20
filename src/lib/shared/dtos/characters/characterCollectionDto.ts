import { BasePaginationDto } from '../basePaginationDto';
import type { BaseCollectionResponse, CharacterResponse } from '$lib/server/httpConsumers';

export class CharacterCollectionDto extends BasePaginationDto {
	characters: CharacterResponse[];

	constructor(
		characterCollectionResponse: BaseCollectionResponse<CharacterResponse> | undefined,
		paginationLimit?: number | undefined
	) {
		super();

		if (characterCollectionResponse && characterCollectionResponse?.results) {
			this.characters = characterCollectionResponse.results;
			this.limit = paginationLimit ?? this.limit;
			this.total = characterCollectionResponse.info?.count ?? this.total;
		} else {
			this.characters = [];
		}
	}
}

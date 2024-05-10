import type {
	BaseCollectionResponse,
	CharacterResponse,
	ProductCollectionResponse
} from '$lib/server/httpConsumers';
import { CharacterCollectionDto } from '../characters';
import { ProductCollectionDto } from '../products';

export class ProductCharacterViewDto {
	productCollection: ProductCollectionDto;
	characterCollection: CharacterCollectionDto;

	constructor(
		productResponse: ProductCollectionResponse,
		characterResponse: BaseCollectionResponse<CharacterResponse> | undefined
	) {
		this.productCollection = new ProductCollectionDto(productResponse);
		this.characterCollection = new CharacterCollectionDto(characterResponse);
	}
}

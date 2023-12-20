import { DummyJsonQueries } from '$lib/shared/queries/dummyJsonQueries';
import { error } from '@sveltejs/kit';
import { ProductCharacterViewDto } from '$lib/shared/dtos/views/ProductCharactorViewDto';
import { BasePageDataDto, SeoDataDto } from '$lib/shared/dtos';
import { Endpoints } from '../(api)/api/v1/endpoints';
import type { PageServerLoad } from './$types';
import type {
	BaseCollectionResponse,
	BaseResponse,
	CharacterResponse,
	ProductCollectionResponse
} from '$lib/server/httpConsumers';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const dummyJsonProductsPromise: Promise<ProductCollectionResponse> =
		PageHelper.getDummyJsonProducts(fetch, url.searchParams);

	const rickAndMortyCharactersPromise: Promise<BaseCollectionResponse<CharacterResponse>> =
		PageHelper.getCharacters(fetch);

	const [dummyJsonProducts, rickAndMortyCharacters] = await Promise.all([
		dummyJsonProductsPromise,
		rickAndMortyCharactersPromise
	]);

	const pageData = new ProductCharacterViewDto(dummyJsonProducts, rickAndMortyCharacters);
	const pageMetadata = new SeoDataDto(
		'Kreonovo Sveltekit MVC Design Pattern',
		'A base template starter for Sveltekit projects that uses our MVC design pattern',
		url.href,
		url.href,
		null
	);

	return {
		...BasePageDataDto.getSuccessResponse<ProductCharacterViewDto, SeoDataDto>(
			pageData,
			pageMetadata,
			null,
			null
		)
	};
};

abstract class PageHelper {
	static async getDummyJsonProducts(fetch: any, search?: URLSearchParams) {
		const query = DummyJsonQueries.getProductCardsQuery(search);
		const response = await fetch(Endpoints.dummyJson.getProductList + query);
		const parsedResponse: BaseResponse<ProductCollectionResponse> = await response.json();

		if (!parsedResponse.isSuccessful) {
			error(parsedResponse.statusCode as any, parsedResponse.message ?? 'An error has occurred');
		}

		return parsedResponse.result!;
	}

	static async getCharacters(fetch: any, search?: URLSearchParams) {
		const query = DummyJsonQueries.getProductCardsQuery(search);
		const response = await fetch(Endpoints.rickAndMorty.getCharacterList + query);
		const parsedResponse: BaseResponse<BaseCollectionResponse<CharacterResponse>> =
			await response.json();

		if (!parsedResponse.isSuccessful) {
			error(parsedResponse.statusCode as any, parsedResponse.message ?? 'An error has occurred');
		}

		return parsedResponse.result!;
	}
}

import { HttpHelper } from '$lib/server/helpers/httpHelper';
import type { BaseResponse } from '$lib/server/httpConsumers';
import type {
	BaseCollectionResponse,
	CharacterResponse,
	LocationResponse
} from './models/responses';

export abstract class HttpRickAndMortyConsumer extends HttpHelper {
	public static async getCharacterCollection(
		query?: string
	): Promise<BaseResponse<BaseCollectionResponse<CharacterResponse>>> {
		try {
			const endpoint = `https://rickandmortyapi.com/api/character${query}`;
			const response = await this.get(endpoint);

			return this.handleResponse('getCharacterCollection', endpoint, null, response);
		} catch (error) {
			return this.getErrorResponse({ error });
		}
	}

	public static async getCharacter(id: string): Promise<BaseResponse<CharacterResponse>> {
		try {
			throw 'not implemented';
		} catch (error) {
			return this.getErrorResponse({ error });
		}
	}

	public static async getLocationCollection(
		query?: string
	): Promise<BaseResponse<BaseCollectionResponse<LocationResponse>>> {
		try {
			throw 'not implemented';
		} catch (error) {
			return this.getErrorResponse({ error });
		}
	}

	public static async getLocation(id: string): Promise<BaseResponse<LocationResponse>> {
		try {
			throw 'not implemented';
		} catch (error) {
			return this.getErrorResponse({ error });
		}
	}
}

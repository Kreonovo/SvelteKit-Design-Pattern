import { HttpHelper } from '$lib/server/helpers';
import type {
	ProductCollectionResponse,
	ProductResponse,
	UserCollectionResponse,
	UserResponse
} from './models/responses';
import type { BaseResponse } from '$lib/server/httpConsumers';

export abstract class HttpDummyJsonConsumer extends HttpHelper {
	public static async getProductCollection(
		query?: string
	): Promise<BaseResponse<ProductCollectionResponse>> {
		try {
			const endpoint = `https://dummyjson.com/products${query}`;
			const response = await this.get(endpoint);

			return this.handleResponse('getDummyJsonProducts', endpoint, null, response);
		} catch (error) {
			return this.getErrorResponse({ error });
		}
	}

	public static async getProduct(
		id?: string,
		query?: string
	): Promise<BaseResponse<ProductResponse>> {
		try {
			const endpoint = `https://dummyjson.com/products/${id}${query}`;
			const response = await this.get(endpoint);

			return this.handleResponse('getProduct', endpoint, null, response);
		} catch (error) {
			return this.getErrorResponse({ error });
		}
	}

	public static async getUserCollection(
		query?: string
	): Promise<BaseResponse<UserCollectionResponse>> {
		try {
			const endpoint = `https://dummyjson.com/users${query}`;
			const response = await this.get(endpoint);

			return this.handleResponse('getUserCollection', endpoint, null, response);
		} catch (error) {
			return this.getErrorResponse({ error });
		}
	}

	public static async getUser(id?: string, query?: string): Promise<BaseResponse<UserResponse>> {
		try {
			const endpoint = `https://dummyjson.com/users/${id}${query}`;
			const response = await this.get(endpoint);

			return this.handleResponse('getUser', endpoint, null, response);
		} catch (error) {
			return this.getErrorResponse({ error });
		}
	}
}

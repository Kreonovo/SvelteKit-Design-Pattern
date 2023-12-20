import { HTTPStatusCodes } from '$lib/shared/enums/httpStatusCodes';
import type { BaseResponse } from '../httpConsumers/baseHttpResponse';

export abstract class HttpHelper {
	static async post(endpoint: RequestInfo, body?: any): Promise<Response> {
		return await fetch(endpoint, {
			method: 'POST',
			body: body ? JSON.stringify(body) : null,
			headers: { 'content-type': 'application/json' }
		});
	}

	static async get(endpoint: RequestInfo): Promise<Response> {
		return await fetch(endpoint, { method: 'GET' });
	}

	static async handleResponse<T>(
		method: string,
		endpoint: string,
		request: any,
		response: Response
	): Promise<BaseResponse<T>> {
		if (response.status == HTTPStatusCodes.Unauthorized401) {
			return this.getUnauthorisedResponse<T>();
		}

		if (response.status >= HTTPStatusCodes.BadRequest400) {
			return this.getErrorResponse<T>({
				error: this.constructHttpError(method, endpoint, request, response),
				statusCode: response.status
			});
		}

		return this.getSuccessResponse<T>(await response.json());
	}

	static getSuccessResponse<T>(result: T): BaseResponse<T> {
		return {
			isSuccessful: true,
			result: result as T,
			statusCode: HTTPStatusCodes.Ok200
		} as BaseResponse<T>;
	}

	static getUnauthorisedResponse<T>(): BaseResponse<T> {
		return {
			isSuccessful: false,
			message: 'Unauthorised',
			result: undefined,
			statusCode: HTTPStatusCodes.Unauthorized401
		} as BaseResponse<T>;
	}

	static getErrorResponse<T>({
		error,
		statusCode = HTTPStatusCodes.InternalServerError500
	}: {
		error: any;
		statusCode?: number | undefined | null;
	}): BaseResponse<T> {
		return {
			isSuccessful: false,
			message: error.message,
			result: undefined,
			statusCode: statusCode
		} as BaseResponse<T>;
	}

	static constructHttpError(
		methodName: string,
		endpoint: string,
		request: any,
		response: any
	): Error {
		if (request)
			return new Error(
				`Caller: ${methodName} |\n Endpoint: ${endpoint} |\n RequestPayload: ${JSON.stringify(
					request
				)} |\n StatusCode: ${response.status}`
			);

		return new Error(
			`Caller: ${methodName} |\n Endpoint: ${endpoint} |\n StatusCode: ${response.status}`
		);
	}
}

import type { PaginationMetaResponse } from './paginationMetaResponse';

export class BaseCollectionResponse<TResult> {
	info?: PaginationMetaResponse;
	results?: TResult[] | null;
}

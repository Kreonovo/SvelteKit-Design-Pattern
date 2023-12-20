import { SiteOptions } from '$lib/configs/siteOptions';
import type { FilterRequest } from '$lib/server/httpConsumers';

export abstract class DummyJsonQueries {
	static getProductCardsQuery(search?: URLSearchParams): string {
		let params: FilterRequest;

		if (search) {
			params = {
				skip: search.get('skip') ? Number(search.get('skip')) : SiteOptions.paginationSkip,
				limit: search.get('limit') ? Number(search.get('limit')) : SiteOptions.paginationLimit,
				q: search.get('q') || undefined
			};
		} else {
			params = {
				skip: SiteOptions.paginationSkip,
				limit: SiteOptions.paginationLimit,
				q: undefined
			};
		}

		const { skip, limit, q } = params;
		let query = '?';
		let selectQuery = 'title,price,category,thumbnail';

		if (skip !== undefined) {
			query += `skip=${skip}&`;
		}
		if (limit !== undefined) {
			query += `limit=${limit}&`;
		}
		if (q !== undefined) {
			query += `q=${q}&`;
		}

		query += `select=${selectQuery}&`;
		query = query.endsWith('&') ? query.slice(0, -1) : query;

		return query;
	}
}

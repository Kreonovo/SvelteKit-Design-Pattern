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
		let urlSearchParams = new URLSearchParams();
		let selectQuery = 'title,price,category,thumbnail';

		if (skip !== undefined) {
			urlSearchParams.append('skip', skip.toString());
		}
		if (limit !== undefined) {
			urlSearchParams.append('limit', limit.toString());
		}
		if (q !== undefined) {
			urlSearchParams.append('q', q);
		}

		urlSearchParams.append('select', selectQuery);
		let query = '?' + urlSearchParams.toString();

		return query;
	}
}

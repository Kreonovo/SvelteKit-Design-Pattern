import type { SeoDataDto } from './seo';

export class BasePageMetaDataDto<TPaginationData> {
	seo?: SeoDataDto | undefined | null;
	pagination?: TPaginationData | undefined | null;

	constructor(
		seo?: SeoDataDto | undefined | null,
		pagination?: TPaginationData | undefined | null
	) {
		this.seo = seo;
		this.pagination = pagination;
	}
}

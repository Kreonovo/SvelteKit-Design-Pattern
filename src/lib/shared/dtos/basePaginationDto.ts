import { SiteOptions } from "$lib/configs/siteOptions";

export abstract class BasePaginationDto {
	total: number;
	skip: number;
	limit: number;
    index: number;

	constructor() {
		this.total = 0;
		this.skip = SiteOptions.paginationSkip;
		this.limit = SiteOptions.paginationLimit;
        this.index = 1;
	}
}

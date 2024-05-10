import type { ProductResponse } from '$lib/server/httpConsumers/dummyJson/models/responses';

export class SingleProductDto {
	product: ProductResponse;

	constructor(productResponse: ProductResponse | undefined) {
		this.product = productResponse ?? ({} as ProductResponse);
	}
}

import { BasePaginationResponse } from '../basePaginationResponse';
import type { ProductResponse } from './productResponse';

export class ProductCollectionResponse extends BasePaginationResponse {
	products?: ProductResponse[] | null;
}

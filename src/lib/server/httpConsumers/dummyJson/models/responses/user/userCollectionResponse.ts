import { BasePaginationResponse } from '../basePaginationResponse';
import type { UserResponse } from './userResponse';

export class UserCollectionResponse extends BasePaginationResponse {
	users?: UserResponse[] | null;
}

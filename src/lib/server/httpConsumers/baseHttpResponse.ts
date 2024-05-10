export class BaseResponse<T> {
	isSuccessful: boolean = true;
	message?: string | undefined | null;
	result?: T;
	statusCode!: number;
}

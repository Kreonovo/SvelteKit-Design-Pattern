import { HTTPStatusCodes } from '../enums/httpStatusCodes';

export abstract class TypeGuardUtility {
	static isHttpErrorCode(code: number): code is HTTPStatusCodes {
		const errorCodes = [
			HTTPStatusCodes.BadRequest400,
			HTTPStatusCodes.Unauthorized401,
			HTTPStatusCodes.Forbidden403,
			HTTPStatusCodes.NotFound404,
			HTTPStatusCodes.MethodNotAllowed405,
			HTTPStatusCodes.Conflict409,
			HTTPStatusCodes.InternalServerError500,
			HTTPStatusCodes.BadGateway502,
			HTTPStatusCodes.ServiceUnavailable503
		];
		return errorCodes.includes(code as HTTPStatusCodes);
	}
}

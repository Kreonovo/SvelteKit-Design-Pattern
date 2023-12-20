import type { CoordinatesResponse } from "./coordinatesResponse";

export class AddressResponse {
	address?: string;
	city?: string;
	coordinates?: CoordinatesResponse;
	postalCode?: string;
	state?: string;
}
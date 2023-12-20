import type { AddressResponse, BankResponse, CompanyResponse, HairResponse } from '../meta';

export class UserResponse {
	id!: number;
	firstName?: string;
	lastName?: string;
	maidenName?: string;
	age?: number;
	gender?: string;
	email?: string;
	phone?: string;
	username?: string;
	password?: string;
	birthDate?: string;
	image?: string;
	bloodGroup?: string;
	height?: number;
	weight?: number;
	eyeColor?: string;
	hair?: HairResponse;
	domain?: string;
	ip?: string;
	address?: AddressResponse;
	macAddress?: string;
	university?: string;
	bank?: BankResponse;
	company?: CompanyResponse;
	ein?: string;
	ssn?: string;
	userAgent?: string;
}

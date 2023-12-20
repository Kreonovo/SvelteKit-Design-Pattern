export class OrderEntity {
	id?: number;
	customerId: number;
	orderDate: string;
	amount: number;

	constructor(id: number, customerId: number, orderDate: string, amount: number) {
		this.id = id;
		this.customerId = customerId;
		this.orderDate = orderDate;
		this.amount = amount;
	}
}

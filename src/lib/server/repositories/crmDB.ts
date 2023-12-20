import { DalHelper } from '$lib/server/helpers';
import { CustomerEntity } from './crmRepository/Entities/customerEntity';
import { OrderEntity } from './crmRepository/Entities/orderEntity';

export class CrmDB extends DalHelper {
	constructor(dbFilePath: string) {
		super(dbFilePath);
	}

	async getCustomer(id: number): Promise<CustomerEntity | null> {
		const query = 'SELECT * FROM customers WHERE id = ?';
		const row = await this.get(query, [id]);
		return row ? new CustomerEntity(row.id, row.name, row.email) : null;
	}

	async createCustomer(customer: CustomerEntity): Promise<void> {
		const query = 'INSERT INTO customers (name, email) VALUES (?, ?)';
		await this.run(query, [customer.name, customer.email]);
	}

	async updateCustomer(id: number, customer: CustomerEntity): Promise<void> {
		const query = 'UPDATE customers SET name = ?, email = ? WHERE id = ?';
		await this.run(query, [customer.name, customer.email, id]);
	}

	async deleteCustomer(id: number): Promise<void> {
		const query = 'DELETE FROM customers WHERE id = ?';
		await this.run(query, [id]);
	}

	async getOrder(id: number): Promise<OrderEntity | null> {
		const query = 'SELECT * FROM orders WHERE id = ?';
		const row = await this.get(query, [id]);
		return row ? new OrderEntity(row.id, row.customerId, row.orderDate, row.amount) : null;
	}

	async createOrder(order: OrderEntity): Promise<void> {
		const query = 'INSERT INTO orders (customerId, orderDate, amount) VALUES (?, ?, ?)';
		await this.run(query, [order.customerId, order.orderDate, order.amount]);
	}

	async updateOrder(id: number, order: OrderEntity): Promise<void> {
		const query = 'UPDATE orders SET customerId = ?, orderDate = ?, amount = ? WHERE id = ?';
		await this.run(query, [order.customerId, order.orderDate, order.amount, id]);
	}

	async deleteOrder(id: number): Promise<void> {
		const query = 'DELETE FROM orders WHERE id = ?';
		await this.run(query, [id]);
	}
}

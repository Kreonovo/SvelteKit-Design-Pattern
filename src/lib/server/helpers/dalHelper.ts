import sqlite3 from 'sqlite3';

export abstract class DalHelper {
	protected db: sqlite3.Database;

	constructor(dbFilePath: string) {
		this.db = new sqlite3.Database(dbFilePath, (err) => {
			if (err) {
				console.error('Could not connect to database', err);
			} else {
				console.log('Connected to database');
			}
		});
	}

	protected get(query: string, params: any[]): Promise<any> {
		return new Promise((resolve, reject) => {
			this.db.get(query, params, (err, row) => {
				if (err) {
					reject(err);
				} else {
					resolve(row);
				}
			});
		});
	}

	protected run(query: string, params: any[]): Promise<void> {
		return new Promise((resolve, reject) => {
			this.db.run(query, params, function (err) {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});
	}
}

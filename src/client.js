import { API_BASE_URL } from './constants';

class Client {
	baseUrl = API_BASE_URL;

	constructor(path) {
		this.path = path;
	}

	async get(url = "", defaultReturn = []) {
		try {
			const param = url ? `/${url}` : "";
			const res = await fetch(`${this.baseUrl}/${this.path}${param}`);

			return await res.json();
		} catch (e) {
			console.error(e);

			return defaultReturn;
		}
	}
}

export default Client;
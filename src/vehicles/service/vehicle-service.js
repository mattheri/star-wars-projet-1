import { API_VEHICLES_PATH } from '../../constants';

class VehicleService {
	url = API_VEHICLES_PATH;

	async getAll() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.status);
			const json = await response.json();

			return json;
		} catch (e) {
			console.error(e);

			return [];
		}
	}

	async getById(id) {
		try {
			const response = await fetch(`${this.url}/${id}`);
			if (!response.ok) throw new Error(response.status);
			const json = await response.json();

			return json;
		} catch (e) {
			console.error(e);

			return {};
		}
	}
}

export default VehicleService;
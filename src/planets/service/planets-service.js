import { API_PLANET_PATH } from '../../constants';

class PlanetService {
	url = API_PLANET_PATH;

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

export default PlanetService;
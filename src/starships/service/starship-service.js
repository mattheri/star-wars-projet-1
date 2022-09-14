import { API_STARSHIP_PATH } from '../../constants';

class StarshipService {
	url = API_STARSHIP_PATH;

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

export default StarshipService;
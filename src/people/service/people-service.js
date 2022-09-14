import { API_PEOPLES_PATH } from '../../constants';

class PeopleService {
	url = API_PEOPLES_PATH;

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

export default PeopleService;
export const getUrlId = (url) => url.match(/\d+/).join("");

export const getCorrectSuffix = (number) => {
	const n = Number(number);

	switch (n) {
		case 1:
			return "st";
		case 2:
			return "nd";
		case 3:
			return "rd";
		default:
			return "th";
	}
};

export const formatMonth = (month) => {
	if (month < 10) return `0${month}`;

	return month;
};

export const getFullDate = (date) => {
	const d = new Date(date);

	return `${d.getDate()}/${formatMonth(d.getMonth() + 1)}/${d.getFullYear()}`;
};

export const isNotEmpty = (obj) => {
	if (Array.isArray(obj)) return obj.length > 0;

	return Object.keys(obj).length > 0;
}

export const normalizeString = (str) => {
	return str.split("_").map(s => `${s.slice(0, 1).toUpperCase()}${s.slice(1)}`).join(" ");
}

export const getPropertiesArray = (obj, props) => {
	return props.map(prop => ([normalizeString(prop), obj[prop]]));
}
import constants from "../constants";

const qs = object => 
	'?' + Object.keys(object).map(key => key + "=" + object[key])
		.join('&');

const toJSON = response =>
	response.json();	

export default class Assets {

	static downloadJSON(url) {
		return fetch(url)
			.then(toJSON)
	}

	static downloadImage(src){
		return new Promise((success, reject) => {
			const image = new Image();

			image.onload = () => success(image);
			image.src = src;
		});
	}

	static downloadActor({ look, rotation }) {
		const query = qs({ look, rotation });

		return Assets.downloadImage(constants.ASSETS_URL + "/avatar" + query + ".img");
	}

	static downloadMap(mapID) {
		return Assets.downloadJSON(constants.ASSETS_URL + "/maps/" + mapID + ".json")
	}

	static downloadGFX({ name }) {
		return Assets.downloadImage(constants.ASSETS_URL + "/gfx/" + name + ".png")
	}
}

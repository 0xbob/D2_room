import { 
	ASSETS_URL 
} from "../constants";

const 	toJSON = response =>
	response.json();

export default class Assets {

	static loadJSON(url){
		return fetch(url)
			.then(toJSON);
	}

	static loadImage(src){
		return new Promise((success, reject) =>
			const image = new Image();

			image.onload = () => success(image);
			image.src = src;
		});
	}	
}

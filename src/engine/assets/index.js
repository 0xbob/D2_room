import { 
	ASSETS_URL 
} from "../constants";

const 	toJSON = response =>
	response.json();

export default class Assets {

	static downloadJSON(url){
		return fetch(url)
			.then(toJSON);
	}

	static downloadImage(src){
		return new Promise((success, reject) =>
			const image = new Image();

			image.onload = () => success(image);
			image.src = src;
		});
	}	
}

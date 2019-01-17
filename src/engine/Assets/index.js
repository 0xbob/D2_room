
const 	toJSON = response =>
	response.json();

export default class Assets {

	static loadJSON(url){
		return fetch(url)
			.then(toJSON);
	}

	static loadImage(src, onload){
		const image = new Image();

		image.onload = () => onload(image);
		image.src = src;
	}

	static loadAvatar(look){

	}
}
import Assets from "../assets";
import Map from "../map";


const 	loadGFX = () => {
	const image = await download();
	return {};
}

const 	loadBackground = async (background) =>
	await download();

const 	loadActor = async actor => {
	const image = await download();
	const { x, y } = actor;

	return { image, x, y };
}

const	loadAnimation = async animation => {
	const image = await download();
	const { x, y } = animation;
	
	return { image, x, y };
}

const 	sortGraphics = (previous, next) => {
	const diffY = previous["y"] - next["y"];
	const diffX = previous["x"] - next["x"];

	if (diffY) return (diffY > 0 ? 1 : 0);
	if (diffX) return (diffX > 0 ? 1 : 0);
	return (0);
}

export default class Scene {

	
	static load(animations) {
		Scene.animations = animations || [];
	}

	static addAnimation(animation) {
		Scene.animations.push(animation);
	}
	
	static removeAnimation(id)) {
		Scene.animations = Scene.animations.filter(animation => animation.id != id);
	}
	
	static async loadGraphics() {
		const actors = await Promise.all(map.actors);
	}
	
	static render() {
		Map.graphics = Map.graphics.sort(sortGraphics);
	}
}


/*
const	MAX_GRAPHICS = 100
const 	MAX_COLS = 13
const 	MAX_ROWS = 40

const 	getRandom = (min, max) => 
	Math.floor((Math.random() * max) + min);

const 	createGraphics = () =>
{
 	const 	graphics = []
	let		i = 0;
    
    while (i < MAX_GRAPHICS)
    {
      	graphics[i] = {
          	x: getRandom(0, MAX_COLS),
          	y: getRandom(0, MAX_ROWS)
        };
     	i++; 
    }
  	return graphics;
}

const 	graphics = createGraphics();
*/

import Assets from "../assets";
import Map from "../map";


const 	sortGraphics = (previous, next) => {
	const diffY = previous.y - next.y;
	const diffX = previous.x - next.x;

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

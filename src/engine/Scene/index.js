import Assets from "../assets";
import Map from "../map";

const 	toIsometric = (x, y) => {

}



export default class Scene {

	constructor()
	{
		this.animations = animations || [];
	}

	// Change sprite state

	addAnimation(animation)
	{
		this.animations.push(animation);
	}
	
	removeAnimation(id))
	{
		this.animations = this.animations.filter(animation => animation.id != id);
	}
}

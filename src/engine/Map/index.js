import Grid from "./Grid";

export default class Map {

	static init(grid){
		Map.grid = new Grid(grid);
		Map.actors = [];
	}

	static addActor(actor)
	{
		Map.actors.push(actor);
	}
	
	static removeActor({ id }))
	{
		Map.actors = Map.actors.filter(actor => actor.id != id);
	}
}

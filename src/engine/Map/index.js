import Grid from "./Grid";

export default class Map {

	static init(grid) {
		Map.grid = new Grid(grid);
		Map.actors = [];
	}

	static addActor(actor) {
		Map.actors.push(actor);
	}
	
	static removeActor({ id })) {
		Map.actors = Map.actors.filter(actor => actor.id != id);
	}

	static moveActor({ id, cellID }) {
		const actor = Map.actors.filter(actor.id);
		// Animation	
		Grid.changeState(actor.cellID, Grid.WALKABLE);
		actor.cellID = cellID;
		Grid.changeState(actor.cellID, Grid.OCCUPIED);
	}
}

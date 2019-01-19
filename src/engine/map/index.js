import Grid from "./grid";

export default class Map {

	static init(grid) {
		Map.grid = new Grid(grid);
		Map.actors = [];
	}

	static addActor(actor) {
		Map.actors.push(actor);

		Grid.changeState(actor.cellID, Grid.OCCUPIED);
	}
	
	static removeActor({ id }) {
		
		for (const index in Map.actors)
		{
			const actor = Map.actors[index];
			if (actor.id != id)
				continue ;
			Grid.changeState(actor.cellID, Grid.WALKABLE);
		}
		Map.actors.splice(index, 1);
	}

	static moveActor({ id, cellID }) {
		const actor = Map.actors.filter(actor.id);
	
		Grid.changeState(actor.cellID, Grid.WALKABLE);
		actor.cellID = cellID;
		Grid.changeState(actor.cellID, Grid.OCCUPIED);
	}
}

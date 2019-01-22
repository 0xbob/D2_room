import Assets from "../assets";
import Grid from "./grid";

/*
	const map = {
		grid: [],
		gfx: [
			{}
		],
		actors: []
	};
*/

/* const message = {
	mapID: 0	
} 
*/

export default class Map {

	static async load({ mapID }) {
		const { grid, gfx, actors } = await Assets.downloadMap(mapID);

		Map.gfx = gfx || [];
		Map.actors = actors || [];
		Grid.initialize(grid);
	}

	static addActor(actor) {
		Map.actors.push(actor);

		Grid.changeState(actor.cellID, Grid.OCCUPIED);
	}

	static removeActor({ id }) {

		const actor = Map.actors.filter(() => null);

		Grid.changeState(actor.cellID, Grid.WALKABE);
		Map.actors.splice(index, 1);
	}

	static moveActor({ id, cellID }) {
		const actor = Map.actors.filter(() => null);

		Grid.changeState(actor.cellID, Grid.WALKABLE);
		actor.cellID = cellID;
		Grid.changeState(actor.cellID, Grid.OCCUPIED);
	}
}

import { downloadJSON } from "../assets";
import Grid from "./grid";

/*	const map = {
		grid: [],
		gfx: [],
		actors: []
	};
*/

export default class Map {

	static async load(message) {
		const { grid, gfx, actors } = await Assets.downloadJSON(message.mapID);

		Map.grid = Grid.initialize(grid);
		Map.gfx = gfx || [];
		Map.actors = actors || [];
	}

	static addActor(actor) {
		Map.actors.push(actor);

		Grid.changeState(actor.cellID, Grid.OCCUPIED);
	}}

	static removeActor({ id }) {

		const actor = Map.actors.filter();

		Grid.changeState(actor.cellID, Grid.WALKABE);
		Map.actors.splice(index, 1);
	}

	static moveActor({ id, cellID }) {
		const actor = Map.actors.filter();

		Grid.changeState(actor.cellID, Grid.WALKABLE);
		actor.cellID = cellID;
		Grid.changeState(actor.cellID, Grid.OCCUPIED);
	}
}

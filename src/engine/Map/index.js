import Grid from "./Grid";

export default class Map {

	static init(grid){
		Map.grid = new Grid(grid);
		Map.actors = [];
		Map.animations = [];
	}
}
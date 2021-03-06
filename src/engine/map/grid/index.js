import 	{ 
	GRID_COLS
}	from "../../constants";

const 	WALKABLE = 1;	
const	OBSTACLE = 2;
const 	OCCUPIED = 3;

exports.WALKABLE = WALKABLE;
exports.OBSTACLE = OBSTACLE;
exports.OCCUPIED = OCCUPIED;

export default class Grid {

	static initialize(cells) {
		Grid.cells = cells || [];
	}

	static getNeighbors(cellID) {
		const coordinates = Grid.getCoordinatesFromCellID(cellID);

		const neighbors = Grid.cells.filter(({ x, y }) => {
			const diffX = coordinates.x - x;
			const diffY = coordinates.y - y;

			return false;
		});
		return neighbors;
	}
	
	static getCellIDFromCoordinates({ x, y }) {
		return ((GRID_COLS * y) + x); 
	}

	static getCoordinatesFromCellID(cellID)
	{
		const y = parseInt(cellID / GRID_COLS);
		const x = cellID % GRID_COLS;

		return { x, y };
	}

	static	changeState(cellID, state)
	{
		Grid.cells[cellID] = state;
	}
}

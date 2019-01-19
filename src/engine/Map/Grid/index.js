import 	{ 
	GRID_COLS
}	from "../Constants";

const 	WALKABLE = 1;	
const	OBSTACLE = 2;
const 	OCCUPIED = 3;

exports.WALKABLE = WALKABLE;
exports.OBSTACLE = OBSTACLE;
exports.OCCUPIED = OCCUPIED;

export default class Grid {

	static init(cells)
	{
		Grid.cells = cells || [];
	}
	
	static getCellIDFromCoordinates({ x, y }))
	{
		return ((GRID_COLS * y) + x); 
	}

	static getCoordinatesFromCellID(cellID)
	{
		const y = parseInt(cellID / 13);
		const x = cellID % 13;

		return { x, y };
	}

	static	changeState(cellID, state)
	{
		Grid.cells[cellID] = state;
	}
}

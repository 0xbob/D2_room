import { CELL_WIDTH,
	 CELL_HEIGHT } from "../constants";
	
export default class Screen {
	
	toPosition({ x, y }) {
		const	shift = (y % 2) ? 0.5 : 1;
		const	screenX = (CELL_WIDTH * x) * shift;
		const	screenY = (CELL_HEIGHT * y) * shift;
			
		return { screenX, screenY };
	}

}

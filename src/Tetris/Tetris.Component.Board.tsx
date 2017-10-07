namespace Tetris {
	export type Colour =
		| "red"
		| "yellow"
		| "magenta"
		| "blue"
		| "cyan"
		| "green"
		| "orange";

	export interface Tile {
		x: number;
		y: number;
		colour: Colour;
	}

	export function Board(board: Tile[]) {
		return (
			<div className="aa_board">
				{board.map(tile =>
					<div
						className={"aa_tile aa_" + tile.colour}
						style={{ top: 400 - tile.y * 20 - 10, left: tile.x * 20 - 10 }}
					/>
				)}
			</div>
		);
	}
}

// ToDo: https://medium.com/@arnaudrinquin/frictionless-unit-testing-in-javascript-with-browser-tap-6ac2cea89a59

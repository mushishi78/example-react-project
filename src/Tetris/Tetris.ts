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
	}

	export interface Shape {
		colour: Colour;
		tiles: Tile[];
	}
}

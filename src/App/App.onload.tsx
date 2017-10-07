window.onload = function() {
	const board: Tetris.Tile[] = [
		{ x: 5, y: 0, colour: "red" },
		{ x: 6, y: 0, colour: "red" },
		{ x: 7, y: 0, colour: "red" },
		{ x: 7, y: 1, colour: "red" },
		{ x: 4, y: 0, colour: "blue" },
		{ x: 4, y: 1, colour: "blue" },
		{ x: 4, y: 2, colour: "blue" },
		{ x: 4, y: 3, colour: "blue" },
		{ x: 6, y: 1, colour: "magenta" },
		{ x: 6, y: 2, colour: "magenta" },
		{ x: 6, y: 3, colour: "magenta" },
		{ x: 7, y: 2, colour: "magenta" },
	];

	ReactDOM.render(
		<div>{Tetris.Board(board)}</div>,
		document.getElementById("example-react-project")
	);
};

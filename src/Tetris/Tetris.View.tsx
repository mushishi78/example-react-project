namespace Tetris {
	export function View(appStateGet: AppStateGet, appStateSet: AppStateSet) {
		const { shapes } = appStateGet().tetris;

		return (
			<div className="ac_board">
				{shapes.map(shape =>
					shape.tiles.map(tile => (
						<div
							className={"ac_tile ac_" + shape.colour}
							style={{
								top: 400 - tile.y * 20 - 20,
								left: tile.x * 20 - 20
							}}
						/>
					))
				)}
			</div>
		);
	}
}

// ToDo: https://medium.com/@arnaudrinquin/frictionless-unit-testing-in-javascript-with-browser-tap-6ac2cea89a59

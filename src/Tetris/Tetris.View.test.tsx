namespace Test {
	tests["Tetris.View"] = {
		"renders an empty board": t => {
			const emptyState: Tetris.AppState = {
				lib: {},
				tetris: {
					shapes: []
				}
			};

			ReactDOM.render(
				Tetris.View(() => emptyState, () => null),
				Lib.rootElement,
				() => {
					const actual = Lib.rootElement.innerHTML;
					const expected = '<div class="ac_board"></div>';

					if (actual !== expected) {
						t.error(`expected\n${actual}\nto equal\n${expected}`);
					}

					t.end();
				}
			);
		},

		"renders an single shape": t => {
			const emptyState: Tetris.AppState = {
				lib: {},
				tetris: {
					shapes: [
						{
							colour: "red",
							tiles: [
								{ x: 5, y: 0 },
								{ x: 6, y: 0 },
								{ x: 7, y: 0 },
								{ x: 7, y: 1 }
							]
						}
					]
				}
			};

			ReactDOM.render(
				Tetris.View(() => emptyState, () => null),
				Lib.rootElement,
				() => {
					const actual = Lib.rootElement.innerHTML;
					const expected =
						'<div class="ac_board">' +
						'<div class="ac_tile ac_red" style="top: 380px; left: 80px;"></div>' +
						'<div class="ac_tile ac_red" style="top: 380px; left: 100px;"></div>' +
						'<div class="ac_tile ac_red" style="top: 380px; left: 120px;"></div>' +
						'<div class="ac_tile ac_red" style="top: 360px; left: 120px;"></div>' +
						"</div>";

					if (actual !== expected) {
						t.error(`expected\n${actual}\nto equal\n${expected}`);
					}

					t.end();
				}
			);
		},

		"renders multiple shapes": t => {
			const emptyState: Tetris.AppState = {
				lib: {},
				tetris: {
					shapes: [
						{
							colour: "red",
							tiles: [
								{ x: 5, y: 0 },
								{ x: 6, y: 0 },
								{ x: 7, y: 0 },
								{ x: 7, y: 1 }
							]
						},
						{
							colour: "blue",
							tiles: [
								{ x: 4, y: 0 },
								{ x: 4, y: 1 },
								{ x: 4, y: 2 },
								{ x: 4, y: 3 }
							]
						},
						{
							colour: "magenta",
							tiles: [
								{ x: 6, y: 1 },
								{ x: 6, y: 2 },
								{ x: 6, y: 3 },
								{ x: 7, y: 2 }
							]
						}
					]
				}
			};

			ReactDOM.render(
				Tetris.View(() => emptyState, () => null),
				Lib.rootElement,
				() => {
					const actual = Lib.rootElement.innerHTML;
					const expected =
						'<div class="ac_board">' +
						'<div class="ac_tile ac_red" style="top: 380px; left: 80px;"></div>' +
						'<div class="ac_tile ac_red" style="top: 380px; left: 100px;"></div>' +
						'<div class="ac_tile ac_red" style="top: 380px; left: 120px;"></div>' +
						'<div class="ac_tile ac_red" style="top: 360px; left: 120px;"></div>' +
						'<div class="ac_tile ac_blue" style="top: 380px; left: 60px;"></div>' +
						'<div class="ac_tile ac_blue" style="top: 360px; left: 60px;"></div>' +
						'<div class="ac_tile ac_blue" style="top: 340px; left: 60px;"></div>' +
						'<div class="ac_tile ac_blue" style="top: 320px; left: 60px;"></div>' +
						'<div class="ac_tile ac_magenta" style="top: 360px; left: 100px;"></div>' +
						'<div class="ac_tile ac_magenta" style="top: 340px; left: 100px;"></div>' +
						'<div class="ac_tile ac_magenta" style="top: 320px; left: 100px;"></div>' +
						'<div class="ac_tile ac_magenta" style="top: 340px; left: 120px;"></div>' +
						"</div>";

					if (actual !== expected) {
						t.error(`expected\n${actual}\nto equal\n${expected}`);
					}

					t.end();
				}
			);
		}
	};
}

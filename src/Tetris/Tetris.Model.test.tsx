namespace Test {
	tests["Tetris.Model"] = {
		"inital state": t => {
			const actual = Tetris.stateInit();
			const expected = {
				shapes: []
			};
			if (actual.shapes.length !== 0) {
				t.error(`expected intial state\n${actual}\nto have no shapes`);
			}
			t.end();
		}
	};
}

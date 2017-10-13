window.onload = () => {
	if (window.location.pathname === "/tests") {
		const logger = Tatt.tapLogger(Test.tests.length, console.log);
		Tatt.runTests(Test.tests, logger, () => null);
		return;
	}

	ReactDOM.render(
		<App.Container
			render={(appStateGet, appStateSet) => (
				<div>
					<div>{Tetris.View(appStateGet, appStateSet)}</div>
					<div>{Sudoku.View(appStateGet, appStateSet)}</div>
				</div>
			)}
		/>,
		Lib.rootElement
	);
};

window.onload = function() {
	ReactDOM.render(
		<App.Container
			render={(appStateGet, appStateSet) => (
				<div>
					<div>{Tetris.View(appStateGet, appStateSet)}</div>
					<div>{Sudoku.View(appStateGet, appStateSet)}</div>
				</div>
			)}
		/>,
		document.getElementById("example-react-project")
	);
};

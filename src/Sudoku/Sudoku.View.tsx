namespace Sudoku {
	export function View(appStateGet: AppStateGet, appStateSet: AppStateSet) {
		const {} = appStateGet();

		return <div className="ad_board" />;
	}
}

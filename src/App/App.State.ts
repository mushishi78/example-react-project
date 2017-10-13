namespace App {
	export interface AppState {
		lib: Lib.State;
		tetris: Tetris.State;
		sudoku: Sudoku.State;
	}

	export interface AppStateGet {
		(): AppState;
	}

	export interface AppStateSet {
		(appState: AppState, callback?: { (): void }): void;
	}
}

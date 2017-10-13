namespace Sudoku {
	export interface State {}
	export interface AppState {
		lib: Lib.State;
		sudoku: State;
	}
	export interface AppStateGet {
		(): AppState;
	}
	export interface AppStateSet {
		(appState: AppState, callback?: { (): void }): void;
	}
	export function stateInit(): State {
		return {};
	}
}

namespace Tetris {
	export interface State {
		shapes: Shape[];
	}
	export interface AppState {
		lib: Lib.State;
		tetris: State;
	}
	export interface AppStateGet {
		(): AppState;
	}
	export interface AppStateSet {
		(appState: AppState, callback?: { (): void }): void;
	}
	export function stateInit(): State {
		return {
			shapes: []
		};
	}
}

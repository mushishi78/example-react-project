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
		};
	}
}

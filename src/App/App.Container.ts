namespace App {
	export interface ContainerProps {
		render: {
			(
				appStateGet: AppStateGet,
				appStateSet: AppStateSet
			): React.ReactElement<any>;
		};
	}

	export class Container extends React.Component<ContainerProps, AppState> {
		constructor(props: ContainerProps) {
			super(props);
			this.state = {
				lib: Lib.stateInit(),
				tetris: Tetris.stateInit(),
				sudoku: Sudoku.stateInit()
			};
		}

		render() {
			return this.props.render(
				() => this.state,
				(state, callback) => this.setState(state, callback)
			);
		}
	}
}

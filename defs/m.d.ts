declare namespace m {
	export interface Suite {
		[group: string]: {
			[name: string]: TestFn;
		};
	}
	export interface Test {
		group: string;
		name: string;
		testFn: TestFn;
	}
	export interface TestFn {
		(t: T): void;
	}
	export interface T {
		error: {
			(msg: string): void;
		};
		end: {
			(): void;
		};
	}
	export interface Result {
		group: string;
		name: string;
		errors: string[];
	}
	export function flattenSuite(suite: Suite): Test[];

	export function runTestsInSerial({
		tests,
		onResult,
		onEnd
	}: {
		tests: Test[];
		onResult?: {
			(result: Result): void;
		};
		onEnd?: {
			(results: Result[]): void;
		};
	}): void;
}

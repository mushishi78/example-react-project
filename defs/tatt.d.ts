declare namespace Tatt {
    export interface Test {
        group: string;
        name: string;
        testFn: {
            (t: T): void;
        };
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
    export function addTest(
        tests: Test[],
        group: string,
        name: string,
        testFn: {
            (t: T): void;
        }
    ): void;
    export function runTests(
        tests: Test[],
        onResult: {
            (result: Result): void;
        },
        completed: {
            (): void;
        }
    ): void;
    export let timeout: {
        length: number;
    };
    export function runTest(
        test: Test,
        callback: {
            (result: Result): void;
        }
    ): void;
    export function tapLogger(
        plan: number,
        printLn: {
            (msg: string): void;
        }
    ): (result: Result) => void;
}

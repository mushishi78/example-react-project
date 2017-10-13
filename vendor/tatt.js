(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f();
    } else if (typeof define === "function" && define.amd) {
        define([], f);
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window;
        } else if (typeof global !== "undefined") {
            g = global;
        } else if (typeof self !== "undefined") {
            g = self;
        } else {
            g = this;
        }
        g.Tatt = f();
    }
})(function() {
    var define, module, exports;
    return (function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw ((f.code = "MODULE_NOT_FOUND"), f);
                }
                var l = (n[o] = { exports: {} });
                t[o][0].call(
                    l.exports,
                    function(e) {
                        var n = t[o][1][e];
                        return s(n ? n : e);
                    },
                    l,
                    l.exports,
                    e,
                    t,
                    n,
                    r
                );
            }
            return n[o].exports;
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s;
    })(
        {
            1: [
                function(require, module, exports) {
                    "use strict";
                    exports.__esModule = true;
                    function addTest(tests, group, name, testFn) {
                        tests.push({
                            group: group,
                            name: name,
                            testFn: testFn
                        });
                    }
                    exports.addTest = addTest;
                    function runTests(tests, onResult, completed) {
                        function recurse(i) {
                            if (!tests[i]) {
                                completed();
                                return;
                            }
                            runTest(tests[i], function(result) {
                                onResult(result);
                                recurse(i + 1);
                            });
                        }
                        recurse(0);
                    }
                    exports.runTests = runTests;
                    exports.timeout = { length: 10000 };
                    function runTest(test, callback) {
                        var errors = [];
                        var completed = false;
                        function complete() {
                            if (completed) return;
                            completed = true;
                            clearTimeout(timeoutId);
                            callback({
                                name: test.name,
                                group: test.group,
                                errors: errors
                            });
                        }
                        var timeoutId = setTimeout(function() {
                            errors = errors.concat("timed out");
                            complete();
                        }, exports.timeout.length);
                        try {
                            test.testFn({
                                error: function(msg) {
                                    return (errors = errors.concat(msg));
                                },
                                end: complete
                            });
                        } catch (ex) {
                            errors = errors.concat(ex.stack);
                            complete();
                        }
                    }
                    exports.runTest = runTest;
                    function tapLogger(plan, printLn) {
                        printLn("TAP version 13");
                        printLn("1.." + plan);
                        var i = 0;
                        return function(result) {
                            i++;
                            // ok
                            if (result.errors.length === 0) {
                                printLn(
                                    "ok " +
                                        i +
                                        " " +
                                        result.group +
                                        " - " +
                                        result.name
                                );
                                return;
                            }
                            // not ok
                            printLn(
                                "not ok " +
                                    i +
                                    " " +
                                    result.group +
                                    " - " +
                                    result.name
                            );
                            printLn("  ---");
                            printLn("  errors:");
                            for (
                                var _i = 0, _a = result.errors;
                                _i < _a.length;
                                _i++
                            ) {
                                var error = _a[_i];
                                printLn(
                                    "    - " + error.replace(/\n/g, "\n      ")
                                );
                            }
                            printLn("  ...");
                        };
                    }
                    exports.tapLogger = tapLogger;
                },
                {}
            ]
        },
        {},
        [1]
    )(1);
});

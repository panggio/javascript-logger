"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DebugLogger = /** @class */ (function () {
    function DebugLogger() {
    }
    DebugLogger.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (this.LOG_ENABLED) {
            /* tslint:disable */
            console.log.apply(console, [message].concat(optionalParams));
        }
    };
    DebugLogger.LOGGER_KEY = 'myDebug';
    DebugLogger.LOG_ENABLED = true;
    return DebugLogger;
}());
exports.DebugLogger = DebugLogger;

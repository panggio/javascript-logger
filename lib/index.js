"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (this.LOG_ENABLED) {
            /* tslint:disable */
            console.log.apply(console, [message].concat(optionalParams));
        }
    };
    Logger.LOGGER_KEY = 'jsDebug';
    Logger.LOG_ENABLED = (location && location.hostname == 'localhost') ||
        (localStorage && localStorage.getItem(Logger.LOGGER_KEY) !== null) ||
        (location && new URLSearchParams(window.location.search).has(Logger.LOGGER_KEY));
    return Logger;
}());
exports.Logger = Logger;

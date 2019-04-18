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
    Logger.trace = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (this.TRACE_ENABLED) {
            /* tslint:disable */
            console.trace.apply(console, [message].concat(optionalParams));
        }
    };
    // NodeJS support
    Logger.validateEnvironment = function () {
        if (typeof location === 'undefined') {
            /* tslint:disable */
            global.location = { 'hostname': 'localhost' };
        }
        if (typeof localStorage === 'undefined') {
            /* tslint:disable */
            global.localStorage = null;
        }
        return true;
    };
    Logger.validateLocalHost = function () {
        return (location && location.hostname == 'localhost');
    };
    // consoleActionCompare: '1' = log & '2' = trace
    Logger.validateLocalStorage = function (consoleActionCompare) {
        return (localStorage &&
            localStorage.getItem(Logger.LOGGER_KEY) !== null &&
            (localStorage.getItem(Logger.LOGGER_KEY) === consoleActionCompare ||
                localStorage.getItem(Logger.LOGGER_KEY) === '3'));
    };
    // consoleActionCompare: '1' = log & '2' = trace
    Logger.validaQueryString = function (consoleActionCompare) {
        return (location &&
            new URLSearchParams(window.location.search).has(Logger.LOGGER_KEY) &&
            (new URLSearchParams(window.location.search).get(Logger.LOGGER_KEY) === consoleActionCompare ||
                new URLSearchParams(window.location.search).get(Logger.LOGGER_KEY) === '3'));
    };
    Logger.LOGGER_KEY = 'jsDebug';
    Logger.LOG_ENABLED = Logger.validateEnvironment() &&
        (Logger.validateLocalHost() ||
            Logger.validateLocalStorage('1') ||
            Logger.validaQueryString('1'));
    Logger.TRACE_ENABLED = Logger.validateEnvironment() &&
        (Logger.validateLocalHost() ||
            Logger.validateLocalStorage('2') ||
            Logger.validaQueryString('2'));
    return Logger;
}());
exports.Logger = Logger;

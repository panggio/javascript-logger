"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    static log(message, ...optionalParams) {
        if (this.LOG_ENABLED) {
            /* tslint:disable */
            console.log(message, ...optionalParams);
        }
    }
    static trace(message, ...optionalParams) {
        if (this.TRACE_ENABLED) {
            /* tslint:disable */
            console.trace(message, ...optionalParams);
        }
    }
    // NodeJS support
    static validateEnvironment() {
        if (typeof location === 'undefined') {
            /* tslint:disable */
            global.location = { 'hostname': 'localhost' };
        }
        if (typeof localStorage === 'undefined') {
            /* tslint:disable */
            global.localStorage = null;
        }
        return true;
    }
    static validateLocalHost() {
        return (location && location.hostname == 'localhost');
    }
    // consoleActionCompare: '1' = log & '2' = trace
    static validateLocalStorage(consoleActionCompare) {
        return (localStorage &&
            localStorage.getItem(Logger.LOGGER_KEY) !== null &&
            (localStorage.getItem(Logger.LOGGER_KEY) === consoleActionCompare ||
                localStorage.getItem(Logger.LOGGER_KEY) === '3'));
    }
    // consoleActionCompare: '1' = log & '2' = trace
    static validaQueryString(consoleActionCompare) {
        return (location &&
            new URLSearchParams(window.location.search).has(Logger.LOGGER_KEY) &&
            (new URLSearchParams(window.location.search).get(Logger.LOGGER_KEY) === consoleActionCompare ||
                new URLSearchParams(window.location.search).get(Logger.LOGGER_KEY) === '3'));
    }
}
Logger.LOGGER_KEY = 'jsDebug';
Logger.LOG_ENABLED = Logger.validateEnvironment() &&
    (Logger.validateLocalHost() ||
        Logger.validateLocalStorage('1') ||
        Logger.validaQueryString('1'));
Logger.TRACE_ENABLED = Logger.validateEnvironment() &&
    (Logger.validateLocalHost() ||
        Logger.validateLocalStorage('2') ||
        Logger.validaQueryString('2'));
exports.Logger = Logger;

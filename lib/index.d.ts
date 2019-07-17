export interface IGlobal {
    location: any;
    localStorage: any;
}
export declare class Logger {
    static log(message?: any, ...optionalParams: any[]): void;
    static trace(message?: any, ...optionalParams: any[]): void;
    private static LOGGER_KEY;
    private static LOG_ENABLED;
    private static TRACE_ENABLED;
    private static validateEnvironment;
    private static validateLocalHost;
    private static validateLocalStorage;
    private static validaQueryString;
    private static getQueryString;
}

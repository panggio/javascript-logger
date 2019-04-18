export declare class Logger {
    static log(message?: any, ...optionalParams: any[]): void;
    static trace(message?: any, ...optionalParams: any[]): void;
    private static LOGGER_KEY;
    private static LOG_ENABLED;
}

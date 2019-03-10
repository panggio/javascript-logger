export abstract class DebugLogger {
    private static LOGGER_KEY: string = 'myDebug';
  
    private static LOG_ENABLED: boolean = true;
  
    public static log(message?: any, ...optionalParams: any[]): void {
        if (this.LOG_ENABLED) {
            console.log(message, ...optionalParams);
        }
    }
  }
  
export class Logger {
  public static log(message?: any, ...optionalParams: any[]): void {
    if (this.LOG_ENABLED) {
      /* tslint:disable */
      console.log(message, ...optionalParams);
    }
  }

  public static trace(message?: any, ...optionalParams: any[]): void {
    if (this.LOG_ENABLED) {
      /* tslint:disable */
      console.trace(message, ...optionalParams);
    }
  }  

  private static LOGGER_KEY: string = 'jsDebug';

  private static LOG_ENABLED: boolean = 
    (location && location.hostname == 'localhost') ||
    (localStorage && localStorage.getItem(Logger.LOGGER_KEY) !== null) ||
    (location && new URLSearchParams(window.location.search).has(Logger.LOGGER_KEY));          
}

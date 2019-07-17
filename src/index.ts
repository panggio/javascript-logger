export interface IGlobal {
  location: any;
  localStorage: any;
}

declare var global: IGlobal;

export class Logger {
  public static log(message?: any, ...optionalParams: any[]): void {
    if (this.LOG_ENABLED) {
      /* tslint:disable */
      console.log(message, ...optionalParams);
    }
  }

  public static trace(message?: any, ...optionalParams: any[]): void {
    if (this.TRACE_ENABLED) {
      /* tslint:disable */
      console.trace(message, ...optionalParams);
    }
  }

  private static LOGGER_KEY: string = 'jsDebug';

  private static LOG_ENABLED: boolean =
    Logger.validateEnvironment() &&
    (Logger.validateLocalHost() || Logger.validateLocalStorage('1') || Logger.validaQueryString('1'));

  private static TRACE_ENABLED: boolean =
    Logger.validateEnvironment() &&
    (Logger.validateLocalHost() || Logger.validateLocalStorage('2') || Logger.validaQueryString('2'));

  // NodeJS support
  private static validateEnvironment(): boolean {
    if (typeof location === 'undefined') {
      /* tslint:disable */
      global.location = { hostname: 'localhost' };
    }
    if (typeof localStorage === 'undefined') {
      /* tslint:disable */
      global.localStorage = null;
    }

    return true;
  }

  private static validateLocalHost(): boolean {
    return location && location.hostname == 'localhost';
  }

  // consoleActionCompare: '1' = log & '2' = trace
  private static validateLocalStorage(consoleActionCompare: string): boolean {
    return (
      localStorage &&
      localStorage.getItem(Logger.LOGGER_KEY) !== null &&
      (localStorage.getItem(Logger.LOGGER_KEY) === consoleActionCompare ||
        localStorage.getItem(Logger.LOGGER_KEY) === '3')
    );
  }

  // consoleActionCompare: '1' = log & '2' = trace
  private static validaQueryString(consoleActionCompare: string): boolean {
    return (
      location &&
      (Logger.getQueryString(Logger.LOGGER_KEY, window.location.search) === consoleActionCompare ||
        Logger.getQueryString(Logger.LOGGER_KEY, window.location.search) === '3')
    );
  }

  private static getQueryString(field: string, url?: string): string {
    const href = url ? url : window.location.href;
    const reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    const paramString = reg.exec(href);
    return paramString ? paramString[1] : '';
  }
}

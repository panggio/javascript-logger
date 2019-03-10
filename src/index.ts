export abstract class Logger {
  public static log(message?: any, ...optionalParams: any[]): void {
    if (this.LOG_ENABLED) {
      /* tslint:disable */
      console.log(message, ...optionalParams);
    }
  }

  private static LOGGER_KEY: string = 'jsDebug';

  private static LOG_ENABLED: boolean = true;
}

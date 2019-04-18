import { Logger } from './../index'

describe('Logger', () => {
  it('Should load', () => {
    expect(Logger).not.toBeNull();
  });

  // it('Should log', () => {
  //   jest.spyOn(global.console, 'log');

  //   /* tslint:disable */
  //   Logger.log("Test");
  //   expect(console.log).toBeCalled();
  // });
});
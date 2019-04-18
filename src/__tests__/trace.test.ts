import { Logger } from './../index'

console.trace = jest.fn();

describe('Logger', () => {
  it('Should load', () => {
    expect(Logger).not.toBeNull();
  });

  it('Should trace', () => {
    /* tslint:disable */
    Logger.trace("Test");
    expect(console.trace).toBeCalled();
  });
});
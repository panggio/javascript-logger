import { Logger } from './../index';

/* tslint:disable */
console.trace = jest.fn();

describe('Logger', () => {
  it('Should load', () => {
    expect(Logger).not.toBeNull();
  });

  it('Should trace', () => {
    /* tslint:disable */
    Logger.trace('Test');
    expect(console.trace).toBeCalled();
  });
});

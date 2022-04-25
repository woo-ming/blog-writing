import { functionalMiddleware } from './function.middleware';

describe('functionalMiddleware', () => {
  it('should be defined', () => {
    expect(new functionalMiddleware()).toBeDefined();
  });
});

import { print } from './printer';

describe('when printing a diamond', () => {
  describe('with sparkles', () => {
    const diamond = print(5);
    it('should have 5 asterisks on each side', () => {
      expect(diamond).toEqual(``);
    });
  
  });
});
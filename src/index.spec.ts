import { jump } from './';

describe('when commanding to jump', () => {
    it('should ask how high?', () => {
      expect(jump(1)).toEqual("how high?");
  
  });
});
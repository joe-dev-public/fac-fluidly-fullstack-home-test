const assertEquals = require('./assert-equals');

describe('assertEquals', () => {

  // Identical string ("abc" vs "abc"): no error
  describe('when expected and actual are the same string', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow();
    });
  });

  // Different string ("abc" vs "abcdef"): throw error with message
  describe('when expected and actual are different strings', () => {
    //it.todo('throws an error');
    it('Throws error with message \'Expected "abcdef" but found "abc"\'', () => {
      expect(() => assertEquals('abc', 'abcdef')).toThrow(new Error('Expected "abc" but found "abcdef"'));
    });
  });

  // Identical number (1 vs 1): no error
  //describe('when expected and actual are different strings', () => {
  //  it('Throws error with message \'Expected "abcdef" but found "abc"\'', () => {
  //    expect(() => assertEquals('abc', 'abcdef')).toThrow(new Error('Expected "abc" but found "abcdef"'));
  //  });
  //});

  // Different number (1 vs 2): throw error with message

  // Different type (e.g. number vs strnig): throw error with message
  // (Can we handle/test these generically, or do we need a test for each case?)

  // "Identical" array (['a', 'b', 'c'] vs ['a', 'b', 'c']): no error
  // Note: IIRC, no two arrays are "truly identical" in JS,
  // but we can consider them to be "identical" if all elements are the same and in the same order.

  // Arrays of different length (['a', 'b'] vs ['a', 'b', 'c']): throw error with message

  // Arrays with different elements (['a', 'b'] vs ['a', 'c']): throw error with message

});

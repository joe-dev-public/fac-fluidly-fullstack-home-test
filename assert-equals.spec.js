const assertEquals = require('./assert-equals');

describe('assertEquals', () => {

  // Identical string ("abc" vs "abc"): no error
  describe('when expected and actual are the same string', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow();
      // We could put the other "no error" tests here, but is that good practice? e.g.:
      // expect(() => assertEquals(1, 1)).not.toThrow();
      // (It works, but it isn't so clear exactly what tests are running, so maybe it's a bad idea.)
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
  describe('when expected and actual are the same number', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(1, 1)).not.toThrow();
    });
  });

  // Different number (1 vs 2): throw error with message
  describe('when expected and actual are different numbers', () => {
    it("Throws error with message 'Expected 1 but found 2'", () => {
      expect(() => assertEquals(1, 2)).toThrow(new Error('Expected 1 but found 2'));
    });
  });

  // Different type (e.g. number vs string): throw error with message
  // (Can we handle/test these generically, or do we need a test for each case?)
  describe('when expected is type number and actual is type string', () => {
    it("Throws error with message 'Expected type number but found type string'", () => {
      expect(() => assertEquals(1, '1')).toThrow(new Error('Expected type number but found type string'));
    });
  });

  describe('when expected is type string and actual is type number', () => {
    it("Throws error with message 'Expected type string but found type number'", () => {
      expect(() => assertEquals('1', 1)).toThrow(new Error('Expected type string but found type number'));
    });
  });

  // Could continue with boolean, etc.

  // Identical array (['a', 'b', 'c'] vs ['a', 'b', 'c']): no error
  // Note: IIRC, no two arrays are "the same" in JS, but we can consider them to be "identical"
  // if all elements are the same and in the same order.
  describe('when expected and actual are identical arrays', () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals(['a', 'b', 'c'], ['a', 'b', 'c'])).not.toThrow();
    });
  });

  // Arrays of different length (['a', 'b'] vs ['a', 'b', 'c']): throw error with message
  describe('when expected and actual are different length arrays', () => {
    it("Throws error with message 'Expected array length 2 but found 3'", () => {
      expect(() => assertEquals(['a', 'b'], ['a', 'b', 'c'])).toThrow(new Error('Expected array length 2 but found 3'));
    });
  });

  // Arrays with different elements (['a', 'b'] vs ['a', 'c']): throw error with message
  describe('when expected and actual are different arrays', () => {
    it('Throws error with message \'Expected "b" but found "c"\'', () => {
      expect(() => assertEquals(['a', 'b'], ['a', 'c'])).toThrow(new Error('Expected "b" but found "c"'));
    });
  });

});

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should calculate the sum of two rounded numbers correctly', () => {
      assert.equal(calculateNumber(2.7, 3.4), 6);
      assert.equal(calculateNumber(-3.7, 2.1), -2);
      assert.equal(calculateNumber(0.5, 0.5), 2);
  });

  // Edge case: Handle non-numeric inputs
  it('should throw an error for non-numeric inputs', () => {
      assert.throws(() => calculateNumber('abc', 4), TypeError, 'Arguments must be numbers');
      assert.throws(() => calculateNumber(1, 'def'), TypeError, 'Arguments must be numbers');
  });

  // Edge case: Handle large numbers
  it('should handle large numbers correctly', () => {
    assert.equal(calculateNumber(1234567890, 987654321), 2222222211);
  });

  // Edge case: Handle negative numbers
  it('should handle negative numbers correctly', () => {
    assert.equal(calculateNumber(-10, -5), -15);
  });

  // Edge case: Handle zero inputs
  it('should handle zero inputs correctly', () => {
    assert.equal(calculateNumber(0, 0), 0);
    assert.equal(calculateNumber(5, 0), 5);
    assert.equal(calculateNumber(0, 5), 5);
  });
})

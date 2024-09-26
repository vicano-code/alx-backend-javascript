const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber_SUM', () => {
    it('should calculate the sum of two rounded numbers correctly', () => {
        assert.equal(calculateNumber('SUM', 2.7, 3.4), 6);
        assert.equal(calculateNumber('SUM', -3.7, 2.1), -2);
        assert.equal(calculateNumber('SUM', 0.5, 0.5), 2);
    });

    // Edge case: Handle non-numeric inputs
    it('should throw an error for non-numeric inputs', () => {
        assert.throws(() => calculateNumber('SUM', 'abc', 4), TypeError, 'Arguments must be numbers');
        assert.throws(() => calculateNumber('SUM', 1, 'def'), TypeError, 'Arguments must be numbers');
    });

    // Edge case: Handle large numbers
    it('should handle large numbers correctly', () => {
        assert.equal(calculateNumber('SUM', 1234567890, 987654321), 2222222211);
    });

    // Edge case: Handle negative numbers
    it('should handle negative numbers correctly', () => {
        assert.equal(calculateNumber('SUM', -10, -5), -15);
    });

    // Edge case: Handle zero inputs
    it('should handle zero inputs correctly', () => {
        assert.equal(calculateNumber('SUM', 0, 0), 0);
        assert.equal(calculateNumber('SUM', 5, 0), 5);
        assert.equal(calculateNumber('SUM', 0, 5), 5);
    });
})

describe('calculateNumber_SUBTRACT', () => {
    it('should calculate the difference of two rounded numbers correctly', () => {
        assert.equal(calculateNumber('SUBTRACT', 3, 2), 1);
        assert.equal(calculateNumber('SUBTRACT', -2.5, 2.1), -4);
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
})

describe('calculateNumber_DIVIDE', () => {
    it('should calculate the division of two rounded numbers correctly', () => {
        assert.equal(calculateNumber('DIVIDE', 2.7, 3.4), 1);
        assert.equal(calculateNumber('DIVIDE', -4, 2.1), -2);
        assert.equal(calculateNumber('DIVIDE', 0.5, 0.5), 1);
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
})

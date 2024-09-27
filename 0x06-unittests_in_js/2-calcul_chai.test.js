const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('type=SUM', () => {
    it('should calculate the sum of two rounded numbers correctly', () => {
        expect(calculateNumber('SUM', 2.7, 3.4)).to.equal(6);
        expect(calculateNumber('SUM', -3.7, 2.1)).to.equal(-2);
        expect(calculateNumber('SUM', 0.5, 0.5)).to.equal(2);
    });

    // Edge case: Handle non-numeric inputs
    it('should throw an error for non-numeric inputs', () => {
        expect(() => calculateNumber('SUM', 'abc', 4)).to.throw(TypeError, 'Arguments must be numbers');
        expect(() => calculateNumber('SUM', 1, 'def')).to.throw(TypeError, 'Arguments must be numbers');
    });

    // Edge case: Handle large numbers
    it('should handle large numbers correctly', () => {
        expect(calculateNumber('SUM', 1234567890, 987654321)).to.equal(2222222211);
    });

    // Edge case: Handle negative numbers
    it('should handle negative numbers correctly', () => {
        expect(calculateNumber('SUM', -10, -5)).to.equal(-15);
    });

    // Edge case: Handle zero inputs
    it('should handle zero inputs correctly', () => {
        expect(calculateNumber('SUM', 0, 0)).to.equal(0);
        expect(calculateNumber('SUM', 5, 0)).to.equal(5);
        expect(calculateNumber('SUM', 0, 5)).to.equal(5);
    });
});

describe('type=SUBTRACT', () => {
    it('should calculate the difference of two rounded numbers correctly', () => {
        expect(calculateNumber('SUBTRACT', 3, 2)).to.equal(1);
        expect(calculateNumber('SUBTRACT', -2.5, 2.1)).to.equal(-4);
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
});

describe('type=DIVIDE', () => {
    it('should calculate the division of two rounded numbers correctly', () => {
        expect(calculateNumber('DIVIDE', 2.7, 3.4)).to.equal(1);
        expect(calculateNumber('DIVIDE', -4, 2.1)).to.equal(-2);
        expect(calculateNumber('DIVIDE', 0.5, 0.5)).to.equal(1);
    });

    it('should return Error when denominator is 0', () => {
        expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error')
    })
});

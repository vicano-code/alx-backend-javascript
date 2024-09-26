class Utils {
  static calculateNumber(type, a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        throw new TypeError('Arguments must be numbers');
    }
    a = Math.round(a)
    b = Math.round(b)
    let result;
    if (type === 'SUM') {
        return a + b;
    } else if (type === 'SUBTRACT') {
        return a - b;
    } else if (type === 'DIVIDE') {
        return b === 0 ? 'Error' : a / b;
    }
  
    throw new Error('Invalid operation type');
  }
}

module.exports = Utils;

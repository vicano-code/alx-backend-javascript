function calculateNumber(type, a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
      throw new TypeError('Arguments must be numbers');
  }
  a = Math.round(a)
  b = Math.round(b)
  let result;
  if (type === 'SUM') {
      result = a + b;
  } else if (type === 'SUBTRACT') {
      result = a - b;
  } else if (type === 'DIVIDE') {
      if (b === 0) {
        result = 'Error';
      } else {
        result = a / b;
      }
  }

  return result;
}

module.exports = calculateNumber;

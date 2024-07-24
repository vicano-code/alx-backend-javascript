// A divide function that throws custom error when the divisor(denominator) is zero
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator/denominator;
}
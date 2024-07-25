export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') throw TypeError('size must be a number');
    if (typeof location !== 'string') throw TypeError('location must be a string');
    this._size = size;
    this._location = location;
  }

  // Custom conversion using Symbol.toPrimitive
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') return this._location;
    if (hint === 'number') return this._size;
    return 42;
  }
}

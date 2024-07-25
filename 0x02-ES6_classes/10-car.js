export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') throw TypeError('brand must be a string');
    if (typeof motor !== 'string') throw TypeError('motor must be a string');
    if (typeof color !== 'string') throw TypeError('color must be a string');

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getters for the attributes
  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    // Use the constructor of the current instance to create a new one
    return new this.constructor(this._brand, this._motor, this._color);
  }
}

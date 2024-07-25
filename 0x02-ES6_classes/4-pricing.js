import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw TypeError('amount must be a number');
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') throw TypeError('amount must be a number');
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._amount = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw TypeError('amount must be a number');
    if (typeof conversionRate !== 'number') throw TypeError('conversionRate must be a number');
    return amount * conversionRate;
  }
}

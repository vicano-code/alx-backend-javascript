const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    // Stub the calculateNumber method to always return 10
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on Utils.calculateNumber
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function with specific arguments
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub was called with 'SUM', 100, and 20
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the original functions after the test
    stub.restore();
    consoleSpy.restore();
  });
});

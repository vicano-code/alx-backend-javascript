const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(function () {
    // Spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the spy after each test
    consoleSpy.restore();
  });
  
  it('should log "The total is: 120" and verify console.log is called once', function () {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify console.log is called with "The total is: 120"
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    // Verify console.log is called only once
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" and verify console.log is called once', function () {
    // Call the function
    sendPaymentRequestToApi(10, 10);

    // Verify console.log is called with "The total is: 20"
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;

    // Verify console.log is called only once
    expect(consoleSpy.calledOnce).to.be.true;
  });
});

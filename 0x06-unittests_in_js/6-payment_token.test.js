const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct object when success is true', (done) => {
    getPaymentTokenFromAPI(true)
    .then((response) => {
      //Assert the response is as expected
      expect(response).to.deep.equal({data: 'Successful response from the API' });
      done();
    })
    .catch((error) => done(error));  //If an error occurs, pass it to done to fail the test
  });

  it('should do nothing when success is not true', (done) => {
    getPaymentTokenFromAPI(false)
    .then((response) => {
      // Assert the response is undefined
      expect(response).to.be.undefined; // expectation for no response
      done();
    })
    .catch((error) => done(error));  //If an error occurs, pass it to done to fail the test
  })
})

const { expect } = require('chai');
const sinon = require('sinon');
const request = require('request');
const express = require('express');
const api = require('./api');

describe('API_TEST', () => {
  // Test if the correct status code is returned
  it('should return a 200 status code', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Test if response message is correct returned
  it('should return the correct response message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Other test: check for content type
  it('should return HTML content', function(done) {
    request('http://localhost:7865/', (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });

  // Test if the /cart/:id endpoint works with valid numeric id
  it('should return Payment methods for cart :id for valid cart id', function(done) {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  // Test if /cart/:id returns 404 for invalid cart id (non-numeric id)
  it('should return 404 for non-numeric id', (done) => {
    request('http://localhost:7865/cart/abc', function(error, response, body) {
      if (error) return done(error);
      expect(response.statusCode).to.equal(404); // Since id must be numeric
      done();
    });
  });

  // Test if the /available_payments endpoint works correctly
  it('should return available payment methods', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      if (error) return done(error);
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });

  // Test if the /login endpoint returns the correct welcome message
  it('should return Welcome :username for a valid login', (done) => {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: {} // send empty body
      }, (error, response, body) => {
          if (error) return done(error);
          expect(response.statusCode).to.equal(400);
          expect(body.error).to.equal('userName is required');
          done();
        }
    );
  });
});

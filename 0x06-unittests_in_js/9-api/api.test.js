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
});

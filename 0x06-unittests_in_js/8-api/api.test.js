const { expect } = require('chai');
const sinon = require('sinon');
const request = require('request');
const express = require('express');

// Import the Express app
const app = require('./api');

// Create a variable to hold the server instance
let server;

describe('API_TEST', () => {
  // Test if the correct status code is returned
  it('should return a 200 status code', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      if (error) return done(error);  // Error handling
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // Test if response message is correct returned
  it('should return the correct response message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      if (error) return done(error);  // Error handling
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Other test: check for content type
  it('should return HTML content', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      if (error) return done(error);  // Error handling
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});

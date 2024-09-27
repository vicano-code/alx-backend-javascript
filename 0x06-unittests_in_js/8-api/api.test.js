const { expect } = require('chai');
const sinon = require('sinon');
const request = require('request');
const express = require('express');

// Import the Express app
const app = require('./api');

// Create a variable to hold the server instance
let server;

describe('Index page', () => {
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

  // Test if the Content-Type header is correct
  it('should return Content-Type as text/html', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      if (error) return done(error);  // Error handling
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });

  // Test for handling of server errors
  it('should return 404 status for unhandled errors', (done) => {
    // Create a request that causes an error (simulate it by using an invalid route)
    request('http://localhost:7865/invalid-route', function(error, response, body) {
      expect(response.statusCode).to.equal(404); // Check for 404 not found
      done();
    });
  });
});

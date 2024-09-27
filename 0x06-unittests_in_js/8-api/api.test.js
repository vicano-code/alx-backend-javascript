const { expect } = require('chai');
const request = require('request');
const app = require('./api');

let server;
let port = 0; // port 0 to allow the system to assign an available port

// Start the server before tests
before((done) => {
  server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    done();
  });
});

/// Close the server after all tests
after((done) => {
  if (server) {
    server.close(done);
  } else {
    done();
  }
});

describe('Index page', () => {
  // Test if the correct status code is returned
  it('should return a 200 status code with welcome statement', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      if (error) return done(error);  // Error handling
      expect(response.statusCode).to.equal(200);
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

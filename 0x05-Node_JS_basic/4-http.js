const http = require('http');

const app = http.createServer((request, response) => {
  // Set response headers for plain text content
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body
  response.write('Hello Holberton School!');
  // End the response
  response.end();
});
app.listen(1245); // on port 1245

module.exports = app;

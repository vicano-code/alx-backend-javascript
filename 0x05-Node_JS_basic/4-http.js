const http = require('http');

const app = http.createServer((request, response) => {
  response.write('Hello Holberton School!');
  response.end();
});
app.listen(1245);

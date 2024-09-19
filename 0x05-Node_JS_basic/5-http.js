const fs = require('fs').promises;
const http = require('http');

const app = http.createServer((request, response) => {
  // Set response headers for plain text content
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    const path = process.argv[2];
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        // const header = lines[0].split(',')

        const numStudents = lines.length - 1; // skip header row
        response.write(`Number of students: ${numStudents}`);

        const dataList = [];
        const students = lines.slice(1); // remove header row from data
        students.forEach((student) => {
          dataList.push(student.split(','));
        });

        const fields = {};
        dataList.forEach((student) => {
          const field = student[3];
          if (fields[field]) {
            fields[field].push(student[0]); // add the first name
          } else {
            fields[field] = [student[0]];
          }
        });

        const fieldNames = Object.keys(fields);
        fieldNames.forEach((fieldName) => {
          const firstNames = fields[fieldName].join(', ');
          response.write(`\nNumber of students in ${fieldName}: ${fields[fieldName].length}. List: ${firstNames}`);
        });
        response.end();
      })
      .catch(() => {
        throw new Error('Cannot load the database');
      });
  }
});
app.listen(1245);

module.exports = app;

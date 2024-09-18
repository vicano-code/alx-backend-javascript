// Creating a more complex HTTP server using Express
const fs = require('fs').promises;
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let responseMsg = 'This is the list of our students\n';
  const path = process.argv[2];
  fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      // const header = lines[0].split(',')

      const numStudents = lines.length - 1; // skip header row
      responseMsg += `Number of students: ${numStudents}`;

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
        responseMsg += `\nNumber of students in ${fieldName}: ${fields[fieldName].length}. List: ${firstNames}`;
      });

      res.send(responseMsg);
    })
    .catch(() => {
      res.status(500).send('Cannot load the database');
    });
});

app.listen(1245);

module.exports = app;

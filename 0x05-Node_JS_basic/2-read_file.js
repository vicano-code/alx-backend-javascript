const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n');
    // const header = lines[0].split(',')

    const numStudents = lines.length - 2;
    console.log(`Number of students: ${numStudents}`);

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
      console.log(`\nNumber of students in ${fieldName}: ${fields[fieldName].length}. List: ${firstNames}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;

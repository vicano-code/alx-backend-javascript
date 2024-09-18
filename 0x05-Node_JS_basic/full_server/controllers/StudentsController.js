const { readDatabase } = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    let responseMsg = 'This is the list of our students';
    readDatabase('database.csv')
      .then((fields) => {
        const fieldNames = Object.keys(fields).sort();
        fieldNames.forEach((fieldName) => {
          const firstNames = fields[fieldName].join(', ');
          responseMsg += `\nNumber of students in ${fieldName}: ${fields[fieldName].length}. List: ${firstNames}`;
        });
        response.status(200).send(responseMsg);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    readDatabase('database.csv')
      .then((fields) => {
        if (!fields[major]) {
          return response.status(500).send('Major parameter must be CS or SWE');
        }
        const firstNames = fields[major].join(', ');
        const responseMsg = `List: ${firstNames}`;

        return response.status(200).send(responseMsg);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;

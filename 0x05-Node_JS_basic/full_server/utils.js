const fs = require('fs').promises;
/**
 * Reads a database file asynchronously and returns a promise
 * @param {string} filePath - The path to the database file
 * @returns {Promise<Object>} - A promise that resolves to an object of
 * arrays of student first names per field
 */
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        if (lines.length <= 1) {
          return resolve({});
        }

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

        return resolve(fields);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = { readDatabase };

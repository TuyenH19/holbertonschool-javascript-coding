const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const fieldCounts = {};
        const students = {};

        lines.forEach((line) => {
          const [firstname, , , field] = line.split(',');

          if (!fieldCounts[field]) {
            fieldCounts[field] = 0;
            students[field] = [];
          }

          fieldCounts[field] += 1;
          students[field].push(firstname);
        });

        const totalStudents = Object.values(fieldCounts).reduce((acc, curr) => acc + curr, 0);

        console.log(`Number of students: ${totalStudents}`);
        for (const field in fieldCounts) {
          if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
            console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${students[field].join(', ')}`);
          }
        }

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;

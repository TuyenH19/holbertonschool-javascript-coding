const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, fileData) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      try {
        const data1 = fileData.toString().split('\n');
        const data = data1.slice(1, data1.length - 1);
        console.log(`Number of students: ${data.length}`);
        const subjects = {};
        for (const row of data) {
          const student = row.split(',');
          if (!subjects[student[3]]) subjects[student[3]] = [];
          subjects[student[3]].push(student[0]);
        }
        const result = {
          totalStudents: data.length,
          subjects,
        };
        for (const subject in subjects) {
          if (subject) console.log(`Number of students in ${subject}: ${subjects[subject].length}. List: ${subjects[subject].join(', ')}`);
        }
        resolve(result); // Be called when the operation is successful
      } catch (error) {
        // Be called if an error occurs
        reject(new Error('Error processing data'));
      }
    }
  });
});

module.exports = countStudents;

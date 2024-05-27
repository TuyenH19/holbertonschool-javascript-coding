const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the file content by new lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header line
    /* const headers = lines.shift(); */

    // Initialize an object to store student count per field
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

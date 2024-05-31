// utils.js
const fs = require('fs');

const readDatabase = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, fileData) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        try {
          const data = fileData.split('\n').slice(1).filter(line => line.trim() !== '');
          const subjects = {};
          
          for (const row of data) {
            const [firstname, , , field] = row.split(',');
            if (!subjects[field]) subjects[field] = [];
            subjects[field].push(firstname);
          }

          resolve(subjects);
        } catch (error) {
          reject(new Error('Error processing data'));
        }
      }
    });
  });
};

module.exports = readDatabase;

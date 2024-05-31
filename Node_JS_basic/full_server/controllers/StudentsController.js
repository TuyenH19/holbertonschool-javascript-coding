const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((students) => {
        let responseText = 'This is the list of our students\n';

        const fields = Object.keys(students).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        fields.forEach((field) => {
          responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        });

        res.status(200).send(responseText.trim());
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((students) => {
        const studentsInMajor = students[major] || [];
        res.status(200).send(`List: ${studentsInMajor.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;

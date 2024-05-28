const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
      countStudents(process.argv[2])
        .then((data) => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.write('This is the list of our students\n');
          res.write(`Number of students: ${data.totalStudents}\n`);
          const count = 1;
          for (const subject in data.subjects) {
              res.write(`Number of students in ${subject}: ${data.subjects[subject].length}. List: ${data.subjects[subject].join(', ')}\n`);
          }
          res.end("");
        })
        .catch((error) => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`${error.message}`);
        });
    }
});

app.listen(port);
module.exports = app;

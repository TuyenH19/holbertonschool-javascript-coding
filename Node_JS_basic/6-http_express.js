const express = require('express');

const app = express();
const port = 1245;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});
app.listen(port);
module.exports = app;

#!/usr/bin/node

const fs = require('fs');

// Check if file path and string to write are provided
if (process.argv.length < 4) {
  console.log('Usage: node 1-writeme.js <file_path> <string_to_write>');
  process.exit(1);
}

const filePath = process.argv[2];
const stringToWrite = process.argv[3];

// Write the string to the file
fs.writeFile(filePath, stringToWrite, 'utf8', function (err) {
  if (err) console.log(err);
});

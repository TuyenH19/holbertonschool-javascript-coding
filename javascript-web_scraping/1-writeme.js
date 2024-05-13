#!/usr/bin/node

const fs = require('fs');

// Check if file path and string to write are provided
if (process.argv.length < 4) {
  console.log('Usage: node writeToFile.js <file_path> <string_to_write>');
  process.exit(1);
}

const filePath = process.argv[2];
const stringToWrite = process.argv[3];

// Write the string to the file
fs.writeFile(filePath, stringToWrite, 'utf-8', (err) => {
  if (err) {
    console.error(err); // Print the error object if an error occurred
  }
  else {
    console.log(`Successfully wrote "${stringToWrite}" to ${filePath}`);
  }
});

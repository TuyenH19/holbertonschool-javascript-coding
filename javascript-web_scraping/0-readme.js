#!/usr/bin/node

const fs = require('fs');

// Check if file path is provided
if (process.argv.length < 3) {
    console.log('Usage: node readme.js <file_path>');
    process.exit(1);
}

const filePath = process.argv[2];

// Read the content of the file
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err); // Print the error object if an error occurred
    } else {
        console.log(data); // Print the content of the file
    }
});

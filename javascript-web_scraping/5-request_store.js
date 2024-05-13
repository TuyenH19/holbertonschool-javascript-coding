#!/usr/bin/node

const request = require('request');
const fs = require('fs')

// Check if URL and file path are provided
if (process.argv.length < 4) {
  console.log("Usage: node 5-request_store.js <URL> <file_path>");
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to fetch the content of the webpage
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to fetch data: Status ${response.statusCode}`);
    return;
  }

  // Write the content to specified file path
  fs.writeFile(filePath, body, 'utf-8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log(`Webpage content has been saved to ${filePath}`);
  });
});

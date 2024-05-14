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
request(url, function (err, reponse, body) {
  if (err) {
    console.log(err);
  }
  fs.writeFile(filePath, body, 'utf8', function (err) {
    if (err) {
      console.log(err);
    }
  });
});

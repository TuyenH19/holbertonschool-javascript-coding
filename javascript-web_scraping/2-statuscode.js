#!/usr/bin/node

const request = require("request");

// Check if URL is provided
if (process.argv.length < 3) {
  console.log("Usage: node 2-statuscode.js <URL>");
  process.exit(1);
}

const url = process.argv[2];

// Make a GET request to the URL
request.get(url, (error, response) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`code: ${response.statusCode}`);
});

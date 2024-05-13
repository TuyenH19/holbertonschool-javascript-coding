#!/usr/bin/node

const request = require('request');

// Check if movie ID is provided
if (process.argv.length < 3) {
  console.log('Usage: node 3-starwars_title.js <movie_ID>');
  process.exit(1);
}

const movieID = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieID}`;

// Make a GET request to the Star Wars API
request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to fetch data: Status ${response.statusCode}`);
    return;
  }

  const movieData = JSON.parse(body);
  console.log(movieData.title);
});

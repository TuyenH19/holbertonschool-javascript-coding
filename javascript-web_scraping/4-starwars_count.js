#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

// Check if API URL is provided
if (!apiUrl) {
  console.log('Usage: node 4-starwars_count.js <API_URL>');
  process.exit(1);
}

// Make a GET request to the Star Wars API films endpoint
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to fetch data: Status ${response.statusCode}`);
    return;
  }

  const films = JSON.parse(body).results;
  let count = 0;

  // Function to fetch film details by URL
  const fetchFilmDetails = (filmUrl) => {
    request.get(filmUrl, (err, resp, filmBody) => {
      if (err) {
        console.error(err);
        return;
      }

      const film = JSON.parse(filmBody);
        
      // Check if Wedge Antilles (character ID 18) is present in the characters array
      if (film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
        count++;
      }

      // Print count if all films are processed
      if (count === films.length) {
        console.log(count);
      }
    });
  };

  // Loop through each film and fetch film details
  films.forEach(film => {
    fetchFilmDetails(film.url);
  });
});


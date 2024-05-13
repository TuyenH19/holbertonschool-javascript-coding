#!/usr/bin/node

const request = require('request');

// Check if API URL is provided
if (process.argv.length < 3) {
  console.log('Usage: node 6-completed_tasks.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

// Make a GET request to the API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to fetch data: Status ${response.statusCode}`);
    return;
  }

  const todos = JSON.parse(body);

  // Object to store the number of completed tasks per user ID
  const completedTasks = {};

  // Loop through each task
  todos.forEach(todo => {
    // Check if the task is completed (completed === true)
    if (todo.completed) {
      // Increment the completed task count for the user ID
      if (completedTasks[todo.userId]) {
        completedTasks[todo.userId]++;
      } else {
        completedTasks[todo.userId] = 1;
      }
    }
  });

  console.log(completedTasks);
});

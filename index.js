const express = require('express');
const toDoFunction = require('./api/to-do'); // Import the serverless function

const app = express();

// Setup the route for the API endpoint
app.all('/v1/to-do', toDoFunction); // Use `app.all` to handle all HTTP methods (GET, POST, etc.)

// Set up the local server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running locally on http://localhost:${port}`);
});
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Define your routes
app.get('/v1/to-do', (req, res) => {
  res.status(200).json({ message: 'To-do items listed here' });
});

// Export your express app as a serverless function
module.exports = (req, res) => {
  app(req, res);
};

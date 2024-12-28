require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const { connectDB } = require('./config/db');

const app = express();

// Connect Database (not needed in test environment)
if (process.env.NODE_ENV !== 'test') {
  connectDB();
}

// Serve static files (like index.html) from the public folder
app.use(express.static('public'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define your routes
routes(app);

// Catch-all route to serve frontend if no API route matches
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Define your routes
app.get('/v1/to-do', (req, res) => {
    // Get the IP address from the 'X-Forwarded-For' header
    const ipAddressFromHeader = req.headers?.['x-client-ip'] || "IP not set";
    const ipAddressGiven = req.headers?.['x-forwarded-for'] || "Nothing given";
  
    // Send the response with the IP address in the header
    res.status(200).json({
      message: 'To-do items listed here!!',
      ipAddressFromHeader: ipAddressFromHeader,
      ipAddressGiven: ipAddressGiven,
    });
  });

// Export your express app as a serverless functionn
module.exports = (req, res) => {
  app(req, res);
};

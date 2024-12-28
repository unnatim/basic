const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Define your routes
app.get('/v1/to-do', (req, res) => {
    // Get the IP address from the 'X-Forwarded-For' header
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
    // Send the response with the IP address in the header
    res.status(200).json({
      message: 'To-do items listed here',
      clientIp: ipAddress
    });
  });

// Export your express app as a serverless functionn
module.exports = (req, res) => {
  app(req, res);
};

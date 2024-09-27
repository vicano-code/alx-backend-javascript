const express = require('express');

// Create an express server listening on the port 7865.
const app = express();
const PORT = 7865;

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// Endpoint
app.get('/', async (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Start server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app for testing
module.exports = app;

const express = require('express');

// Create an express server listening on the port 7865.
const app = express();
const PORT = 7865;

// Endpoint
app.get('/', async (req, res) => {
  res.send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

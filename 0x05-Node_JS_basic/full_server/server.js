const express = require('express');
const routes = require('./routes/index'); // Importing the routes

const app = express(); // Initializing the express app

app.use('/', routes); // Using the routes defined in routes/index.js

const PORT = 1245; // Define the port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; // Export the app for testing or further use

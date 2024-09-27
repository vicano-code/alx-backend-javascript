const express = require('express');

// Create an express server listening on the port 7865.
const app = express();
const PORT = 7865;

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint
app.get('/', async (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// New route for GET /cart/:id  -id must be a number 
app.get('/cart/:id([0-9]+)', async (req, res) => {
  const cartId = req.params.id;
  res.status(200).send(`Payment methods for cart ${cartId}`)
});

// New endpoint for GET /available_payments
app.get('/available_payments', async (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.status(200).json(paymentMethods);
});

// New endpoint for POST /login
app.post('/login', (req, res) => {
  const { userName } = req.body; // Extract userName from the body
  if(!userName) {
    return res.status(400).json({error: 'userName is required'});
  }
  res.status(200).send(`welcome ${userName}`) // respond with welcome message
})

// Start the server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app for testing
module.exports = app;

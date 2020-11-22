const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// API

// - App config
const app = express();
const port = process.env.PORT || 5000;

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// - API routes
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    description: 'Items Purchased',
    shipping: {
      name: 'Jenny Rosen',
      address: {
        line1: '510 Townsend St',
        postal_code: '42424',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
      },
    },
    amount: total,
    currency: 'usd',
    payment_method_types: ['card']
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

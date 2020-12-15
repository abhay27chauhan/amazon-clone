const express = require("express");
const cors = require("cors");

const stripe = require('stripe')("sk_test_51HqI5CL1eOMA3nNTjtIjmvbXddtE4lpBVjTV09QTp4Wn8VaxCzBGGiPpJLoPnzLKUMT9uGcyskPSXgQ6KqcXHsY500v8nWK2c1");

// - App config
const app = express();
const port = process.env.PORT || 5000;

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (req, res) => res.status(200).send("Hello Word!!"));

app.post("/payments/create", async (request, response) => {
  const total = request.body.basketTotal;
  console.log(request.body);
  
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
app.listen(port, error=> {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

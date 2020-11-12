const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hk4Y1IQ8MiZInN8AZWqvp1r7eGTf2RQHOvAb1hAI7Uh0FsHaJ9378vWNgzgB3RVqyuttW38XA6ZWagjGDZqqWB400oEWVGwEu"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

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
exports.api = functions.https.onRequest(app);

const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// router.get('/', async (req, res) => {
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: 1099,
//       currency: 'usd',
//       payment_method_types: ['card'],
//     });
//     console.log(paymentIntent);

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ paymentIntent }),
//     };
//   } catch (error) {
//     console.log({ error });

//     return {
//       statusCode: 400,
//       body: JSON.stringify({ error }),
//     };
//   }
// });

router.post('/', async (req, res) => {
  try {
    const { amount } = req.body;
    console.log(req.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    console.log(paymentIntent.client_secret);
    res.json({ client_secret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

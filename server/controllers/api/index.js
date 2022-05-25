const router = require('express').Router();

const stripeRoutes = require('./stripe-routes');

router.use('/create-payment-intent', stripeRoutes);

module.exports = router;

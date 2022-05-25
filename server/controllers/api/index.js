const router = require('express').Router();

const stripeRoutes = require('./stripe-routes');
const testRoutes = require('./test-routes');

router.use('/create-payment-intent', stripeRoutes);
router.use('/test', stripeRoutes);

module.exports = router;

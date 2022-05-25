const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    console.log('Test from api');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

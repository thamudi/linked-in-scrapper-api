const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('All is gucci in dis pizza town! 🍕🍕');
});

module.exports = router;

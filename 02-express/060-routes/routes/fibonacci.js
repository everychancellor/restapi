const express = require('express');
const router = express.Router();

const fibonacci = require('../fibonacci');

router.get('/:id', (req, res) => {
  if (req.params.id > 77) {
    res.status(404).send('error');
  }
  res.send({
    fibonacci: fibonacci.getFibonacciNumbers(`${req.params.id}`),
    params: req.params,
    query: req.query
  });
});

module.exports = router;

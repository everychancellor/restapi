const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //res.send('<div><h1>Test</h1></div>');
  res.render('index', { title: 'My Express APP', message: 'Hello' });
});

module.exports = router;

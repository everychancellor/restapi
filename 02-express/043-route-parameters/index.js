const express = require('express');
const app = express();
const fibonacci = require('./fibonacci');

app.get('/', (req, res) => {
    res.send('<h1>Test</h1>');
})

app.get('/fibonacci/:id', (req, res) => {
    res.send({ 
        'fibonacci': fibonacci.getFibonacciNumbers(`${req.params.id}`),
        'params': req.params,
        'query': req.query
    });
});


app.listen(3000, () => {
    let port = process.env.PORT || 3000;
    console.log(`listening on port ${port}...`)
});



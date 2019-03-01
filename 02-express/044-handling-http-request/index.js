const express = require('express');
const app = express();
const fibonacci = require('./fibonacci');

app.get('/', (req, res) => {
    res.send('<h1>Test</h1>');
})

app.get('/fibonacci/:id', (req, res) => {
    if (req.params.id > 77) {
        res.status(404).send('error');
    }
    res.send({ 
        'fibonacci': fibonacci.getFibonacciNumbers(`${req.params.id}`),
        'params': req.params,
        'query': req.query
    });
    
});


app.listen(3000, () => {
    console.log(`listening on port 3000...`)
});
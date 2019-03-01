const express = require('express');
const app = express();
const fibonacci = require('./fibonacci');

app.use(express.json());

let fibonacciList = [];

app.get('/', (req, res) => {
    res.send('<h1>Test</h1>');
});

app.get('/fibonacci/:id', (req, res) => {
    if (req.params.id > 77) {
        res.status(404).send('error');
    }
    else {
        fibonacciList = fibonacci.getFibonacciNumbers(`${req.params.id}`);
        res.send({ 
            'fibonacci': fibonacciList,
            'params': req.params,
            'query': req.query
        });
    }        
    
});

app.post('/fibonacci', (req, res) => {
    // 
    const newNumber = req.body.number;
    fibonacciList.push(newNumber);
    res.send({fibonacciList});
});


app.listen(3000, () => {
    console.log(`listening on port 3000...`)
});
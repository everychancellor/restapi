const Joi = require('joi');
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

app.delete('/fibonacci/:id', (req, res) => {
    let id = req.params.id;
    console.log(fibonacciList, id);
    
    if (!fibonacciList.find(item => item === parseInt(id))) {
        res.status(404).send('Item not found');
        return;
    };
    let index = fibonacciList.indexOf(id);
    fibonacciList.splice(index, 1);
    res.send({fibonacciList});
});

app.post('/fibonacci', (req, res) => {
    const schema = {
        number: Joi.number().greater(100).required()
    };

    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const newNumber = req.body.number;
    fibonacciList.push(newNumber);
    res.send({fibonacciList});
});



app.listen(3000, () => {
    console.log(`listening on port 3000...`)
});
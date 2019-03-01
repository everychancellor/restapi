const express = require('express');
const app = express();
const fibonacci = require('./fibonacci');

app.get('/', (req, res) => {
    res.send(process.env);
})

app.get('/test', (req, res) => {
    res.send(fibonacci.getFibonacciNumbers(20));
});


app.listen(3000, () => {
    let port = process.env.PORT || 3000;
    console.log(`listening on port ${port}...`)
});

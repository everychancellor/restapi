const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const app = express();
const fibonacci = require('./fibonacci');
const logger = require('./logger');

//console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
//console.log(`env: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded( {extended: true}));
app.use(express.static('public'));
// localhost:3000/style.css
app.use(helmet());
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('morgan enabled...');
} 
app.use(logger);

app.get('/', (req, res) => {
    res.send('<div><h1>Test</h1></div>');
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


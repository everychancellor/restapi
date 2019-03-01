const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const app = express();
const fibonacci = require('./fibonacci');
const logger = require('./logger');

app.set('view engine', 'pug');
app.set('views', './views'); //default

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());

//Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('morgan enabled...');
  startupDebugger('morgan enabled...');
}
app.use(logger);

//connection to database
dbDebugger('Connected to the databse...');
app.get('/', (req, res) => {
  //res.send('<div><h1>Test</h1></div>');
  res.render('index', { title: 'My Express APP', message: 'Hello' });
});

app.get('/fibonacci/:id', (req, res) => {
  if (req.params.id > 77) {
    res.status(404).send('error');
  }
  res.send({
    fibonacci: fibonacci.getFibonacciNumbers(`${req.params.id}`),
    params: req.params,
    query: req.query
  });
});

app.listen(3000, () => {
  console.log(`listening on port 3000...`);
});

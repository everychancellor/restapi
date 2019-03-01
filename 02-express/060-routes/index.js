const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const fibonacciReq = require('./routes/fibonacci');
const home = require('./routes/home');

app.set('view engine', 'pug');
app.set('views', './views'); //default

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use('/:id', fibonacciReq);
app.use('/', home);
app.use(logger);
//Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('morgan enabled...');
  startupDebugger('morgan enabled...');
}

//connection to database
dbDebugger('Connected to the databse...');

app.listen(3000, () => {
  console.log(`listening on port 3000...`);
});

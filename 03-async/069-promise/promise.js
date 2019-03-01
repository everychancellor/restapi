const debug = require('debug')('app:db');
const p = new Promise(function(resolve, reject) {
  //pending => resolved or fulfilled
  debug('request to dbss');
  setTimeout(function() {
    resolve(1);
    //reject(new Error('Error Message'));
    debug('result');
  }, 2000);
  //reject(new Error('Error Message'));
});

p.then(result => {
  console.log('Result - ', result);
}).catch(err => {
  console.log('Error: ', err.message);
});

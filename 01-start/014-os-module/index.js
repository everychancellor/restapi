const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log(`Free Memory: ${freeMemory}`);

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(arg) {//..e, eventArg
    console.log('Listener called' , arg);
});

emitter.on('messageLogged', (arg) => {//..e, eventArg
    console.log('Listener called' , arg);
});

emitter.emit('messageLogged', {id: 1, url: 'http://..'});

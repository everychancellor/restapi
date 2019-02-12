const EventEmmitter = require('events');
const emmitter = new EventEmmitter();

//register a listener
emmitter.on('messageLogged', arg => {
  //e eventArg
  console.log('start event', arg);
});

emmitter.emit('messageLogged', { id: 1, url: 'https://' });

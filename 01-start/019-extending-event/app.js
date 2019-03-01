const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', arg => {
  //e eventArg
  console.log('start event', arg);
});

logger.log('message');

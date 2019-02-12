const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('hello world');
    res.end();
  }
  if (req.url === '/about') {
    res.write('hello');
    res.end();
  }
});

server.listen(3000);
console.log('listening on port 3000s');

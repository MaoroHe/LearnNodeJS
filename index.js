const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello, Denis!');
    res.end();
});

server.listen(3000);
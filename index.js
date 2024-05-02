#!/usr/bin/env node

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.write('Hello, Denis!');
    res.end();
});

console.log(`Server running at http://localhost:${port}/`);
server.listen(port);
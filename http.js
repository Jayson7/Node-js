const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Prof.');
        res.end();
    };
    if (req.url == '/index') {
        res.write('This is the index page');
        res.end();
    };
});

server.listen(3000);
console.log('Prof is live at 3000');
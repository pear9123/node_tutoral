const http = require('http');

const server = http.createServer((req, res) => {
    res.write('<p>Hello Node</p>');
    res.end('<p>node js</p>');
});

server.listen(8080);
server.on('listening', () => {
    console.log('8080 포트 wait');
});
server.on('error', () => {
    console.log('error');
})
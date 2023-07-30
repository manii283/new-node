const http = require('http')

const server = http.createServer((req, res) => {
    res.end('hello from other sides');
});
server.listen(8000, () => {
    console.log('listing to the port no 8000')
});
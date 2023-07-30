const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    // console.log(req.url)
    if(req.url == '/'){
        res.end('hello from other sides');
    }
    else if(req.url == '/about'){
        res.end('hello from about');
    }
    else if(req.url == '/contact'){
        res.end('hello from contact');
    }
    else{
        res.writeHead(404, {"Content-type" : "text/html"})
        res.end('<h1>404 error page</h1>');
    }
});
server.listen(8000, () => {
    console.log('listing to the port no 8000')
});
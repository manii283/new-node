const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  const data = fs.readFileSync(`${__dirname}/UserApi/user-api.json`, "utf-8");
  // console.log(data)
  const obgData = JSON.parse(data);

  // console.log(req.url)
  if (req.url == "/") {
    res.end("hello from other sides");
  } 
  
  else if (req.url == "/about") {
    res.end("hello from about");
  }
  
  else if (req.url == "/contact") {
    res.end("hello from contact");
  }

  //api
  else if (req.url == "/userapi") {
    res.writeHead(200, {'content-type' : 'application/json'})
    res.end(data);
    // res.end(obgData[2].name);
  } 
  
  else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 error page</h1>");
  }
});
server.listen(8000, () => {
  console.log("listing to the port no 8000");
});

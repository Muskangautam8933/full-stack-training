const http = require("http"); //https server mil gya
// console.log(http);

//ab hame ek host chaiye
const HOST = "localhost";
//ab hame ek port chaiye
const PORT = 8000;

//Request handler:changes sirf yaha krte hai.
const requestHandler = function (request, response) {
  console.log(request.method, request.url);

  //   response.end("<h1> Welcome to node server ...</h>");//jo request ayyi ye end ho jati hai phir furtuer koi kaam nhi  hota hai end nhi karendge to continue load hota rahega
  switch (request.url) {
    case "/":
      response.end("<h1> Welcome to node server ...</h>");
      break;
    case "/home":
      response.end("<h1> Welcome to home page</h>");
      break;
    case "/about":
      response.end("<h1> Welcome to about us page</h>");
      break;
    default :
      response.end("<h1> Welcome to error page</h>");
      break;
  }

};

//yaha per server create krenge
const server = http.createServer(requestHandler);
server.listen(PORT, HOST, (err) => {
  //localhost:8000
  if (err) console.log("Server not start.." + err);
  else console.log(`Server runnign at http://${HOST}:${PORT}`);
});

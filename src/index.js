var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    const obj = {
      id: 1,
      prop: {
        someMethod: () => {
          return { id: 2}
        }
      }
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(obj.prop?.someMethod()?.id));

  })
  .listen(8082); //the server object listens on port 8080

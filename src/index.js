var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
//expected
      let obj = {
          id: 9216,
          children: [
              { id: 123, children: null },
              { id: 124, children: [{ id: 1241, children: null }] }
          ]
      };

// //actual
//       obj = {
//           id: 9216,
//           children: null
//       };
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(obj.children[1]?.children[1]?.id ?? 'No children found'));

  })
  .listen(8082); //the server object listens on port 8080

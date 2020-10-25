"use strict";

var http = require("http"); //create a server object:


http.createServer(function (req, res) {
  var _obj$children$, _obj$children$$childr;

  //expected
  var obj = {
    id: 9216,
    children: [{
      id: 123,
      children: null
    }, {
      id: 124,
      children: [{
        id: 1241,
        children: null
      }]
    }]
  }; // //actual
  //       obj = {
  //           id: 9216,
  //           children: null
  //       };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify((_obj$children$ = obj.children[1]) === null || _obj$children$ === void 0 ? void 0 : (_obj$children$$childr = _obj$children$.children[0]) === null || _obj$children$$childr === void 0 ? void 0 : _obj$children$$childr.id));
}).listen(8082); //the server object listens on port 8080
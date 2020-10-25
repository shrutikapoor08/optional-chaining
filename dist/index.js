"use strict";

var http = require("http"); //create a server object:


http.createServer(function (req, res) {
  var _obj$prop, _obj$prop$someMethod;

  var obj = {
    id: 1,
    prop: {
      someMethod: function someMethod() {
        return {
          id: 2
        };
      }
    }
  };
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify((_obj$prop = obj.prop) === null || _obj$prop === void 0 ? void 0 : (_obj$prop$someMethod = _obj$prop.someMethod()) === null || _obj$prop$someMethod === void 0 ? void 0 : _obj$prop$someMethod.id));
}).listen(8082); //the server object listens on port 8080
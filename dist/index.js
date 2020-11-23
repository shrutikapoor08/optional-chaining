"use strict";

var _obj$children$1$child, _obj$children$, _obj$children$$childr;

var obj = {
  id: 9216,
  children: [{
    id: 123,
    children: null
  }, {
    id: 124,
    children: [{
      id: 1241,
      children: [{
        id: "12411",
        children: null
      }, {
        id: "12412",
        children: null
      }]
    }]
  }]
};
console.log((_obj$children$1$child = obj === null || obj === void 0 ? void 0 : (_obj$children$ = obj.children[1]) === null || _obj$children$ === void 0 ? void 0 : (_obj$children$$childr = _obj$children$.children[1]) === null || _obj$children$$childr === void 0 ? void 0 : _obj$children$$childr.id) !== null && _obj$children$1$child !== void 0 ? _obj$children$1$child : 'No children found');
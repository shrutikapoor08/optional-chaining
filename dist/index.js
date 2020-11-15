"use strict";

var obj = {
  id: 1,
  prop: {
    someMethod: function someMethod() {
      return {
        id: 7
      };
    }
  }
};
var propertyAccessed = obj.prop.someMethod().id;
console.log(propertyAccessed);
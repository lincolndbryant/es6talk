var System = require('es6-module-loader').System;

require("colors");
console.log('Welcome to ES6 in node.  ES5 modules are supported alongside E6!'.green);

System.import('./src/main').then(function(m) {
  console.log(m.p);
});

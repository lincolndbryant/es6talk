define(function(require) {
  var logger = require('lib/logger');

  return function () {
    logger.log('hello world');
  };
});
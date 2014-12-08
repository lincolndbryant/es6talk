// main.js
hubspot.define('main', ['lib/logger'], function(logger) {
  return function() {
    logger.log('hello world')
  }
});
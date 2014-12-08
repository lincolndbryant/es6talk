// app.js
define('lib/logger', function() {
  return {
    log: function() {}
  }
});

define('main', ['lib/logger'], function(Logger) {
  return function () {
    logger.log('hello world');
  };
});

//in index.html
require('main', function(main) {
  main()
});

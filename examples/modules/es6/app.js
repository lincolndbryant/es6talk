System.register("lib/logger", [], function() {
  return var logger = {
        log: function(msg) { console.log(msg); }
  };
});

System.register("main", ['lib/logger'], function($__export) {
  return function () {
    logger.log('hello world');
  };
});

System.import('main', function(main) {
  new Main();
});
//this works, even though defined before a dependency
hubspot.define('main', ['lib/logger'], function(logger) {
  return function() {
    logger.log('hello world')
  }
});
hubspot.define('lib/logger', [], function() {
  return {
    log: function() {}
  }
});

//index.html
hubspot.require(['main'], function(main) {
  main();
})
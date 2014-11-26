console.log('=====\n block scope examples');
// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures#Creating_closures_in_loops.3A_A_common_mistake

// es 5
// var with lexical scope lexical s
function functionScopeExample() {

  // var declarations are visible to the entire function, and leak out of scope brackets {}
  {
    var foo = 'bar';
  }
  console.log(foo); // 'bar'

  // var declared variables are shared in the environment of closures that reference them
  var closures = [];
  for (var i = 0; i < 3; i++) {
    closures.push(function() {
      console.log(i);
    });
  }
  closures.forEach(function(func) { func() })
}
functionScopeExample(); // => 3, 3, 3   !!!!


// es6's let prevents the problem.  also demonstrating of iteration and lambda function syntax
function blockScopeExample() {

  // let declarations are visible only to the scope brackets {} they are used in.  not hoisted and do not leak
  {
    let foo = 'bar';
  }
  console.log(typeof foo); // undefined

  // let declared variables are not shared in the environment of closures that reference them
  var closures = [];
  for (let i of [0, 1, 2]) {
    closures.push(function() {
      console.log(i);
    });
  }
  closures.forEach( (func) => func() );
}
blockScopeExample();   // => 0, 1, 2

// es6 const
const hubspot = 'awesome';
//hubspot = 'lame'  (wont even compile!)


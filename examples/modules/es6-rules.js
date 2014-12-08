//illegal
if (Math.random()) {
  import 'foo' from 'lib/foo';
}

//also illegal
if (Math.random()) {
  export var foo = 'foo';
}
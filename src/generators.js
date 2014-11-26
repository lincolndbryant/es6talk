console.log('=====\n generator examples');
// generators are a memory-conserving iterator construct that are becoming increasingly sensible as data-handling ability
// like FileStreams are added to the browser.  yield and function* are supported direction in Chrome, but do not compile through
// Coffeescript and other transpiled languages.

function* fibonacci() {
  let a = 0, b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}

var sequence = fibonacci();
console.log(sequence.next()); // 1
console.log(sequence.next()); // 1
console.log(sequence.next()); // 2
console.log(sequence.next()); // 3
console.log(sequence.next()); // 5

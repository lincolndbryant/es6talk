console.log('=====\nClass examples');

// extending builtins is supported
class Collection extends Array {
  // super()
  toString() {
    return `[[Collection]]<${super.toString()}>`
  }
}

let coll = Collection.from([1, 2, 3]);
console.log('collection length:', coll.length);
console.log(coll.toString());
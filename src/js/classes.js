console.log('classes');

// constructor
class LogConstructing {
    constructor() {
        console.log(`new ${this.constructor.name}`)
    }
}

// multiple inheritance?
class Collection extends Array, LogConstructing {

    // super()
    toString() {
        return `[[Collection]]<${super()}>`
    }
}

let coll = new Collection(1, 2, 3);
console.log(coll.toString());
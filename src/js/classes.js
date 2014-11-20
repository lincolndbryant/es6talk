console.log('classes');

class LogConstructing {
    constructor() {
        console.log(`new ${this.constructor.name}`)
    }

    toString() {
        return 'boo' + super()
    }
}

class Collection extends Array, LogConstructing {

    toString() {
        return `[[Collection]]<${super()}>`
    }
}

let coll = new Collection(1, 2, 3);
console.log(coll.toString());
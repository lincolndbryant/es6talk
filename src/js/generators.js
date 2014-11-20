function* fibonacci(){
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
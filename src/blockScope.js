for (var i in [1, 2, 3]) {
    var temp = i;
}
// i
console.log(temp);

for (var i in [1, 2, 3]) {
    let tempBlockScope = i;
}
// undefined
console.log(typeof tempBlockScope);
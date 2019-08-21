// instrução condicional IF
var x = 3
var y = 7

if (x === 3 ) { // sempre vai retorna um valor booleano
    y = 3
}

console.log(y)

if (x === y && x === 3) {
    x = 5
    y = 2
}

console.log(x)
console.log(y)

if (x === 5 || y === 1) {
    x = 1
    y = 1
}

console.log(x)
console.log(y)

if (x === 2) {
    x = 5
    y = 5
}

console.log(x)
console.log(y)

// ELSE

if (x === 2) {
    y = 2
} else {
    y = 10
}

console.log(y)

//ELSE IF

if (x === 2){ //false
    y = 2
} else if (y == 3) { //false
    x = 3
} else if (x === y){ //false
    x = 10
    y = 100
} else { // sendo todas falsas e valida os valores
    x = 0
    y = 0
}

console.log(x)
console.log(y)

//Array

var arr = [1, 2, 3]

function myFunction(arg) {
    return arg
}

console.log(myFunction(arr))

function myFunction2(arg) {
    return arg[1]
}

console.log(myFunction2(arr))

console.log(myFunction2([ 1, 5, 7, 9 ]))

console.log(myFunction([ 'fernando', 1, true, 34 ]))

// Objeto

var obj = {
    propriedade: 'fernando',
    curso: 'JavaScript Ninja',
    ninja: true
}

console.log(obj)

function myFunction3(arg) {
    return arg
}

console.log(myFunction3(obj.propriedade))

function myFunction4(arg) {
    return arg.curso
}

console.log(myFunction4(obj))
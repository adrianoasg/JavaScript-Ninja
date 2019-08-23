// operador virgula

var a, b = 2, c

function myFunction() {
    var x = 0
    return (x += 1, x)    // === return ++x
}

console.log(myFunction())


function myFunction2() {
    var a =1, b = 2, c = 3
    return [a, b, c]
}

console.log(myFunction2())
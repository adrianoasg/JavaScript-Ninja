// Podemos também retorna funções!

function adder(x) {
    return function(y) {
        return x + y
    }
} 

let add2 = adder(2)

console.log( add2(3) ) // 5

// Podemos também criar uma função dentro de uma função

function newAdder(x) {
    function newAddOther(y) {
        return x + y
    }
    return newAddOther
} 

// Não é preciso necesseriamente atribuir uma variável
// Podemos fazer duas invocações seguidas com javaScript

console.log( newAdder(5)(8) ) // 5
// Como testar tipos de valores?

// Operador unário typeof < operand >

console.log(typeof undefined) // 'undefined'
console.log(typeof function() {}) // 'function'
console.log(typeof true) // 'boolean'
console.log(typeof 10) // 'number'
console.log(typeof 'JS Ninja') // 'string'
 

/**
 * Qualquer outro objeto que não seja function => 'object'
 */

console.log(typeof {}) // 'object'
console.log(typeof []) // 'object'
console.log(typeof null) // 'object' - erro na implementação do javascript

console.log(typeof 10) // number
console.log(typeof NaN) // number


// Posso confiar no typeof?
// somente para valores primitivos

function sum(num1, num2) {
    return num1 + num2
}

console.log(sum(10, 2)) // 12
console.log(sum('JS', 2)) // JS2 
console.log(sum({}, [])) // [object Object]


function subtract(num1, num2) {
    return num1 - num2
}

console.log(subtract(10, 2)) // 8
console.log(subtract('JS', 2)) // NaN
console.log(subtract({}, [])) // NaN

// Para previnir isso

function subtract2(num1, num2) {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 - num2
    }
    return 'Entre com dois números'
}

console.log(subtract2(10, 2)) // 8
console.log(subtract2('JS', 2)) // NaN
console.log(subtract2({}, [])) // NaN


// Como saber quando é null

function subtract3(num1, num2) {
    if(num1 === null || num2 === null) {
        return 'Não entre com valores nulos'
    }
    return num1 - num2
}

console.log(subtract3(10, 5)) 
console.log(subtract3(null, 2)) 

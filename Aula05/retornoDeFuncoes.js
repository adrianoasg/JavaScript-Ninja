// Retorno de funções com arrays 

function myFunction() {
    return [1, 2, 3]
}

console.log(myFunction())
console.log(myFunction()[1])


// Retorno de funções com objetos

function newFunction() {
    return {
        prop1: 1,
        prop2: 'Fernando',
        prop3: function() {
            return 'prop3'
        }
    }
}

console.log(newFunction())
console.log(newFunction().prop1)

var values = newFunction()

console.log(values)
console.log(values.prop2)
console.log(values.prop3())
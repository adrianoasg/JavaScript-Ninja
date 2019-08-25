// Passando objetos por parâmetro

let car = {
    color: 'yellow'
}

function getCarColor(myCar) {
    return myCar.color
}

console.log( getCarColor(car) )

// Podemos passar também funções por parâmetro!

function showOtherFunction(func) {
    return func()
}

function returnedFunction() {
    return 'Returned function'
}

console.log( showOtherFunction( returnedFunction ) )

// Passando diretamente funções por parâmetro!

console.log( showOtherFunction(function() {
    return 'Functional JS Ninja!'
}) )
// A importância de nomear funções

// sempre nomear : var fuc = function func() {}

// Facilita o debug 

//function anônima
var func = function() {
    return 'hi'
}

console.log(func())
console.log(func.name)


// function noemada
var myFunc = function myFunc() {
    return 'hi'
}

console.log(myFunc())
console.log(myFunc.name)
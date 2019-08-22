/* 
    tipos primitivos
    -number
    -string
    -boolean
    -null e undefined
*/ 

/* 
    tipos de objetos - todos os outros tipos são objetos
    javascript é uma linguagem orientada a objetos
    objetos - são um conjunto de propriedades
*/

// { propriedade: 'valor' }

var objeto = { propriedade: 'valor', propriedade2: 10, propriedade3: true}

console.log(objeto)

// acessar
objeto.propriedade

// objeto pessoa
var pessoa = { nome: 'Fernando', idade: 30, peso: 85, altura: 1.85 }

console.log(pessoa)

console.log('idade: ' + pessoa.idade)

console.log('peso: ' + pessoa.peso)

console.log('altura: ' + pessoa.altura)


// objeto carro
var carro = { fabricante: 'Ford', modelo: 'Fusion', cor: 'vermelho', motor: '2.0', portas: 4}

console.log('cor: ' + carro.cor)

console.log('motor: ' + carro.motor)

console.log('portas: ' + carro.portas)


// function é um tipo de objeto - são objetos de primeira classe no JavaScript, porque eles podem ser atribuidas a variáveis
var myVar = function() { return 'variável myVar' }

console.log(myVar())
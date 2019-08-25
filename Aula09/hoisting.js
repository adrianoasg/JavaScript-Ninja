// hoisting - em funções literais, ainda que chame ou crie depois de um return o javaScript pega a função "move" para cima

function myFunction() {
    let num1 = 1
    let num2 = 2
    
    return sum()

    function sum() { // função literal o javaScript faz o hoisting
        return num1 + num2 
    }
}

console.log( myFunction() )

function myFunction2() {
    console.log(sum())
    function sum() { // função literal o javaScript faz o hoisting
        return 1 + 2 
    }
    console.log(sum())
}

myFunction2()

// Só funciona com funçõs literais

function myFunction3() {
    let num1 = 1
    let num2 = 2
    
    return sum() // se não for uma função litreal, ele ignora tudo, abaixo do return 

    const sum = function sum() { 
        return num1 + num2 
    }
}

console.log( myFunction3() )

// Com variáveis

function myFunction4() {

    console.log('Antes de declarar', num1) // retorna undefined só funciona com var

    var num1 = 10

    console.log('Depois de declarar', num1)
   
}

myFunction4()

// Cuidado quando for criar funções - evitando problemas com hoisting no javaScript

// Declare sempre váriaveis no inicio da função

// Depois crie as funções

// O return sempre no final da função
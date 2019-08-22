// Global
var myVar = 1

function myFunction() {
    return myVar
}

console.log(myFunction())

// Criando uma variável sem a palavra reservada var o javaScript entende como uma variável de escopo Global - cuidado - evite

function newFunction() {
  newVar = 'variavel global'
  return newVar
}

newFunction() //primeiro tem que chamar a função

console.log(newVar)

// Local - dentro de funções

function otherFunction() {
    var otherVar = true
    return otherVar
}

console.log(otherFunction())

console.log(otherVar)  // error - otherVar não está definida fora da função

// agurmentos de função são locais

function outraFuncao(a, b, c) {
    return a
}

console.log(outraFuncao(1))
console.log(a) // erro - variável local

// JavaScript antes do ECMAScript 6 não possuía escopo de declaração de bloco.

if (true) {
    var x = 5;
  }
  console.log(x);  // 5

//  Esse comportamento é alterado, quando usado a declaração let introduzida pelo ECMAScript 6.

  if (true) {
    let y = 5;
  }
  console.log(y);  // ReferenceError: y não está definida
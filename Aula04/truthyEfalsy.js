/*
Valores Falsy 

- undefined 
- null 
- NaN 
- 0
- -0
- '' ou ""
- false
*/

console.log('Teste valores Flasy')


//Teste 2

var teste2

if (0) { teste2 = true } else { teste2 = false }

console.log('valor 0 retorna: ' + teste2)


//Teste 3

var teste3

if ('') { teste3 = true } else { teste3 = false }


console.log('String vazia retorna: ' + teste3)

//Teste 4

var teste4

if (undefined) { teste4 = true } else { teste4 = false }


console.log('Undefined retorna: ' + teste4)

//Teste 5

var teste5

if (null) { teste5 = true } else { teste5 = false }


console.log('Null retorna: ' + teste5)

//Teste 6

var teste6

if (NaN) { teste6 = true } else { teste6 = false }


console.log('NaN vazio retorna: ' + teste6)



/*
Valores  Truthy

- Todos os outros valores
- 1
- true
- {}
- []

*/
console.log('===============================')

console.log('Teste valores Truthy')

//Teste 6
var teste

if (1) { teste = true } else { teste = false }


console.log('valor 1 retorna: ' + teste)

//Teste 7

var teste7

if ([]) { teste7 = true } else { teste7 = false }


console.log('Objeto vazio retorna: ' + teste7)

//Teste 8

var teste8

if ({}) { teste8 = true } else { teste8 = false }


console.log('Objeto vazio retorna: ' + teste8)

//Teste 9

var teste9

if ('0') { teste9 = true } else { teste9 = false } // String com valor retorna true


console.log('String com valor 0 retorna: ' + teste9)


/* 
    A representação booleana de um valor sem usar o IF é utilizar -> !!
*/

// !!1 retorna true


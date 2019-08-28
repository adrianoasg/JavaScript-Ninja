// while - somente se a instrução for verdadeira

let counter = 10

while( counter < 10 ) {
    console.log( counter++ )
}

console.log('counter não é mais menor que 10')


// do / while - diferença entre o while, é que ele sempre executa a primeira instrução

let counter2 = 10

do {
    console.log( counter2++ )
} while(counter2 < 10)

console.log('counter não é mais menor que 10')
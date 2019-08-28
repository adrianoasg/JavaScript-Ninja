// São algumas instruções no javaScript que vocÊ usa para pular algumas partes do seu código

// São eles:

// return - podemos utilizar ele no meio da função

function myFunction() {
    let number = 5
    if (number === 10) { // false
        return true
    }

    let number2 = 5
    let name = 'Fernando Daciuk'
    return name + ' ' + number2
    
}

console.log(myFunction())

// break - serve para sair de uma instrução

let number = 10

switch(number) {
    case 1:
        console.log( '1' )
        break
    case 2:
        console.log( '2' )
        break

    case 10:
        console.log( '10' )
        break
    default:
        console.log( 'default' )
}

console.log('fim do switch')

for(let i = 0; i < 10; i++){
    if(i === 5) {
        break
    }
    console.log(i)
}

console.log('fim do for')

// continue 

/**
 * Sua utilização dentro de um laço faz com que a execução da instrução atual (ou bloco de instruções atual) 
 * seja interrompida e passa para a próxima iteração do laço.
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i < arr.length ; i++){
    if(i % 2 === 0) {
        continue
    }
    console.log(i)
}

console.log('fim do for')

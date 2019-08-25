// Funções - função dentro de função é permitido. Mas, e o escopo?

function myFunction() {
    function sum() {
        return 1 + 2
    }
    return sum()
}

console.log( myFunction() )

// console.log( sum() ) // Escopo de função - A função sum foi criado dentro de myFunction - sum não está definida fora de myFunction 

function myFunction2() {
    let num1 = 1
    let num2 = 2
    function sum() { // O escopo das variáveis declaradas acima vale para toda a função, então eu consigo acessar as duas variáveis, porque sum está dentro de myFunction
        return num1 + num2 // Sum então é uma Closures, ou seja, uma função que consegue acessar parametros externos a ela
    }
    return sum()
}

console.log( myFunction2() )

// IIFE - Immediately-Invoked Function Expression ou Função auto executável

function sum() {
    return 1 + 2
}

console.log(sum()) // função literal executada pelo nome usando os parenteses

//ou

const sum2 = function() {
    return 3 + 2
}

console.log(sum2()); // Função não tem nome, mas foi atribuida a uma variável

// ou

const sum3 = function otherSum() {
    return 5 + 8
}

console.log(sum3())

//console.log(otherSum())  Existe apenas no escopo da sum3

// Como faço para executar essa função sem nome ou que não foi atribuida a uma variável 

// function() {
//     return 1 + 2
// }

//simplesmente não consigo

const obj = {
    prop: function() {
        return 1 + 2
    }
}

console.log(obj)
console.log(obj.prop);

/* 
    IIFE - Função auto executável - Vantagens não tenho escopo global

    Para executar uma função, ela precisa ser ou se tornar uma expressão

    Como faço para torná-la uma expressão?
*/

// Tem varias formas, uma delas é utilizar parêntese para envolver a função

(function() {
    console.log( 1 + 2 );
})();

const mysum = (function() {
    console.log(1 + 2)
})()


const doSomething = function() { console.log('done') }()


//Função imediata com parâmetro
(function doSomething(x) { console.log(x); })(1); // 1
 
// Agora com função anônima
(function(x) { console.log(x) })(1); // 1
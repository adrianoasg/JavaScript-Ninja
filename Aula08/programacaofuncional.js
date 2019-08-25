// introdução a programação funcional

// É uma forma de você programar baseado em funções ou as caracteristicas que as funções tem
// No javaScript funções são "cidadões" de primeira classe - significa que as funções tem o mesmo tratamento que um objeto
// Tudo aquilo que você consegue fazer com objetos no javaScript você também consegue fazer com funções

// Como você usa objetos literais...

var car = {
    brand: 'Chevrolet',
    model: 'Silverado'
}

// Podemos criar funções literais!

function sum(x, y) {
    return x + y
}

// Atribuindo objetos à variáveis

const func = function func() {}

console.log(func())
console.log(func.name)

// Retornando objetos em uma função
function person() {
    return {
        name: 'Fernando',
        lastName: 'Daciuk'
    }
}

console.log(person())

// Como também atribuir o objeto a uma variável

function newPerson() {
    let info = {
        name: 'Fernando',
        lastName: 'Daciuk'
    }
    return  info
}

console.log(newPerson())
console.log(`Name: ${newPerson().name}`)
console.log(`Last Name: ${newPerson().lastName}`)
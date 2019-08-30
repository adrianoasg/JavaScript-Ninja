/**
 * Craindo objetos 
 * Herança
 * Object.create()
 */

 let obj1 = { x:1, y: 2 }
 let obj2 = Object.create(obj1) // obj2 ainda não tem uma propriedade propria dele, mas herda os valores de x e y

 console.log('obj1 === obj2', obj1 === obj2) // obj2 herda de obj1
 console.log('obj2', obj2) // objeto vazio
 console.log('obj2.prototype', obj2.prototype) // undefined
 console.log('obj2.x', obj2.x) // herda os valores de x e y 

 // Object.create() cria um novo objeto, não é uma referência do obj1, simplesmente obj2 herdou valores do obj1 
 
 obj1.x = 2
 console.log('obj2.x', obj2.x) 

 obj2.x = 'lala'
 console.log('obj2.x', obj2.x) 
 console.log('obj1.x', obj1.x)
 

 // criando objeto vazio

 let obj3 = Object.create({})
 console.log('obj3', obj3) // objeto vazio
 console.log(Object.prototype) // objeto vazio
 console.log('obj3', obj3.toString) // converte o valor do objeto em string

 obj3 = Object.create(obj1) // obj3 ainda não tem uma propriedade propria dele, mas herda os valores de x e y

 console.log('obj1.x', obj1)
 console.log('obj2', obj2)
 console.log('obj3', obj3) 

 for(let prop in obj1) {
     console.log( 'obj1', prop )
 }

 for(let prop in obj2) { // mostra x e y porque foram herdados
    console.log( 'obj2', prop )
}

for(let prop in obj3) { // mostra x e y porque foram herdados
    console.log( 'obj3', prop )
}

// como não acessar as propriedades herdadas?

console.log('obj1 tem a propriedade x?', obj1.hasOwnProperty('x'))
console.log('obj2 tem a propriedade x?', obj2.hasOwnProperty('x'))
console.log('obj2 tem a propriedade y?', obj2.hasOwnProperty('y'))
console.log('obj3 tem a propriedade x?', obj3.hasOwnProperty('x'))

// hasOwnProperty - método que verifica propriedades especificas do objeto

for(let prop in obj1) {
    if(obj1.hasOwnProperty(prop)) {
        return console.log('obj1 contém a propriedade: ', prop)
    }
    return console.log('obj1 não contém propriedade própria')
}

for(let prop in obj2) {
    if(obj2.hasOwnProperty(prop)) {
        return console.log('obj2 contém a propriedade: ', prop)
    }
    return console.log('obj2 não contém propriedade própria')
}

for(let prop in obj3) {
    if(obj3.hasOwnProperty(prop)) {
        return console.log('obj3 contém a propriedade: ', prop)
    } 
    return console.log('obj3 não contém propriedade própria')
}
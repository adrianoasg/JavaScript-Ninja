// for

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// for in - percorre propriedades de um objeto - mais lento que o for normal

const car = {
    brand: 'VW',
    model: 'Gol',
    year: 2013
}

console.log(car)

for ( let prop in car ) {
    console.log( prop )
}

// Com in também conseguimos testar se uma propriedade exite em um objeto

console.log( 'brand in car?', 'brand' in car)
console.log( 'doors in car?', 'doors' in car)

// Também podemos mostrar os valores do objeto no formato de array

for ( let prop in car ) {
    console.log( car[prop] )
}

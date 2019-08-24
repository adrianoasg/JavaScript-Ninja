// adiciona item no final do array

let arr = [ 1, 2, 3, 'Souza', { bola: 'azul' } ]

console.log(arr.length)

arr.push({ carro: 'BMW' })
arr.push( function soma(x, y) { return x + y } )

console.log(arr)

console.log(arr[6](1,2)) // acessando function a partir do array
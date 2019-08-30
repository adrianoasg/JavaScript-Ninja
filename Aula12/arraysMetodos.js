// Arrays - adicionar itens

let arr = []

arr[0] = 10
arr[1] = 5
arr[2] = 'oito'
arr[12] = 'doze'

console.log(arr) 
console.log(arr[11])

// metodos

// push() - adicionar itens no final do array
arr.push('treze')
console.log(arr) 

// pop() - remover itens no final do array
arr.pop()
console.log(arr) 

let arr2 = []

arr2.push('arroz')
arr2.push('feijão')
arr2.push('macarrão')

console.log(arr2)

// removendo o ultimo item do array e salvando em uma variável
let last = arr2.pop()
console.log(last) 
console.log(arr2)

// join() - Juntar intens do array em uma string
arr2.push('lasanha')
console.log(arr2)
console.log(arr2.join())

console.log(arr2.join(' '))
console.log(arr2.join(', '))
console.log('Meu almoço hoje será', arr2.join(', '))

// reverse() - inverte ordem dos itens do array
arr2.reverse()
console.log(arr2) // tem efeito colateral, ele modifica o array principal
arr2.reverse()
console.log(arr2)

// sort - ordena o array, ele também modifica o array principal
arr2.reverse()
console.log(arr2)
arr2.sort()
console.log(arr2)

arr2.push('ervila')
console.log(arr2)
arr2.sort()
console.log(arr2)
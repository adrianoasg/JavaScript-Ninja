// Object.keys - retorna um array com as propriedades do objeto

let obj1 = { x:1, y: 2 }
let obj2 = Object.create(obj1) // obj2 ainda não tem uma propriedade propria dele, mas herda os valores de x e y
let obj3 = Object.create(obj2) 

console.log('obj1', Object.keys(obj1))
console.log('obj2', Object.keys(obj2))

// posso utilizar o length
console.log('obj1 contem ' + Object.keys(obj1).length + ' propriedades')

// isPrototypeOf()

console.log('obj1 é um protótipo do obj2? ' + obj1.isPrototypeOf(obj2))

// obj3 não foi herdado diretamente do obj1 mas foi herdado do obj2 que herda do obj1, a herança de protóttipos continua funcionando
console.log('obj1 é um protótipo do obj3? ' + obj1.isPrototypeOf(obj3)) 

console.log('obj2 é um protótipo do obj3? ' + obj1.isPrototypeOf(obj3)) // false

console.log('obj2 é um protótipo do obj1? ' + obj2.isPrototypeOf(obj1)) // false - porque o protótipo é sempre o objeto principal

console.log('obj3 é um protótipo do obj2? ' + obj3.isPrototypeOf(obj2)) // false - porque nenhum objeto foi craido baseado nele

// obj 1 é protótipo do obj2 e obj3

let obj4 = Object.create(obj3) 

console.log('obj3 é um protótipo do obj4? ' + obj3.isPrototypeOf(obj4)) // true - porque acabei de criar o obj4 herdando as propriedades do obj3

// Então ele vai herdar x e y
console.log('obj4.x', obj4.x)

console.log('obj4.y', obj4.y)


// JSON.stringify(obj) - pode parciar o objeto transformando ele numa string 

console.log('obj1 JSON.stringify', JSON.stringify(obj1))
console.log('obj1', obj1) // mas vai continuar sendo um objeto normal


// convertendo em uma string
let str = JSON.stringify(obj1)
console.log('str', str)

// transformando em objeto novamente
console.log(JSON.parse(str))

// nem todas os objetos podem converter para string!!!
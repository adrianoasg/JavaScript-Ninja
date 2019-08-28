// valore primitivos não são objetos, pois não tem propriedades e métodos  
// Objetos em javaScript tem propriedades e métodos 


// String é um tipo primitivo, então porque ela tem a propriedade length? 
var name = 'Daciuk'
console.log(name.length) // retorna 6 - 
/* porque o javaScript entende que eu tenho uma string, então o ele vai 
envolver a minha string literal 'Daciuk' em um objeto do tipo string, para que eu posso 
utilizar a propriedade length, logo depois que utilizo a propriedade length e verifico o valor,
o javaScript descarta esse objeto da memoria
 */

// Basicamente o javaScript faz é converte o valor de name em um objeto, pra que eu possa utilizar a propriedade length

// construtores em javaScript são objetos ou funções que criam novos objetos

var name = new String('Daciuk') // com new sempre vai ser um objeto e nunca uma string literal
console.log(name) // name é um objeto do tipo String
console.log(name.length) // retorna 6
console.log(name.valueOf()) // retorna a string

// construtores (criam novos objetos)
var name = new String('Daciuk')
var age = new Number(30)
var ninja = new Boolean(false)

// Conversores - sem o new (convertem o tipo)
var name = String(30)
var age = Number('150')
var ninja = Boolean(0)

console.log(name + 1)
console.log(age)
console.log(ninja)
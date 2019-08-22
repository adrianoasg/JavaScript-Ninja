var myVar = function() { return 'variável myVar' }

console.log(myVar)
console.log(myVar())

// Objeto - conjunto de propriedades

// Quando nós atribuimos a uma propriedade de um objeto uma função chamamos essa propriedade de método

var pessoa = { nome: 'Fernando', idade: 30, peso: 85, altura: 1.85, sexo: 'masculino' }
console.log(pessoa)
console.log(pessoa.nome)

// cuidado
// pessoa = { sexo: 'masculino'} perder todas as informações que você tinha

// adicionar uma nova propriedade
pessoa.cor = 'caucasiano'

console.log(pessoa)
console.log(pessoa.cor)

// métodos de objeto, basicamente são funções que vc usa como valor da propriedade do objeto
// criar um método de um objeto

// pessoa.nome é uma propriedade

pessoa.andar = function() {
    return 'Pessoa andando'
}

console.log(pessoa.andar())

// pessoa.andar() é um método do objeto pessoa

pessoa.aniversario = function() {
    pessoa.idade++
}

console.log(pessoa.aniversario())
console.log(pessoa.idade)

pessoa.sobrenome = 'Daciuk'
console.log(pessoa)

pessoa.nomeCompleto = function() {
    return pessoa.nome + ' ' + pessoa.sobrenome
}

console.log(pessoa.nomeCompleto())

// var objeto = { propriedade = 'valor, metodo: function() {} }

// denro do objeto a função acaba se tornando um método do objeto
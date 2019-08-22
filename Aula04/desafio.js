/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function newFunction(a) {
    return a ? true : false
}


// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(false))
console.log(isTruthy(null))
console.log(isTruthy(NaN))
console.log(isTruthy(undefined))
console.log(isTruthy(0))
console.log(isTruthy(-0))
console.log(isTruthy(''))
console.log(isTruthy(""))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(1))
console.log(isTruthy({}))
console.log(isTruthy([]))
console.log(isTruthy(true))
console.log(isTruthy(2))
console.log(isTruthy(function() {}))
console.log(isTruthy('true'))
console.log(isTruthy(1 * 2))
console.log(isTruthy({ x: 2, y: 3 }))
console.log(isTruthy([1, 2 , 3]))

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = { marca: 'Ford', modelo: 'Mustang', placa: 'JSU-1010', ano: 1977, cor: 'amarelo', quantasPortas: 2, assentos: 5, quantidadePessoas: 0 }

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = (novaCor) => carro.cor = novaCor

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => carro.cor

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => carro.modelo

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => carro.marca


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => `Esse carro é um ${carro.marca} ${carro.modelo}` 

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = (numPessoas) => {
    var totalPessoas = carro.quantidadePessoas + numPessoas

    if (carro.quantidadePessoas == carro.assentos && totalPessoas >= carro.assentos) {
        return `O carro já está lotado!`    
    } 
    
    if(totalPessoas > carro.assentos) {
        var assentosRestantes = carro.assentos - carro.quantidadePessoas
        var singularOuPlural = assentosRestantes === 1 ? 'pessoa' : 'pessoas'

        return `Só cabem mais ${assentosRestantes} ${singularOuPlural}!`
    } 

    carro.quantidadePessoas += numPessoas
    return `já temos ${carro.quantidadePessoas} pessoas no carro!`
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.cor) // amarelo

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho')

// E agora, qual a cor do carro?
console.log(carro.cor) // vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo')

// E agora, qual a cor do carro?
console.log(carro.cor) // verde musgo

// Qual a marca e modelo do carro?
console.log(carro.modelo)

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2)) // já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4)) // Só cabem mais 3 pessoas!

// Faça o carro encher.
console.log(carro.adicionarPessoas(3)) // já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.
console.log(carro.adicionarPessoas(-4)) // já temos 1 pessoas no carro!

// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10)) // Só cabem mais 4 pessoas!

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas) // 1
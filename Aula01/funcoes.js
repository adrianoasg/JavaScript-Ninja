function nome() {}

nome()

var x = 1

function soma () {
    x = x + 1
}

console.log(x)

soma()

console.log(x)

// funções criam escopo
function qualquer() {
    var fernando = 'fernando'
}

console.log(qualquer()) 

function qualquer2() {
    var fernando = 'fernando'
    return fernando
}

console.log(qualquer2())

// funções podem retorna valores

var y = 4 

function cinco() {
    return 5
}

cinco()

console.log(y + cinco())

// funções podem receber argumentos ou parâmetros

function soma(x, y) {
    return x + y
}

console.log(soma(1, 2))
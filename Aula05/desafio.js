/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let arr = [5, 'Adriano', function(){}, { sobrenome: 'Souza' }, undefined ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const myFunction = (arg) => arg

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const myFunction2 = (arg, arg2) => arg[ arg2 ]

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let myArray = [ 3, 'Laura', function(){}, { idade: 7 }, [9, 'Brasil'] ]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

for (let i = 0; i <= myArray.length - 1; i++) {
    console.log(myFunction2(myArray, i))
}


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
const book = (bookName) => {
    let objAllBooks = {
        'Java como programar' : {
            numberOfPages: 968,
            author: 'Paul Daitel',
            publishingCompany: 'Pearson Brasil'  
        },
        'C completo e total' : {
            numberOfPages: 827,
            author: 'Herbert Schildt',
            publishingCompany: 'Pearson Education do Brasil'
        },
        'JavaScript usando a cabeça' : {
            numberOfPages: 606,
            author: 'Michael Morrison',
            publishingCompany: 'Alta Books'
        }              
    }

    return !bookName ? objAllBooks : objAllBooks[ bookName ]

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro Java como programar tem ${book('Java como programar').numberOfPages} páginas.`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro JavaScript usando a cabeça é ${book('JavaScript usando a cabeça').author}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro C completo e total foi publicado pela editora ${book('C completo e total').publishingCompany}.`)
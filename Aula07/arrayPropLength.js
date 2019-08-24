let arr = [ 'Souza', null, true, { bola: 'azul '}, function() {}]

console.log(arr.length)


let qtd = arr.length 

while(qtd > 0) {
    console.log( arr[ --qtd ] )
}

while(qtd > 0) {
    console.log( arr[ --qtd ] )
    if ( qtd === 3 ) {
        console.log( arr[ qtd ].bola )
    }
}
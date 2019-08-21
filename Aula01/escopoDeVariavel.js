// JavaScript antes do ECMAScript 6 não possuía escopo de declaração de bloco.

if (true) {
    var x = 5;
  }
  console.log(x);  // 5

//  Esse comportamento é alterado, quando usado a declaração let introduzida pelo ECMAScript 6.

  if (true) {
    let y = 5;
  }
  console.log(y);  // ReferenceError: y não está defini
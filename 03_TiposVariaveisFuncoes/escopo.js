
// VAR irá criar uma variável de escopo GLOBAL, ou seja, a variável "estudante" criada na linha 3 será alterada na linha 8
if (1 > 0) {
  var estudante = 'Caroline';
  console.log(estudante);
}

estudante = 'Jaqueline';
console.log(estudante);

// LET irá criar uma variável LOCAL, ou seja, a variável declarada na linha 11 só poderá ser usada no bloco do IF
if (1 > 0) {
  let professor = 'Caroline';
  console.log(professor);
}

// o que acontece na linha 19 é que o Javascript irá CRIAR outra variável na memória. Toda vez que eu não declaro nada
// (Var, Const ou Let) ele irá declarar uma segunda variável com um "VAR" automático.
professor = 'Jaqueline';
console.log(professor);
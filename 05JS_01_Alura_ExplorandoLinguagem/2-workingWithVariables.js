console.log("Trabalhando com variáveis");

// Javascript é case sensitive, então essas duas variáveis são diferentes
const idade = 29;
const Idade = 30;

// Diferença entre LET e CONST é que LET pode ter o valor reatribuido, const é constante.
let ano = 2020;

// se você não declarar const nem let, Javascript irá declarar a variável num contexto GLOBAL
// isso não é uma boa prática pois pode gerar confusão na hora de debuggar e tudo mais
nome = "Fernando";

// Nota - ponto e virgula no final é OPCIONAL no Javascript, a linha abaixo também está certa!
sobrenome = "Passaia"


// Nota: Let e Const podem ser usados apenas dentro do bloco {} onde foram declaradas
if (true) {
    let a = 10;
    console.log(a); // 10
  }
  console.log(a); // Erro! 'a' não é acessível fora do bloco
console.log("Trabalhando com atribuição de variáveis");

const idade = 40;
const nome = "Fernando";
const sobrenome = "Passaia"; 

console.log(nome + sobrenome); //FernandoPassaia
console.log(nome + " " + sobrenome); //Fernando Passaia
console.log(nome, sobrenome); //Fernando Passaia
console.log(`Meu nome é ${nome} ${sobrenome}`); //Fernando Passaia

nome = nome + sobrenome; // Error - nome é constante, não pode mudar

const nomeCompleto = nome + sobrenome;
console.log(nomeCompleto); // Fernando Passaia
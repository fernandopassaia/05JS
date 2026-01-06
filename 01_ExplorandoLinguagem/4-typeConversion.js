console.log("Conversão de Tipo");

console.log("ano" + 2022); // vai converter texto - ano2022
console.log("2" + "2"); // vai converter texto - 22

console.log(parseInt("2") + parseInt("2")); // 4 - vai converter ambos pra string

// 3.5 - por incrível que pareça ele vai conseguir resolver, por que / significa
// divisão - então OBRIGATORIAMENTE precisam ser dois números, diferentes da soma.
// internamente o Javascript irá tentar converter essas duas strings para number
console.log("7" / "2");

console.log("Ricardo" / "2"); // NaN - not a number

console.log(6.5); // 6.5 - perfeito, use sempre pontos pra números
console.log(6,5); // 6 5 - errado, por que vírgula sempre é outro parametro
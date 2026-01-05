console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(listaDeDestinos); // ['Salvador', 'São Paulo', 'Rio de Janeiro']

listaDeDestinos.push(`Curitiba`) 

console.log(listaDeDestinos); // ['Salvador', 'São Paulo', 'Rio de Janeiro', 'Curitiba']

listaDeDestinos.splice(1,1);

console.log(listaDeDestinos); // ['Salvador', 'Rio de Janeiro', 'Curitiba']

console.log(listaDeDestinos[1]); // Rio de Janeiro
console.log(`Trabalhando com operadores lógicos (condicionais)`);


const listaDeDestinos = new Array(
    `Salvador`,
    ` São Paulo`,
    ` Rio de Janeiro`
);

console.log(`Destinos possíveis: ${listaDeDestinos}.`);

const idadeComprador = 15;
const estaAcompanhada = true;

if (idadeComprador >= 18) {
    console.log(`Comprador maior de idade. Passagem vendida.`);
    listaDeDestinos.splice(1, 1); // Removendo item
} else if (estaAcompanhada) {
    console.log(`Comprador menor de idade, mas acompanhado. Passagem vendida.`);
    listaDeDestinos.splice(1, 1);
} else {
    console.log(`Comprador menor de idade e sem acompanhante. Não posso vender.`);
}

console.log(`Passagens restantes: ${listaDeDestinos}.`);

// Operadores lógicos
// console.log(idadeComprador > 18); Maior
// console.log(idadeComprador < 18); Menor
// console.log(idadeComprador >= 18); Maior ou igual
// console.log(idadeComprador <= 18); Menor ou igual
// console.log(idadeComprador == 18); Igual
// Retorno tipo booleano (true/false)

// Identar o código automaticamente ALT + SHIFT + F



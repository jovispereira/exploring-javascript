console.log(`Trabalhando com operadores lógicos encadeados`);


const listaDeDestinos = new Array(
    `Salvador`,
    ` São Paulo`,
    ` Rio de Janeiro`
);

console.log(`Destinos possíveis: ${listaDeDestinos}.`);

const idadeComprador = 15;
const estaAcompanhada = true;
let passagemComprada = false;

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log(`Comprador maior de idade ou acompanhado. Passagem vendida.`);
    listaDeDestinos.splice(1, 1);
    passagemComprada = true;
} else {
    console.log(`Comprador menor de idade ou sem acompanhante. Não posso vender.`);
}

console.log(`Embarque: \n`)
if ((idadeComprador >= 18 || estaAcompanhada) && passagemComprada) {
    console.log(`Boa viagem!!!`)
} else {
    console.log(`Você não pode embarcar.`)
}

console.log(`Passagens restantes: ${listaDeDestinos}.`);
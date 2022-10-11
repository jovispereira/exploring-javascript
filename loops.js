console.log(`\nTrabalhando com loops e debugger`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(`\nDestinos possíveis: ${listaDeDestinos}.`);

const idadeComprador = 15;
const estaAcompanhada = true;
let passagemComprada = false;
const destino = `São Paulo`;

let contador = 0;
while (contador < listaDeDestinos.length) { // Laço para percorrer lista
    if (destino == listaDeDestinos[contador]) {
        if (idadeComprador >= 18 || estaAcompanhada) {
            console.log(`Comprador maior de idade ou acompanhado. Passagem vendida.`);
            listaDeDestinos.splice(contador, 1);
            passagemComprada = true;
            break; // Quebra do laço
        } else {
            console.log(`Comprador menor de idade ou sem acompanhante. Não posso vender.`);
            break; // Quebra do laço
        }
    } else if (contador == (listaDeDestinos.length - 1) ) {
        console.log(`O destino procurado não existe.`);
    }
    contador++; // Incremento do contador
}

console.log(`Embarque: \n`)
if ((idadeComprador >= 18 || estaAcompanhada) && passagemComprada) {
    console.log(`Boa viagem à ${destino}!!!`)
} else {
    console.log(`Você não pode embarcar.`)
}

console.log(`Passagens restantes: ${listaDeDestinos}.`);
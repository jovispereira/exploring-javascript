console.log(`\nTrabalhando com for (exemplo prático de média)`);

const listaDeNotas = new Array(
    8,
    6,
    8,
    10
);

let mediaDasNotas = 0;
for (let i = 0; i < listaDeNotas.length; i++){
    if (i < listaDeNotas.length - 1) {
        mediaDasNotas += listaDeNotas[i];
    } else {
        mediaDasNotas += listaDeNotas[i];
        mediaDasNotas /= listaDeNotas.length ;
    }
}

console.log(mediaDasNotas);
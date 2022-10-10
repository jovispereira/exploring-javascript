console.log(`Trabalhando com listas (arrays)`); // Marcação de string com crase para poder interpolar variáveis

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log(`Destinos possíveis: ${salvador}, ${saoPaulo} e ${rioDeJaneiro}.`);

const listaDeDestinos = new Array(
    `Salvador`,
    ` São Paulo`,
    ` Rio de Janeiro`
); // Podemos alterar os valores da lista, mas não o tipo de variável

listaDeDestinos.push(` Curitiba`); // Adicionando itens na lista

console.log(`Destinos possíveis: ${listaDeDestinos}.`);
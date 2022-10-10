console.log(`Trabalhando com listas (arrays)`); // Marcação de string com crase para poder interpolar variáveis

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log(`Destinos possíveis: ${salvador}, ${saoPaulo} e ${rioDeJaneiro}.`);

const listaDeDestinos = new Array(
    `Salvador`,
    ` São Paulo`,
    ` Rio de Janeiro`
); // Podemos alterar os itens da lista, mas não o tipo/valor da variável

listaDeDestinos.push(` Curitiba`); // Adicionando itens na lista dinamicamente

console.log(`Destinos possíveis: ${listaDeDestinos}.`);

listaDeDestinos.splice(1,1); // Deletar itens na lista
// Índice sempre começa no 0

console.log(`Destinos possíveis: ${listaDeDestinos}.`);

console.log(listaDeDestinos[1]); // Exibir somente um item
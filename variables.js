// JS é case sensitive não é fortemente tipado

let idade; // Declarando variável
idade = 22; // Atribuindo valor
// Idade != idade
const primeiroNome = "João Vitor";

// Sempre declarar variáveis com as palavras reservadas
// Não fazer -> mes = "Janeiro";

console.log("Atribuição de variáveis");

const sobrenome = "Pereira";
// console.log(nome + " " + sobrenome);
console.log(primeiroNome, sobrenome);

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

// Sobrescrever -> Atribuição != Declaração
const nomeCompleto = primeiroNome + sobrenome; // Variáveis que são constantes (não variam)
console.log(nomeCompleto);

let contador = 0; // Variáveis que variam
contador = contador + 1;
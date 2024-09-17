

const prompt = require("prompt-sync")();
const entrada = prompt("Digite números separados por vírgula (ex: 1,2,3,4,5):");
const elemento = Number(prompt("Digite o número a ser pesquisado:"));
const vetor = entrada.split(',').map(Number);

let encontrado = vetor.indexOf(elemento) !== -1;

console.log(`O elemento ${elemento} está presente no vetor? ${encontrado}`);
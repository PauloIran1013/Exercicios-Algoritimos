
const prompt = require("prompt-sync")();
const entrada = prompt("Digite números separados por vírgula (ex: 1,2,3,4,5):");
const vetor = entrada.split(',').map(Number);

let maiorN = vetor[0]

vetor.forEach(numero => {
    if (numero >= maiorN) {
        maiorN = numero
    }
});
console.log(`O maior número no vetor é: ${maiorN}`);
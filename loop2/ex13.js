const prompt = require('prompt-sync')();


const quantidadeAlunos = parseInt(prompt("Digite a quantidade de alunos: "));

let somaNotas = 0;


for (let i = 1; i <= quantidadeAlunos; i++) {
    const nota = parseFloat(prompt(`Digite a nota do aluno ${i}: `));
    somaNotas += nota;
}


const media = quantidadeAlunos > 0 ? somaNotas / quantidadeAlunos : 0;

console.log("A média das notas é:" + media);

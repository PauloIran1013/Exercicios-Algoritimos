const prompt = require('prompt-sync')()
const n = prompt("Digite números separados por vírgula (ex: 1,2,3,4,5):")
const vetor = n.split(',').map(Number)  

let sla = vetor[0]
let soma = 0

vetor.forEach(num => soma +=num)
const m = soma / vetor.length

console.log(`A média dos elementos do vetor é: ${m}`);

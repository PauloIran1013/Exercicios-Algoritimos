const prompt = require("prompt-sync")();
let n =Number(prompt("Digite um numero:"))
let resultado = 1
for(let i = 2; i<=n; i++){
    resultado *= i
}
console.log(`O fatorial de ${n} é ${resultado}`);
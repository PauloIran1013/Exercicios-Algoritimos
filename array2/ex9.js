const prompt = require("prompt-sync")();
const n = parseInt(prompt("Digite o número de elementos do array:"));
let array = [];

for (let i = 0; i < n; i++) {
  if (i % 2 !== 0) {
    array.push("Ímpar");
  } else {
    array.push("Par");
  }
}

console.log("Array preenchido:");
console.log(array);


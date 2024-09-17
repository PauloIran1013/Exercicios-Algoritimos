const prompt = require('prompt-sync')()
const nomeProcurado = prompt("Digite o nome a ser procurado: ");
const vetorNomes = [
    "João",
    "Maria",
    "Pedro",
    "Ana",
    "Carlos",
    "Beatriz",
    "Luiz",
    "Gabriela",
    "Rafael",
    "Juliana"
  ];
if (vetorNomes.includes(nomeProcurado)) {
    console.log("ACHEI");

}else{
    console.log("NÃO ACHEI");
}
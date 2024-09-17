// maneira simples
// let n = [1,2,3,4,5,6,7,8]
// console.log(n[7]);

// maneira complexa
let vetor = [10, 25, 7, 34, 18];

let maiorNumero = vetor[0];

for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maiorNumero) {
        maiorNumero = vetor[i];
    }
}

console.log("O maior número no vetor é:", maiorNumero);

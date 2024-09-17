//maneira gambiarra
// let v = [1,2,3,4,5,6,7,8]
// console.log("Todos os numeros:", v)
// console.log("Osn umeros pares são:",v[1],v[3],v[5],v[7]);

//maneira sem gambiarra
let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let par = []

vetor.forEach(numero => {
    if (numero % 2 ===0) {
        par.push(numero)
    }
});
console.log("Vetor original:", vetor);
console.log("Vetor de números pares:", par);
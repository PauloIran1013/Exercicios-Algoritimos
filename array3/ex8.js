const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
 console.log(matriz);

//   const dobro = matriz.map(matriz => matriz * 2)
const matrizFlat = matriz.flat();
const dobro = matrizFlat.map(valor => valor * 2);

console.log(dobro)
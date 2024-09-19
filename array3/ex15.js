const matriz = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9], 
    [10, 11, 12]
];

const numerosPM3= matriz.flat().filter(numero=> numero%2 ===0).map(numero=> numero*3)
console.log(matriz);
console.log(numerosPM3);


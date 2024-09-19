const { log } = require("console");

const matriz = [
    [1, -2, 3, 4],
    [-5, 6, 7, -8],
    [9, -10, 11, 12]
  ];

  
  const somaP = matriz.flat().reduce((acc,num)=> num >0 ? acc+num : acc, 0)
console.log(somaP);

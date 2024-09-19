const vetorDeVetores = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
  ];
console.log(vetorDeVetores);

    const conc = vetorDeVetores.reduce((juntar,letra)=>juntar.concat(letra),[])
    console.log(conc);
    
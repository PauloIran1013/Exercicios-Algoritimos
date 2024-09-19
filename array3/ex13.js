const listaDeObjetos = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 20 }
  ];

 const listaS = listaDeObjetos.map(objeto => `Nome:${objeto.nome} Idade:${objeto.idade}`)
 console.log(listaS);
 
const pessoas = [
    { nome: 'Alice', idade: 30 },
    { nome: 'Bob', idade: 25 },
    { nome: 'Carlos', idade: 35 },
    { nome: 'Diana', idade: 28 }
  ];
 const pessoaV = pessoas.reduce((max,maior)=>{
    return maior.idade>max.idade ? maior : max;
 },pessoas[0]) 
 console.log(pessoaV);
 
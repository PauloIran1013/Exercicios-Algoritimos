const pessoas = [
    { nome: "João", idade: 25, profissao: "Desenvolvedor" },
    { nome: "Maria", idade: 30, profissao: "Médica" },
    { nome: "Pedro", idade: 28, profissao: "Engenheiro" },
    { nome: "Ana", idade: 22, profissao: "Estudante" },
    { nome: "Carlos", idade: 35, profissao: "Advogado" }
  ];

  const soma = pessoas.reduce((juntar,pessoas) => juntar + pessoas.idade, 0)
  const m = soma / pessoas.length

  console.log(m);

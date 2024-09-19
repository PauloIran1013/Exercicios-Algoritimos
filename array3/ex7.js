const alunos = [
    { nome: "Aluno 1", nota: 8 },
    { nome: "Aluno 2", nota: 6 },
    { nome: "Aluno 3", nota: 9 },
    { nome: "Aluno 4", nota: 5 },
    { nome: "Aluno 5", nota: 8 }
  ];

  const aprovado = alunos.filter(aluno => aluno.nota > 7)
  console.log(aprovado);
  
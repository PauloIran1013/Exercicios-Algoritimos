const produtos = [
    { nome: "Produto 1", preco: 100 },
    { nome: "Produto 2", preco: 200 },
    { nome: "Produto 3", preco: 300 },
    { nome: "Produto 4", preco: 400 },
    { nome: "Produto 5", preco: 500 }
  ];

  const total = produtos.reduce((juntar,produto)=> juntar + produto.preco, 0)
  console.log(total);
  
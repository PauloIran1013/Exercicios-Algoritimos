const produtos = [
    { nome: "Produto 1", preco: 100, categoria: "Eletrônicos" },
    { nome: "Produto 2", preco: 200, categoria: "Eletrônicos" },
    { nome: "Produto 3", preco: 300, categoria: "Moda" },
    { nome: "Produto 4", preco: 400, categoria: "Eletrônicos" },
    { nome: "Produto 5", preco: 500, categoria: "Moda" },
    { nome: "Produto 6", preco: 600, categoria: "Esportes" }
  ];

  const categorias = produtos.reduce((juntar,produto)=> { 
    juntar[produto.categoria]= (juntar[produto.categoria] || 0)+1;
    return juntar
  },{})

  console.log(categorias)
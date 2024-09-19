const produtos = [
    { nome: 'Camiseta', preco: 29.90, categoria: 'Vestuário' },
    { nome: 'Calça', preco: 89.90, categoria: 'Vestuário' },
    { nome: 'Tênis', preco: 199.90, categoria: 'Calçados' },
    { nome: 'Boné', preco: 39.90, categoria: 'Acessórios' },
    { nome: 'Relógio', preco: 149.90, categoria: 'Acessórios' }
  ];

  const categoria = 'Acessórios'
  const select = produtos.filter(produto => produto.categoria === categoria)
  console.log(select);
  
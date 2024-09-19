const produtos = [
    { nome: 'Camiseta', preco: 29.90 },
    { nome: 'Calça', preco: 89.90 },
    { nome: 'Tênis', preco: 199.90 },
    { nome: 'Boné', preco: 39.90 },
    { nome: 'Relógio', preco: 149.90 },
    { nome: 'Chinelo', preco: 19.90 }
  ];

  const prudutoA = produtos.reduce((acc,produto)=>{
    if (produto.preco>50) {
        acc.maior50.push(produto)
    }else{
        acc.menor.push(produto)
    }
    return acc
  },{maior50:[], menor:[]})

  console.log(prudutoA);
  
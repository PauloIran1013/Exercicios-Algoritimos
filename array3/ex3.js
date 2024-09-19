const produtos = [
    { nome: "Produto 1", preco: 100 },
    { nome: "Produto 2", preco: 200 },
    { nome: "Produto 3", preco: 300 },
    { nome: "Produto 4", preco: 400 },
    { nome: "Produto 5", preco: 500 }
  ];

let produtoD = produtos.map(produto =>{
    const desconto = produto.preco * 0.10
    const descoF = produto.preco - desconto 
    console.log({nome:produto.nome, preco:descoF});
})


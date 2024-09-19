const produtos =[
    { nome: "Produto A", preco: 50, categoria: "Eletrônicos" },
  { nome: "Produto B", preco: 120, categoria: "Eletrônicos" },
  { nome: "Produto C", preco: 80, categoria: "Roupas" },
  { nome: "Produto D", preco: 150, categoria: "Eletrônicos" },
  { nome: "Produto E", preco: 90, categoria: "Roupas" }
]

const caro = produtos.filter(produto => produto.preco > 100)
console.log(caro);

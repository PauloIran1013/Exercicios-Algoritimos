const nomes = ['Ana', 'João', 'Pedro'];

const obj = nomes.reduce((juntar,nome)=>{
    juntar[nome]= nome.length;
    return juntar
},{})
console.log(obj);

const prompt = require('prompt-sync')();

for (; ; ) {
   let valor = parseInt(prompt("Digite um valor inteiro (zero ou negativo para sair): "))
    
   if (valor <=0 ){
console.log("Valor encerrado");
break;
   }
   else if(valor  %2 === 0) {
console.log(`${valor} é PAR.`);
   }
   else{
    console.log(`${valor} é IMPAR.`);
   }
}
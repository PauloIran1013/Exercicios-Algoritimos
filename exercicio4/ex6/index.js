const opt =  document.querySelector("option")
const frm = document.querySelector("form")
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    calcularFrete() 
})
function calcularFrete() {
    const peso = document.getElementById("peso").value;
    const modalidade = document.getElementById("modalidade").value;

    let valorfrete = 0

    switch (modalidade) {
        case "padrao":
          if (peso <= 1) {
            valorfrete = 10;
          } else if (peso <= 5) {
            valorfrete = 20;
          } else {
            valorfrete = 30;
          }
          break;
        case "expresso":
          if (peso <= 1) {
            valorfrete = 20;
          } else if (peso <= 5) {
            valorfrete = 30;
          } else {
            valorfrete = 40;
          }
          break;
        case "internacional":
            if (peso <= 1) {
                valorfrete = 30;
              } else if (peso <= 5) {
                valorfrete = 40;
              } else {
                valorfrete = 50;
              }
          break;
      }
      
      document.getElementById("resultado").innerHTML = `O valor do frete é R$ ${valorfrete}.`;
    }
 
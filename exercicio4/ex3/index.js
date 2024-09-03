const frm = document.querySelector("form")

frm.addEventListener("submit",(e) => {
    e.preventDefault()
    verificarParImpar()
})

function verificarParImpar() {
    const numero = document.getElementById("numero").value;
    if (numero % 2 === 0) {
      document.getElementById("resultado").innerHTML = `O número ${numero} é par!`;
    } else {
      document.getElementById("resultado").innerHTML = `O número ${numero} é ímpar!`;
    } return false;
  }
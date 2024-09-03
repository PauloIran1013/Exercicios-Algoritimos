const frm = document.querySelector("form");
const nota1 = document.querySelector(".um");
const nota2 = document.querySelector(".dois");
const nota3 = document.querySelector(".tres");
const resp = document.querySelector("#final");

frm.addEventListener("submit",(e) => {
  e.preventDefault()
  vamosver()
})

function vamosver() {
  const nota1Value = parseFloat(nota1.value);
  const nota2Value = parseFloat(nota2.value);
  const nota3Value = parseFloat(nota3.value);
  const media = (nota1Value + nota2Value + nota3Value) / 3;

  if (media <= 4) {
    resp.innerHTML = "Você está reprovado!!"
  } else if (media < 7) {
    resp.innerHTML = "Você está em recuperação!!"
  } else {
    resp.innerHTML = "Você está aprovado!!"
  }
}

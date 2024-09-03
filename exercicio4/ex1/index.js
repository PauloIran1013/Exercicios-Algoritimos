const frm = document.querySelector("form")
const resp = document.querySelector("h2")
const inputNumero = document.querySelector("#Numero");

 frm.addEventListener("submit",(e) => {
        e.preventDefault()
        tempf()
 })



function tempf() {
    // console.log("Função tempf chamada");
    const c = parseFloat(inputNumero.value)
    // console.log("Função tempf chamada");
    const fa = (c*9/5)+32
    // console.log(`Valor em farenheit: ${fa}`);
    resp.innerHTML = `Sua temperatura em farenheit é ${fa}`;
    //     document.getElementById("resultado").innerHtml = `Sua temperatura em farenheit é ${f}`
 }

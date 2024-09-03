const frm = document.querySelector("form")
const resp = document.querySelector("h2")


frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    infrator()
})
function infrator() {
    const velocidade = document.getElementById("velocidade").value;
    if (velocidade<=80) {
        document.getElementById("resultado").innerHTML = `A velocidade ${velocidade} km/h está dentro do limite!`;
    }else if (velocidade>80 && velocidade<=100) {
        document.getElementById("resultado").innerHTML = `A velocidade ${velocidade} km/h está acima do limite, mas com multa leve!`;
    }else{
         document.getElementById("resultado").innerHTML = `A velocidade ${velocidade} km/h está acima do limite, com multa grave, se acalme amigão`
    }
}
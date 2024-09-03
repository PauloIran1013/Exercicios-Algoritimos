const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    classificacao()
})
function classificacao() {
    const nota = document.getElementById("nota").value;
    if (nota >= 9) {
        document.getElementById("resultado").innerHTML = `A nota ${nota} é conceito A!`
    }else if (nota >=7 && nota < 9) {
        document.getElementById("resultado").innerHTML = `A nota ${nota} é conceito B!`
    }else if (nota>=5 && nota<7) {
        document.getElementById("resultado").innerHTML = `A nota ${nota} é conceito C!`
    }else if (nota>=3 && nota<5) {
        document.getElementById("resultado").innerHTML = `A nota ${nota} é conceito D!`
    }else{
        document.getElementById("resultado").innerHTML = `A nota ${nota} é conceito E!`
    }
}
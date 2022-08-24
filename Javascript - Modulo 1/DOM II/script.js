// tagName, elementById, className, querySelector y querySelectorAll

const h1 = document.querySelector("h1")
const parrafos = document.querySelectorAll("p")

// for (let i = 0; i < parrafos.length; i++) {
//     console.log(parrafos[i])
// }

// parrafos[1].style.color = "green"
// parrafos[0].style.color = "green"
// parrafos[2].style.color = "green"

// for (const p of parrafos) { 
//     // console.log(p)
//     p.style.color = "green"
// }

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

// const $p = $(".parrafo")

// $p.style.color = "#000"

// const $parrafo = $("#caja p")

// Eventos
// addEventListener

// click

const clickFunction = () => console.log("Hice click")
const alertFunction = () => alert("Hice click")

const $btn = $("button")
const $caja = $("#caja")

// elemento.addEventListener(tipoDeEvento, callback)
// $btn.addEventListener("click", () => {
//     // bloque de codigo que quiero que se ejecute
//     clickFunction()
// })

// $btn.addEventListener("click", clickFunction)

$btn.addEventListener("click", () => {
    // console.log("SOY EL EVENTO")
    // alert("Holaaaa")
    // clickFunction()
    //$caja.style.backgroundColor = "green"
    //$caja.classList.toggle("displayNone")
    if ($caja.classList.contains("displayNone")) {
        $caja.classList.remove("displayNone")
    } else {
        $caja.classList.add("displayNone")
    }
})

// const tempetura = parseInt(prompt("Ingrese una temperatura:"))

// if (tempetura < 12) {
//     $caja.style.backgroundColor = "blue"
// } else if (tempetura <= 24) {
//     $caja.style.backgroundColor = "yellow"
// } else if (tempetura > 24) {
//     $caja.style.backgroundColor = "red"
// }

// $caja.addEventListener("click", clickFunction)

// mouseover y mouseout

$caja.addEventListener("mouseover", () => {
    console.log("SOY EL EVENTO DE ENTRADA")
    $caja.style.backgroundColor = "green"
})

$caja.addEventListener("mouseout", () => {
    console.log("SOY EL EVENTO DE SALIDA")
    $caja.style.backgroundColor = "blue"
})
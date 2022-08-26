// DOM - Document Object Model
// document
// nodos

// Accediendo a elementos del DOM

// getElementsByTagName
const h1 = document.getElementsByTagName("h1")

// getElementById
const btn = document.getElementById("btn-click")

// getElementsByClassName
const p = document.getElementsByClassName("parrafo")

// querySelector (diferencias)
const button = document.querySelector("#btn-click")
const parrafo = document.querySelector(".parrafo")
const titulo = document.querySelector("h1")

// querySelectorAll
const parrafos = document.querySelectorAll(".parrafo")

// Tricks
const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const element = $("#btn-click")

// Dando estilos desde javascript
// .style
// $("h1").style.color = "red"
// $("h1").style.fontSize = "16px"
// $("h1").style.fontFamily = "Arial"

// .classList (add, remove, toggle, contains)

// const misClasses = $(".parrafo").classList

// Quitar una clase
setTimeout(() => {
    $(".parrafo").classList.remove("naranja")
    $(".parrafo").classList.add("azul")
}, 3000)

//$(".parrafo").classList.remove("naranja")
// Agregando una clase
//$$(".parrafo")[1].classList.add("azul")

// .toggle() alterna entre classes evitando el remove y el add
const cambiar = () => {
    const caja = $(".caja")
    caja.classList.toggle("d-none")
}

// .contains() -> preguntar si existe la clase y devuelve un boolean
$(".caja").classList.contains("azul") // false
$(".caja").classList.contains("caja") // true

// Accediendo al texto de un elemento
// innerText
// $("h1").innerText = "Hola desde javascript!"
//$("#btn-click").innerText = "Hola nuevo texto"
// $("#btn-click").innerText += "!!!"

// innerHTML
//$("h1").innerHTML = "Hola desde javascript!"
//$(".caja").innerHTML = "<div class='caja--small'></div>"
// Con innertext NO puedo insertar nodos
//$(".caja").innerText = "<div class='caja--small'></div>"

// Accediendo a los atributos de un elemento
// Puedo acceder para leer o modificar los atributos de cualquier elemento
// $("input").type = "password"
// $("input").name
// $("input").id
// $("input").placeholder

// setAttribute
// $("button").setAttribute("class", "naranja")

// removeAttribute
// $(".caja").removeAttribute("class")

// const color = prompt("Ingrese un color:")
// $("h1").style.color = color
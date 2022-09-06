// console.log("HOLAAAAAA")

// const body = document.querySelector("body")
// console.log(nombre)

/* string, number, boolean, undefined, NaN, null */

// const, let y var

// let nombre = "Pilar"
// console.log(nombre)

// nombre = "Aldana"
// console.log(nombre)

// nombre = 20
// console.log(nombre)

// let numero = 60
// const edad = numero

// numero = "Hola"
// console.log(edad)

// edad = "Hola"
// console.log(edad)

// let condicion = true

// if (condicion) {
//     var nombre = "Pilar"
// }

// const miFuncion = () => {
//     var edad = 25
// }

// console.log(nombre)

// arrow function y function
// this

// console.log(sumar2(5, 10))

// function sumar(a, b) {
//     return a + b
// }

// funciones

// const sumar = (num1, num2) => {
//     const resultado = num1 + num2
//     return resultado
// }

// const suma = sumar(10, 50)

// console.log(suma)

// const ejemplo = (string, array, number, boolean) => {
//     console.log(string)
//     console.log(array)
//     console.log(number)
//     console.log(boolean)
// }

// const restar = (a, b) => {
//     return a - b
// }

// const sumar = (a, b) => a + b

// Metodos y funciones nativas

// let nombre = "Pilar"
// let saludo = "Buenos dias a todos!"

// console.log(nombre.length) // 5
// console.log(saludo.length) // 20
// console.log(nombre.toUpperCase()) // PILAR
// console.log(nombre.toLowerCase()) // pilar
// console.log(saludo.slice(7)) // dias a todos!
// console.log(saludo.slice(7, 11)) // dias
// indexOf, splice, includes, replace, toString, chatAt, parseInt, typeof

// operadores aritmeticos, operadores logicos
// -, +, /, *, %
// >, <, >=, <=, ===, !==, !

const num1 = 10
const num2 = 20
// const boolean = true

// const nombre = "Pilar"
// const edad = 25

// console.log("Hola mi nombre es " + nombre + " y tengo " + edad + " anios")

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)

// console.log(!(num1 === "10")) // false
// console.log(num1 > num2) // false
// console.log(num1 < num2) // true
// console.log(num1 >= num2) // false
// console.log(num1 <= num2) // true
// console.log(10 !== "10") // true
// console.log(!boolean) // false

// console.log(`Hola mi nombre es ${nombre} y tengo ${edad} anios`)

// condicionales
// operador ternario

// const condicion1 = true
// const condicion2 = false

// if (condicion1 || condicion2) {
//     // bloque de codigo que se ejecuta si se cumple la condicion
//     console.log("ENTRE EN EL IFFFFFF")
// } else {
//     // lo que pasaria si mi condicion no se cumple
//     console.log("ENTRE EN EL ELSEEEE")
// }

// if (condicion1 && condicion2) {
//     // bloque de codigo que se ejecuta si se cumple la condicion
//     console.log("ENTRE EN EL IFFFFFF")
// } else {
//     // lo que pasaria si mi condicion no se cumple
//     console.log("ENTRE EN EL ELSEEEE")
// }

// condicion ? "Se cumplio" : "Si NO se cumple"

// bucles
// for, while, foreach, do while, for in, for of

// for (let i = 0; i < 10; i++) {
//     // bloque de codigo
//     console.log("Iteracion: ", i)
// }

// let i = 0
// while (i < 10) {
//     // bloque de codigo
//     i++
// }

// array

const amigos = ["Pilar", "Aldana", "Josefina", "Natalia", "Florencia", "Lucia", "Micaela"]

// console.log(amigos[5]) // Lucia
// console.log(amigos.length) // 7

// for (let i = 0; i < amigos.length; i++) {
//     console.log(amigos[i])
// }

// for (const amigo of amigos) {
//     console.log(amigo)
// }

// for (const amigo in amigos) { 
//     console.log(amigo)
// }

// amigos.forEach((amigo, index) => {
//     console.log(amigo, index)
// })

// const usuarios = [
//     [0, "PilarFigueroa", 25, "test@test.com"],
//     [1, "AldanaSorni", 27, "asd@asd.com"]
// ]

// for (const usuario of usuarios) { 
//     // console.log(usuario)
//     for (const dato of usuario) {
//         console.log(dato)
//     }
// }

// DOM - Document Object Model

// const h1 = document.querySelector("h1")
// const h3 = document.querySelectorAll("h3")
// const caja = document.querySelector(".caja")
// const btn = document.querySelector("#btn")

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const h1 = $("h1")
const h3 = $$("h3")
const caja = $(".caja")
const btn = $("#btn")

// innerText, innerHTML, textContent

h1.innerText = "Hola desde javascript!"

// .style .classList

// caja.style.width = "200px"
// caja.style.height = "200px"
// caja.style.backgroundColor = "blue"
// caja.style.color = "#fff"
// caja.innerText = "Hola soy una caja!"
caja.innerHTML = "<p>Hola soy una caja!</p>"

// caja.classList.add("tamanio")
// caja.classList.add("blue")
// caja.classList.remove("caja")

// setAttribute, removeAttribute, getAttribute
// caja.setAttribute("id", "cajaId")
// caja.removeAttribute("id", "cajaId")
// caja.getAttribute("class")
// caja.setAttribute("data-categoria", 0)

// if ($("input").getAttribute("type") === "password") {
//     $("input").type = "text"
// } else {
//     $("input").type = "password"
// }

// click, change, mouseover, mouseout, keydown, keypress, keyup

const cambiarColor = () => {
    caja.classList.add("tamanio")
    caja.classList.add("blue")
}

// caja.addEventListener("mouseover", cambiarColor)
// btn.addEventListener("click", cambiarColor)
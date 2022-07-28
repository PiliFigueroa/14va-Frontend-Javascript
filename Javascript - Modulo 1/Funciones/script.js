// Variables - Almancena info

// let nombreDeLaVariable = "Soy una variable"
// console.log(nombreDeLaVariable)

// document.write(nombreDeLaVariable)

// nombreDeLaVariable = 20
// document.write("<br />")
// document.write(nombreDeLaVariable)

// typeof - Sirve para saber el tipo de dato de una variable

// parseInt() - Convertir al tipo de dato numero entero

// let number = "100"
// console.log(typeof number)

// number = parseInt(number)
// console.log(typeof number)

// let number = parseInt(prompt("Ingrese un numero"))
// console.log(number)

// alert() confirm()
// let aceptasLosTerminos = confirm("Aceptas los terminos y condiciones?")

// prompt("Funca?")

// let num1 = 10
// let num2 = 15
// let num3 = 20

// console.log(num1 + num2 + num3)
// console.log(num1 - num2 - num3)
// console.log((num1 + num2) * num3)

/* ------------------------------------------ */

// Funciones

// let number = 20

// function nombreDeLaFuncion() {
//     console.log("Soy una funcion!!!!")
// }
// llamado a la funcion para que se ejecute
// nombreDeLaFuncion()

// arrow function

const nombreDeLaFuncion = () => {
    // sentencias de codigo...
    console.log("Soy una funcion flecha!!!!")
}

//nombreDeLaFuncion()

/*
 - una funcion tiene que hacer una sola tarea y hacerla bien
 - scope
 - una funcion siempre tiene que retornar algo
 - puede recibir uno o mas parametros
*/

// let resultado = 0

// const sumar = () => {
//     resultado = 10 + 10
// }

// console.log("antes de mi funcion:", resultado)
// sumar()
// console.log("despues:", resultado)

// const sumar = () => {
//     let resultado = 10 + 10
//     return resultado
// }

// const sumar = () => {
//     return 10 + 10
// }

//console.log(sumar())

// const mostrarMensaje = (texto) => {
//     console.log(texto)
// }

// mostrarMensaje(20)
// mostrarMensaje("Segunda")
// mostrarMensaje("Tercera")
// mostrarMensaje("Cuarta")

// let numero = parseInt(prompt("Ingrese el primer valor"))
// let numero2 = parseInt(prompt("Ingrese el segundo valor"))

const sumar = (a, b) => {
    return a + b
}

// console.log(sumar(5, 3))
// console.log(sumar(4, 5))

const restar = (a, b) => {
    return a - b
}

// console.log(restar(10, 5))
// console.log(restar(5, 10))

const calculoComplicado = (a, b) => {
    let suma = sumar(a, b)
    let resta = restar(a, b)
    return resta * suma
}
    
// console.log(sumar(numero, numero2))
// console.log(restar(numero, numero2))
// console.log(calculoComplicado(numero, numero2))

// ### Ejercicio 0
// - Crear una funcion que reciba como parametro un nombre y muestre por consola un saludo a esa persona.

// "Hola, Pepito"

// let alumna = prompt("Ingrese su nombre:")

// const saludar = (nombre) => {
//     return `Hola ${nombre}`
// }

// console.log(saludar(alumna))
// console.log(saludar("Pilar"))
// console.log(saludar("Ivana"))
// console.log(saludar("Carla"))

// Crear un programa que calcule el IVA de un precio dado

//let numero = parseInt(prompt("Ingrese un precio:"))

// const calcularIVA = (precio) => {
//     let resultado = precio * 0.21
//     return resultado
// }

// const calcularIVA = (precio) => {
//     return precio * 0.21
// }

// calcularIVA(100)
// calcularIVA(10056)
// calcularIVA(500)
// calcularIVA(numero)

// Crear un programa que calcule el area de un rectangulo
// base * altura

// const calcularArea = (base, altura) => {
//     return base * altura
// }

// console.log(calcularArea(25, 10))
// console.log(calcularArea("Cele", undefined))
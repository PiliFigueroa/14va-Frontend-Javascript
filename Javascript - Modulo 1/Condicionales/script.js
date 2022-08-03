// Condicionales
// if else - switch

/*
Condicion... si pasa esto entonces... y sino...
*/

// if (condicion) {
//     // ejecuto esto
// }

// Existen ciertos tipos de datos que equivalen a true y otros a false

// let number = 10
// let name = "Pilar"

// if (number) { // si pasa esto
//     console.log("Di true en number") // ejecuto esto
// }

// if (name) { // si pasa esto
//     console.log("Di true en string") // ejecuto esto
// }

// number = 0
// if (number) {
//     console.log("Esto da false")
// }

// number = 1
// if (number) { // si esto es 0 devuelve false
//     console.log("Esto da true") // entonces esto no se ejecuta
// }

// number = -1
// if (number) { // si esto es 0 devuelve false
//     console.log("Esto da true") // entonces esto no se ejecuta
// }

// true = 1
// false = 0
// console.log(true + 1)

let verdadero = true
let falso = false

// if (verdadero) {
//     console.log("Esto da true")
// }

// if (falso) {
//     console.log("Esto da false")
// }

// let text = "Esto es un string"
// if (text) {
//     console.log("Esto da true en string con valores")
// }

// text = ""
// // console.log(typeof text)
// if (text) {
//     console.log("Esto da false en string vacio")
// }

let indefinido = undefined // equivale a false
let nulo = null // equivale a false

// if (indefinido) {
//     console.log("Esto da false entonces no me ejecuto")
// }

// if (nulo) {
//     console.log("Esto da false entonces no me ejecuto")
// }

/*

- Numbers: Si tengo cualquier numero que no sea 0, mi condicion se cumple. Porque false = 0 y true = 1.
- Strings: Si tengo un string vacio devuelve false. Pero si tengo cualquier otro dato entre comillas si da true.
- True y false.
- Undefined: devuelve false
- Null: devuelve false

*/

// Operadores de comparacion

/*
 == igualdad
 === igualdad estricta
 != distinto de
 !== distinto estricto
 ! negacion
 < menor que
 > mayor que
 <= menor o igual
 >= mayor o igual
*/

// 5 > 1

// let numero1 = 10
// let numero2 = 20
// let numeroString = "10"

// if (numero1 == numero2) {
//     console.log("Me ejecuto?")
// }

// console.log(numero1 == numero2) // false
// console.log(numero1 == numeroString) // true
// console.log(numero1 === numeroString) // false
// console.log(numero1 != numero2) // true
// console.log(numero1 != numeroString) // false
// console.log(numero1 !== numeroString) // true

// console.log("Numero 10:", !numero1) // false
// console.log("String 10:", !numeroString) // false
// console.log("String vacio:", !"") // true
// console.log("Undefined:", !indefinido) // true
// console.log("Null:", !nulo) // true
// console.log("True:", !true) // false
// console.log("False:", !false) // true
// console.log("0:", !0) // true
// console.log("1:", !1) // false

// console.log(numero1 < numero2) // true
// console.log(numero1 > numero2) // false
// console.log(numero1 >= numeroString) // true
// console.log(numero1 <= numeroString) // true

// let numero1 = 10
// let numero2 = 20
// let numeroString = "10"

// if (numero1 > numero2) {
//     console.log("No entre en el if")
// }

// if (numero1 < numero2) {
//     console.log("Entre en el if")
// }

// if (!numero1) {
//     console.log("No entre en el if")
// }

// if (numero1 === numeroString) {
//     console.log("No entre en el if")
// }

// if (condicion) {
//     // si doy true ejecuto esto
// } else {
//     // si mi condicion da false ejecuto esto otro
// }

// if (condicion) {
//     // si se cumple mi condicion ejecuto esto
// } else if (condicion2) {
//     // o si se cumple condicion2 ejecuto esto otro
// } else {
//     // si no se cumple ninguna ejecuto esto otro
// }

// let numero1 = parseInt(prompt("Ingrese su edad:"))
// let mayorDeEdad = 18

// // console.log(18 >= 18)
// if (numero1 >= mayorDeEdad) {
//     console.log("Eres mayor de edad")
// } else {
//     console.log("No podes ver este contenido")
// }

// case sensitive
// let usuarioSaluda = prompt("Saludame!!!")

// if (usuarioSaluda.toLowerCase() === "saludar") {
//     console.log("El usuario saludo bien")
// } else {
//     console.log("El usuario NO saludo bien")
// }

/* 
 - Que tengo? Y que necesito?
*/

// let password = prompt("Ingrese su contrasena")

// const validatePassword = (password) => { 
//     if (password.length >= 8) {
//         return true
//     } else {
//         password = prompt("Ingrese su contrasena de nuevo")
//         validatePassword(password)
//     }
// }

// validatePassword(password)

// const sumar = (a, b) => {
//     let resultado = a + b
// }

// const sumar2 = (a, b) => {
//     return a + b
// }

// let funcion1 = sumar(5, 5)
// let funcion2 = sumar2(5, 5)

// console.log(funcion1)
// console.log(funcion2)

// Ifs dentro de funciones - que diverito wiiii

// const sumaEsMayorQueCero = (a, b) => {
//     let resultado = a + b
//     if (resultado > 0) {
//        return true
//     } else {
//        return false
//     }
// }

// const sumaEsMayorQueCero2 = (a, b) => {
//     let resultado = a + b
//     if (resultado > 0) {
//        return true
//     }
//     return false
// }

// const esParOImpar = (number) => {
//     if (number === 0) {
//         return "0 no es ni par ni impar"
//     }
//     if (number % 2 === 0) {
//         return "Es par"
//     }
//     return "Es impar"
// }

// let number = 2

// if (number === 0) {
//     console.log("0 no es ni par ni impar")
// }
// if (number % 2 === 0) {
//     console.log("Es par")
// } else {
//     console.log("Es impar")
// }

// console.log(esParOImpar(0))
// console.log(esParOImpar(4))
// console.log(esParOImpar(-1))

// console.log(sumaEsMayorQueCero2(5, 10))
// console.log(sumaEsMayorQueCero2(5, -5))
// console.log(sumaEsMayorQueCero2(-5, -10))

// let user = prompt("Quien sos?")

// const saludarSiEsPedro = (nombre) => {
//     // console.log(nombre)
//     let mensaje = ""
//     if (nombre.toLowerCase() == "pedro") {
//         mensaje = "Hola Pedro!!"
//     } else {
//         mensaje = "No sos Pedro"
//     }
//     return mensaje
// }

// console.log(saludarSiEsPedro(user))

/*
### `esPositivoONegativo(numero)`

Crear una función `esPositivoONegativo` que acepte como argumento un `numero` y devuelva el string `positivo` si el `numero` es positivo, o el string `negativo` si el `numero` es negativo
*/

// const esPositivoONegativo = (numero) => {
//     if (numero > 0) {
//         return "Es positivo"
//     } else if (numero === 0) {
//         return "Es nulo"
//     } else {
//         return "Es negativo"
//     }
// }

// console.log("Si paso un numero mayor a 0:", esPositivoONegativo(10))
// console.log("Si paso el 0:", esPositivoONegativo(0))
// console.log("Si paso un menor que 0:", esPositivoONegativo(-5))
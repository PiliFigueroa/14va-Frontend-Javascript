/*
esConsonante(letra)
Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

esVocal('a') // false
esVocal('n') // true
*/

// const esVocal = (letra) => { 
//     if (letra.toLowerCase() === "a" || letra.toLowerCase() === "e" || letra.toLowerCase() === "i" || letra.toLowerCase() === "o" || letra.toLowerCase() === "u") {
//         return true
//     } else 
//         return false   
// }

// console.log(esConsonante("a"))
// console.log(esConsonante("A"))
// console.log(esConsonante("p"))

// const esVocal = (letra) => {
//     if (letra == "a") {
//         return true
//     }
//     if (letra == "e") {
//         return true
//     }
//     if (letra == "i") {
//         return true
//     }
//     if (letra == "o") {
//         return true
//     }
//     if (letra == "u") {
//         return true
//     }
//     return false 
// }

/*
esHoraValida(hora)
Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no

esHoraValida('12:23') // true
esHoraValida('12:65') // false
esHoraValida('28:05') // false
esHoraValida('00:00') // true
*/

// charAt()
// indexOf()

// let nombre = "Pilar Figueroa"
// console.log(nombre.charAt(6))
//console.log(nombre.indexOf("i", 6))

// const esHoraValida = (hora) => {
//     let HH = parseInt(hora.slice(0,2))
//     let mm = parseInt(hora.slice(3,5))
//     return (HH >= 0 && HH < 24) && (mm >= 0 && mm < 60)
// } 

// const esHoraValida2 = (hora) => {
//     return (hora.charAt(0) == 2 && hora.charAt(1) <= 3) && (hora.charAt(3) <= 5 || hora.charAt(0) <= 1) && (hora.charAt(3) <= 5);
// }

// esHoraValida('12:23') // true
// esHoraValida('12:65') // false
// esHoraValida('28:05') // false
// esHoraValida('00:00') // true

/* && y || */

// && => todas mis condiciones se cumplen es decir son verdaderas
// || => es suficiente que al menos UNA condiciones sea verdadera para retornar true

// let edad = 18
// let sabeManejar = true

// //     false    y      true
// if (edad >= 18 && sabeManejar) {
//     console.log("Podes trabajar de Uber")
// } else {
//     console.log("No podes trabajar de Uber")
// }

// const trabajarDeUber = (edad, sabeManejar) => {
//     if (edad >= 18 && sabeManejar) {
//         console.log("Podes trabajar de Uber")
//     } else {
//         console.log("No podes trabajar de Uber")
//     }  
// }

// trabajarDeUber(18, true)
// trabajarDeUber(18, false)

// let estaLloviendo = false
// let vienenMisAmigos = false

// //                false                 o         false
// if ((estaLloviendo && vienenMisAmigos) || (estaLloviendo && !vienenMisAmigos)) {
//     console.log("jugamos a las cartas")
// } else {
//     console.log("juego solo a la pelota")
// }

// let condicion = false
// let condicion2 = false

// if (condicion) {
//     // codigo
//     if (condicion2) {
//         // codigo
//     } else {
//         // mas codigo
//     }
// } else {
//     // codigo
// }

// Diferencias entre const y let

// let nombre = "Pilar"
// nombre = "Ivana"

// const nombre = "Pilar"

// let contador = 0
// funcion... contador = contador + 1

// const numero = parseInt(prompt("Ingrese un numero:"))
// console.log(numero)

// const miFuncion = () => {

// }

// let edad
// const edad
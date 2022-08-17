// Bucles (loops)

const amigos = ["Pilar", "Ivana", "Jose", "Pablo", "Oscar"]
const numeros = [5, 10, 60, 27, 100]

// const number = 0
// number = 5
// console.log(number)

// amigos.push("Celeste")
// console.log(amigos)

// For

// iteracion -> cada vuelta del bucle
//    indice  ;    condicion     ; incremento indice
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (let i = 0; i < amigos.length; i++) {
//    console.log(amigos[i])
// }

// For of
// Declarando "amigo" y decimos mostrame cada amigo EN amigos
// Muestra el valor del elemento que recorro

// for (const amigo of amigos) {
//     console.log(amigo)
// }

// for (const numero of numeros) {
//     console.log(numero)
// }

// For in
// Muestra el indice de cada elemento
// for (const amigo in amigos) { 
//     console.log(amigo)
// }

// While

// let i = 0
// while (i < 10) {
//     console.log("Hola")
//     i++
// }

// Do while

// let x = 0
// do {
//     console.log("Chau")
//     x++
// } while (x < 10)

// const amigos = []

// console.log(amigos)

// for (let i = 0; i < 5; i++) {
//     const nombre = prompt("Ingrese un nombre:")
//     amigos.push(nombre)
// }

// console.log(amigos)
// condicion ? pasa esto : pasa esto otro
// for (const numero of numeros) {
//     // if (numero > 50) {
//     //     console.log(numero)
//     // }
//     // if (numero > 50) console.log(numero)
//     numero > 50 && console.log(numero)
// }

// for (let i = 0; i < numeros.length; i++) {
//     numeros[i] > 50 && console.log(numeros[i])
// }

// const familiares = []
// for (const familiar of familiares) {
//     familiar = prompt("Ingrese un nombre:")
//     familiares.push(familiar)
// }

// const sumar = (a, b) => a + b

// for (const numero of numeros) {
//     console.log(sumar(numero, 10))
// }

// Esto no funciona
// console.log(Math.max(numeros))

const array = [
    ["Pilar", "Ivana", "Jose", "Pablo"],
    [5, 10, 60, 27, 100]
]

// console.log(array[1][1])

// for (const arr of array) {
//     // console.log(arr)
//     for (const element of arr) {
//         console.log(element)
//     }
// }

// // for (const nombre of array[0]) {}

// for (const i in array) {
//     // console.log(i)
//     for (const element of array[i]) {
//         console.log(element)
//     }
// }

// for (const amigo of amigos) {
//     const amigoParseado = amigo.toLowerCase()
//     if (amigoParseado.includes("o")) {
//         console.log(amigoParseado)
//     }
// }

// const test = (arr) => {
//     console.log(arr)
// }

// test(amigos)
// test(numeros)
// test(array)

// const iterar = (array) => {
//     for (const element of array) {
//         console.log(element)
//     }
// }

// for (const numero of numeros) {
//     if (numero > 50) {
//         const index = numeros.indexOf(numero)
//         numeros.splice(index, 1)
//     }
// }

// for (const index in numeros) {
//     if (numeros[index] > 50) {
//         numeros.splice(index, 1)
//     }
// }

// console.log(numeros)

// const search = (letra, array) => {
//     return array.includes(letra)
// }

// console.log(search("a", ["b", "e", "f", "a"]))
// console.log(search("a", ["b", "e", "f",]))

// const searchIndex = (letra, array) => {
//     for (const index in array) {
//         if (array[index] === letra) {
//             return index
//         }
//     }
// }

// const searchIndex2 = (letra, array) => {
//     return array.indexOf(letra)  
// }

// console.log(searchIndex("a", ["b", "e", "f", "a"])) // 3
// console.log(searchIndex("e", ["b", "e", "f",])) // 1

// for de decremento

// for (let i = 10; i > 0; i--) {
//     console.log(i)
// }

// forEach -> abuelito del for of
// recibe el valor del elemento y los demas son parametros opcionales

// amigos.forEach((amigo, index, array) => {
//     console.log("valor del elemento:", amigo)
//     console.log("indice del elemento:", index)
//     console.log("el array que recorro:", array)
// })

// Callback
// Es una funcion pasada por parametro a otra funcion

// const alerta = () => alert("Pilar")
//alerta("Pilar")

// setTimeout -> ejecutar cierto codigo a partir de cierto tiempo
//          callback, tiempo

// setTimeout(alerta, 3000)
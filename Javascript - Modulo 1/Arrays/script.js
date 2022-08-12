// Datos primitivos

const string = "Pilar"
const number = 10
const verdadero = true
const archivo = "index.html"

// Arrays

const arreglo = ["Pilar", "Ivana", "50", 25, true, null, undefined]

// const amigos = ["Pilar", "Ivana", "Jose", "Pablo"]
const numeros = [5, 10, 60, 27, 100]

// posicion = indice = index

// console.log(arreglo[0])
// console.log(arreglo[1])
// console.log(arreglo[2])
// console.log(arreglo[3])
// console.log(arreglo[4])
// console.log(arreglo[5])
// console.log(arreglo[6])

// Metodos de arrays

let amigos = ["Pilar", "Ivana", "Jose", "Pablo"]
let amigos2 = ["Sol", "Victoria", "Lucas", "Marcos"]
let amigos3 = ["Sol", "Victoria", "Lucas", "Marcos"]

// console.log(amigos)
// amigos[10] = "Julieta"
// console.log(amigos)

// .length
// Devuelve la cantidad de elementos del array, es decir, la longitud del array

// console.log(amigos.length)
// amigos = []
// console.log(amigos.length)

// .pop()
// Elimina el ultimo elemento del array

// console.log("antes del pop: ", amigos)
// amigos.pop()
// amigos.pop()
// amigos.pop()
// amigos.pop()
// console.log("despues del pop: ", amigos)

// .concat()
// Me permite concatenar dos arrays pero los debo guardar en una variable si los quiero utilizar

// const amigosJuntitos = amigos.concat(amigos2)
// const amigosJuntitos2 = amigos2.concat(amigos)
// console.log(amigosJuntitos.concat(amigos3))

// .sort()
// Si son strings los ordena alfabeticamente
// Para numeros no nos sirve

// const amigosOrdenados = amigos.sort()
// console.log(amigosOrdenados)
// const numerosOrdenados = numeros.sort()
// console.log(numerosOrdenados)

// .slice()
// Funciona como en los strings, corta a partir del indice

// const nuevosAmigos = amigos.slice(1)
// const nuevosAmigos = amigos.slice(1, 3)
// console.log(nuevosAmigos)

// .splice()
//  Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
console.log("antes: ", amigos)
amigos.splice(1, 2)
console.log("despues: ", amigos)

// .join()
// Concatenar nuestros elementos del array en base al parametro que reciba

// console.log(amigos.join(", "))
// console.log(amigos.join(" "))
// console.log(amigos.join("-"))
// console.log(amigos.join("_"))
// console.log(amigos.join(" y "))

// .shift()
// Elimina el primer elemento del array y lo retorna

// console.log("antes: ", amigos)
// amigos.shift()
// console.log("despues: ", amigos)

// .unshift()
// Agrega uno o mas elementos al inicio del array pero devuelve la longitud

// console.log(amigos.length)
// console.log(amigos.unshift("Alex", "Liliana"))

// .push()
// Nos permite agregar elementos al array

// console.log("antes: ", amigos)
// amigos.push("Marcos", 5)
// console.log("despues: ", amigos)

// Array multidimensional
// console.log("antes: ", amigos)
// const otrosAmigos = ["Marcos", "Leonel"]
// amigos.push(otrosAmigos)
// console.log("despues: ", amigos)
// console.log(amigos[4][0])
// console.log(amigos[4][1])

const ingresarNombre = prompt("Ingrese un nombre de un amigo:")
amigos.push(ingresarNombre)
console.log(amigos)
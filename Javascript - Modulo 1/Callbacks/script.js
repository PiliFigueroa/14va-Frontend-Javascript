// Callback
// Es pasar una funcion como parametro de otra funcion

const sumar = (a, b) => a + b
const restar = (a, b) => a - b
const multiplicar = (a, b) => a * b
const dividir = (a, b) => a / b

const sumaComplicada = (a, b, callback) => a + b + callback

// console.log(sumaComplicada(10, 5, sumar(5, 20)))
// console.log(sumaComplicada(10, 5, restar(10, 50)))
// console.log(sumaComplicada(10, 5, multiplicar(15, 5)))
// console.log(sumaComplicada(10, 5, dividir(10, 5)))

// Crear una funcion que reciba dos valores y un operador
// y acorde al operador realice un calculo diferente

const calcular = (a, b, operador) => {
    if (operador === "sumar") {
        return a + b
    }
    if (operador === "restar") {
        return a - b
    }
    if (operador === "multiplicar") {
        return a * b
    }
    if (operador === "dividir") {
        return a / b
    }
}

// console.log(calcular(5, 10, "sumar"))
// console.log(calcular(5, 10, "restar"))
// console.log(calcular(5, 10, "multiplicar"))
// console.log(calcular(5, 10, "dividir"))

// setTimeout
// Recibe un callback y un tiempo y ejecuta ese callback pasado ese tiempo que recibe

// setTimeout(callback, tiempo)
// setTimeout(() => {
//     console.log(calcular(5, 10, "sumar"))
//     console.log(calcular(5, 10, "restar"))
//     console.log(calcular(5, 10, "multiplicar"))
//     console.log(calcular(5, 10, "dividir"))
// }, 5000)

// setInterval
// Recibe un callback y un tiempo y ejecuta ese callback cada vez que se cumple ese tiempo

// setInterval(callback, tiempo)
// let contador = 0
// setInterval(() => {
//     // codigo
//     contador = contador + 1
//     console.log("Me ejecute")
//     console.log(contador)
// }, 1000)

// const intervalo = () => {
//     let contador = 0
//     setInterval(() => {
//         // codigo
//         contador = contador + 1
//         console.log("Me ejecute")
//         console.log(contador)
//     }, 1000)
// }

// Queda pendiente ver como frenar un intervalo

// intervalo()
// setTimeout(() => {
//     clearInterval(intervalo)
//     console.log("soy el timeout")
// }, 5000)

// clearInterval
// const frenarIntervalo = () => {
//     clearInterval(intervalo)
//     console.log("Hice click!")
// }

// frenarIntervalo()
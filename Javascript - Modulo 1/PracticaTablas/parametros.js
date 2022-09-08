// Parametros por default
const sumar = (a, b, c = 0) => {
    return a + b + c
}

// console.log(sumar(5, 10))
// console.log(sumar(5, 10, 20))

// Autollamadas -> La funcion se va a ejecutar en el momento en el que se define

// (function(){
//     console.log("ME EJECUTEEEE")
// })()
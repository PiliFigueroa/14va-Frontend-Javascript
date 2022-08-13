const capitalLetter = (string) => { 
    let letra = string.charAt(0)
    return letra.toUpperCase()
}
// console.log(capitalLetter('josefina'))
// console.log(capitalLetter('verónica'))
// console.log(capitalLetter('natalia'))


// const lastLetter = (string) => {
//     let letra = string.slice(-1)
//     return letra 
// }
// console.log(lastLetter('Josefina'))


const sumar = (number1, number2, number3) => {
    if (!number3) return number1 + number2
    return number1 + number2 + number3
}
console.log(sumar(2,3))
console.log(sumar(1,2,3))
console.log(sumar(2))


// const sumar2 = (a, b, c) => {
//     if (sumar2 == a, b, c) {
//     return a + b + c
//         } else if (sumar2 == a, b) {
//     return a + b }
// }
// console.log(sumar2(4,5))
// console.log(sumar2(3,4,7))
// console.log(sumar2(2))


const raizCuadrada = (number) => {
    return Math.sqrt(number)
}
console.log(raizCuadrada(144))


const alCuadrado = (number) => {
    return Math.pow(number, 2)   // (base, exponente)
}
console.log(alCuadrado(4))


// const gritar = (string) => {
//     return `¡${string}!`
// }
// console.log(gritar('holaaaaa'))


// convertirHorasEnSegundos = (hour) =>  {
//     return hour * 3600
// }
// console.log(convertirHorasEnSegundos(5))


// obtenerDatosDeCiudad = (nombre, poblacion, pais) => {
//     return `La ciudad de ${nombre} tiene una población de ${poblacion} y está ubicada en ${pais}`
// }
// console.log(obtenerDatosDeCiudad('Buenos AIres', '3 millones', 'Argentina'))


// calcularFPS = (cuadros, minutos) => {
//     return cuadros * 60 * minutos
// }
// console.log(calcularFPS(10,2))



const calcularPorcentaje = (percentage, number) => {
    return (percentage * number) / 100
}
const sumarPorcentaje = (number, porcentaje) => {
    return number + porcentaje
}
console.log(sumarPorcentaje(200, calcularPorcentaje(100,50)))



// const generarEmail = (user, domain) => {
//     return `${user}@${domain}.com`
// }
// console.log(generarEmail('josefina', 'gmail'))


const esStringMasLargo = (string1, string2) => {
    if (string1.length === string2.length) return "..."
    return Math.max(string1.length, string2.length)
}
console.log(esStringMasLargo('Josefina', 'Nabucodonososofrjagwa'))


const aceptaDeposito = (monto) => {
    return monto % 10 === 0
}

console.log(aceptaDeposito(245))
console.log(aceptaDeposito(83))


const esUltimoCaracter = (string, char) => {
    return string.slice(-1) === char ? true : false
}

console.log(esUltimoCaracter('Josefina', 'a'))


// const esValida = (string) => {
//     return string.length >= 8 ? true : false
// }
// console.log(esValida('Josefi'));
// console.log(esValida('sajgggeqagaq'))


// const sonIguales = (a, b) => {
//     return a.toLowerCase() === b.toLowerCase() ? true : false
// }
// console.log(sonIguales('Javascript', 'JAVASCRIPT'))
// console.log(sonIguales('greote', 'fkafa'))


// const capitalizar = (str) => {
//     return str.replace(str.charAt(0), str.charAt(0).toUpperCase())
// }
// console.log(capitalizar('josefina'))


const obtenerDuracionEnSegundos = (duracion) => {
    let segundos1 = parseInt((duracion.slice(0,2)) * 60)
    let total = segundos1 + parseInt(duracion.slice(3,5))
    return total
}
console.log(obtenerDuracionEnSegundos('00:35'))
console.log(obtenerDuracionEnSegundos('01:35'))
console.log(obtenerDuracionEnSegundos('10:20'))


// const esSaludoValido = (saludo) => {
//    return saludo.toLowerCase().includes('hola') ? true : false
// }
// console.log(esSaludoValido('tu vieja en tanga'))
// console.log(esSaludoValido('te cabe el hola'))


// const sonIdenticas = (pass1, pass2) => {
//     return pass1.toLowerCase() === pass2.toLowerCase() ? true : false
// }
// console.log(sonIdenticas('password', 'passWORD'))
// console.log(sonIdenticas('password', 'passwordo'))

const esFraccionMayorAUno = (fraccion) => {
    return (parseInt(fraccion.charAt(0)) / 
    parseInt(fraccion.charAt(2))) > 1 ? true : false
}

// console.log(esFraccionMayorAUno('3/8'))
// console.log(esFraccionMayorAUno('4/2'))
// console.log(esFraccionMayorAUno('1/10'))
// console.log(esFraccionMayorAUno('6/3'))

// const esPuenteSeguro = (puente) => {
//     return puente.includes(' ') ? false : true
// }
// console.log(esPuenteSeguro('### #####'))
// console.log(esPuenteSeguro('####'))
// console.log(esPuenteSeguro('##### ##'))
// console.log(esPuenteSeguro('##### ######### ### #'))


const obtenerExtension = (file) => {
    let extension = file.split('.', 2)
    let result = extension.pop()
    return result 
}
console.log(obtenerExtension('chicago.jpg'))
console.log(obtenerExtension('tuvieja.html'))
console.log(obtenerExtension('fsgag.sass'))


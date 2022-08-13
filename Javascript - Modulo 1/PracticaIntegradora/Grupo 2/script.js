//GRUPO: SOL LANZA, MACARENA, MARIA ISABEL, YANINA


// const capitalLetter = (string) =>{
//     return string.charAt(0)
// }
// console.log(capitalLetter ("murcielago"))


// const lastLetter = (string) => {
//     return string.charAt(string.length -1)
// }
// console.log (lastLetter("reloj"))
// console.log (lastLetter("arbol"))
// console.log (lastLetter("cerveza"))


const sumar = (a, b, c) => {
    if (a, b, c) { 
        return a + b + c     
    } else {
        return a + b 
    }
}
console.log (sumar(2,3))


const raizCuadrada = (numero)=>{
    return Math.sqrt(numero)
}
console.log(raizCuadrada(16))


const alCuadrado = (numero) =>{
    return Math.pow(numero, 2)
}
console.log(alCuadrado(7))


// const gritar = (grito) =>{
//     return `! ${grito} !`
// }
// console.log(gritar("holaaa"))


// const convertirHorasEnSegundos = (horas) => {
//     return horas*60*60
// }
// console.log(convertirHorasEnSegundos(1))


// const obtenerDatosDeCiudad = (nombre, poblacion, pais) => {
//     return `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`
// }
// console.log (obtenerDatosDeCiudad("Buenos Aires", 458954158, "Argentina"))


// const calcularFPS = (cuadrosPorSegundos, minutos) => {
//     return cuadrosPorSegundos*minutos*60
// }
// console.log(calcularFPS(1, 1))
// console.log(calcularFPS(10, 2))


const sumarPorcentaje = (number, porcentaje) => {
    let resultado = (number*porcentaje)/100
    return resultado + number
}
console.log(sumarPorcentaje(100, 15))


// const restarPorcentaje = (numero, porcentaje) => {
//     let resultado = (numero*porcentaje)/100
//     return numero - resultado
// }
// console.log(restarPorcentaje(100, 15))


// const generarEmail = (usuario, dominio) => {
//     return `${usuario}@${dominio}.com`
// }
// console.log(generarEmail("sol", "gmail"))


const esStringMasLargo = (string, string2) => {
    if (string.length > string2.length) {
        return string.length
    } else {
        return string2.length
    }
}
console.log(esStringMasLargo("Esta soleado","No llovio en toda la semana"))


const aceptaDeposito = (monto) =>{
    if(monto % 10 === 0) {
        return true
    } else {
        return false
    }
}
console.log(aceptaDeposito(100))
console.log(aceptaDeposito(105))





const esUltimoCaracter = (palabra, caracter) => {
    return palabra.charAt(palabra.length -1) == caracter
}
console.log(esUltimoCaracter('sol', 'l'))
console.log(esUltimoCaracter('sol', 'o'))


// const sonIguales = (a, b) => {
//     if (a.toLowerCase() == b.toLowerCase()) {return true} else {return false}
// }
// console.log(sonIguales('sol', 'niño'))
// console.log(sonIguales('sol', 'SOL'))


// const capitalizar = (string) => {
//     return string[0].toUpperCase() + string.substring(1);
// }
// console.log(capitalizar("sol"))
// console.log(capitalizar("cerveza"))


const obtenerDuracionEnSegundos = (duracion) =>{
    const minutos = Number(duracion.slice(0, 2)) * 60;
    const segundos = Number(duracion.slice(3, 5))
    const segundosTotales = minutos + segundos
    return segundosTotales
}
console.log(obtenerDuracionEnSegundos("00:33"))

// OTRA FORMA

// const obtenerDuracionEnSegundos = (hora) => {
//     return parseInt(hora.slice(0,2)) * 60  + parseInt(hora.slice(3)) 
// }

// console.log(obtenerDuracionEnSegundos("00:33"))
// console.log(obtenerDuracionEnSegundos("01:05"))
// console.log(obtenerDuracionEnSegundos("10:42"))
// console.log(obtenerDuracionEnSegundos("00:33"))


// const esSaludoValido = (str) => {
//     return str.includes("Hola")
// }
// console.log(esSaludoValido("Hola alumna!"))
// console.log(esSaludoValido("Que onda perri"))


// const sonIdenticas = (contraseniaUno, contraseniaDos) =>{
//     if (contraseniaUno === contraseniaDos){
//     return true}
//     else{
//         return false
//     }
// }
// console.log(sonIdenticas('contraseniaMuySegura', 'contraseniaMuySegura')) 
// console.log(sonIdenticas('abc123', 'abc123456')) 
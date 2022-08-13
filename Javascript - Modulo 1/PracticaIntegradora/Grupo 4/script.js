/** EJERCICIOS PRACTICA JAVASCRIPT  */
/**Grupo sala 4 */
/*** INTEGRANTES: 
 * Rocio Quiroz 
 * Karin
 * Andrea Mozzone
 */

// Ejercicio 1

// - Crear una funcion que reciba por parametro un string y devuelva solo la primer letra de dicho string.
// ```javascript
// capitalLetter("Reloj") // output: "R"
// capitalLetter("Murcielago") // output: "M"

const capitalLetter = (texto) =>{
   return texto.charAt(0)
}

// console.log(capitalLetter("Reloj"))
// console.log(capitalLetter("Murcielago"))


/*******************************************************************************/

// Ejercicio 2

// - Crear una funcion que reciba por parametro un string y devuelva la ultima letra de dicho string.
// ```javascript
// lastLetter("Reloj") // output: "j"
// lastLetter("Murcielago") // output: "o"
// ```

// const lastLetter = (texto) =>{
//    return texto.charAt(texto.length -1)
// }

// console.log(lastLetter("reloj"))
// console.log(lastLetter('Murcielago'))

// Ejercicio 3

// - Crear una funcion que reciba tres parametros number y que permita sumar los primeros dos, o los tres valores en caso de recibir los tres. Pero si solo recibe dos valores, que sume solo esos dos.
// ```javascript
// sumar(5, 10) // output 15
// sumar(5, 10, 20) // output 35
// ```

const sumar = (a,b,c)=>{
    if (parseInt(resultado = a + b + c)){ 
        return resultado
    }else if(parseInt(resultado = a + b)){
        return resultado
    }
}
    
// console.log(sumar(5,4))
// console.log(sumar(4,3,3))

/********************************************************/

// Ejercicio 4

// - Investigar que metodo podemos utilizar para sacar la raiz cuadrada de un numero. Una vez investigado, crear una funcion que devuelva el resultado.
// ```javascript
// raizCuadrada(4) // output 2
// raizCuadrada(16) // output 4
// ```

const raizCuadrada =(valor)=>{
    return Math.sqrt(valor)
}

// console.log(raizCuadrada(4))
// console.log(raizCuadrada(16))

/***************************************************************/

// Ejercicio 5

// - Investigar que metodo podemos utilizar para sacar el cuadrado de un numero. Una vez investigado, crear una funcion que devuelva el resultado.
// ```javascript
// alCuadrado(4) // output 16
// alCuadrado(16) // output 256
// ```

const alCuadrado = (valor)=>{
 return Math.pow(valor,2)
}

// console.log(alCuadrado(4))
// console.log(alCuadrado(16))

/********************************************************************/

// Ejercicio 6

// - Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo.
// ```javascript
// gritar('hola') // output ¡hola!
// gritar('aaaaaa') // output ¡aaaaaa!
// ```

// const gritar =(palabra)=>{
//     return `¡${palabra}!`
// }

// console.log(gritar("Hola"))
// console.log(gritar("Hola mundo"))


/***************************************************/

// Ejercicio 7

// - Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas.
// ```javascript
// convertirHorasEnSegundos(1) // output 3600
// convertirHorasEnSegundos(3) // output 10800
// convertirHorasEnSegundos(4.5) // output 16200
// ```


const convertirHorasEnSegundos = (horas) =>{
 return `Son ${horas * 3600} segundos`
}

// console.log(convertirHorasEnSegundos(3))
// console.log(convertirHorasEnSegundos(4.5))
// console.log(convertirHorasEnSegundos(5))


/*********************************************************/

//  Ejercicio 8

// - Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS.
// ```javascript
// obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina') // output 'La ciudad de Santa Fe tiene una población de 545606 habitantes y está ubicada en Argentina'
// ```

// const obtenerDatosDeCiudad =(nombre, poblacion, pais)=>{
//  return (`La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`)
// }

// console.log(obtenerDatosDeCiudad("Rosario", 1400000,"Argentina" ))

/**************************************************************/

// ### Ejercicio 9

// - FPS son cuadros por segundo (frames per second). Crear una una función calcularFPS que tome como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos.
// ```javascript
// calcularFPS(1, 1) // output 60
// calcularFPS(10, 2) // output 1200
// calcularFPS(2, 3) // output 360
// ```

// const calcularFPS =(cuadros, minutos)=>{
//  return (cuadros * minutos * 60)

// }

// console.log(calcularFPS(1, 1))
// console.log(calcularFPS(10, 2))
// console.log(calcularFPS(2, 3))

/*******************************************************************/


// Ejercicio 10
// Crear una función sumarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a sumar.
// sumarPorcentaje(100, 15) // output 115
// sumarPorcentaje(10, 50) // output 15
// sumarPorcentaje(200, 10) // output 220

const sumarPorcentaje = (numero, porcentaje) => {
    return (numero * porcentaje / 100) + numero


}
// console.log(sumarPorcentaje(100, 15))
// console.log(sumarPorcentaje(10, 50))

// const sumarPorcentaje = (numero, porcentaje) => { 
//     let resultado = (numero * porcentaje / 100)
//     return resultado + numero
// }

// console.log(sumarPorcentaje(100, 15))

/********************************************************************/


// Ejercicio 11
// Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la resta de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a restar.
// restarPorcentaje(100, 15) // output 85
// restarPorcentaje(10, 40) // output 6
// restarPorcentaje(200, 10) // output 180

// const restarPorcentaje = (numero, porcentaje) => { 
//     let resultado = (numero * porcentaje) / 100
//     return (numero - resultado)
// }

// console.log(restarPorcentaje(10, 40))
// console.log(restarPorcentaje(100, 15))
// console.log(restarPorcentaje(200, 10))

/********************************************************************/


// Ejercicio 12
// Crear una función generarEmail que tome como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com.
// generarEmail('adalovelace', 'gmail') // output 'adalovelace@gmail.com'

// const generarEmail = (usuario, dominio) => {
// return (`${usuario}@${dominio}.com`)
// }

// console.log(generarEmail('adalovelace', 'gmail'))

/********************************************************************/


// Ejercicio 13
// Crear una funcion que reciba dos strings y devuelva el numero de caracteres del string mas largo.
// esStringMasLargo("Esta soleado","No llovio en toda la semana") // output 27

const esStringMasLargo = (palabra1, palabra2) => {
    if (palabra1.length > palabra2.length) {
        return palabra1.length 
    } else if (palabra1.length < palabra2.length) {
        return palabra2.length
    }
   return "estas palabras tienen la misma cantidad de caracteres"
}

// console.log(esStringMasLargo("Esta soleado","No llovio en toda la semana"))

/********************************************************************/


// Ejercicio 14
// Crear una función aceptaDeposito que tome como argumento un número monto y devuelva true si el monto es divisible por 10 o false si no lo es.
// aceptaDeposito(440) // output: true
// aceptaDeposito(123) // output: false
// aceptaDeposito(500.50) // output: false
// aceptaDeposito(1000) // output: true

const aceptaDeposito = (monto) => {
 if (monto % 10 === 0) {
    return true
 } 
 return false 
}
// console.log(aceptaDeposito(440))
// console.log(aceptaDeposito(123))
// console.log(aceptaDeposito(500.50))

/********************************************************************/



// Ejercicio 15
// Crear una función esUltimoCaracter que tome como argumentos una palabra y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario.
// esUltimoCaracter('lovelace', 'e') // output: true
// esUltimoCaracter('lovelace', 'f') // output: false

const esUltimoCaracter = (palabra, caracter) => {
   if (palabra.charAt(palabra.length -1) == caracter) {
      return true 
   }
   return false
}


// console.log(esUltimoCaracter('lovelace', 'e'))
// console.log(esUltimoCaracter('lovelace', 'f'))

/********************************************************************/


// Ejercicio 16
// Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres.
// esValida('contraseniaMuySegura') // output: true
// esValida('abc123') // output: false

// const esValida = (contraseña) => {
//     let contrasenia = contraseña.length
//     console.log(contrasenia)
//     return contrasenia > 8 ? true : false
// }

// console.log(esValida('contraseniaMuySegura'))
// console.log(esValida('abc123'))

// const esValida = (contraseña) => {
//     let contrasenia = contraseña.toString()
//     if (contrasenia.length > 8) {
//         return true 
//     } 
//      return false 
// }
// console.log(esValida('contraseniaMuySegura'))
// console.log(esValida('abc123'))

// Ejercicio 17 rehacer
// Crear una función sonIguales que tome como argumentos dos strings a y b y devuelva true si ambos strings tienen el mismo contenido independientes del caso y false en caso contrario.
// sonIguales('javascript', 'JavaScript') // output: true
// sonIguales('AdA LoVeLaCe', 'Ada Lovelace') // output: true
// sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO') // output: false

// const sonIguales = (a, b) =>{
//  if (a.length === b.length) {
//    return true}
 
//  return false
// }


// console.log(sonIguales('javascript', 'JavaScript'))
// console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace'))
// console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO'))
// console.log(sonIguales('NO ESTOY GRITANDO AHORA', 'SI ESTOY GRITANDO'))

/********************************************************************/


// Ejercicio 18
// Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula.
// capitalizar('lovelace') // output 'Lovelace'
// capitalizar('había una vez...') // output 'Había una vez...'

// const capitalizar = (str) => {
//     let primeraLetra = str.charAt(0).toUpperCase()
//     let resto = str.slice(1)
//     return `${primeraLetra}${resto}`
    
// }

// console.log(capitalizar('lovelace'))
// console.log(capitalizar('había una vez...'))

// const capitalizar = (str) =>{
    //    return str[0].toUpperCase() + str.substring(1)
    
    // }
    
    // console.log(capitalizar('lovelace'))
    // console.log(capitalizar('había una vez...')) 
    
    //Otra manera de hacerlo....
    
    // const capitalizar = (str) =>{
    //  return str.charAt(0).toUpperCase() + str.slice(1)
    
    // }
    
    // console.log(capitalizar('lovelace'))
    // console.log(capitalizar('había una vez...'))

    // const capitalizar = (str) =>{
//    return str[0].toUpperCase() + str.substring(1)

// }

// console.log(capitalizar('lovelace'))
// console.log(capitalizar('había una vez...')) 

//Otra manera de hacerlo....

// const capitalizar = (str) =>{
//  return str.charAt(0).toUpperCase() + str.slice(1)

// }

// console.log(capitalizar('lovelace'))
// console.log(capitalizar('había una vez...')) 

/********************************************************************/


// Ejercicio 19
// Crear una función obtenerDuracionEnSegundos que tome como argumento un string duracion con el formato (mm:ss) y la cantidad de segundos totales de la duración.
// obtenerDuracionEnSegundos('00:33') // output 33
// obtenerDuracionEnSegundos('01:05') // output 65
// obtenerDuracionEnSegundos('10:42') // output 642


const obtenerDuracionEnSegundos = (duracion) => {
    let mm = parseInt(duracion.slice(0, 2) * 60) 
    let ss = parseInt(duracion.slice(3))
    return mm + ss

    //return minutos
}

console.log(parseInt(obtenerDuracionEnSegundos('00:33')))
console.log(parseInt(obtenerDuracionEnSegundos('01:05')))
console.log(parseInt(obtenerDuracionEnSegundos('10:42')))

//Otra manera:

// const obtenerDuracionEnSegundos = (duracion) =>{
//     let mm = duracion.slice(0, 2) * 60
//     let ss = duracion.slice(3)
//     return (parseInt(mm) + parseInt(ss))
// }
  
// console.log(obtenerDuracionEnSegundos('00:33')) // output 33
// console.log(obtenerDuracionEnSegundos('01:05'))// output 65
// console.log(obtenerDuracionEnSegundos('10:42'))// output 642
// console.log(obtenerDuracionEnSegundos('20:30'))// output 1230

/********************************************************************/


// Ejercicio 20
// Crear una funcion que reciba por parametro un string de saludo y devuelva true o false si el string incluye la palabra "Hola". Ojo las mayusculas.
// esSaludoValido("Hola alumna!") // output: true
// esSaludoValido("Que onda perri") // output: false

// const esSaludoValido = (saludo) => {
// if (saludo.includes("Hola")) {
// return true  
// } return false 
// }
// console.log(esSaludoValido("Hola alumna!"))
// console.log(esSaludoValido("Que onda perri"))

// const esSaludoValido = (saludo) => {
// let saludar = saludo.includes("Hola")
// return saludar ? true : false

// }

// console.log(esSaludoValido("Hola alumna!"))
// console.log(esSaludoValido("Que onda perri"))

//Otra manera

// const esSaludoValido =(saludo)=>{
//     if (saludo.toLowerCase().includes("hola")) return true
//     return false
// }
 
// console.log(esSaludoValido("Hola alumna!")) // output: true
// console.log(esSaludoValido("Que onda perri")) // output: false
// console.log(esSaludoValido("hola alumna!")) // output: true

//Otra manera es:

// const esSaludoValido =(saludo)=>
// saludo.includes("Hola") ?  true : false


// console.log(esSaludoValido("Hola alumna!")) // output: true
// console.log(esSaludoValido("Que onda perri")) // output: false
// console.log(esSaludoValido("hola alumna!")) // output: false

/********************************************************************/


// Ejercicio 22
// Crear una funcion que evalue dos contrasenias y devuelva true si son identicas y false si no lo son.
// sonIdenticas('contraseniaMuySegura', 'contraseniaMuySegura') // output: true
// sonIdenticas('abc123', 'abc123456') // output: false

// const sonIdenticas = (contraseña1, contraseña2) => {
//     if (contraseña1 == contraseña2) {
//         return true
//     } return false 
// }

// console.log(sonIdenticas('contraseniaMuySegura', 'contraseniaMuySegura'))
// console.log(sonIdenticas('abc123', 'abc123456'))

// const sonIdenticas = (contraseña1, contraseña2) => {
//    return contraseña1 === contraseña2 ? true : false
// }

// console.log(sonIdenticas('contraseniaMuySegura', 'contraseniaMuySegura'))
// console.log(sonIdenticas('abc123', 'abc123456'))

/********************************************************************/


// Ejercicio 23
// Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador') y devuelva true si dicha fracción es mayor a 1 o false de lo contrario.
// esFraccionMayorAUno('1/2') // output: false
// esFraccionMayorAUno('2/2') // output: false
// esFraccionMayorAUno('4/2') // output: true

const esFraccionMayorAUno = (fraccion) => {
let n1 = parseInt(fraccion.slice(0, 1))
let n2 = parseInt(fraccion.slice(2))
let resultado = n1 / n2 
return resultado > 1 ? true : false
}

// console.log(esFraccionMayorAUno('1/2'))
// console.log(esFraccionMayorAUno('2/2'))
// console.log(esFraccionMayorAUno('4/2'))

/**otra manera de hacerlo */

// const esFraccionMayorAUno =(fraccion)=>{
//     let numerador = fraccion.slice(0,1)
//     let denominador = fraccion.slice(2)
//     if (numerador / denominador > 1){
//         return true
//     }
//     return false
// }

// console.log(esFraccionMayorAUno('1/2'))// output: false
// console.log(esFraccionMayorAUno('2/2')) // output: false
// console.log(esFraccionMayorAUno('4/2'))// output: true
// console.log(esFraccionMayorAUno('8/2'))// output: true
// console.log(esFraccionMayorAUno('3/2'))// output: true


/********************************************************************/


// Ejercicio 24
// Crear una función esPuenteSeguro que tome como string un puente que consista en caracteres numerales y espacios y devuelva true si el puente está cortado (tiene espacios) o false si está entero y es seguro atravesar.
// esPuenteSeguro('### ##') // output: false
// esPuenteSeguro('##### ####') // output: false
// esPuenteSeguro('########') // output: true

// const esPuenteSeguro = () => {
//     esPuenteSeguro.includes(' ') ? false : true 
//   } 
  
//   console.log(esPuenteSeguro('### ##'))
//   console.log(esPuenteSeguro('##### ####'))
//   console.log(esPuenteSeguro('########'))

/********************************************************************/


// Ejercicio 25
// Crear una función obtenerExtension que tome como argumento un string archivo con el formato 'nombre.extension' y devuelva la extensión del archivo. Investigar la funcion nativa split() y pensar si nos ayuda para este problema.
// obtenerExtension('imagen.png') // output: 'png'
// obtenerExtension('index.html') // output: 'html'
// obtenerExtension('notas.txt') // output: 'txt'

const obtenerExtension = (archivo) => {
    return archivo.split(".")[1]
}


// console.log(obtenerExtension('imagen.png'))
// console.log(obtenerExtension('index.html'))
// console.log(obtenerExtension('notas.txt'))




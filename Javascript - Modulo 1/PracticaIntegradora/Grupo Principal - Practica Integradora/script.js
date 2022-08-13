//GRUPO PRINCIPAL

//UNO Crear una funcion que reciba por parametro un string y devuelva solo la primer letra de dicho string.


const primerLetra = (texto) => {
 return texto.charAt(0)
}

// console.log(primerLetra("Lucia"))


//DOS Crear una funcion que reciba por parametro un string y devuelva la ultima letra de dicho string.


// const ultimaLetra = (texto) => {
//     const resultado = texto.length
//     return texto.charAt(resultado-1)
//    }

   
//    console.log(ultimaLetra("Lucia"))


//TRES Crear una funcion que reciba tres parametros number y que permita sumar los primeros dos, o los tres valores en caso de recibir los tres. Pero si solo recibe dos valores, que sume solo esos dos.

const suma = (num1, num2, num3) => {
    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
        return num1 + num2 + num3
    } else if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 !== 'number') {
        return num1 + num2
    }
}

console.log(suma(1, 2))

//CUATRO Investigar que metodo podemos utilizar para sacar la raiz cuadrada de un numero.Una vez investigado, crear una funcion que devuelva el resultado.

const raizCuadrada = (numero) => {
    return Math.sqrt(numero)
}
console.log(raizCuadrada(16))


//CINCO Investigar que metodo podemos utilizar para sacar el cuadrado de un numero. Una vez investigado, crear una funcion que devuelva el resultado.

const cuadrado = (num1, num2) => {
    return Math.pow(num1, num2)
}

console.log(cuadrado(2, 2))


//SEIS Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo.
/*
const gritar = (texto) => {
    return ` ¡ ${texto} ! `
}

console.log(gritar("hola"))
*/

//SIETE Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas.
/*
const convertirHorasEnSegundos = (numero) => {
    return numero*3600
 }
console.log(convertirHorasEnSegundos(1))
console.log(convertirHorasEnSegundos(3))
console.log(convertirHorasEnSegundos(4.5))
*/

//OCHO Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y 
//un string pais y devuelva string con el siguiente formato: 
//La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS.

/* 
const obtenerDatosDeCiudad = (nombre, numero, pais) => {
    return `La ciudad de ${nombre} tiene una población de ${numero} habitantes y está ubicada en ${pais}`
}

console.log(obtenerDatosDeCiudad("Cordoba", 50000, "Argentina"))
*/

//NUEVE FPS son cuadros por segundo (frames per second). Crear una una función calcularFPS que tome como argumentos una cantidad de cuadros 
//por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos.
/*
const calcularFPS = (cuadros, minutos) => {
    return cuadros*minutos*60
}
console.log(calcularFPS(1, 1))
console.log(calcularFPS(10, 2))
console.log(calcularFPS(2, 3))
*/

//DIEZ Crear una función sumarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de 
//su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a sumar.

const sumarPorcentaje = (numero, porcentaje) => {
    return numero + (numero / 100 * porcentaje)
}

console.log(sumarPorcentaje(100, 15))
console.log(sumarPorcentaje(10, 50))
console.log(sumarPorcentaje(200, 10))


//ONCE //Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje 
//y devuelva la resta de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a restar.
/*
const restarPorcentaje = (numero, porcentaje) => {
    return (numero -(numero/100*porcentaje))
}

console.log(restarPorcentaje(100, 15))
console.log(restarPorcentaje(10, 40))
console.log(restarPorcentaje(200, 10))
*/

//DOCE Crear una función generarEmail que tome como argumentos 
//dos string usuario y dominio y el un string email con el formato usuario@dominio.com.
/*
const generarEmail = (usuario, dominio) => {
    return `${usuario}@${dominio}.com`
}

console.log(generarEmail("lucia", "gmail"))
*/
//TRECE Crear una funcion que reciba dos strings y devuelva el numero de caracteres del string mas largo.

const masLargo = (palabra1, palabra2) => {
    if (palabra1.length > palabra2.length){
        return palabra1.length
    } else {
        return palabra2.length
    }
}
console.log(masLargo("amor", "amistad"))
console.log(masLargo("amistad", "amor"))



//CATORCE Crear una función aceptaDeposito que tome como argumento un número monto y
// devuelva true si el monto es divisible por 10 o false si no lo es.

const aceptaDeposito = (monto) => {
    if (monto % 10 === 0) {
        return true
    } else {
        return false
    }
}

console.log(aceptaDeposito(440))
console.log(aceptaDeposito(123))
console.log(aceptaDeposito(500.50))
console.log(aceptaDeposito(1000))


//QUINCE Crear una función esUltimoCaracter que tome como argumentos una palabra y un caracter y 
//devuelva true si la palabra termina con el caracter o false de lo contrario.

const esUltimoCaracter = (texto, caracter) => {
    const ultimoCaracter = texto.charAt(texto.length-1)

    if (caracter === ultimoCaracter) {
        return true
    } else {
        return false
    }
}

console.log(esUltimoCaracter("lovelace", "e"))
console.log(esUltimoCaracter("lovelace", "f"))


//DIECISEIS Crear una función esValida que tome como argumento una contrasenia (string) y 
//devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres.
/*
const esValida = (passWord) => {
  const resultado = passWord.length

  if (resultado >= 8) {
    return true
  } else {
    return false
  }
}

console.log(esValida("contraseñamuysegura"))
console.log(esValida("abc123"))
*/

//DIECISIETE Crear una función sonIguales que tome como argumentos dos strings a y b y devuelva true si ambos strings 
//tienen el mismo contenido independientes del caso y false en caso contrario.
/*
const sonIguales = (a, b) => {

    if (a.toUpperCase() === b.toUpperCase()){
        return true
    } else {
        return false
    }
}

console.log(sonIguales("lucia", "LUCIA"))
console.log(sonIguales("valeria", "vAleRia"))
console.log(sonIguales("celeste", "Tete"))
*/

//DIECIOCHO //Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula.
/*
const capitalizar = (texto) => {
    const primeraLetra = (texto.charAt(0).toUpperCase())
    const palabra = (texto.slice(1).toLowerCase())
    return primeraLetra+palabra
}

console.log(capitalizar("hola"))
*/

//DIECINUEVE //Crear una función obtenerDuracionEnSegundos que tome como argumento 
//un string duracion con el formato (mm:ss) y la cantidad de segundos totales de la duración

const obtenerDuracionEnSegundos = (hora) => {
    const minutos = (parseInt(hora.slice(0, 2))*60)
    const segundos = (parseInt(hora.slice(3, 5)))
    return minutos+segundos
}

console.log(obtenerDuracionEnSegundos("10:42"))


//VEINTE // Crear una funcion que reciba por parametro un string de saludo y 
//devuelva true o false si el string incluye la palabra "Hola". Ojo las mayusculas.
/*
const saludo = (texto) => {
    if (texto.includes("Hola")){
        return true
    } else {
        return false
    }
}

console.log(saludo("Hola alumna"))
console.log(saludo("que onda perri"))
*/

//VEINTIDOS //Crear una funcion que evalue dos contrasenias y devuelva true si son identicas y false si no lo son.
/*
const contrasenia = (texto1, texto2) => {
    if (texto1 === texto2){
        return true
    } else {
        return false
    }
}
console.log(contrasenia("hola", "hola"))
console.log(contrasenia("chau", "hola"))
*/

//VEINTITRES //Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador')
// y devuelva true si dicha fracción es mayor a 1 o false de lo contrario.

const esFraccionMayorAUno = (fraccion) => {
    const numerador = parseInt(fraccion.slice(0, 1))
    const denominador = parseInt(fraccion.slice(2, 3))
    if (numerador/denominador > 1) {
        return true
    } else {
        return false
    }
}

console.log(esFraccionMayorAUno("1/2")) // 0.5
console.log(esFraccionMayorAUno("2/2")) // 1
console.log(esFraccionMayorAUno("4/2")) // 2


//VEINTICUATRO // Crear una función esPuenteSeguro que tome como string un puente que consista en caracteres numerales y espacios y devuelva true si el puente está cortado (tiene espacios) o false si está entero y es seguro atravesar.
/*
const esPuenteSeguro = (puente) => {
    if (puente.includes(" ")){
        return false
    } else {
        return true
    }
}

console.log(esPuenteSeguro("##### ####"))
console.log(esPuenteSeguro("##### ##"))
console.log(esPuenteSeguro("#########"))
*/
//VEINTICINCO //Crear una función obtenerExtension que tome como argumento un string archivo con el 
//formato 'nombre.extension' y devuelva la extensión del archivo. 
//Investigar la funcion nativa split() y pensar si nos ayuda para este problema.

const obtenerExtension = (archivo) => {
    return archivo.split(".")[1]
}

console.log(obtenerExtension("index.html"))
console.log(obtenerExtension("index.js"))
console.log(obtenerExtension("index.jpg"))

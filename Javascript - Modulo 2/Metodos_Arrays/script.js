/* METODOS DE ARRAYS */

const numeros = [5, -12, 27, 91, 102, -48]

// Filter => devolver un array nuevo solo con los elementos que cumplen con una condicion dada

const numerosPositivos = numeros.filter(numero => {
    return numero > 0
})
const numerosNegativos = numeros.filter(numero => numero < 0)

console.log(numerosPositivos)
console.log(numerosNegativos)

// Find => devuelve el PRIMER ELEMENTO que coincide con una condicion dada

const mayorQueDiez = numeros.find(numero => numero > 10)
console.log(mayorQueDiez)

// Map => devuelve un nuevo array CON LA MISMA CANTIDAD DE ELEMENTOS QUE EL ARRAY ORIGINAL pero con una modificacion dada

const numerosDuplicados = numeros.map(numero => numero * 2)
console.log(numerosDuplicados)

const puntajeAdicional = numeros.map(numero => {
    if (numero > 50) {
        return numero + 50
    }
    return numero
})

console.log(puntajeAdicional)

// Every => devuelve un boolean dependiendo de si TODOS los elementos cumplen con una condicion dada

const sonPositivos = numeros.every(numero => numero > 0)
console.log(sonPositivos)

// Some => devuelve un boolean dependiendo de si al menos UN elemento cumple con una condicion dada

const hayNegativos = numeros.some(numero => numero < 0)
console.log(hayNegativos)

// Reduce
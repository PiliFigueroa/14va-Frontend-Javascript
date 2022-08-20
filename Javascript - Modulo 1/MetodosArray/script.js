// const numeros = [0, 10, -5, 20, 37, 92, 55, -16]

// const array = []

// for (const numero of numeros) {
//     if (numero < 0) {
//         array.push(numero)
//     }
// }
//console.log(array)

// Filter
// Retorna un nuevo array con los elementos que cumplan con dicha condicion

// const negativos2 = numeros.filter(numero => {
//     return numero < 0
// })
// console.log(negativos2)

// const negativos = numeros.filter(numero => numero < 0)
// console.log(negativos)

// Map
// Retorna un nuevo array con la misma cantidad de elementos que el array original pero con alguna modificacion

// const numerosMultiplicados2 = numeros.map(numero => {
//     return numero * 2
// })
// console.log(numerosMultiplicados2)

// const numerosMultiplicados = numeros.map(numero => numero * 2)
// console.log(numerosMultiplicados)

// Los jugadores que sacaron igual o mas de 150 puntos, se les suma un puntaje bonus de 50.

// const puntajes = [50, 100, 150, 75, 200]

// const puntajeBonus = puntajes.map(puntaje => {
//     if (puntaje >= 150) {
//         return puntaje + 50
//     }
//     return puntaje
// })

// const puntajeBonus2 = puntajes.map(puntaje => puntaje >= 150 ? puntaje + 50 : puntaje)

//console.log(puntajeBonus2)

// sin map()

// const array2 = []

// for (const puntaje of puntajes) {
//     if (puntaje >= 150) {
//         array2.push(puntaje + 50)
//     } else {
//         array2.push(puntaje)
//     }
// }

// console.log(array2)
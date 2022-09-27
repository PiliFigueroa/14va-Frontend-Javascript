/* PARTE 1 */

// Que es un objeto - tipo de dato que almacena informacion mas estructurada

// Syntax de objeto
/* const obj = { key: value } */

const usuario = {
    nombre: "Pilar",
    profesion: "Programadora",
    edad: 25,
    tieneExperiencia: true,
    lenguajes: ["Javascript", "PHP", "ReactJS"]
}

// console.log(usuario)

// Leyendo propiedades de un objeto (notacion de punto)

// console.log(usuario.nombre)
// console.log(usuario.profesion)
// console.log(usuario.edad)
// console.log(usuario.tieneExperiencia)
// console.log(usuario.lenguajes)

// Agregando propiedades a un objeto

// usuario.mascota = "Kiro"

// Modificando propiedades de un objeto

usuario.nombre = "Pilar Figueroa"

// Como se recorre un objeto?
// forof en objetos da error porque no es iterable
// forin recorre los indices y muestra sus nombres
// for (const prop in usuario) {
//     console.log(prop)
// }

/* PARTE 2 */

// Objetos dinamicos, accediendo mediante los corchetes

const propiedad = "nombre"

// console.log(usuario[propiedad])
// console.log(usuario["edad"])
// console.log(usuario["lenguajes"])
// console.log(usuario["profesion"])
// console.log(usuario["tieneExperiencia"])

// Accediendo a propiedades mediante variables

// Object.keys
// Devuelve un array con las keys del objeto que paso entre parentesis
// console.log(Object.keys(usuario))
// const propiedades = Object.keys(usuario)
// console.log(propiedades)

// for (const propiedad of propiedades) {
//     console.log(usuario[propiedad])
// }

// Object.values
// Devuelve un array con los valores del objeto que paso entre parentesis
// const valores = Object.values(usuario)
// console.log(valores)

// for (const val of valores) {
//     console.log(val)
// }

// Object.entries
// Devuelve un array multidimensional en donde cada elemento es otro array y en la posicion 0 guarda la  key y la posicion 1 el value
// const valoresYPropiedades = Object.entries(usuario)
// console.log(valoresYPropiedades)

// for (const arr of valoresYPropiedades) {
//     //console.log(arr)
//     console.log(arr[0], arr[1])
// }

// hasOwnProperty
// "Preguntar" si existe cierta propiedad en un objeto dado
// console.log(usuario.hasOwnProperty("profesion"))
// console.log(usuario.hasOwnProperty("mascota"))

/* PARTE 3 -  ARRAY DE OBJETOS */

// Declaracion
const usuarios = [
    {
        nombre: "Pilar Figueroa",
        profesion: "Programadora",
        edad: 25,
        tieneExperiencia: true,
        lenguajes: ["Javascript", "PHP", "ReactJS"] 
    },
    {
        nombre: "Aldana Sorni",
        profesion: "Programadora",
        edad: 28,
        tieneExperiencia: true,
        lenguajes: ["Javascript", "Angular", "Svelte", "ReactJS", "Ruby"]
    },
    {
        nombre: "Rocio Quiroz",
        profesion: "Instrumentadora",
        edad: 35,
        tieneExperiencia: false,
        lenguajes: ["Javascript"]
    }
]

// console.log(usuarios)

// Recorriendo el array de objetos
// Accediendo a sus valores
// for (const usuario of usuarios) {
//     // console.log(usuario["profesion"])
//     const propiedades = Object.keys(usuario)
//     for (const propiedad of propiedades) {
//         // console.log(propiedad)
//         console.log(usuario[propiedad])
//     }
// }

let edadAcumulada = 0

for (const usuario of usuarios) {
    // usuario.edad
    edadAcumulada += usuario.edad
}

// console.log(edadAcumulada)
const edadPromedio = Math.round(edadAcumulada / usuarios.length)
// console.log(edadPromedio)

// for (const usuario of usuarios) {
//     document.querySelector("#lista").innerHTML += `<li>${usuario.nombre}</li>`
// }

// for (const usuario of usuarios) {
//     for (const propiedad of Object.keys(usuario)) {
//         if (propiedad === "tieneExperiencia") {
//             document.querySelector("#lista").innerHTML += `<li>${usuario[propiedad] ? "Tiene experiencia" : "No tiene experiencia"}</li>`
//         } else {
//             document.querySelector("#lista").innerHTML += `<li>${usuario[propiedad]}</li>`
//         }
//     }
// }

// for (const usuario of usuarios) {
//     for (const propiedad of Object.keys(usuario)) {
//         if (propiedad === "tieneExperiencia") {
//             document.querySelector("#lista").innerHTML += `<li>Tiene Experiencia</li>`
//         } else {
//             document.querySelector("#lista").innerHTML += `<li>${usuario[propiedad]}</li>`
//         }
//     }
// }

// for (const usuario of usuarios) {
//     for (const valor of Object.values(usuario)) {
//         document.querySelector("#lista").innerHTML += `<li>${valor}</li>`
//     }
// }

// Si quisieramos solo mostrar los lenguajes

// for (const usuario of usuarios) {
//     for (const lenguaje of usuario.lenguajes) {
//         console.log(lenguaje)
//     }
// }

/* RESOLVIENDO UN EJERCICIO  DE LA PRACTICA */

// const album = {
//     id: 'nirv1234',
//     nombre: 'With The Lights Out',
//     anio: 2004,
//     genero: 'Grunge',
//     banda: 'Nirvana',
//     portada: 'https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg',
//     info: 'https://en.wikipedia.org/wiki/With_the_Lights_Out'
// }

// document.querySelector("#container").innerHTML = `
//     <h3>${album.nombre}</h3>
//     <img src="${album.portada}" alt="${album.nombre}" width="200px">
//     <p>${album.banda}</p>
//     <p>Genero: ${album.genero}</p>
//     <p>Lanzamiento: ${album.anio}</p>
//     <a href="${album.info}" target="_blank">Ver detalles</a>
// `

const banda = {
    name: "Led Zeppelin",
    year: 1968,
    active: false,
    thumbnail:
      "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
    members: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
    albums: [
      {
        name: "Led Zeppelin",
        year: 1969,
        songs: ["Good Times, Bad Times", "Communication Breakdown"],
        duration: 2691,
      },
      {
        name: "Led Zeppelin II",
        year: 1969,
        songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
        duration: 2502,
      },
      {
        name: "Led Zeppelin III",
        year: 1970,
        songs: ["Immigrant Song"],
        duration: 2489,
      },
      {
        name: "Led Zeppelin IV",
        year: 1971,
        songs: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
        duration: 2559,
      },
    ],
  };

  let duracionAcumulada = 0

  for (const album of banda.albums) {
    duracionAcumulada += album.duration
  }

  const promedioTotal = duracionAcumulada / banda.albums.length
  console.log(promedioTotal)
const obj = {
    nombre: "Sofia",
    pais: "Argentina",
    edad: 27,
    hijos: {
        nenes: ["Pablo"],
        nenas: []
    }
}

// console.log(obj.nombre)

// obj.nombre = "Pamela"
// obj["apellido"] = "Sanchez"

// console.log(obj)

// Operador delete => para eliminar una propiedad de un objeto

// delete obj.pais
// console.log(obj.hijos.nenes)

// Funciones dentro de objetos

const musica = {
    genero: "rock",
    song: [],
    agregarCancion: (cancion) => {
        musica.song.push(cancion)
    }
}

// console.log(musica)
musica.agregarCancion("Little by Little")
musica.agregarCancion("By my side")

// console.log(musica.song)

// Spread Operator => copia array u objeto, podemos modificar esta copia y por lo tanto no mutar la variable original

const amigos = ["Pablo", "Candela", "Sofia"]
// const numeros = [1, 2, 3, 4]

// const copia = [...amigos, "Hola mundo", ...numeros]

// copia.splice(1)
// console.log(copia)
// console.log(amigos)

const musicaCopia = {...musica, genero: "Folklore", instrumentos: "guitarra"}
// console.log(musicaCopia)
// musicaCopia.genero = "Folklore"
// console.log(musicaCopia)

// Objetos como parametros en funciones

const usuario = {
    nombre: "German",
    segundoNombre: "Martin",
    apellido: "Tavarez",
    edad: 30
}

const usuaria = {
    nombre: "Fernanda",
    apellido: "Santos",
    edad: 41
}

const mostrarNombre = (objeto) =>{
    return `${objeto.nombre} ${objeto.apellido}`
}

console.log(mostrarNombre(usuario))
console.log(mostrarNombre(usuaria))

const sumarEdad = (objeto, edad) => {
    return objeto.edad + edad
}

console.log(sumarEdad(usuario, 15))
console.log(sumarEdad(usuaria, 15))

// Destructuring => sustraer/guardar propiedades que necesitamos

const { nombre: primerNombre, apellido, edad } = usuario

console.log(primerNombre)
console.log(apellido)
console.log(edad)

const estudiantes = [
    {
      edad: 17,
      familiar: "Salamandra",
      casa: "Hufflepuff",
      nombreCompleto: {
        nombre: "Ellis",
        apellido: "Reeves",
      },
      hechizoPreferido: "Expecto Patronum"
    },
    {
      edad: 15,
      familiar: "Salamandra",
      casa: "Gryffindor",
      nombreCompleto: {
        nombre: "Neal",
        apellido: "Spence",
      },
      hechizoPreferido: "Lumos"
    },
    {
      edad: 17,
      familiar: "Sapo",
      casa: "Slytherin",
      nombreCompleto: {
        nombre: "Lucy",
        apellido: "Talley",
      },
      hechizoPreferido: "Expelliarmus"
    },
    {
      edad: 21,
      familiar: "Lechuza",
      casa: "Slytherin",
      nombreCompleto: {
        nombre: "Gloria",
        apellido: "Woods",
      },
      hechizoPreferido: "Lumos"
    },
    {
      edad: 20,
      familiar: "Sapo",
      casa: "Gryffindor",
      nombreCompleto: {
        nombre: "Sharp",
        apellido: "Collier",
      },
      hechizoPreferido: "Lumos"
    }
]

// Destructuring en bucles
for (const estudiante of estudiantes) {
    const { familiar, casa, hechizoPreferido, nombreCompleto } = estudiante
    console.log(casa)
    console.log(familiar)
    console.log(hechizoPreferido)
}

for (const { familiar, casa, hechizoPreferido, nombreCompleto } of estudiantes) {
    console.log(casa)
}

// Destructuring en funciones

const mostrarNombre2 = (objeto) => {
    const { nombre, apellido } = objeto
    return `${nombre} ${apellido}`
}

const mostrarNombre3 = ({ nombre, apellido }) => {
    return `${nombre} ${apellido}`
}

console.log(mostrarNombre2(usuario))
console.log(mostrarNombre3(usuario))

// Rest operator

const sumarAntes = (numero1, numero2) => {
    return numero1 + numero2
}

const sumar = (...numeros) => {
    let resultado = 0
    for (const numero of numeros) {
        resultado += numero
    }
    return resultado
}

console.log(sumar(10, 5, 20, 25, 100, -20))

const numeros = [1, 2, 3, 4, -13, 50, 20]

console.log(Math.max(...numeros))
console.log(Math.min(...numeros))
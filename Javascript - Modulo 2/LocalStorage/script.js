// LocalStorage

const user = {
    name: "Pilar Figueroa",
    age: 25
}

// console.log(user)
// JSON stringify
// console.log(JSON.stringify(user))

//const userJSON = JSON.stringify(user)

//localStorage.setItem("user", JSON.stringify(user))

// JSON parse
// console.log(localStorage.getItem("clave"))

// const userLocalStorage = JSON.parse(localStorage.getItem("clave"))

// userLocalStorage.name = "Aldana Sorni"
//console.log(userLocalStorage)
//localStorage.setItem("clave", JSON.stringify(userLocalStorage))

// localStorage.removeItem("clave")

if (localStorage.getItem("user")) {
    const userLocalStorage = JSON.parse(localStorage.getItem("user"))
    userLocalStorage.age = 26
    document.write(userLocalStorage.age)
    localStorage.setItem("user", JSON.stringify(userLocalStorage))
} else {
    localStorage.setItem("user", JSON.stringify(user))
}

// setItem() recibe una key que es un nombre de referencia y el dato que queremos almacenar en el storage, y este dato debe ser en formato JSON, por eso usamos JSON.stringify. A su vez, si queremos modificar un dato existente, lo enviamos con este mismo metodo usando la misma key.

// getItem() nos permite traer informacion guardada en el localstorage, mediante la key de referencia

// removeItem() nos permite eliminar informacion guardada en el localstorage, mediante la key de referencia
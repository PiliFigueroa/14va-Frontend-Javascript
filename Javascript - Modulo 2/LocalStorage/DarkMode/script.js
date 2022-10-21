const body = document.querySelector("body")
const btnCambiarModo = document.querySelector("#cambiar-modo")
const textoModo = document.querySelector("#nombre-modo")

/* Cuando el usuario entra a mi pagina por primera vez, no hay nada en el localstorage, por lo tanto
entramos en el "else" de mi if y le seteamos el objeto "modo", lo pasamos a string y lo enviamos al
localstorage del usuario.
La proxima vez que el usuario entre a mi pagina, si tendra guardado el objeto modo en mi localstorage, por lo tanto
ahora si va a entrar en el if ya que da true, y daremos los estilos segun que es lo que tiene guardado.*/

if (localStorage.getItem('modo')) {
    // obtengo lo que tiene guardado el usuario
    const preferenciaModoJSON = localStorage.getItem('modo')
    // lo parseo
    const preferenciaModo = JSON.parse(preferenciaModoJSON)

    // pregunto si lo que esta guardado es modo oscuro o claro, y seteo los estilos en base a eso
    if (preferenciaModo.modo === 'oscuro') {
        body.classList.add("modo-oscuro")
        textoModo.textContent = "claro"
    } else {
        body.classList.remove("modo-oscuro")
        textoModo.textContent = "oscuro"
    }
} else {
    const modo = {
        modo: "claro"
    }
    const preferenciaModo = JSON.stringify(modo)
    localStorage.setItem('modo', preferenciaModo)
}

/* Inicialmente el usuario tendra en el localstorage el objeto modo seteado en "claro" y a su vez
nuestra pagina tambien esta en modo claro, con el texto del span en "oscuro", por lo tanto, al dar click
en mi boton y ejecutar este evento, entramos en el else ya que da false y cambiamos el texto del span a "claro",
y a su vez cambiamos el objeto modo seteado en "claro" a "oscuro" dentro del localstorage del usuario.
Cuando el usuario vuelva a dar click, entrara en el if y que ahora el texto del span dice "claro" por lo tanto
ahora invertimos la logica, cambiando el texto del span a "oscuro" y enviando al localstorage del usuario el objeto modo pero seteado en claro. */

btnCambiarModo.onclick = () => {
    // Primero realizamos el toggle de la class modo-oscuro al body para cambiar la jerarquia de mis estilos
    body.classList.toggle("modo-oscuro")
    if (textoModo.textContent == "claro") {
        textoModo.textContent = "oscuro"
        // objeto
        const modo = {
            modo: "claro"
        }
        // convertirlo a json
        const modoAJSON = JSON.stringify(modo)
        // guardarlo en local storage
        localStorage.setItem('modo', modoAJSON)
    } else {
        textoModo.textContent = "claro"
        // objeto
        const modo = {
            modo: "oscuro"
        }
        // convertirlo a json
        const modoAJSON = JSON.stringify(modo)
        // guardarlo en local storage
        localStorage.setItem('modo', modoAJSON)
    }
}
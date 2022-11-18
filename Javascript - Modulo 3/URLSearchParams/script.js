// URLSearchParams nos ayuda a armar los parametros de busqueda para una API. Si le pasamos un objeto con las keys y values, y luego le hacemos un .toString() nos retornara el string armado para pasarselo a la URL_BASE.

// NOTA: Hay mas metodos y formas de utilizar esto, pueden leer mas en la documentacion y buscar ejemplos: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams

const params = new URLSearchParams({
    page: 1,
    gender: "male",
    status: "alive"
})

console.log(params.toString())
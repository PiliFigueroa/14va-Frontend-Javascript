const $ = (selector) => document.querySelector(selector)

const $p = $("#textToCopy")
const $btn = $("#btn")

$btn.addEventListener("click", () => {
    // Primero guardamos el texto del elemento que queremos copiar
    let textToCopy = $p.innerText
    // Con este metodo de JS ya se copia al clipboard del usuario
    navigator.clipboard.writeText(textToCopy)
})
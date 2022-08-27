/*
    - Modificar el src de una imagen
    - Al anterior, hacer que sea mediante un evento
    - Hacer un prompt que pida una URL y muestre dicha imagen
    - Hacer un array con varias URL de imagenes y que al cargarse el documento muestre una imagen aleatoria
    - Crear varios div caja y que a cada caja se le asigne un color a partir de un array
    - Al ejercicio anterior, sumarle un evento de tipo click que al darle click a una caja incremente su tamanio, y si se le da click a otra debe volver a su tamanio original, pasando a ser otra la agrandada
*/

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

// const URL = prompt("Ingrese el link de una imagen")
// const $img = $("img")

// $img.src = URL

// const photos = [
//     "https://images.unsplash.com/photo-1661493817356-106d0cb05bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     "https://images.unsplash.com/photo-1661493817349-f3e37cc05d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     "https://images.unsplash.com/photo-1661435805015-37e730f47f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     "https://images.unsplash.com/photo-1661516268426-271d93461c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
//     "https://images.unsplash.com/photo-1661347333288-ac27f72c54cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     "https://images.unsplash.com/photo-1657299143333-4a56a5519651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
//     "https://images.unsplash.com/photo-1657299170222-1c67dc056b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     "https://images.unsplash.com/photo-1661514840916-5aad01b6290d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
// ]

// const $img = $("img")

// const index = Math.floor(Math.random() * photos.length)
// $img.src = photos[index]

// const colors = ["red", "blue", "green", "yellow", "orange"]

// const $$div = $$("div")

// for (let i = 0; i < colors.length; i++) {
//     $$div[i].style.backgroundColor = colors[i]
//     $$div[i].addEventListener("click", () => {
//         for (let i = 0; i < colors.length; i++) {
//             if ($$div[i].classList.contains("active")) {
//                 $$div[i].classList.remove("active")
//             }
//         }
//         $$div[i].classList.toggle("active")
//     })
// }

// for (const index in colors) {
//     $$div[index].style.backgroundColor = colors[index]
// }

// const $body = $("body")

// for (const color of colors) {
//     $body.innerHTML += `<div class="caja" style="background-color: ${color};"></div>`
// }

// const $ul = $("#lista")

// for (let i = 0; i < 5; i++) {
//     const cancion = prompt("Ingrese una cancion")
//     $ul.innerHTML += `<li>${cancion}</li>`
// }

// const $btn = $("#btn")
// const $modal = $("#modal")
// const $span = $(".close")

// $btn.addEventListener("click", (e) => {
//     //console.log(e)
//     $modal.style.display = "block"
// })

// $span.addEventListener("click", () => {
//     $modal.style.display = "none"
// })

// window.addEventListener("click", (e) => {
//     //console.log(e)
//     if (e.target == $modal) {
//         $modal.style.display = "none"
//     }
// })

// // keydown, keypress

// window.addEventListener("keydown", (e) => {
//     if (e.keyCode == 27) {
//         $modal.style.display = "none"
//     }
// })

// const $$section = $$(".accordion")

// for (const element of $$section) {
//     element.addEventListener("click", (e) => {
//         const p = e.target.lastChild.previousSibling
//         if (p.style.display === "block") {
//             p.style.display = "none"
//         } else {
//             p.style.display = "block"
//         }
//         element.style.backgroundImage = "url('arrowDown.svg')"
//     })
// }
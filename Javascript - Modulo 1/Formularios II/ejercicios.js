/*
### Agregar imágenes

Crear una página que:

- Tenga un `input` para la url de la imagen, un botón que diga `Agregar imagen` y un contenedor flexible donde mostrar imágenes como en una grilla.
- Al presionar el botón, _si el `input` no está vacío_, se agregue una imagen al contenedor cuyo `src` es el contenido del `input` y se borre el contenido del `input`.
- Al hacer click en una imagen, esta se elimine.
*/

// const $ = (selector) => document.querySelector(selector)
// const $$ = (selector) => document.querySelectorAll(selector)

// const $inputImg = $("#addImg")
// const $btn = $("#btn")
// const $container = $(".container")

// let arrayImagenes

// const agregarImagen = () => {
//     if ($inputImg.value !== "") {
//         $container.innerHTML += `<img src='${$inputImg.value}' width='100px' alt='Imagen elegida por el usuario'>`
//         arrayImagenes = $$("img")
//     }
// }

// $btn.addEventListener("click", () => {
//     agregarImagen()
//     for (const img of arrayImagenes) {
//         img.addEventListener("click", () => {
//             img.remove()
//         })
//     }
// })

// const $div = $(".caja")

// const img = document.createElement("img")
// img.setAttribute("src", "https://images.unsplash.com/photo-1661493817356-106d0cb05bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
// img.setAttribute("alt", "Imagen de computadora")
// img.setAttribute("class", "imagen")

// $div.appendChild(img)
// $div.remove(img)

// $div.innerHTML = ``
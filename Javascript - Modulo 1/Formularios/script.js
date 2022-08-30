const $ = (selector) => document.querySelector(selector)

const $fullname = $("#fullname")
const $email = $("#email")
const $password = $("#password")
const $terms = $("#terms")
// const $female = $("#female")
// const $male = $("male")
const $btn = $("#btn-send")
// const $textarea = $("#textarea")

// console.log($fullname.type)
// console.log($fullname.id)
// console.log($fullname.name)
// console.log($fullname.value)

/* .value para los input donde ingreso texto y .checked para checkbox y radio buttons */

const guardoInfoUsuario = () => {
    // console.log($fullname.value)
    // console.log($email.value)
    // console.log($password.value)
    // console.log($terms.checked)
    // console.log($textarea.value)
    $("#name").innerText += ` ${$fullname.value}`
    $("#pass").innerText += ` ${$password.value}`
    $("#mail").innerText += ` ${$email.value}`
    $("#terminos").innerText += ` ${$terms.checked ? "Si" : "No"}`
}

// .preventDefault()

$btn.addEventListener("click", (event) => {
    event.preventDefault()
    guardoInfoUsuario()
    $("#form").reset()
})

// $terms.addEventListener("change", (e) => {
//     console.log(e.target.checked)
// })

// const $inputColor = $("#color")

// $inputColor.addEventListener("change", () => {
//     $("body").style.backgroundColor = $inputColor.value
// })

// const $inputRange = $("#range")

// $btn.addEventListener("submit", (e) => {
//     e.preventDefault()
// })

// .reset()
// Validaciones
// Regex
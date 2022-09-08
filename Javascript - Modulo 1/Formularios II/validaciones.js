// // Funcion de selector
// const $ = (selector) => document.querySelector(selector)

// // Variables globales
// const $fullname = $("#fullname")
// const $email = $("#email")
// const $password = $("#password")
// const $repeatPassword = $("#repeatPassword")
// const $terms = $("#terms")
// const $errors = $(".errors-description")
// const $btn = $("#btn-send")
// const $form = $("#form")

// let validateFullname, validateEmail, validatePassword, termsApproved

// // Funcion de validacion
// const patron = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

// const validateFields = () => {
//     validateFullname = $fullname.value !== ""
//     validateEmail = patron.test($email.value)
//     validatePassword = $password.value.length >= 8 && $password.value === $repeatPassword.value
//     termsApproved = $terms.checked
// }

// // Funcion de DOM
// const handleInputs = () => {
//     $errors.innerHTML = ""
//     if (!validateFullname) {
//         $fullname.classList.add("error")
//         $errors.innerHTML += "<li>Debes completar tu nombre</li>"
//     } else {
//         $fullname.classList.remove("error")
//     }
//     if (!validateEmail) {
//         $email.classList.add("error")
//         $errors.innerHTML += "<li>Debes ingresar un email valido</li>"
//     } else {
//         $email.classList.remove("error")
//     }
//     if (!validatePassword) {
//         $password.classList.add("error")
//         $repeatPassword.classList.add("error")
//         $errors.innerHTML += "<li>La contrasena debe tener al menos 8 caracteres y deben ser identicas</li>"
//     } else {
//         $password.classList.remove("error")
//         $repeatPassword.classList.remove("error")
//     }
//     if (!termsApproved) {
//         $(".terms").style.color = "red"
//         $errors.innerHTML += "<li>Debes aceptar los terminos</li>"
//     } else {
//         $(".terms").style.color = "#000"
//     }
// }

// // Eventos
// // $fullname.addEventListener("change", () => {
// //     validateFields()
// //     handleInputs()
// // })

// $btn.addEventListener("click", (e) => {
//     e.preventDefault()
//     validateFields()
//     handleInputs()
//     if (validateFullname && validateEmail && validatePassword && termsApproved) {
//         alert(`Gracias por registarte ${$fullname.value}`)
//         $form.reset()
//     }
// })


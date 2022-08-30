const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const $fullname = $("#fullname")
const $email = $("#email")
const $password = $("#password")
const $terms = $("#terms")
const $btn = $("#btn-send")

// Expresiones regulares
// Regex -> sintaxis para establecer un patron de como queremos recibir o validar una cadena de texto

const patron = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

// .test()
// Devolver true o false si nuestra variable pasa la prueba de regex

/* 
- Fullname no este vacio
- Email usando regex
- Password tenga 8 caracteres o mas
- Los terminos esten aceptados
*/

let valorFullname, valorEmail, valorPassword, valorTerminos
// let valorEmail
// let valorPassword
// let valorTerminos

const guardarInfo = () => {
    valorFullname = $fullname.value
    valorEmail = $email.value
    valorPassword = $password.value
    valorTerminos = $terms.checked
}

const validarForm = () => {
    // Manipulacion del DOM
    if (valorFullname === "") {
        // $fullname.style.border = "2px solid red"
        // $$("p")[0].innerText = "Debes llenar este campo"
        $$("p")[0].classList.add("error-fullname")
    } else {
        $$("p")[0].classList.remove("error-fullname")
    }
    if (!patron.test(valorEmail)) {
        $email.style.border = "2px solid red"
        $$("p")[1].innerText = "Este email es invalido"
    }
    if (valorPassword.length < 8) {
        $password.style.border = "2px solid red"
        $$("p")[2].innerText = "Tu contrasena debe tener al menos 8 caracteres"
    }
    if (!valorTerminos) {
        $(".terms").style.color = "red"
        $$("p")[3].innerText = "Debes aceptar los terminos"
    }
    // Establezco para retornar verdadero o falso si pasan las validaciones
    if (valorFullname !== "" && patron.test(valorEmail) && valorPassword.length >= 8 && valorTerminos) {
        return true
    } else {
        return false
    }
}

$btn.addEventListener("click", (e) => {
    e.preventDefault()
    guardarInfo()
    // validarForm()
    const pasoElForm = validarForm()
    if (pasoElForm) {
        // envio
    } else {
        // no lo envio
    }
})
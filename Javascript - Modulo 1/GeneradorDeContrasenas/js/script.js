const $ = (id) => document.getElementById(id)
const abecedario = "abcdfghijklmnopqrstvwxyz" + "ABCDFGHIJKLMNOPQRSTVWXYZ"
const simbols = "!@#$%^&*?_+=-.,"

const generatePassword = (numChars, rules) => {
    $("pass-generator").value = ""
    let pass = ""
    for (let i = 0; i < numChars; i++) {
        let char = Math.floor(Math.random() * rules.length + 1);
        pass += rules.charAt(char)
    }
    return pass
}

$("12").addEventListener("click", () => {
    if ($("letras").checked) $("pass-generator").value = generatePassword($("12").value, abecedario)
    if ($("all-chars").checked) $("pass-generator").value = generatePassword($("12").value, abecedario + simbols)
})

$("9").addEventListener("click", () => {
    if ($("letras").checked) $("pass-generator").value = generatePassword($("9").value, abecedario)
    if ($("all-chars").checked) $("pass-generator").value = generatePassword($("9").value, abecedario + simbols)
})

$("6").addEventListener("click", () => {
    if ($("letras").checked) $("pass-generator").value = generatePassword($("6").value, abecedario)
    if ($("all-chars").checked) $("pass-generator").value = generatePassword($("6").value, abecedario + simbols)
})

$("minusculas").addEventListener("click", () => {
    $("pass-generator").value = $("pass-generator").value.toLowerCase()
})

$("mayusculas").addEventListener("click", () => {
    $("pass-generator").value = $("pass-generator").value.toUpperCase()
})

$("letras").addEventListener("click", () => {
    if ($("12").checked) $("pass-generator").value = generatePassword($("12").value, abecedario)
    if ($("9").checked) $("pass-generator").value = generatePassword($("12").value, abecedario)
    if ($("6").checked) $("pass-generator").value = generatePassword($("12").value, abecedario)
})

$("all-chars").addEventListener("click", () => {
    if ($("12").checked) $("pass-generator").value = generatePassword($("12").value, abecedario + simbols)
    if ($("9").checked) $("pass-generator").value = generatePassword($("12").value, abecedario + simbols)
    if ($("6").checked) $("pass-generator").value = generatePassword($("12").value, abecedario + simbols)    
})

$("btn-repeatPass").addEventListener("click", () => {
    let radioButtons = document.querySelectorAll("input[type=radio]")
    for (checkedBtn of radioButtons) { 
        if (checkedBtn.checked) checkedBtn.checked = false
    }
    $("pass-generator").value = ""
})

$("btn-copyToClipBoard").addEventListener("click", () => {
    const textToCopy = $("pass-generator").value
    navigator.clipboard.writeText(textToCopy)
})
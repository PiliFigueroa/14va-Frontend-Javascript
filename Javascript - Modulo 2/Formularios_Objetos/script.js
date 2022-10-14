const $ = (selector) => document.querySelector(selector)

let usuarios = []

const userInfo = () => {
    const fullname = $("#fullname").value
    const email = $("#email").value
    
    return {
        fullname,
        email
    }
}

const generateTable = () => {
    $("#table").innerHTML = ""
    usuarios.map(usuario => {
        const { fullname, email } = usuario
        $("#table").innerHTML += `
            <tr>
                <td>#</td>
                <td>${fullname}</td>
                <td>${email}</td>
            </tr>
        `
    })
}

$("#send").addEventListener("click", () => {
    usuarios.push(userInfo())
    generateTable()
})
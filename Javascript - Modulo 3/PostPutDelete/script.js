// POST PUT DELETE

// const user = {
//     name: "TEST 2",
//     age: 20,
//     email: "asd@asdtest.com"
// }

// POST => Agrega informacion nueva a nuestra api
// fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users`, {
//     method: "POST",
//     headers: {
//         'Content-Type': 'Application/json'
//     },
//     body: JSON.stringify(user)
// })

// PUT => edita informacion existente (hay que pasarle id)
// fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/1`, {
//     method: "PUT",
//     headers: {
//         'Content-Type': 'Application/json'
//     },
//     body: JSON.stringify(user)
// })

// DELETE => elimina una informacion (hay que pasarle id)
// fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/26`, {
//     method: "DELETE"
// })

// INICIO PRACTICA DE USUARIOS

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const hideElement = (selector) => selector.classList.add("d-none")
const showElement = (selector) => selector.classList.remove("d-none")

let isSubmit = false

// METHODS
// const getUsers = () => {
//     fetch("https://624f3f05bdda77e9a9bc0f10.mockapi.io/users")
//         .then(res => res.json())
//         .then(data => renderUsers(data))
//         .catch(() => alert("La db no esta disponible en este momento"))
// }
// getUsers()

const getUser = (userId = "") => {
    fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${userId}`)
        .then(res => res.json())
        .then(data => {
            if (userId === "") {
                renderUsers(data)
            } else {
                populateForm(data)
            }
        })
}
getUser()

const registerUser = () => {
    fetch("https://624f3f05bdda77e9a9bc0f10.mockapi.io/users", {
        method: "POST",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(saveUser())
    }).finally(() => window.location.href = "index.html")
}

const editUser = (userId) => {
    fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${userId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(saveUser())
    }).finally(() => window.location.href = "index.html")
}

const deleteUser = (userId) => {
    fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${userId}`, {
        method: "DELETE"
    }).finally(() => window.location.href = "index.html")
}

const saveUser = () => {
    return {
        name: $("#name").value,
        age: $("#age").value,
        email: $("#email").value
    }
}

// DOM
const renderUsers = (users) => {
    for (const { id, name, age, email } of users) {
        $("#container-table").innerHTML += `
            <tr>
                <td>#${id}</td>
                <td>${name}</td>
                <td>${age}</td>
                <td>${email}</td>
                <td>
                    <button class="btn btn-success btn-edit" data-id="${id}">Edit</button>
                    <button class="btn btn-danger btn-delete" data-id="${id}">Delete</button>
                </td>
            </tr>
        `
    }

    for (const btn of $$(".btn-edit")) {
        btn.addEventListener("click", () => {
            isSubmit = false
            hideElement($("#submit"))
            const userId = btn.getAttribute("data-id")
            $("#submit-edit").setAttribute("data-id", userId)
            getUser(userId)
        })
    }

    for (const btn of $$(".btn-delete")) {
        btn.addEventListener("click", () => {
            hideElement($(".table"))
            showElement($("#alert"))
            const userId = btn.getAttribute("data-id")
            $("#user-selected").innerHTML = userId
            $("#submit-delete").setAttribute("data-id", userId)
        })
    }
}
const populateForm = (user) => {
    hideElement($(".table"))
    showElement($("#form"))
    $("#name").value = user.name
    $("#age").value = user.age
    $("#email").value = user.email
}

// EVENTS
$("#show-form").addEventListener("click", () => {
    hideElement($(".table"))
    showElement($("#form"))
    hideElement($("#submit-edit"))
    showElement($("#submit"))
    $("#form").reset()
    isSubmit = true
})

$("#form").addEventListener("submit", (e) => {
    e.preventDefault()
    if (isSubmit) {
        registerUser()
    } else {
        const userId = $("#submit-edit").getAttribute("data-id")
        editUser(userId)
    }
})

$("#submit-delete").addEventListener("click", () => {
    const userId = $("#submit-delete").getAttribute("data-id")
    deleteUser(userId)
})

$(".btn-secondary").addEventListener("click", () => {
    hideElement($("#alert"))
    showElement($(".table"))
})
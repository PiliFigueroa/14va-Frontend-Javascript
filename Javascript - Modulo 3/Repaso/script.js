// fetch() => devuelve una promise
// GET, POST, PUT, DELETE

// const getUsersWithAsyncAwait = async (userId = "") => {
//     const response = await fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${userId}`)
//     const users = await response.json()
//     return users
// }

// getUsersWithAsyncAwait().then(data => listUsers(data))

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const getUsers = () => {
    fetch("https://624f3f05bdda77e9a9bc0f10.mockapi.io/users")
        .then(res => res.json())
        .then(data => {
            listUsers(data)
        })
}

getUsers()

// const getUser = (id) => {
//     fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${id}`)
//         .then(res => res.json())
//         .then(data => {
//                 viewUserDetail(data)
//         })
// }

const getUser2 = async (id) => {
    const response = await fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${id}`)
    const user = await response.json()
    return user
}

const editUser = (id) => {
    fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(saveUserInfo())
    }).finally(() => window.location.href = "index.html")
}

const submitUser = () => {
    fetch("https://624f3f05bdda77e9a9bc0f10.mockapi.io/users", {
        method: "POST",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(saveUserInfo2())
    })
}

const deleteUser = (id) => {
    fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${id}`, {
        method: "DELETE"
    }).finally(() => window.location.href = "index.html")
}

const saveUserInfo = () => {
    return {
        name: $("#name").value,
        age: $("#age").value,
        email: $("#email").value
    }
}

const saveUserInfo2 = () => {
    return {
        name: $("#name-send").value,
        age: $("#age-send").value,
        email: $("#email-send").value
    }
}

const listUsers = (users) => {
    for (const { id, name, age, email } of users) {
        $("#container-cards").innerHTML += `
            <div class="card ${age > 25 ? "bg-secondary" : "bg-warning"}" style="width: 18rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrwXhr_qsBUVpDOaVcmfwmY94l8UYSCnEdOmS3HwzPz7igarTyNZFC0MC0ccWQXtVqMw&usqp=CAU" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">Age: ${age}.</p>
                    <p class="card-text">Email: ${email}.</p>
                    <a href="#" class="btn btn-primary btn-detail" data-id="${id}">Details</a>
                    <a href="#" class="btn btn-success btn-edit" data-id="${id}">Edit</a>
                    <a href="#" class="btn btn-danger btn-delete" data-id="${id}">Delete</a>
                </div>
            </div>
        `
    }

    for (const btn of $$(".btn-detail")) {
        btn.addEventListener("click", () => {
            const userId = btn.getAttribute("data-id")
            getUser2(userId).then(data => viewUserDetail(data))
        })
    }

    for (const btn of $$(".btn-edit")) {
        btn.addEventListener("click", () => {
            const userId = btn.getAttribute("data-id")
            $("#submit").setAttribute("data-id", userId)
            getUser2(userId).then(data => showForm(data))
        })
    }

    for (const btn of $$(".btn-delete")) {
        btn.addEventListener("click", () => {
            const userId = btn.getAttribute("data-id")
            deleteUser(userId)
        })
    }
}

const viewUserDetail = (user) => {
    $("#container-cards").innerHTML = `
        <h1>${user.name}</h1>
    `
}

const showForm = (user) => {
    $("#container-cards").innerHTML = ""
    $("#form").classList.remove("d-none")
    $("#name").value = user.name
    $("#age").value = user.age
    $("#email").value = user.email
}

$("#form").addEventListener("submit", (e) => {
    e.preventDefault()
    const id =  $("#submit").getAttribute("data-id")
    editUser(id)
})

$("#form-send").addEventListener("submit", (e) => {
    e.preventDefault()
    submitUser()
})

$("#post-method").addEventListener("click", () => {
    $("#container-cards").innerHTML = ""
    $("#form-send").classList.remove("d-none")
})
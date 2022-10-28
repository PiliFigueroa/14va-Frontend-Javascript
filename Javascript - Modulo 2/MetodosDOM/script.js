const products = [
    {
        id: "1a4g-6k78",
        name: "Backpack",
        price: 11000,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        category: "accesories",
        free_shipping: true
    },
    {
        id: "2h6j-6k7j",
        name: "Ring",
        price: 25000,
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        category: "jewelery",
        free_shipping: false
    },
    {
        id: "1u8d-8j4b",
        name: "ROM Memory",
        price: 9990,
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        category: "electornics",
        free_shipping: true
    },
    {
        id: "0d3j-4j7k",
        name: "Rock and roll badass jacket",
        price: 15250,
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        category: "womens",
        free_shipping: false
    },
    {
        id: "9l2d-4n6u",
        name: "Winter Jacket",
        price: 16090,
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        category: "womens",
        free_shipping: true
    },
]

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const $container = $("#container-products")
const $form = $("#form")
const $btnEdit = $("#btn-edit")
const $btnDelete = $("#btn-delete")
/*
const generateCards = (products) => {
    products.map(product => {
        const { id, name, price, image, category } = product
        $container.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${image}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}<span class="badge bg-danger capitalize">${category}</span></h5>
                    <p class="card-text">$${price}</p>
                    <button class="btn btn-success" onclick="formEdit(${id})">Edit</button>
                </div>
            </div>
        `
    })
}
*/

const generateCards = () => {
    for (const { id, name, price, image, category, free_shipping } of products) {
        const div = document.createElement("div")
        div.classList.add("card")
        div.setAttribute("style", "width: 300px;")
        div.innerHTML = `
            <img src="${image}" class="card-img-top" alt="${name}">
            <div class="card-body">
                <h5 class="card-title">${name}<span class="badge bg-danger capitalize">${category}</span></h5>
                <p class="card-text">$${price}</p>
                ${free_shipping ? '<span class="badge bg-warning capitalize">Envio gratis! :)</span>' : ""}               
                <button class="btn btn-success btn-edit" data-id="${id}">Edit</button>
            </div>
        `
        $container.append(div)
    }

    const btnEdit = $$(".btn-edit")

    for (const btn of btnEdit) {
        const productId = btn.getAttribute("data-id")
        btn.addEventListener("click", () => formEdit(productId))
    }
}

generateCards()

const findProduct = (id) => {
    return products.find(product => product.id === id)
}

const cleanCards = () => $container.innerHTML = ""

const formEdit = (id) => {
    cleanCards()
    $form.classList.remove("d-none")
    const chosenProduct = findProduct(id)
    $("#name").value = chosenProduct.name
    $("#image").value = chosenProduct.image
    $("#category").value = chosenProduct.category
    $("#price").value = chosenProduct.price
    $btnEdit.setAttribute("data-id", id)
    $btnDelete.setAttribute("data-id", id)
}

const removeProduct = (id) => {
    return products.filter(product => product.id !== parseInt(id))
}

const saveProductData = (id) => {
    return {
        id: id,
        name: $("#name").value,
        image: $("#image").value,
        category: $("#category").value,
        price: $("#price").value
    }
}

const editProduct = (id) => {
    return products.map(product => {
        if (product.id === parseInt(id)) {
            return saveProductData(id)
        }
        return product
    })
}

$btnDelete.addEventListener("click", () => {
    const productId = $btnDelete.getAttribute("data-id")
    $form.classList.add("d-none")
    generateCards(removeProduct(productId))
})

$btnEdit.addEventListener("click", () => {
    const productId = $btnEdit.getAttribute("data-id")
    $form.classList.add("d-none")
    generateCards(editProduct(productId))
})
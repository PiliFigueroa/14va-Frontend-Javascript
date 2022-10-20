const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const $container = $("#container-products")
const $$categoryButtons = $$(".btn")

let cart = []

const addToCart = (id) => {
    const chosenProduct = findProduct(id)
    if (isInCart(id)) {
        cart = cart.map(product => {
            if (product.id === id) {
                const newQuantity = product.quantity + 1
                return {...product, quantity: newQuantity}
            }
            return product
        })
    } else {
        const newProduct = {...chosenProduct, quantity: 1}
        cart.push(newProduct)
    }
}

const cleanContainer = (selector) => selector.innerHTML = ""

const generateCards = (products) => {
    cleanContainer($container)
    products.map(({id, image, name, price, category}) => {
        $container.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${image}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}<span class="badge bg-danger">${category}</span></h5>
                    <p class="card-text">$${price}</p>
                    <a href="#" class="btn btn-secondary" onclick="productDetail(${id})">Ver Detalle</a>
                </div>
            </div>
        `
    })
}

const productDetail = (productId) => {
    cleanContainer($container)
    const { id, name, image, price, category, description } = findProduct(productId)
    $container.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${image}" class="img-fluid rounded-start" alt="${name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <span class="badge bg-danger">${category}</span>
                        <p class="card-text">${description}</p>
                        <p class="card-text">$${price}</p>
                        <button class="btn btn-primary" onclick="addToCart(${id})">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    `
}

generateCards(products)

const filterByCategory = (categoryId) => {
    return products.filter(({category}) => category === categoryId)
}

const findProduct = (productId) => products.find(({id}) => id === productId)

const isInCart = (productId) => cart.some(({id}) => id === productId)

const cleanCart = () => cart = []

const removeProduct = (productId) => products.filter(({id}) => id !== productId)

for (const button of $$categoryButtons) {
    button.addEventListener("click", () => {
        generateCards(filterByCategory(button.innerText.toLowerCase()))
    })
}
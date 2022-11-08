// Fetch => then, catch, finally
// Promises => pending, rejected, fullfilled
// Endpoint

// Methods => GET, POST, PUT, DELETE

// Como se arma una URL con parametros
// BASE_URL ? (el signo da comienzo al primer parametro) nombreDelParametro = valorDelParametro & siguienteParametro = valorDelParametro

const $ = (selector) => document.querySelector(selector)
const BASE_URL = "https://rickandmortyapi.com/api/"

let page = 1

const getCharacters = (endpoint) => {
    fetch(`${BASE_URL}${endpoint}`)
        .then(response => response.json())
        .then(data => showCharacters(data.results))
        .catch(error => {
            $("p").innerHTML = "No es posible acceder a los personajes en este momento"
        })
}

const getCharacter = (characterId) => {
    fetch(`${BASE_URL}character/${characterId}`)
        .then(response => response.json())
        .then(data => showCharacterDetail(data))
}

getCharacters(`character?page=${page}`)

const showCharacters = (characters) => {
    $("p").innerHTML = `<div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>`
    if (characters) {
        $("p").innerHTML = ""
        $("#cards").innerHTML = ""
        for (const { id, gender, image, name, species, status } of characters) {
            $("#cards").innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${image}" class="card-img-top" alt="Avatar de ${name}">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">Gender: ${gender}</p>
                        <p class="card-text">Status: ${status}</p>
                        <p class="card-text">Species: ${species}</p>
                        <a href="#" class="btn btn-primary" onclick="getCharacter(${id})">Ver detalles</a>
                    </div>
                </div>
            `
        }
    } else {
        $("p").innerHTML = "No encontre la informacion"
    }
}

const showCharacterDetail = (character) => {
    const { gender, image, name, species, status } = character
    $("#cards").innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">Gender: ${gender}</p>
                        <p class="card-text">Status: ${status}</p>
                        <p class="card-text">Species: ${species}</p>
                    </div>
                </div>
            </div>
        </div>
    `
}

const nextPage = () => {
    page = page + 1
}

const prevPage = () => {
    if (page > 1) {
        page = page - 1
    }
}

$("#prev").addEventListener("click", () => {
    prevPage()
    getCharacters(`character?page=${page}`)
})
$("#next").addEventListener("click", () => {
    nextPage()
    getCharacters(`character?page=${page}`)
})
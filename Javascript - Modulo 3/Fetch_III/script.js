// DOCUMENTATION https://developers.themoviedb.org/3/getting-started/introduction

// Para obtener una api key deben registrarse con un email y contrasena, solicitar la api key poniendo que son estudiantes o alguna opcion similar.

// ENDPOINTS (existen muchos mas, hoy usamos estos)
// http://api.themoviedb.org/3/movie/popular?api_key=36162ff97a309ab9150e20a5b14f5094
// http://api.themoviedb.org/3/movie/top_rated?api_key=36162ff97a309ab9150e20a5b14f5094
// http://api.themoviedb.org/3/movie/upcoming?api_key=36162ff97a309ab9150e20a5b14f5094

// Se puede agregar el parametro page &page=1 luego de la api key

/*
    Crear una app que muestre las peliculas.
    Que tenga una navegacion para acceder a las peliculas popular, top rated y upcoming, por lo tanto cada boton tiene que triggerear el endpoint respectivo.
    Crear paginacion para ver las distintas pages.
*/

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const API_KEY = "36162ff97a309ab9150e20a5b14f5094"
let current_endpoint = ""
let total_pages;

const getMovies = (endpoint, page) => {
    fetch(`http://api.themoviedb.org/3/movie/${endpoint}?api_key=${API_KEY}&page=${page ? page : "1"}`)
        .then(res => res.json())
        .then(data => {
            total_pages = data.total_pages
            handlePage(data)
            renderMovies(data.results)
        })
}

const cleanContainer = (selector) => selector.innerHTML = ""

const handlePage = (data) => {
    $("#total-results").innerHTML = data.total_results
    $("#current-page").innerHTML = data.page
}

const renderMovies = (movies) => {
    cleanContainer($("#container-movies"))
    for (const movie of movies) {
        const { backdrop_path, original_title, adult, overview, release_date } = movie
        $("#container-movies").innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${backdrop_path ? `https://image.tmdb.org/t/p/w300/${backdrop_path}` : "http://placekitten.com/g/300/300"}" class="card-img-top" alt="${original_title}">
            <div class="card-body">
                <h5 class="card-title">${original_title}</h5>
                <p class="card-text">${overview}</p>
                <p class="card-text">${adult ? "+18" : "ATP"}</p>
                <p class="card-text">${release_date}</p>
            </div>
        </div>
        `
    }
}

/* total-results // current-page */

for (const btn of $$(".btn-primary")) {
    btn.addEventListener("click", () => {
        $("#pagination").classList.remove("d-none")
        getMovies(btn.name)
        current_endpoint = btn.name
    })
}

$("#next").addEventListener("click", () => {
    let current_page = parseInt($("#current-page").innerHTML) + 1
    $("#prev").removeAttribute("disabled")
    if (current_page <= total_pages) {
        getMovies(current_endpoint, current_page)
    }
    if (current_page === total_pages) {
        $("#next").setAttribute("disabled", true)
    }
})

$("#prev").addEventListener("click", () => {
    let current_page = parseInt($("#current-page").innerHTML) - 1
    $("#next").removeAttribute("disabled")
    if (current_page > 0) {
        getMovies(current_endpoint, current_page)
    }
    if (current_page === 1) {
        $("#prev").setAttribute("disabled", true)
    }
})
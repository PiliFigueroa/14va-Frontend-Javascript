// https://pokeapi.co/api/v2/

const $ = (selector) => document.querySelector(selector)

const searchPokemon = (pokemonName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then(res => res.json())
        .then(data => generateCard(data))
        .catch(() => pokemonNotFound())
}

const generateCard = (pokemon) => {
    const { sprites, stats, name } = pokemon
    $("#pokemon-card").innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${sprites.front_default}" id="pokemon-img" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${stats[0].stat.name}: ${stats[0].base_stat}</p>
                <p class="card-text">${stats[1].stat.name}: ${stats[1].base_stat}</p>
                <p class="card-text">${stats[2].stat.name}: ${stats[2].base_stat}</p>
            </div>
        </div>
    `

    $("#pokemon-img").addEventListener("click", (e) => {
        if (e.target.src === sprites.front_default) {
            e.target.src = sprites.back_default
        } else {
            e.target.src = sprites.front_default
        }
    })
}

const pokemonNotFound = () => {
    $("#pokemon-card").innerHTML = `
        <div class="alert alert-danger d-flex align-items-center" role="alert">
            <div>
                Porfa tipea bien peregil
            </div>
        </div>
    `
}

$("#btn").addEventListener("click", () => {
    searchPokemon($("#search").value)
})
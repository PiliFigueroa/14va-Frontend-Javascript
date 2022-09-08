// Data
const players = [
    ["Rojo", "Faker", "Mid", 21, "Korea"],
    ["Azul", "Doublelift", "ADC", 23, "Korea"],
    ["Azul", "Smeb", "Top", 22, "Korea"],
    ["Rojo", "Deft", "ADC", 21, "Korea"],
    ["Rojo", "Perkz", "Top", 25, "Europa"],
    ["Rojo", "Armani", "Support", 21, "Korea"],
    ["Azul", "Mata", "Support", 18, "Korea"],
    ["Rojo", "Quintero", "Mid", 21, "Korea"],
    ["Azul", "Mantarraya", "Top", 25, "LAS"],
    ["Azul", "xPeke", "Mid", 27, "Europa"]
]

// Variables
const $ = (selector) => document.querySelector(selector)

const $table = $("#table")
const $btn = $("#btn")
const $select = $("#select")

/* Creo un elemento y le digo en donde lo quiero inyectar con appendChild */
// const btn = document.createElement("button")
// $table.appendChild(btn)

// filter()
const filterTeams = (selection) => {
    let selectedTeam = []
    for (const player of players) {
        if (player[0] === selection) {
            selectedTeam.push(player)
        }
    }
    if (selection === "Todos") {
        selectedTeam = players
    }
    return selectedTeam
}

const generateTable = () => {
    const team = filterTeams($select.value)
    cleanTable()
    for (const player of team) {
        const tr = document.createElement("tr")
        for (const element of player) {
            tr.innerHTML += `<td>${element}</td>`
        }
        $table.appendChild(tr)
    }
}

const cleanTable = () => $table.innerHTML = ""

generateTable()

// Events
$btn.addEventListener("click", generateTable)
// Async-Await
// https://rickandmortyapi.com/api/character

// const getCharacters = async () => {
//     const response = await fetch("https://rickandmortyapi.com/api/character")
//     const characters = await response.json()
//     return characters
// }

// getCharacters().then(data => console.log("manera 1:", data))

// const getCharacters2 = () => {
//     return fetch("https://rickandmortyapi.com/api/character")
//         .then(res => res.json())
// }

// getCharacters2().then(data => console.log("manera 2:", data))

const getNews = async () => {
    const response = await fetch("https://newsapi.org/v2/everything?q=Apple&from=2022-11-16&sortBy=popularity&apiKey=560269476aba4524b5bfc6fb26b7d99a")
    const news = await response.json()
    return news
}

getNews().then(data => console.log(data))

// Promises

// const condition = true
// const products = [
//     {
//         name: "asd"
//     },
//     {
//         name: "asd"
//     },
//     {
//         name: "asd"
//     },
//     {
//         name: "asd"
//     },
// ]

// const promise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve(products)
//     } else {
//         reject("No estan disponibles en este momento")
//     }
// })

// promise.then(data => console.log(data))
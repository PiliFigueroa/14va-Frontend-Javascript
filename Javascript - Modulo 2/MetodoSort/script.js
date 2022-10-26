const fruits = ["Watermelon", "Apple", "Orange"]
const numbers = [20, -3, 17, 5, 48, -10]

// Para ordenar numericamente
// a - b ordena de menor a mayor
// b - a ordena de mayor a menor

// console.log(numbers.sort((a, b) => a - b))
// console.log(numbers.sort((a, b) => b - a))

// Para ordenar alfabeticamente
// a < b return -1, a > b return 1, sino return 0 => ordena A/Z
// a < b return 1, a > b return -1, sino return 0 => ordena Z/A

// console.log(fruits.sort())
// console.log(fruits.sort().reverse())

const users = [
    {
        name: "Juan Pablo",
        profession: "Developer",
        salary: 200000
    },
    {
        name: "Miriam Alonso",
        profession: "QA",
        salary: 180000
    },
    {
        name: "Agostina Tevez",
        profession: "Technical Leader",
        salary: 230000
    },
    {
        name: "Kevin Lobos",
        profession: "Functional Analyst",
        salary: 190000
    }
]

// console.log(users.sort((a, b) => a.salary - b.salary))
// console.log(users.sort((a, b) => b.salary - a.salary))

/*
console.log(users.sort((a, b) => {
    if (a.name < b.name) {
        return -1
    }
    if (a.name > b.name) {
        return 1
    }
    return 0
}))

console.log(users.sort((a, b) => {
    if (a.name > b.name) {
        return -1
    }
    if (a.name < b.name) {
        return 1
    }
    return 0
}))
*/
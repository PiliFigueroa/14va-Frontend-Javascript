// const date = new Date()

// console.log(date)

// Methods
// console.log(date.getDay())
// console.log(date.getMonth())
// console.log(date.getFullYear())
// console.log(date.getDate())

// console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)

const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

// console.log(formatDate(date))

const formatDate2 = (date, symbol) => {
    const arrayDate = [date.getDate(), date.getMonth() + 1, date.getFullYear()]
    return arrayDate.join(symbol)
}

// console.log(formatDate2(date, "/"))
// console.log(formatDate2(date, "-"))
// console.log(formatDate2(date, "."))

const date = document.querySelector("#date")

date.addEventListener("change", (e) => {
    const newDate = e.target.value
    console.log(newDate.split("-").reverse().join("/"))
})
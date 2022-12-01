const tables = document.querySelectorAll(".table")

const countTds = () => {
    if (tables.length === 0) {
        return 0
    }
    let count = 0
    let countedTables = []
    for (const table of tables) {
        let rows = table.children[0].children
        for (const row of rows) {
            count += row.children.length
        }
        countedTables.push(count)
        count = 0
    }
    return Math.max(...countedTables)
}

console.log(countTds())
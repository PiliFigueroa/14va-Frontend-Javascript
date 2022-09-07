// const especies = ["🍋", "🍒", "🍑", "🥥","🥑", "🥔", "🌽", "🌶️", "🍄", "🥦", "🍆"]
const productos = ["🍋", "🍒", "🍑","🍒","🍒", "🥥", "🍋", "🍋", "🍒", "🍑","🍋", "🍋", "🍑", "🥥","🍋", "🍒", "🍑", "🥥","🍋", "🍒", "🍑","🍋", "🍋", "🥥","🍋", "🍒", "🍑", "🥥", "🥥","🥑", "🥔", "🌽", "🌶️", "🥦", "🍆","🥑", "🥔", "🌽", "🥔", "🌽", "🌶️", "🥦", "🍆", "🥦", "🍆", "🥦", "🍆","🥑", "🍄"]

/* consultarStock() que reciba un producto. La funcion debe devolver true/false segun si hay o no hay stock del producto. */

const consultarStock = (alimento) => {
    for (const producto of productos) {
        if (producto === alimento) {
            return true
        }
    }
    return false
}

// Solucion corta
// const consultarStock2 = (alimento) => productos.includes(alimento)

//consultarStock("🍋") // true/false
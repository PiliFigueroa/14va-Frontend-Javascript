import './App.css'
import { products } from './data/products'
import { Card, BotonGato, TarjetaGato, CardStyled } from './components'


function App() {

  return (
    <>
      {products.map(product => 
        <CardStyled 
            key={product.id}
            title={product.title}
            type={product.type}
            price={product.price}
            img={product.img}
            rating={product.rating} 
            isAvailable={product.isAvailable}
            onSale={product.onSale}
          />)}
    </>
  )
}

export default App

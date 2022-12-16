import './App.css'
import { Counter } from './components/Counter'
import { Boton } from './components/Boton'
import { CardButtons } from './components/CardButtons'
import { Accordion } from './components/Accordion'
import { buttons } from './data/buttons'

function App() {

  return (
    <>
      {/* <Counter /> */}
      {/* <Boton /> */}
      {/* {buttons.map(button => <CardButtons key={button.id} button={button} />)} */}
      <Accordion />
    </>
  )
}

export default App

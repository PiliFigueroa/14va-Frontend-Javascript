import './App.css'
import { Form } from './components/Form'
import { useState } from 'react'

function App() {

  const [color, setColor] = useState("")
  const [background, setBackground] = useState("")

  const handleClick = () => {
    setBackground(color)
  }

  return (
    <div style={{
      backgroundColor: background,
      height: "100vh"
    }}>
      <Form color={color} setColor={setColor} handleClick={handleClick} buttonText="Cambiar Color" />
    </div>
  )
}

export default App

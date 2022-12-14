import { useState } from 'react'
import { Button, Text, HStack } from '@chakra-ui/react'
import { addScaleCorrector } from 'framer-motion'

const Boton = () => {

    const [color, setColor] = useState(true)

    return(
        <Button colorScheme={color ? "teal" : "red"} onClick={() => setColor(!color)}>Boton</Button>
    )
}

export { Boton }
import { Input, Button, HStack } from '@chakra-ui/react'

const Form = ({ color, setColor, handleClick, buttonText }) => {

    return(
        <HStack>
            <Input type="text" placeholder='Ingrese un color' value={color} onChange={(e) => setColor(e.target.value)}></Input>
            <Button colorScheme="pink" size="xs" onClick={handleClick}>{buttonText ? buttonText : "Default Text"}</Button>
        </HStack>
    )
}

export { Form }
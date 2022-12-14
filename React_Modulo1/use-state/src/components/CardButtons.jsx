import { Text, VStack, HStack } from '@chakra-ui/react'
import fullStar from '../assets/llena.png'
import emptyStar from '../assets/vacia.png'

const CardButtons = ({ button }) => {

    const { title, description, style, stars } = button
    const totalStars = [1, 2, 3, 4, 5]

    return(
        <VStack border='1px' borderColor='gray.400' m="20px" borderRadius="5px" p="10px">
            <button style={style}>{title}</button>
            <HStack>
                {totalStars.map(star => <img 
                    src={star <= stars ? fullStar : emptyStar}
                    width="15px"
                />)}
            </HStack>
            <Text>{description}</Text>
        </VStack>
    )
}

export { CardButtons }
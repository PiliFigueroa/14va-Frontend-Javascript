import { Button, HStack, VStack, Heading, Text, Image } from '@chakra-ui/react'

const Card = ({ title, type, price, img, rating, isAvailable, onSale }) => {

    return(
        <VStack as="article">
            <Heading>{title} {onSale && <span>ON SALE!</span>}</Heading>
            <Image src={img} />
            <Text>${price}</Text>
            <HStack>
                <Button colorScheme='teal' size='xs'>Ver Detalle</Button>
                <Button colorScheme='red' size='xs'>Comprar</Button>
            </HStack>
        </VStack>
    )
}

export { Card }
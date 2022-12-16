import { Text, Heading } from '@chakra-ui/react'
import { useState } from 'react'

const Accordion = () => {

    const [show, setShow] = useState(false)

    return(
        <>
            <Heading onClick={() => setShow(!show)}>Titulo</Heading>
            {show && <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit repudiandae aliquam numquam doloribus quasi ex hic praesentium, inventore animi sunt suscipit ipsam unde dolorem quas autem architecto nobis nostrum.</Text>}
        </>
    )
}

export { Accordion }
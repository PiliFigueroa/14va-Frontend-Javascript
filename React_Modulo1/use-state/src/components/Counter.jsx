import { useState } from 'react'
import { Button, Text, HStack } from '@chakra-ui/react'

const Counter = () => {

  const [count, setCount] = useState(0)

  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => count > 0 && setCount(count - 1)

  return (
    <HStack>
      <Button size="xs" colorScheme="red" onClick={decreaseCount}>-</Button>
      <Text>{count}</Text>
      <Button size="xs" colorScheme="teal" onClick={increaseCount}>+</Button>
    </HStack>
  )
}

export { Counter }
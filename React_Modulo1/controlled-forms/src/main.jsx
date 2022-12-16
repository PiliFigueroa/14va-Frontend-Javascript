import React from 'react'
import ReactDOM from 'react-dom/client'
import { App2 } from './App2'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App2 />
    </ChakraProvider>
  </React.StrictMode>,
)

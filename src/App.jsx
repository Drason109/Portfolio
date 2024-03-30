import { useState } from 'react'
import Navbar from './Componets/Navbar'
import Footer from './Componets/Footer'
import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* App div */}
    <Flex flexDirection='column' justifyContent='center' margin='0px 18rem' bg='#e8e9e9' border='1px solid black' borderRadius='3px'>
     <Navbar />
     {/* body divs */}
     <Flex justifyContent='center'>
     <Outlet />
     </Flex>
     <Footer />
     </Flex>
    </>
  )
}

export default App

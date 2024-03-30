import React from "react";
import { Flex,Heading,Text,Link} from "@chakra-ui/react";

const Contact = () => {
    return(
        // Contact div for the contact page
    <Flex flexDirection='column' justifyContent='center' paddingBottom='24rem'>
        {/* LinkEd section */}
        <Heading textAlign='center' margin='20px 12rem' borderBottom="4px outset #a3a3a3" borderRight='4px outset #a3a3a3' borderRadius='20px' borderTop='1px solid black' borderLeft='1px solid black'>Contact</Heading>
        <Flex flexDirection='column' border='2px solid black' height='15rem' width='36rem' justifyContent='center'>
        <Flex justifyContent='center'>
            <Heading fontSize='30px' margin='0 10px'>LinkEd</Heading>
            <Text fontSize='20px' borderLeft='5px outset #a3a3a3' borderRight='5px inset #a3a3a3' borderRadius='10px'><a href="https://www.linkedin.com/in/edwin-pena-holguin-29b884162">linkedin.com/in/edwin-pena-holguin-29b884162</a></Text>
        </Flex>
        {/* Email section */}
        <Flex justifyContent='center'>
            <Heading fontSize='30px' margin='0 10px'>Email</Heading>
            <Text fontSize='25px' borderLeft='5px outset #a3a3a3' borderRight='5px inset #a3a3a3' borderRadius='10px'>Penaedwin77@gmail.com</Text>
        </Flex>
        {/* Cellphone section */}
        <Flex justifyContent='center'>
            <Heading fontSize='30px' margin='0 10px'>CellPhone</Heading>
            <Text fontSize='25px' borderLeft='5px outset #a3a3a3' borderRight='5px inset #a3a3a3' borderRadius='10px'>602-350-9848</Text>
        </Flex>
      
        </Flex>
    </Flex>
    )
}

export default Contact;
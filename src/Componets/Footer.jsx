import React from "react";
import {Box, Center,Text, Link as ChakraLink} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";


const Footer = () => {
    return (
        // footer div that contains the contact page link
        <Box 
         bg='#7bd1f3'
         borderRadius='4px'
         margin='19px 0px 0px 0px'
         >
            <Center>
                <Text color='white'>
                    If you have any questions, <ChakraLink as={ReactRouterLink} to='/Contact' color='blue'>Click here</ChakraLink> for my Contact info
                </Text>
            </Center>
        </Box>
    )
}

export default Footer;

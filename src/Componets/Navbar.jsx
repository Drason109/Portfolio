import React from "react";
import {Link as ReactRouterLink} from "react-router-dom";
import {Tabs, TabList,Tab, Flex,Heading,Center, Link as ChakraLink} from "@chakra-ui/react";



const Navbar = () => { //the Navbar the house the heading and tabs for other pages
    return (
        <Flex justifyContent="center" color="white">
            {/* div for the navbar  */}
            <Flex bg="#7bd1f3" justifyContent="space-between" p='0 2px' width="85rem" height='70px' borderRadius='4px'>
            {/* Heading */}
            <Center>
                <Heading fontSize='30px' p="5px" bgGradient='linear(to-l, #BEE3F8, #63B3ED' fontFamily={['Nono Serif', 'serif']} >Edwin Pena Holguin</Heading>
            </Center>
            {/* Tabs to other parts of the page */}
            <Center>
        <Tabs>
            <TabList>
                <ChakraLink as={ReactRouterLink} to='/'><Tab>About Me</Tab></ChakraLink>
                <ChakraLink as={ReactRouterLink} to='/Project'><Tab>Projects</Tab></ChakraLink>
                <ChakraLink as={ReactRouterLink} to='/Resume'><Tab>Resume</Tab></ChakraLink>
            </TabList>
        </Tabs>
        </Center>
        </Flex>
        </Flex>
    )
}

export default Navbar;
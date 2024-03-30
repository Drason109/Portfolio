import React from "react";
import Photo from "../Componets/assists/profile.jpg"
import {Box, Flex, Heading, Image, Text} from "@chakra-ui/react";
const AboutMe = () => {
    return(
        // div for the about me section
        <Box>
            <Heading textAlign='center' margin='10px 34rem' border='2px solid #a3a3a3' borderRadius='10px'>About Me</Heading>
            
            <Flex flexDirection='row' justifyContent='center' margin='6rem 5rem' border='5px groove #a3a3a3' borderRadius='10px'>
                <Image src={Photo} alt="Author's Profile Picture" boxSize='150px' borderRadius='24px' boxShadow='dark-lg' margin='38px 0 10px 17px'/>
                
                <Text fontSize='lg' margin='10px 10px' borderLeft='5px outset #a3a3a3' paddingLeft='10px' borderRadius='10'>
                    Hello my name is Edwin, and I am a Full Stack Developer. I love to interact with technology since owning my first laptop.
                    It has always fascinated me how people were able to create websites and software for computer, that made it do complex things.
                    I started my Coding journey back in high school, When I started a program, called West-Mec, that taught me to be a website Developer.
                    I graduated from the program with 2 certifications in 2018. After that, I made some projects and learn some language like python and C#.
                    In 2023, I took another program in ASU. They taught me the foundation of full stack development and recieved a certifications for Full-stack Developer in 2024.
                    I'm constantly trying to learn different ways to Code,structure, and maintain working application. I would like to improve in my coding skills to help myself improve
                    as a developer and to assist my team. 
                </Text>
            </Flex>
        </Box>
    )
}

export default AboutMe;
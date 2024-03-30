import React from "react";
import {Flex,Heading,Image,UnorderedList,ListItem,Text,Center} from '@chakra-ui/react'
import WestMec from '../Componets/assists/West-Mec.png';
import ASUBadge from '../Componets/assists/ASU Badge.png'


function Resume(){
    return(
        <Flex flexDirection='column'>
            {/* Title */}
              <Heading fontSize="2.5rem" textAlign="center" margin='10px 20rem' borderLeft='1px solid black' borderBottom='3px solid #000000de' borderRight='3px solid #000000de' borderTop='1px solid black' borderRadius='3px'>Experience</Heading>
            <Flex flexDirection='row' justifyContent='space-evenly'>
              {/* first Experience */}
                <Flex border='2px solid black' flexDirection='column' width='35%' height='23rem' justifyContent='center' borderRadius='8px'>
                        <Center>
                        <Image src={WestMec} padding='0px 5px 10px 5px'/>
                        </Center>
                        <Flex flexDirection='column' justifyContent='space-between' padding='10px 0 41px 0'>
                        <Text textAlign='center' borderTop='1px solid #a3a3a352' borderBottom='1px solid #a3a3a352' margin='0 10px'>Certifications</Text>
                        <UnorderedList listStyleType='none'>
                            <ListItem padding='10px 0'>HTML5 Application Developer Fundamentals</ListItem>
                            <ListItem padding='10px 0'>JavaScript Specialist</ListItem>
                        </UnorderedList>
                         </Flex>
                </Flex>
                {/* second Experience */}
                <Flex flexDirection='column' border='2px solid black' width='35%' height='23rem' borderRadius='8px'>
                    <Flex justifyContent='center' padding='10px'>
                    <Image src={ASUBadge} boxSize='100px'/>
                    </Flex>
                    <Flex flexDirection='column'>
                        <Text textAlign='center' borderTop='2px solid #a3a3a352' borderBottom='1px solid #a3a3a352' margin='0 10px'>Certification</Text>
                        <UnorderedList listStyleType='none'>
                            <ListItem padding='10px 0'>Full-Stack Web Development</ListItem>
                        </UnorderedList>
                    </Flex>
                </Flex>
            </Flex>
            <Flex>

            </Flex>
        </Flex>
    )
}

export default Resume;
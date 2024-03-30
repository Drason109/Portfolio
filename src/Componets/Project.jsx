import React from "react";
import {Card, CardFooter,CardBody,Flex,Heading,Text,Image,Stack,Button} from '@chakra-ui/react'
import PGenerater from '../Componets/assists/Password-Generater.png'
import Scheduler from '../Componets/assists/Work-Day-Scheduler.png'
import Quiz from '../Componets/assists/Time-Quiz.png'
import ReadMe from '../Componets/assists/ReadMe.png'
import Logo from '../Componets/assists/Logo-Maker.png'
import Note from '../Componets/assists/Note-Taker.png'
import Employee from '../Componets/assists/Employee-Tracker.png'
import Commerce from '../Componets/assists/E-Commerce.png'
import Social from '../Componets/assists/Social.png'

const Projects = () => {
    return(
        <Flex flexDirection='column'>
            {/* First Project */}
            <Card direction='row' height='15rem' margin='10px 0'>
               <Image src={PGenerater} boxSize='200' width='300px' marginTop='20px'/>
                <Stack borderLeft='1px solid #a3a3a352' margin='10px 0'>
                    <CardBody>
                        <Heading fontSize='lg' >Password Generater</Heading>
                        <Text>In this Application, It would demonstrated how it generate a password from your suggestions using Javascript .</Text>
                    </CardBody>
                    <CardFooter>
                        <a href="https://github.com/Drason109/Password-Generater">
                    <Button m='0 5px'>
                        Github
                    </Button>
                    </a>
                    <a href="https://drason109.github.io/Password-Generater/">
                    <Button m='0 5px'>
                        Preview
                    </Button>
                    </a>
                    </CardFooter>
                </Stack>
            </Card>
            {/* Second Project */}
            <Card direction='row' height='15rem' margin='10px 0'>
               <Image src={Quiz} boxSize='200' width='300px' marginTop='20px'/>
                <Stack borderLeft='1px solid #a3a3a352' margin='10px 0'>
                    <CardBody>
                        <Heading fontSize='lg' >Time-Quiz</Heading>
                        <Text>In this application, Ill show a Timed Quiz application. This application will quiz the user on a timer. 
                            if the user answer a question incorrectly they would have their timer shorten. This application shows how the timer and the quiz setup functions using javascript.
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <a href="https://github.com/Drason109/Timed-Quiz">
                    <Button m='0 5px'>
                        Github
                    </Button>
                    </a>
                    <a href="https://drason109.github.io/Timed-Quiz/">
                    <Button m='0 5px'>
                        Preview
                    </Button>
                    </a>
                    </CardFooter>
                </Stack>
            </Card>
            {/* Third Project */}
            <Card direction='row' height='15rem' margin='10px 0'>
               <Image src={Scheduler} boxSize='200' width='300px' marginTop='20px'/>
                <Stack borderLeft='1px solid #a3a3a352' margin='10px 0'>
                    <CardBody>
                        <Heading fontSize='lg' >Work Day Scheduler</Heading>
                        <Text>This application demonstrates the use of jQuery UI and the localstorage using Javascript. The application stores the users data when they enter in the input box
                            and input box changes color depending on the day. It will check if the current time has pass to set it red but if not than set it to gray for future time and blue for current.
                        </Text>
                    </CardBody>
                    <CardFooter>
                    <a href="https://github.com/Drason109/Work-Day-Scheduler">
                    <Button m='0 5px'>
                        Github
                    </Button>
                    </a>
                    <a href="https://drason109.github.io/Work-Day-Scheduler/">
                    <Button m='0 5px'>
                        Preview
                    </Button>
                    </a>
                    </CardFooter>
                </Stack>
            </Card>
            {/* Fourth Project */}
            <Card direction='row' height='15rem' margin='10px 0'>
               <Image src={ReadMe} boxSize='200' width='300px' marginTop='20px'/>
                <Stack borderLeft='1px solid #a3a3a352' margin='10px 0'>
                    <CardBody>
                        <Heading fontSize='lg' >Time-Quiz</Heading>
                        <Text>ReadMe are the most important part of a coding project because it allows other user to understand what the project is about and how to use the application when someone trys to use it.
                            It gives instructions on what to install for the application and how to run it properly. This applications generate a ReadMe base on the question that the user enters from the prompts.
                            The application would run node.js to run the inquirer dependency to prompt the user questions.
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <a href="https://github.com/Drason109/README-Generator?tab=readme-ov-file">
                    <Button m='0 5px'>
                        Github
                    </Button>
                    </a>
                    <a href="https://drive.google.com/file/d/1cUUFJkMgHaZLAxcqHNfuq8IVCD7XWPMM/view">
                    <Button m='0 5px'>
                        Preview
                    </Button>
                    </a>
                    </CardFooter>
                </Stack>
            </Card>
            {/* Fifth Project */}
            <Card direction='row' height='15rem' margin='10px 0'>
               <Image src={Logo} boxSize='200' width='300px' marginTop='20px'/>
                <Stack borderLeft='1px solid #a3a3a352' margin='10px 0'>
                    <CardBody>
                        <Heading fontSize='lg' >Note Taker</Heading>
                        <Text>Object Oriented Programming is important part when it comes to web development, It allows data to be store in a object for other functions to utilize that data.
                            The application will create a Logo base on the answers that the users response using the inquirer package.
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <a href="https://github.com/Drason109/Note-Taker">
                    <Button m='0 5px'>
                        Github
                    </Button>
                    </a>
                    <a href="https://drive.google.com/file/d/1kSi2hWqhrQHmpDh9ugMliE3a2JaXaLlF/view">
                    <Button m='0 5px'>
                        Preview
                    </Button>
                    </a>
                    </CardFooter>
                </Stack>
            </Card>
            {/* Sixth Project */}
            <Card direction='row' height='15rem' margin='10px 0'>
               <Image src={Note} boxSize='200' width='300px' marginTop='20px'/>
                <Stack borderLeft='1px solid #a3a3a352' margin='10px 0'>
                    <CardBody>
                        <Heading fontSize='lg' >Note-Taker</Heading>
                        <Text>Express.js allow you to connect to a server when trying to GET,POST,or DELETE data from the server.
                            On this application it will show how express.js is use to send data from the server and store it whenever the user returns the application
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <a href="https://github.com/Drason109/Note-Taker">
                    <Button m='0 5px'>
                        Github
                    </Button>
                    </a>
                    <a href="https://notetakers12341-9839a26d1edd.herokuapp.com/">
                    <Button m='0 5px'>
                        Preview
                    </Button>
                    </a>
                    </CardFooter>
                </Stack>
            </Card>
            {/* Seventh Project */}
            <Card direction='row' height='15rem' margin='10px 0'>
               <Image src={Employee} boxSize='200' width='300px' marginTop='20px'/>
                <Stack borderLeft='1px solid #a3a3a352' margin='10px 0'>
                    <CardBody>
                        <Heading fontSize='lg' >Employee-Tracker</Heading>
                        <Text>Database is an important part of business website to help keep track of products, employees, and inventory.
                            It allows the business to update,track, and delete data base on their needs.
                            This Project will show mySQL database from the backend and how it intracts with the user using command lines 
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <a href="https://github.com/Drason109/Employee-Tracker">
                    <Button m='0 5px'>
                        Github
                    </Button>
                    </a>
                    <a href="https://drive.google.com/file/d/1N8oEOLUB6cNqjWkFx7-pdZZVf7w33Lv3/view">
                    <Button m='0 5px'>
                        Preview
                    </Button>
                    </a>
                    </CardFooter>
                </Stack>
            </Card>
            {/* eighth Project */}
            <Card direction='row' height='15rem' margin='10px 0'>
               <Image src={Commerce} boxSize='200' width='300px' marginTop='20px'/>
                <Stack borderLeft='1px solid #a3a3a352' margin='10px 0'>
                    <CardBody>
                        <Heading fontSize='lg' >E-Commerce-Back-End</Heading>
                        <Text>E-Commerce is the largest Electronic industry for organizing businesses inventory and can be updated on the spot whenever the company updates their inventories.
                            This project shows how the SQL database get updated with new products using express.js and configured with Sequelize to interact with the database.
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <a href="https://github.com/Drason109/E-Commerce-Back-End">
                    <Button m='0 5px'>
                        Github
                    </Button>
                    </a>
                    <a href="https://drive.google.com/file/d/1GFGdv9becBKE3HjdotwdQuz0MBU_0fUG/view">
                    <Button m='0 5px'>
                        Preview
                    </Button>
                    </a>
                    </CardFooter>
                </Stack>
            </Card>
            {/* Nine Project */}
            <Card direction='row' height='15rem' margin='10px 0'>
               <Image src={Social} boxSize='200' width='300px' marginTop='20px'/>
                <Stack borderLeft='1px solid #a3a3a352' margin='10px 0'>
                    <CardBody>
                        <Heading fontSize='lg' >Social Network API</Heading>
                        <Text>This application is a Social network application that utilized packages and databases for users to create their account,create thought, or react.
                        It will utilize the Mongoose DB to store a new user and their thougthts and reaction to other peoples thoughts. 
                        It will also use express.js to route the data from the front-end to the back-end and vise-verse,
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <a href="https://github.com/Drason109/Social-Network-API">
                    <Button m='0 5px'>
                        Github
                    </Button>
                    </a>
                    <a href="https://drive.google.com/file/d/1TPhpgkcJHRGRyIE4pCnkwqED1PwvJtvP/view">
                    <Button m='0 5px'>
                        Preview
                    </Button>
                    </a>
                    </CardFooter>
                </Stack>
            </Card>
        </Flex>
    )
}

export default Projects
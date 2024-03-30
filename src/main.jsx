import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutMe from './Componets/AboutMe.jsx'
import Resume from './Componets/Resume.jsx'
import Contact from './Componets/Contact.jsx'
import Projects from './Componets/Project.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: '/Resume',
        element: <Resume />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Project',
        element: <Projects />
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
)

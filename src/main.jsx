import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact', 
        element: <Contact />
      },
      {
        path: '/projects', 
        element: <Projects />
      }
      
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

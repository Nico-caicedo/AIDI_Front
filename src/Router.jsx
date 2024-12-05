import {createBrowserRouter,RouterProvider } from "react-router-dom"
import About from "./components/about"
import Cuerpo from "./components/Cuerpo"


    const Rutas = createBrowserRouter([
        {
            path:"/",
            element: <Cuerpo />
        },
        {
            path:"/About",
            element: <About />
        }
    ])

    
export  {Rutas}
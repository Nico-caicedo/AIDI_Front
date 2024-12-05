import { useState } from 'react'
import Headers from './Header.jsx'
import './App.css'
import Cuerpo from './components/Cuerpo.jsx'
import {Rutas} from './Router.jsx'
import { Router, RouterProvider } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  console.log(Rutas)
  return (
  
    <RouterProvider router={Rutas} > 

 <div className="h-screen w-screen ">
     
   
    
    <Cuerpo />
    
   </div>
    </RouterProvider>
  
  )
}

export default App

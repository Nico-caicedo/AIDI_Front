import aide from "./assets/aide_logo.png"
import { Link } from "react-router-dom"

function Headers() {

    return (

        <div className="flex justify-around text-white  bg-zinc-600 ">
            <div   >
                <img src={aide} alt="logo AIDI" className=" w-3/2 h-full " />
            </div>
            <ul className="flex justify-between items-center text-xl w-6/12" >
                <li><Link rel="stylesheet" to="/about">Inicio</Link></li>
                <li><Link rel="stylesheet" to="/about">Nosotros</Link></li>
                <li><Link rel="stylesheet" to="/about">Servicios</Link></li>
                <li><Link rel="stylesheet" to="/about">Cursos</Link></li>
                <li><Link rel="stylesheet" to="/about">Experiencias</Link></li>
            </ul>
            <div className="text-white flex justify-center items-center  w-44 ">
                <div className="flex items-center cursor-pointer justify-around 
                bg-yellow-400 rounded-md text-black  h-1/4 w-36  
                hover:border-white  hover:text-blue-600 border border-transparent">
                    <p className="font-medium" >AIDI VIRTUAL</p>
                    <span className="material-symbols-outlined">
                        school
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Headers
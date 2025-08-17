import { useState } from "react";
import StackTecnology from "./StackTecnology";

function Start(){
    const [statulPerfil, setStatusPerfil] = useState(true)
    
    return(
        <>
        <div className="flex flex-col w-full justify-center items-center">
            <div className="flex w-[80%] lg:w-full bg-gradient-to-r from-[#035f78] to-[#121e4e] p-0.5 rounded-lg">
            <div className="flex flex-col lg:flex-row bg-neutral-900/80 w-full items-center gap-12 px-6  lg:px-20 py-5 rounded-lg">
                <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 text-3xl md:text-6xl font-bold">
                    <span>Hola, soy</span>
                    <span class="bg-gradient-to-r from-[#035f78] to-[#121e4e] bg-clip-text text-transparent">
                        Aram Musset
                    </span>
                </div>
                <p className="w-full lg:w-140 text-md md:text-lg">Soy programador Full-Stack, apasionado por la tecnología, siempre dispuesto a afrontar nuevos desafíos y enfocado en desarrollar proyectos de alta calidad, escalables y profesionales.</p>
            </div>
            <div className="bg-gradient-to-r from-[#035f78] to-[#121e4e] rounded-full p-2">
                <div className="p-2 bg-neutral-900/80 rounded-full">
                    <img 
                     src={statulPerfil? "/perfil.png": "/perfil2.png"} 
                     alt=""
                     className="rounded-full sm:size-[60%]  lg:size-98 cursor-pointer select-none"
                     onClick={()=>{setStatusPerfil(!statulPerfil)}}
                     />
                </div>
            </div>
            </div>
            </div>
            
            <div>
                <StackTecnology/>
            </div>
        </div>
        </>
    )
}

export default Start;
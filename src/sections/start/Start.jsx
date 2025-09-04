import { useState } from "react";
import { useTranslation } from 'react-i18next';
import StackTecnology from "./StackTecnology";

function Start(){
    const [statulPerfil, setStatusPerfil] = useState(true)
    const { t } = useTranslation();
    
    return(
        <>
        <div className="flex flex-col w-full justify-center items-center">
            <div className="flex w-[100%] lg:w-[90%] bg-gradient-to-r from-[#035f78] to-[#121e4e] md:p-0.5 md:rounded-lg">
            <div className="flex flex-col lg:flex-row bg-neutral-900/80 w-full items-center gap-12 px-6 lg:px-20 py-5 md:rounded-lg">
                <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 text-6xl font-bold">
                    <span>{t('start.title')}</span>
                    <span class="bg-gradient-to-r from-[#035f78] to-[#121e4e] bg-clip-text text-transparent">
                        Aram Musset
                    </span>
                </div>
                <p className="w-full lg:w-140 text-md md:text-lg">
                    {t('start.description')}
                </p>
            </div>
            <div className="bg-gradient-to-r from-[#035f78] to-[#121e4e] rounded-full p-2">
                <div className="p-2 bg-neutral-900/80 rounded-full">
                    <img 
                     src={statulPerfil? "/perfils/perfil.png": "/perfils/perfil2.png"} 
                     alt=""
                     className="rounded-full sm:size-[60%] md:size-89 lg:size-auto cursor-pointer select-none"
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
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import StackTecnology from "./components/StackTecnology";
import Buttons from "./components/Buttons";

export default function Start(){
    const { t } = useTranslation();
    
    return(
        <>
        <div className="flex w-full md:p-0.5 md:rounded-lg">
            <div className="flex flex-col bg-neutral-900/40 md:bg-neutral-900/80 w-full items-center gap-5 px-6 lg:px-20 py-5 md:rounded-lg">
                <div className="flex items-center gap-30">
                    <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 text-6xl font-bold">
                    <span className="bg-[#0091b9] bg-clip-text text-transparent">
                        Full-Stack
                    </span>
                    <span className="text-white">
                        Developer
                    </span>
                </div>
                <p className="w-full lg:w-140 text-md md:text-lg text-neutral-400">
                    {t('start.description')}
                </p>
                <Buttons/>
            </div>
            
            <div className="bg-[#0091b9] rounded-full p-2">
                <div className="p-0.5 bg-white/20 rounded-full">
                    <img 
                     src="/perfils/perfil2.png"
                     alt=""
                     className="rounded-full sm:size-[60%] md:size-69 lg:size-80 cursor-pointer select-none"
                     />
                </div>
                </div>
                </div>
                <StackTecnology/>
                </div>
        </div>
        </>
    )
}


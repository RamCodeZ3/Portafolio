import { useTranslation } from 'react-i18next';
import StackTecnology from "./components/StackTecnology";
import Buttons from "./components/Buttons";

export default function Start(){
    const { t } = useTranslation();
    
    return(
        <>
            <div className="flex flex-col justify-center bg-neutral-900/40 md:bg-neutral-900 border border-white/10 w-[93%] items-center gap-5 px-6 lg:px-20 py-5 2xl:py-10 rounded-lg">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 text-6xl 2xl:text-7xl font-bold">
                            <span className="bg-[#0091b9] bg-clip-text text-transparent s">
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
                        <div className=" h-80 w-80 2xl:w-100 2xl:h-100 p-0.5 bg-white/20 rounded-full">
                            <img 
                                src="/perfils/perfil2.png"
                                alt=""
                                className="rounded-full h-full w-full select-none"
                            />
                        </div>
                    </div>
                </div>
                <StackTecnology/>
            </div>
        </>
    )
}


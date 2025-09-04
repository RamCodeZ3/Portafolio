import TitleSections from "../../common/TitleSections";
import { useTranslation } from 'react-i18next';
import exp from "./Data";

function Experiencie(){
    const { t } = useTranslation();
    return(
        <>
        <TitleSections
        title={t('experience.title')}
        />
        <div className="flex flex-col w-full justify-center items-center">
            {exp.map(data => (
                <div className="flex justify-center items-center">
                <div className="card hidden md:flex gap-4 w-[90%] bg-black/30 h-auto">
                    <img src={data.img} className="size-[30%] rounded-lg rounded-r-none h-auto cover" />
                    <div className="flex flex-col justify-center gap-3 py-2">
                        <span className="font-bold text-lg text-[#035f78]">{data.client}</span>
                        <p className="text-white">{t(data.description)}</p>
                        <div className="flex items-center justify-center px-2 py-1 bg-[#035f78]/30 rounded-lg w-18">
                            <span className="w-auto text-sm">{data.rol}</span>
                        </div>
                    </div>
                </div>
                <div className="card flex md:hidden p-2 gap-4 w-[90%] bg-black/30 h-auto">
                    <div className="flex flex-col justify-center gap-2">
                        <img src={data.img} className="size-full rounded-lg" />
                        <span className="font-bold text-lg text-[#035f78]">{data.client}</span>
                        <p className="text-white text-sm">{t(data.description)}</p>
                        <div className="flex items-center justify-center px-2 py-1 bg-[#035f78]/30 rounded-lg w-18">
                            <span className="w-auto text-sm">{data.rol}</span>
                        </div>
                    </div>
                </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Experiencie;
import services from "./Data"
import TitleSections from "../../common/TitleSections";
import { useTranslation } from 'react-i18next';


function Services(){
    const { t } = useTranslation();
    return(
        <>
        <TitleSections
        title={t('services.title')}
        />
        <div className="flex justify-center items-center">
            <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-stretch">
            {services.map(data =>(
                <div className="card2 flex flex-col h-full justify-center gap-2 p-6">
                    <div className="flex gap-2 items-center text-[#035f78]">
                        <div className="card2 p-2 ">
                            {data.icon}
                        </div>
                        <span className="font-semibold text-xl">{t(data.title)}</span>
                    </div>
                    <span>{t(data.description)}</span>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}

export default Services;
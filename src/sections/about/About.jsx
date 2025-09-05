import TitleSections from "../../common/TitleSections";
import { useTranslation } from 'react-i18next';

function About(){
    const { t } = useTranslation();
    return(
        <>
         <TitleSections
         title={t('about.title')}
         />
        <div className="flex justify-center items-center">
            <div className="card flex items-center justify-center gap-4 w-[90%] py-4 px-0">
                <div className="w-[68%] text-lg">
                    <p>{t('about.description')}</p>
                </div>
                <img src="perfils/perfil.png" alt="" className="size-60 rounded-full" />
            </div>
        </div>
        </>
    )
}

export default About;
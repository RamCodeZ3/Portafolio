import TitleSections from "../../common/TitleSections";
import { useTranslation } from 'react-i18next';
import { motion } from "motion/react";

function About(){
    const { t } = useTranslation();
    return(
        <>
         <TitleSections
         title={t('about.title')}
         />
        <div className="flex justify-center items-center">
            <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} 
                className="card flex flex-col md:flex-row items-center justify-center gap-4 w-[90%] py-4 px-0">
                <img src="general/coding.png" alt="" className="w-[90%] md:w-65 h-auto rounded-lg border-1 border-[#035f78]" />
                <div className="w-[90%] md:w-[68%] text-lg">
                    
                    <p>{t('about.description')}</p>
                </div>
            </motion.div>
        </div>
        </>
    )
}

export default About;
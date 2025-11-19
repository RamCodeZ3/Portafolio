import TitleSections from "../../common/TitleSections";
import { useTranslation } from 'react-i18next';
import { motion } from "motion/react";

export default function About(){
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
                className="flex flex-col md:flex-row items-center justify-between gap-4 w-[93%] p-4 bg-[#0091b9]/3 rounded-2xl border border-white/10">
                <div className="w-[60%] h-70 rounded-2xl border border-white/10 ">
                    <img src="general/coding.png" alt="" className="w-full h-full object-cover rounded-2xl select-none" />
                </div>
                <div className="w-[9%] md:w-[68%] text-lg">
                    
                    <p className="text-neutral-400 w-170 leading-10">{t('about.description')}</p>
                </div>
            </motion.div>
        </div>
        </>
    )
}

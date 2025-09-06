import services from "./Data"
import TitleSections from "../../common/TitleSections";
import { useTranslation } from 'react-i18next';
import { motion } from "motion/react";


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
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }} 
                    className="card2 flex flex-col h-full justify-center gap-2 p-6">
                    <div className="flex gap-2 items-center text-[#035f78]">
                        <div className="card2 p-2 ">
                            {data.icon}
                        </div>
                        <span className="font-semibold text-xl">{t(data.title)}</span>
                    </div>
                    <span>{t(data.description)}</span>
                </motion.div>
            ))}
            </div>
        </div>
        </>
    )
}

export default Services;
import { SquareArrowOutUpRight } from 'lucide-react';
import TitleSections from '../../common/TitleSections';
import { useTranslation } from 'react-i18next';
import { exp } from './data/data';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Experiencie() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  return (
    <>
      <TitleSections title={t('experience.title')} />

      <div className="relative flex w-full justify-center items-center">

        <motion.div
          key={current} 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-3 w-[90%] md:w-[93%] h-full overflow-hidden"
        >
          {exp.map((data) =>(
            <div className='flex gap-2'>
              <img
                src={data.img}
                className='w-[40%] h-full rounded-2xl border-white/10 select-none'
              />
              <div className='flex flex-col justify-around card2 px-3'>
                <div className='flex flex-col'>
                  <span className='text-[#0091b9] font-semibold text-2xl'>{data.rol}</span>
                  <span className='text-white text-lg'>{data.client}</span>
                </div>
                
                <p className='text-neutral-400'>{t(data.description)}</p>
                
                <div className='flex gap-2'>
                  {data.tech.map((t)=>(
                    <img src={t} className='size-11 select-none' />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </>
  );
}

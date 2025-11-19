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

  const handleNext = () => {
    setCurrent((prev) => (prev < exp.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : exp.length - 1));
  };

  // useEffect(() => {
  //   const interval = setInterval(handleNext, 6000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <TitleSections title={t('experience.title')} />

      <div className="relative flex w-full justify-center items-center">

        <motion.div
          key={current} 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[90%] md:w-[93%] h-120 rounded-xl overflow-hidden shadow-lg border-1 border-white/10"
        >
          <img
            src={exp[current].img}
            className="w-full h-full object-cover "
          />
        </motion.div>

      </div>
    </>
  );
}

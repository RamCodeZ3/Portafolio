import { motion } from "motion/react";

interface TitleSectionsProps {
  title: string;
}

export default function TitleSections({ title }: TitleSectionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex justify-center items-center w-full h-auto my-8"
    >
      <div className="flex justify-between w-[93%] backdrop-blur-2xl border border-white/10 bg-[#0091b9]/2 rounded-lg">
        <div className=" bg-[#0091b9] w-1.5 rounded-l-2xl"></div>
        <span className="font-bold text-4xl text-[#0091b9] py-2">
          {title}
        </span>
        <div className="bg-[#0091b9] w-1.5 rounded-r-2xl"></div>
      </div>
    </motion.div>
  );
}

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
      <div className="flex justify-center w-[90%] backdrop-blur-2xl p-2 ">
        <span className="font-bold text-4xl text-[#0091b9]">
          {title}
        </span>
      </div>
    </motion.div>
  );
}

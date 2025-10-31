import { motion } from "motion/react";

interface TitleSectionsProps {
  title: string;
}

function TitleSections({ title }: TitleSectionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex justify-center items-center w-full h-auto my-8"
    >
      <div className="flex justify-center w-[90%] bg-black/40 backdrop-blur-2xl p-2 rounded-lg border border-[#035f78]">
        <span className="font-bold text-3xl text-[#035f78]">
          {title}
        </span>
      </div>
    </motion.div>
  );
}

export default TitleSections;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TitleSectionsProps {
  title: string;
}

export default function TitleSections({ title }: TitleSectionsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="flex justify-center items-center w-full h-auto my-8"
    >
      <div className="flex justify-between w-[93%] backdrop-blur-2xl border border-white/10 bg-[#0091b9]/2 rounded-lg">
        <div className="bg-[#0091b9] w-1.5 rounded-l-2xl"></div>
        <span className="font-bold text-4xl text-[#0091b9] py-2">
          {title}
        </span>
        <div className="bg-[#0091b9] w-1.5 rounded-r-2xl"></div>
      </div>
    </div>
  );
}

